import { products } from "@/data/products";

/**
 * Service Layer
 * Follows Dependency Inversion Principle (DIP).
 *
 * High-level modules (components) should not depend on low-level modules (direct data imports).
 * Both should depend on abstractions (this service).
 *
 * This layer abstracts the data source. If we switch to a real API later,
 * we only update this file, not the UI components.
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
