/* SobreNosotros
 * Company about page. Static content describing the team/mission.
 */
import { Helmet } from "react-helmet";

const SobreNosotros = () => {
  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Sobre Nosotros - Petura.shop</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-gray-600">
          Somos Petura, apasionados por el bienestar de las mascotas.
        </p>
      </div>
    </div>
  );
};

export default SobreNosotros;
