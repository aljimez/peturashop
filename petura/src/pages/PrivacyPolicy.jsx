/* PrivacyPolicy
 * Detailed privacy policy page. This should contain accurate legal
 * information and be reviewed by legal counsel for production.
 * Avoid embedding any sensitive operational secrets here.
 */
import { motion } from "framer-motion";
import { Shield, Lock, Eye } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block p-3 rounded-full bg-orange-100 mb-4">
            <Shield className="h-8 w-8 text-orange-600" />
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Política de Privacidad
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
              1. Responsable del Tratamiento
            </h2>
            <p className="mb-4">
              En cumplimiento del Reglamento (UE) 2016/679 del Parlamento
              Europeo y del Consejo (RGPD) y la Ley Orgánica 3/2018 de
              Protección de Datos Personales y garantía de los derechos
              digitales (LOPDGDD), le informamos que los datos personales que
              nos facilite serán tratados por:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Denominación Social:</strong> Petura Shop S.L.
              </li>
              <li>
                <strong>Domicilio Social:</strong> 123 Calle Mascotas, 28001
                Madrid, España
              </li>
              <li>
                <strong>CIF:</strong> B-12345678
              </li>
              <li>
                <strong>Email de contacto:</strong> support@petura.shop
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Eye className="h-6 w-6 text-orange-500" />
              2. Finalidad del Tratamiento
            </h2>
            <p>
              Tratamos la información que nos facilitan las personas interesadas
              con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>
                Gestionar los pedidos y la entrega de productos adquiridos a
                través de la web.
              </li>
              <li>
                Enviar comunicaciones comerciales sobre nuestros productos y
                servicios (solo si ha dado su consentimiento expreso).
              </li>
              <li>Gestionar consultas y solicitudes de soporte al cliente.</li>
              <li>
                Mejorar la experiencia de usuario y el funcionamiento técnico de
                la web.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Lock className="h-6 w-6 text-orange-500" />
              3. Legitimación
            </h2>
            <p>La base legal para el tratamiento de sus datos es:</p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>
                La ejecución del contrato de compraventa al realizar un pedido.
              </li>
              <li>
                El consentimiento expreso para el envío de comunicaciones
                comerciales y uso de cookies.
              </li>
              <li>
                El cumplimiento de obligaciones legales (facturación,
                impuestos).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Destinatarios de los Datos
            </h2>
            <p>
              Sus datos no se cederán a terceros salvo obligación legal o cuando
              sea necesario para la prestación del servicio (ej. empresas de
              transporte, pasarelas de pago).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Derechos del Usuario
            </h2>
            <p className="mb-4">Como usuario, tiene derecho a:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Acceder a sus datos personales.</li>
              <li>Solicitar la rectificación de los datos inexactos.</li>
              <li>
                Solicitar su supresión cuando, entre otros motivos, los datos ya
                no sean necesarios.
              </li>
              <li>Oponerse al tratamiento de sus datos.</li>
              <li>Solicitar la limitación del tratamiento.</li>
            </ul>
            <p className="mt-4">
              Puede ejercer estos derechos enviando un email a
              support@petura.shop adjuntando copia de su DNI.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
