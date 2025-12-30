/* Contacto
 * Contact page: static content with contact details and possible form
 * (currently read-only). Keep any form submissions going to a secure
 * server endpoint.
 */
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
