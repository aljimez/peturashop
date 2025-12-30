/* PreguntasFrecuentes
 * FAQ page - static questions and answers. Keep content accessible.
 */
import { Helmet } from "react-helmet";

const PreguntasFrecuentes = () => {
  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Preguntas Frecuentes - Petura.shop</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h1>
        <p className="text-gray-600">
          Resolvemos las preguntas más comunes sobre pedidos, envíos y
          devoluciones.
        </p>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
