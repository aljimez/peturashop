import { Helmet } from "react-helmet";
/* Juguetes
 * Category page that filters products using the shared ProductCatalog
 * and the `useProducts` hook for data fetching.
 */ import ProductCatalog from "../components/ProductCatalog";
import { useProducts } from "../hooks/useProducts";

const Juguetes = () => {
  const { products, loading, error } = useProducts();
  const juguetes = products.filter((p) => p.category === "Juguetes");

  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Juguetes - Petura.shop</title>
        <meta name="description" content="Juguetes para perros y gatos" />
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Juguetes</h1>
        <ProductCatalog products={juguetes} isLoading={loading} error={error} />
      </div>
    </div>
  );
};

export default Juguetes;
