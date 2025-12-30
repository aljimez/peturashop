/* server/index.js
 * ----------------------------------------------
 * Express example server for creating Stripe
 * Checkout Sessions used by the Petura app.
 *
 * Security & responsibilities:
 * - The Stripe **secret key** must stay on the server (never expose it
 *   to the client or commit it to source control).
 * - The client only uses the **public key** to initialize Stripe.js and
 *   redirect the user to the hosted Checkout page.
 * - We use Stripe Checkout so card data is entered directly on Stripe's
 *   secure pages (reduces PCI scope and responsibility for this app).
 *
 * Environment variables used:
 * - STRIPE_SECRET_KEY  -> Stripe secret key (server only)
 * - SERVER_PORT        -> optional, defaults to 4242
 *
 * NOTE: This is meant for example/local testing. For production you should:
 * - Use a secrets manager for STRIPE_SECRET_KEY
 * - Restrict CORS to your trusted origins
 * - Validate and compute prices/amounts on the server (don't trust the client)
 */

import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";
import cors from "cors";

// Load .env in development/local environments
dotenv.config();

const app = express();
// Guard access to `process` in case this file is parsed in an environment
// without Node globals (keeps code safe for SSR/static analyzers)
const env = typeof process !== "undefined" ? process.env : {};
const port = env.SERVER_PORT || 4242;
const stripeSecret = env.STRIPE_SECRET_KEY;

// Defensive check: fail early if SECRET is missing so misconfiguration is
// obvious during startup instead of causing runtime errors on requests.
if (!stripeSecret) {
  console.error(
    "Missing STRIPE_SECRET_KEY in environment. See server/.env.example"
  );
  // Throwing an Error is preferable to process.exit in contexts where
  // process may not exist (for example, some test runners)
  throw new Error(
    "Missing STRIPE_SECRET_KEY in environment. See server/.env.example"
  );
}

// Initialize Stripe with a pinned API version for stability
const stripe = new Stripe(stripeSecret, { apiVersion: "2022-11-15" });

// NOTE: In production, replace cors() with a tighter configuration, e.g.:
// app.use(cors({ origin: ['https://yourdomain.com'] }));
app.use(cors());
app.use(express.json());

/**
 * POST /api/create-checkout-session
 * Body: { items: [{ name, unit_amount, description, quantity, currency }], successUrl?, cancelUrl? }
 *
 * Responsibilities of this endpoint:
 * - Validate incoming payload (basic checks here)
 * - Transform payload into Stripe `line_items`
 * - Create a Stripe Checkout Session using the server-side secret key
 * - Return the session id to the client for redirect
 *
 * Security note: currently this example uses `unit_amount` coming from
 * the client. THIS IS NOT SAFE for production because a malicious client
 * could tamper prices. In production, the server should look up trusted
 * product prices (from DB or config) and calculate the amounts here.
 */
app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { items, successUrl, cancelUrl } = req.body;

    // Basic validation: ensure items exist and are an array
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "No items provided" });
    }

    // Map incoming items to the Stripe `line_items` shape expected by the
    // Checkout API. Amounts must be in the smallest currency unit (cents for EUR).
    // NOTE: Unit amounts are calculated here (client-provided values are
    // converted to cents), but for full security you should determine
    // these values server-side based on product IDs.
    const line_items = items.map((it) => ({
      price_data: {
        currency: it.currency || "eur",
        product_data: {
          name: it.name,
          description: it.description || "",
        },
        // Stripe expects integer amounts in the smallest unit (e.g., cents)
        unit_amount: Math.round((it.unit_amount || 0) * 100), // amount in cents
      },
      quantity: it.quantity || 1,
    }));

    // Create the Checkout Session with Stripe using the **server** secret key
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      // If the client provides success/cancel URLs, use them; otherwise
      // fall back to the request origin with sensible defaults.
      success_url: successUrl || `${req.headers.origin}/checkout/success`,
      cancel_url: cancelUrl || `${req.headers.origin}/checkout/cancel`,
    });

    // Return only the session id to the client. The client will use the
    // public key and session id to redirect the user to Stripe-hosted Checkout.
    res.json({ id: session.id });
  } catch (error) {
    // Log the error for diagnostics (avoid logging sensitive info)
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server (local/test default port 4242)
app.listen(port, () => {
  console.log(`Stripe example server running on http://localhost:${port}`);
});
