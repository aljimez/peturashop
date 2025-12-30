import { Helmet } from "react-helmet";

const RastrearPedido = () => {
  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Rastrear Pedido - Petura.shop</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Rastrear Pedido</h1>
        <p className="text-gray-600">
          Introduce tu número de seguimiento para ver el estado de tu pedido.
        </p>
      </div>
    </div>
  );
};

export default RastrearPedido;
