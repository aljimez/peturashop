/* InfoEnvio
 * Página informativa sobre costes y tiempos de envío.
 * Estática y solo presentación.
 */
import { Helmet } from "react-helmet";

const InfoEnvio = () => {
  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Información de Envío - Petura.shop</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Información de Envío</h1>
        <p className="text-gray-600">
          Información sobre tiempos y métodos de envío.
        </p>
      </div>
    </div>
  );
};

export default InfoEnvio;
