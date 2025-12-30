import { Helmet } from "react-helmet";
import ProductCatalog from "../components/ProductCatalog";
import { useProducts } from "../hooks/useProducts";

const Tecnologia = () => {
  const { products, loading, error } = useProducts();
  const tecnologia = products.filter((p) => p.category === "Tecnología");

  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Tecnología - Petura.shop</title>
        <meta name="description" content="Gadgets y tecnología para mascotas" />
      </Helmet>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Tecnología</h1>
        <ProductCatalog
          products={tecnologia}
          isLoading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default Tecnologia;
