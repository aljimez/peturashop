import { Helmet } from "react-helmet";
/* Comida
 * Category page for 'Comida'. Uses `ProductCatalog` and `useProducts`.
 */ import ProductCatalog from "../components/ProductCatalog";
import { useProducts } from "../hooks/useProducts";

const Comida = () => {
  const { products, loading, error } = useProducts();
  const comida = products.filter((p) => p.category === "Comida");

  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Comida - Petura.shop</title>
        <meta name="description" content="Comida premium para perros y gatos" />
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Comida</h1>
        <ProductCatalog products={comida} isLoading={loading} error={error} />
      </div>
    </div>
  );
};

export default Comida;
