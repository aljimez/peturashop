/* ProductCard
 * Displays product info (image, price, rating) and exposes an
 * 'Add to cart' action which uses the `CartContext`.
 * Expected `product` shape: { id, name, price, description, image, rating, category }
 */
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/use-toast";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "¡Añadido al carrito!",
      description: `${product.name} se ha añadido a tu carrito.`,
      duration: 2000,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-beige-50 aspect-square">
        <a href={`/producto/${product.id}`} aria-label={`Ver ${product.name}`}>
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            alt={product.name}
            src={
              product.image && product.image.startsWith("http")
                ? product.image
                : `https://source.unsplash.com/featured/?${encodeURIComponent(
                    product.name
                  )}`
            }
          />
        </a>

        <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 shadow-md">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-gray-900">
              {product.rating}
            </span>
          </div>
        </div>

        <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full px-3 py-1 text-xs font-semibold shadow-md">
          {product.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold text-orange-600">
              ${product.price}
            </p>
            <p className="text-xs text-gray-500">{product.reviews} reseñas</p>
          </div>
        </div>

        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md hover:shadow-lg transition-all hover:scale-105"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Añadir al Carrito
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
