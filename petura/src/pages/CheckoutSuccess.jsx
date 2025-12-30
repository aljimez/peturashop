import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useCart } from "../context/CartContext";

const CheckoutSuccess = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear cart after successful checkout
    clearCart();
  }, [clearCart]);

  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Pago Exitoso - Petura.shop</title>
      </Helmet>
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          ¡Gracias por tu compra!
        </h1>
        <p className="text-gray-600">
          Hemos recibido tu pago. En breve recibirás un correo con los detalles
          de tu pedido.
        </p>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
