/* Carreras
 * Careers / jobs page - static informational content.
 */
import { Helmet } from "react-helmet";

const Carreras = () => {
  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Carreras - Petura.shop</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Únete al Equipo</h1>
        <p className="text-gray-600">
          Consulta nuestras oportunidades de empleo.
        </p>
      </div>
    </div>
  );
};

export default Carreras;
