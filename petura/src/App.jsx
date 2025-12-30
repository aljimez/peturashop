/* App.jsx
 * Application root containing routing and top-level providers.
 * - Uses `CartProvider` to make cart state available to the app
 * - Routes map to pages under `src/pages`
 * - Keep routing here and avoid heavy business logic in App.jsx
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Home from "./pages/Home";
import Comida from "./pages/Comida";
import Juguetes from "./pages/Juguetes";
import Accesorios from "./pages/Accesorios";
import Salud from "./pages/Salud";
import Tecnologia from "./pages/Tecnologia";
import ProductDetail from "./pages/ProductDetail";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import CheckoutCancel from "./pages/CheckoutCancel";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import Contacto from "./pages/Contacto";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import InfoEnvio from "./pages/InfoEnvio";
import Devoluciones from "./pages/Devoluciones";
import RastrearPedido from "./pages/RastrearPedido";
import SobreNosotros from "./pages/SobreNosotros";
import NuestraHistoria from "./pages/NuestraHistoria";
import Blog from "./pages/Blog";
import Carreras from "./pages/Carreras";
import Prensa from "./pages/Prensa";
import { Toaster } from "./components/ui/toaster";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <Helmet>
          <title>
            Petura.shop - Productos y Suministros Premium para Mascotas
          </title>
          <meta
            name="description"
            content="Descubre productos premium para tus amigos peludos. Compra juguetes de calidad, comida, accesorios y más en petura.shop."
          />
        </Helmet>
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-beige-50 to-green-50 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/comida" element={<Comida />} />
              <Route path="/juguetes" element={<Juguetes />} />
              <Route path="/accesorios" element={<Accesorios />} />
              <Route path="/salud" element={<Salud />} />
              <Route path="/tecnologia" element={<Tecnologia />} />
              <Route path="/producto/:id" element={<ProductDetail />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/checkout/success" element={<CheckoutSuccess />} />
              <Route path="/checkout/cancel" element={<CheckoutCancel />} />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              <Route path="/nuestra-historia" element={<NuestraHistoria />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/carreras" element={<Carreras />} />
              <Route path="/prensa" element={<Prensa />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route
                path="/preguntas-frecuentes"
                element={<PreguntasFrecuentes />}
              />
              <Route path="/info-envio" element={<InfoEnvio />} />
              <Route path="/devoluciones" element={<Devoluciones />} />
              <Route path="/rastrear-pedido" element={<RastrearPedido />} />
              <Route path="/privacidad" element={<PrivacyPolicy />} />
              <Route path="/terminos" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer />
          <Cart />
          <CookieConsent />
          <Toaster />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
