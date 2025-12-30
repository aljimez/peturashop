import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import { LoadingSpinner } from "./ui/LoadingSpinner";
import { useProductFilters } from "../hooks/useProductFilters";
import { useLocation } from "react-router-dom";

const CATEGORIES = [
  "Todos",
  "Comida",
  "Juguetes",
  "Accesorios",
  "Tecnología",
  "Camas",
  "Aseo",
  "Salud",
  "Viaje",
];

/**
 * ProductCatalog Component (Presentational Component)
 *
 * Receives data via props (Dependency Injection).
 * Uses 'useProductFilters' hook for internal UI state logic (SRP).
 */
const ProductCatalog = ({ products, isLoading, error }) => {
  const {
    selectedCategory,
    displayedProducts,
    hasMore,
    filterByCategory,
    loadMore,
  } = useProductFilters(products);

  const location = useLocation();
  const showFilters = location.pathname === "/";

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        Lo sentimos, hubo un error al cargar los productos. Por favor intente
        más tarde.
      </div>
    );
  }

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <HeaderSection />

        {showFilters && (
          <FilterSection
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelect={filterByCategory}
          />
        )}

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <ProductGrid products={displayedProducts} />

            {hasMore && <LoadMoreButton onClick={loadMore} />}
          </>
        )}
      </div>
    </section>
  );
};

// Sub-components for better composition and readability

const HeaderSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Nuestra Colección Premium
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Productos cuidadosamente seleccionados para mejorar la vida de tu mascota
    </p>
  </motion.div>
);

const FilterSection = ({ categories, selectedCategory, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-wrap justify-center gap-3 mb-12"
  >
    {categories.map((category) => (
      <Button
        key={category}
        onClick={() => onSelect(category)}
        variant={selectedCategory === category ? "default" : "outline"}
        className={`rounded-full transition-all hover:scale-105 ${
          selectedCategory === category
            ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
            : "border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600"
        }`}
      >
        {category}
      </Button>
    ))}
  </motion.div>
);

const ProductGrid = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
    {products.map((product, index) => (
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
      >
        <ProductCard product={product} />
      </motion.div>
    ))}
  </div>
);

const LoadMoreButton = ({ onClick }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <Button
      onClick={onClick}
      size="lg"
      variant="outline"
      className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 transition-all hover:scale-105"
    >
      Cargar Más Productos
    </Button>
  </motion.div>
);

export default ProductCatalog;
