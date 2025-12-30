/* Devoluciones
 * Página informativa sobre la política de devoluciones.
 * Estática: no realiza llamadas a APIs ni mantiene estado.
 */
import { Helmet } from "react-helmet";

const Devoluciones = () => {
  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Devoluciones - Petura.shop</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Devoluciones</h1>
        <p className="text-gray-600">
          Política y pasos para gestionar devoluciones.
        </p>
      </div>
    </div>
  );
};

export default Devoluciones;
