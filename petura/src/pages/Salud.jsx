import { Helmet } from "react-helmet";
/* Salud
 * Category page for 'Salud'. Uses shared components and hooks.
 */ import ProductCatalog from "../components/ProductCatalog";
import { useProducts } from "../hooks/useProducts";

const Salud = () => {
  const { products, loading, error } = useProducts();
  const salud = products.filter((p) => p.category === "Salud");

  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Salud - Petura.shop</title>
        <meta
          name="description"
          content="Productos para la salud de tu mascota"
        />
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Salud</h1>
        <ProductCatalog products={salud} isLoading={loading} error={error} />
      </div>
    </div>
  );
};

export default Salud;
