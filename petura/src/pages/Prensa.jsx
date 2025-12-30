/* Prensa
 * Press page with media assets and press kit links. Static content.
 */
import { Helmet } from "react-helmet";

const Prensa = () => {
  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Prensa - Petura.shop</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Prensa</h1>
        <p className="text-gray-600">Recursos para prensa y medios.</p>
      </div>
    </div>
  );
};

export default Prensa;
