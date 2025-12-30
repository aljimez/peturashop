/* Footer
 * Site footer with navigation links and contact information.
 * - Links are responsive to internal routes or external URLs.
 * - Keep content accessible (alt text, aria where needed) and avoid
 *   hard-coding sensitive info; load from config for multi-environment.
 */
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Updated structure to allow custom paths for links
  const footerLinks = {
    Tienda: [
      { name: "Todos los Productos", path: "/#products" },
      { name: "Comida y Golosinas", path: "/comida" },
      { name: "Juguetes y Juegos", path: "/juguetes" },
      { name: "Accesorios", path: "/accesorios" },
      { name: "Salud y Bienestar", path: "/salud" },
      { name: "Tecnología", path: "/tecnologia" },
    ],
    Empresa: [
      { name: "Sobre Nosotros", path: "/sobre-nosotros" },
      { name: "Nuestra Historia", path: "/nuestra-historia" },
      { name: "Blog", path: "/blog" },
      { name: "Carreras", path: "/carreras" },
      { name: "Prensa", path: "/prensa" },
    ],
    Soporte: [
      { name: "Contáctanos", path: "/contacto" },
      { name: "Preguntas Frecuentes", path: "/preguntas-frecuentes" },
      { name: "Info de Envío", path: "/info-envio" },
      { name: "Devoluciones", path: "/devoluciones" },
      { name: "Rastrear Pedido", path: "/rastrear-pedido" },
      { name: "Política de Cookies", path: "/cookies" },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://horizons-cdn.hostinger.com/9cf741ec-2433-487b-a5f3-21a4d085a556/c3253f1be7e84f50820044df4e4e2505.png"
                alt="Logotipo de petura.shop"
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-green-500 bg-clip-text text-transparent">
                petura.shop
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              Tu socio de confianza en el cuidado de mascotas. Ofrecemos
              productos premium para mantener a tus amigos peludos felices,
              saludables y amados.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/petura.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-all hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/petura.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-all hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/petura_shop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-all hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <span className="text-lg font-semibold mb-4 block text-orange-400">
                {title}
              </span>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.path.startsWith("/") ? (
                      link.path.includes("#") ? (
                        <a
                          href={link.path}
                          className="text-gray-400 hover:text-orange-400 transition-colors"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className="text-gray-400 hover:text-orange-400 transition-colors"
                        >
                          {link.name}
                        </Link>
                      )
                    ) : (
                      <a
                        href={link.path}
                        className="text-gray-400 hover:text-orange-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500/10 p-3 rounded-lg">
                <Phone className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Llámanos</p>
                <p className="font-semibold">1-800-PET-CARE</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-500/10 p-3 rounded-lg">
                <Mail className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Envíanos un Email</p>
                <p className="font-semibold">support@petura.shop</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-500/10 p-3 rounded-lg">
                <MapPin className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Ubicación</p>
                <p className="font-semibold">123 Calle Mascotas, CA 90210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} petura.shop. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              to="/privacidad"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              to="/terminos"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              Términos y Condiciones
            </Link>
            <Link
              to="/cookies"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
