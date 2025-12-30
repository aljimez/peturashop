/* Cart
 * Sidebar component that shows the cart contents, allows quantity
 * changes and initiates checkout.
 * - Integrates with `CartContext` for state management.
 * - Uses `CheckoutForm` for collecting user details / redirecting to Stripe.
 *
 * NOTE: `handleCheckout` below simulates payment processing as a demo.
 * In production, prefer redirecting to Stripe Checkout (see `CheckoutForm`)
 * or perform server-side order confirmation and rely on webhooks.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  CreditCard,
  Loader2,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import CheckoutForm from "@/components/CheckoutForm";

const Cart = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    clearCart,
  } = useCart();
  const { toast } = useToast();
  const [showCheckout, setShowCheckout] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRemove = (productId) => {
    removeFromCart(productId);
    toast({
      title: "Artículo eliminado",
      description: "El producto ha sido eliminado de tu carrito.",
      duration: 2000,
    });
  };

  const handleCheckout = async (formData) => {
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setShowCheckout(false);
    setIsCartOpen(false);
    clearCart();

    toast({
      title: "¡Pedido Confirmado! 🎉",
      description: `¡Gracias ${formData.name}! Tu pedido ha sido realizado con éxito.`,
      duration: 4000,
    });
  };

  if (showCheckout) {
    return (
      <CheckoutForm
        onSubmit={handleCheckout}
        onBack={() => setShowCheckout(false)}
      />
    );
  }

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-orange-50 to-amber-50">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-6 w-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Tu Carrito</h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(false)}
                className="hover:bg-orange-100"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="h-24 w-24 text-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Tu carrito está vacío
                  </h3>
                  <p className="text-gray-600 mb-6">
                    ¡Agrega algunos productos para comenzar!
                  </p>
                  <Button
                    onClick={() => setIsCartOpen(false)}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  >
                    Continuar Comprando
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="w-24 h-24 bg-white rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          className="w-full h-full object-cover"
                          alt={item.name}
                          src="https://images.unsplash.com/photo-1595872018818-97555653a011"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-orange-600 font-bold mb-3">
                          ${item.price}
                        </p>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="h-8 w-8 rounded-lg hover:bg-orange-50 hover:border-orange-500"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="h-8 w-8 rounded-lg hover:bg-orange-50 hover:border-orange-500"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemove(item.id)}
                        className="hover:bg-red-50 hover:text-red-600 flex-shrink-0"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t p-6 bg-gray-50 space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-semibold text-gray-700">Subtotal:</span>
                  <span className="text-2xl font-bold text-orange-600">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>

                <Button
                  onClick={() => setShowCheckout(true)}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all h-12 text-lg font-semibold"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-5 w-5 mr-2" />
                      Proceder al Pago
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-600 text-center">
                  Envío calculado al pagar
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
