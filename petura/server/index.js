/* Example Express server to create Stripe Checkout Sessions for Petura.shop
 * - Uses environment variables:
 *   STRIPE_SECRET_KEY
 *   SERVER_PORT (optional, default 4242)
 *
 * Notes:
 * - This is an example for local/test usage only (uses Stripe Test keys)
 * - Do NOT commit your real secret keys. Use .env and a secret manager in prod
 */

import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";
import cors from "cors";

dotenv.config();

const app = express();
// Guard access to `process` in case the file is parsed in an environment without Node globals
const env = typeof process !== "undefined" ? process.env : {};
const port = env.SERVER_PORT || 4242;
const stripeSecret = env.STRIPE_SECRET_KEY;

if (!stripeSecret) {
  console.error(
    "Missing STRIPE_SECRET_KEY in environment. See server/.env.example"
  );
  // Throw an error instead of calling process.exit to avoid issues where process may not exist
  throw new Error(
    "Missing STRIPE_SECRET_KEY in environment. See server/.env.example"
  );
}

const stripe = new Stripe(stripeSecret, { apiVersion: "2022-11-15" });

app.use(cors());
app.use(express.json());

// Create a simple Checkout Session
app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { items, successUrl, cancelUrl } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "No items provided" });
    }

    // Map incoming items to Stripe line_items
    const line_items = items.map((it) => ({
      price_data: {
        currency: it.currency || "eur",
        product_data: {
          name: it.name,
          description: it.description || "",
        },
        unit_amount: Math.round((it.unit_amount || 0) * 100), // amount in cents
      },
      quantity: it.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: successUrl || `${req.headers.origin}/checkout/success`,
      cancel_url: cancelUrl || `${req.headers.origin}/checkout/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Stripe example server running on http://localhost:${port}`);
});
