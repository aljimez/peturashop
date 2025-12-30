/* CheckoutCancel
 * Page shown after a canceled Checkout redirect from Stripe.
 * Users can retry the checkout flow from here.
 */
import { Helmet } from "react-helmet";

const CheckoutCancel = () => {
  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Pago Cancelado - Petura.shop</title>
      </Helmet>
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Pago Cancelado
        </h1>
        <p className="text-gray-600">
          El pago fue cancelado. Si lo deseas, puedes intentarlo de nuevo.
        </p>
      </div>
    </div>
  );
};

export default CheckoutCancel;
