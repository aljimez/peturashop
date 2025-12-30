import { useState, useEffect } from "react";
import { ProductService } from "@/services/productService";

/**
 * Custom Hook: useProducts
 * Follows Single Responsibility Principle (SRP).
 *
 * This hook is solely responsible for managing the state of product data fetching.
 * It separates side-effects (data fetching) from UI components.
 */
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await ProductService.getAll();
        if (mounted) {
          setProducts(data);
        }
      } catch (err) {
        if (mounted) {
          setError(err);
          console.error("Failed to fetch products:", err);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      mounted = false;
    };
  }, []);

  return { products, loading, error };
};
