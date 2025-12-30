import { Helmet } from "react-helmet";

const Contacto = () => {
  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Contacto - Petura.shop</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
        <p className="text-gray-600">
          Escríbenos a support@petura.shop o utiliza nuestro formulario de
          contacto.
        </p>
      </div>
    </div>
  );
};

export default Contacto;
