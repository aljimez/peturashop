import { Helmet } from "react-helmet";

const CookiePolicy = () => {
  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Política de Cookies - Petura.shop</title>
        <meta name="description" content="Política de cookies de petura.shop" />
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Política de Cookies
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            1. ¿Qué son las cookies?
          </h2>
          <p className="text-gray-600">
            Las cookies son pequeños archivos de texto que los sitios web
            almacenan en su dispositivo para identificarlo y recordar sus
            preferencias.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            2. ¿Qué tipos de cookies utilizamos?
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>
              <strong>Cookies necesarias:</strong> permiten la navegación y el
              uso de funciones básicas.
            </li>
            <li>
              <strong>Cookies de rendimiento:</strong> recogen información
              anónima sobre cómo los visitantes usan la web para mejorarla.
            </li>
            <li>
              <strong>Cookies funcionales:</strong> recuerdan preferencias y
              ajustes (p. ej., idioma).
            </li>
            <li>
              <strong>Cookies de publicidad:</strong> se usan para mostrar
              anuncios relevantes.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. ¿Por cuánto tiempo se almacenan las cookies?
          </h2>
          <p className="text-gray-600">
            Algunas cookies son de sesión (se eliminan al cerrar el navegador) y
            otras son persistentes (permanecen por un periodo determinado o
            hasta que las elimine el usuario).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. Gestión y rechazo de cookies
          </h2>
          <p className="text-gray-600">
            Puede aceptar o rechazar cookies desde el banner de cookies. También
            puede configurar o bloquear las cookies desde las opciones de su
            navegador. Si bloquea cookies, algunas funcionalidades pueden verse
            afectadas.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Contacto</h2>
          <p className="text-gray-600">
            Si tiene preguntas sobre esta política, contacte con nosotros en{" "}
            <a
              href="mailto:support@petura.shop"
              className="text-orange-600 hover:underline"
            >
              support@petura.shop
            </a>
            .
          </p>
        </section>

        <p className="text-sm text-gray-500">
          Última actualización: {new Date().toLocaleDateString("es-ES")}
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
