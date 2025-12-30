import { useState, useMemo } from "react";

/**
 * Custom Hook: useProductFilters
 * Follows Single Responsibility Principle (SRP).
 *
 * Encapsulates complex filtering and pagination logic.
 * This makes the component code cleaner and easier to test.
 */
export const useProductFilters = (products, itemsPerPage = 12) => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  // Memoize filtering to prevent expensive recalculations on every render
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Todos") return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

  // Memoize pagination slicing
  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const hasMore = visibleCount < filteredProducts.length;

  // Actions
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    setVisibleCount(itemsPerPage); // Reset pagination when filter changes
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + itemsPerPage);
  };

  return {
    selectedCategory,
    displayedProducts,
    hasMore,
    filterByCategory,
    loadMore,
    totalCount: filteredProducts.length,
  };
};
