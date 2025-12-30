import { Helmet } from "react-helmet";
/* Accesorios
 * Category page - uses `ProductCatalog` and `useProducts`.
 */ import ProductCatalog from "../components/ProductCatalog";
import { useProducts } from "../hooks/useProducts";

const Accesorios = () => {
  const { products, loading, error } = useProducts();
  const accesorios = products.filter((p) => p.category === "Accesorios");

  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Accesorios - Petura.shop</title>
        <meta name="description" content="Accesorios para mascotas" />
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Accesorios</h1>
        <ProductCatalog
          products={accesorios}
          isLoading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default Accesorios;
