import { products } from "@/data/products";

/**
 * ProductService
 * ----------------
 * Abstraction layer between UI code and the product data source.
 * Keep business logic (pricing, inventory, etc.) out of components and
 * inside this service so the data source can be swapped (e.g., to a
 * remote API) with minimal changes.
 *
 * SECURITY & PRICING NOTE:
 * - In production, prices should be authoritative and stored server-side.
 *   The frontend must NOT be the source of truth for prices to avoid
 *   manipulation by malicious clients. If integrating with Stripe, the
 *   server should calculate final amounts or use Stripe Price objects.
 */

export const ProductService = {
  getAll: async () => {
    // Simulating an asynchronous API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 800); // Artificial delay to demonstrate loading states
    });
  },

  getById: async (id) => {
    return new Promise((resolve) => {
      const product = products.find((p) => p.id === id);
      setTimeout(() => resolve(product), 200);
    });
  },
};
