import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "../components/ui/button";
import { useCart } from "../context/CartContext";
import { ProductService } from "../services/productService";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        setLoading(true);
        const p = await ProductService.getById(Number(id));
        if (!mounted) return;
        if (!p) {
          setError("Producto no encontrado");
        } else setProduct(p);
      } catch (err) {
        setError("Error al cargar el producto");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => (mounted = false);
  }, [id]);

  if (loading) return <div className="p-8">Cargando...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;
  if (!product) return null;

  const imageSrc =
    product.image && product.image.startsWith("http")
      ? product.image
      : `https://source.unsplash.com/featured/?${encodeURIComponent(
          product.name
        )}`;

  const handleAddToCart = () => {
    addToCart(product);
    setIsCartOpen(true);
    navigate("/");
  };

  return (
    <div className="py-12 bg-white">
      <Helmet>
        <title>{product.name} - Petura.shop</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <img
              src={imageSrc}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="flex items-center gap-6 mb-6">
              <div>
                <p className="text-2xl font-bold text-orange-600">
                  ${product.price}
                </p>
                <p className="text-sm text-gray-500">
                  {product.reviews} reseñas
                </p>
              </div>
              <div className="px-3 py-1 bg-orange-50 rounded-full text-orange-600">
                {product.category}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleAddToCart}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white"
              >
                Añadir al carrito
              </Button>
              <Button
                variant="outline"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Volver arriba
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
