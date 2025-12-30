/* TermsOfService
 * Terms and conditions page (legal). Keep this up-to-date and
 * avoid exposing operational secrets or internal endpoints.
 */
import { motion } from "framer-motion";
import { FileText, Truck, RefreshCw, CreditCard } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block p-3 rounded-full bg-orange-100 mb-4">
            <FileText className="h-8 w-8 text-orange-600" />
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-gray-600">
            Última actualización: {new Date().toLocaleDateString("es-ES")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-orange max-w-none text-gray-600 space-y-8"
        >
          <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introducción
            </h2>
            <p>
              Bienvenido a petura.shop. Estos términos y condiciones regulan el
              uso de nuestro sitio web y la compra de productos a través del
              mismo. Al acceder y utilizar este sitio, usted acepta estos
              términos en su totalidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Identificación del Vendedor
            </h2>
            <p>
              El titular del sitio web y vendedor de los productos es Petura
              Shop S.L., con domicilio en 123 Calle Mascotas, 28001 Madrid,
              España.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-orange-500" />
              3. Precios y Pagos
            </h2>
            <p>
              Todos los precios se muestran en Euros (€) e incluyen el IVA
              aplicable en España. Nos reservamos el derecho de modificar los
              precios en cualquier momento, aunque se respetarán los precios de
              los pedidos ya confirmados.
            </p>
            <p className="mt-2">
              Aceptamos los siguientes métodos de pago: Tarjeta de
              crédito/débito (Visa, Mastercard), PayPal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Truck className="h-6 w-6 text-orange-500" />
              4. Envíos y Entregas
            </h2>
            <p>
              Realizamos envíos a toda España peninsular y Baleares. Los plazos
              de entrega estimados son de 24-48 horas laborables para península.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>
                Envío estándar: 4.99€ (Gratis en pedidos superiores a 50€).
              </li>
              <li>
                No nos hacemos responsables de retrasos causados por fuerza
                mayor o problemas logísticos ajenos a nuestra empresa.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <RefreshCw className="h-6 w-6 text-orange-500" />
              5. Devoluciones y Garantía
            </h2>
            <p>
              Dispone de 14 días naturales desde la recepción del pedido para
              ejercer su derecho de desistimiento sin necesidad de
              justificación. Los productos deben devolverse en su embalaje
              original y en perfecto estado.
            </p>
            <p className="mt-2">
              Todos nuestros productos cuentan con una garantía legal de 3 años
              contra defectos de fabricación, conforme a la normativa vigente de
              consumo en España.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Legislación Aplicable
            </h2>
            <p>
              Estas condiciones se regirán e interpretarán de acuerdo con las
              leyes de España. Para cualquier controversia que pudiera derivarse
              del acceso o uso de este sitio web, las partes se someten a los
              juzgados y tribunales de la ciudad de Madrid.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
