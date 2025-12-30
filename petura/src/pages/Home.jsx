import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import { useProducts } from "@/hooks/useProducts";

/**
 * Home Component (Container Component)
 *
 * Acts as a container that orchestrates data fetching and passes it down.
 * It uses the 'useProducts' hook to get data, keeping the page logic clean.
 */
const Home = () => {
  const { products, loading, error } = useProducts();

  return (
    <>
      <Hero />
      <ProductCatalog products={products} isLoading={loading} error={error} />
    </>
  );
};

export default Home;
