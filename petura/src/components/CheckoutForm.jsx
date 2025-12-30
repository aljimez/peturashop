import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, Loader2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const CheckoutForm = ({ onSubmit, onBack }) => {
  const { getCartTotal, cartItems } = useCart();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStripeCheckout = async (customerData) => {
    try {
      setIsProcessing(true);

      const serverUrl =
        import.meta.env.VITE_SERVER_URL || "http://localhost:4242";

      // Map cart items to a lightweight payload for the checkout session
      const items = cartItems.map((it) => ({
        name: it.title || it.name || "Producto",
        description: it.description || "",
        unit_amount: it.price,
        quantity: it.quantity || 1,
        currency: "eur",
      }));

      const res = await fetch(`${serverUrl}/api/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items,
          successUrl: `${window.location.origin}/checkout/success`,
          cancelUrl: `${window.location.origin}/checkout/cancel`,
          customer: customerData,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Error creando sesión de pago");
      }

      const data = await res.json();

      // Load Stripe.js and redirect to Checkout
      const { loadStripe } = await import("@stripe/stripe-js");
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

      if (!stripe) throw new Error("Stripe no pudo inicializarse.");

      const { error } = await stripe.redirectToCheckout({ sessionId: data.id });
      if (error) throw error;
    } catch (err) {
      console.error(err);
      toast({
        title: "Error de Pago",
        description: err.message || "No se pudo iniciar el pago.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (contact + address only; card data handled by Stripe Checkout)
    if (!formData.name || !formData.email || !formData.address) {
      toast({
        title: "Falta Información",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    await handleStripeCheckout(formData);
  };

  const shippingCost = 9.99;
  const total = getCartTotal() + shippingCost;

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25 }}
      className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-white shadow-2xl z-50 flex flex-col overflow-y-auto"
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-6 border-b bg-gradient-to-r from-orange-50 to-amber-50 sticky top-0 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="hover:bg-orange-100"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h2 className="text-2xl font-bold text-gray-900">Pagar</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 p-6 space-y-6">
        {/* Order Summary */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 space-y-2">
          <h3 className="font-semibold text-gray-900 mb-3">
            Resumen del Pedido
          </h3>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              Artículos ({cartItems.length}):
            </span>
            <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Envío:</span>
            <span className="font-semibold">${shippingCost.toFixed(2)}</span>
          </div>
          <div className="border-t pt-2 flex justify-between">
            <span className="font-bold text-gray-900">Total:</span>
            <span className="text-xl font-bold text-orange-600">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">
            Información de Contacto
          </h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre Completo *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Juan Pérez"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Correo Electrónico *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="juan@ejemplo.com"
              required
            />
          </div>
        </div>

        {/* Shipping Address */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Dirección de Envío</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dirección *
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Calle Principal 123"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ciudad *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="Madrid"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Código Postal *
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="28001"
                required
              />
            </div>
          </div>
        </div>

        {/* Payment Information (Stripe Checkout) */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Información de Pago</h3>

          <p className="text-gray-600">
            Al pulsar en <strong>"Pagar con Stripe"</strong> serás redirigido a
            una página segura alojada por Stripe para introducir los datos de tu
            tarjeta. Nunca almacenamos ni procesamos directamente números de
            tarjeta en este servidor.
          </p>
        </div>

        {/* Submit Button (Stripe Checkout) */}
        <Button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all h-12 text-lg font-semibold"
        >
          {isProcessing ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Redirigiendo a pago...
            </>
          ) : (
            <>
              <CreditCard className="h-5 w-5 mr-2" />
              Pagar con Stripe ${total.toFixed(2)}
            </>
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Serás redirigido a una página de pago segura alojada por Stripe.
        </p>
      </form>
    </motion.div>
  );
};

export default CheckoutForm;
