/* NuestraHistoria
 * About / Our story page. Static content describing the brand.
 */
import { Helmet } from "react-helmet";

const NuestraHistoria = () => {
  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Nuestra Historia - Petura.shop</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Nuestra Historia</h1>
        <p className="text-gray-600">
          Petura nació para ofrecer productos de calidad para tus mascotas.
        </p>
      </div>
    </div>
  );
};

export default NuestraHistoria;
