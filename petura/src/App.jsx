import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Home from "./pages/Home";
import Comida from "./pages/Comida";
import Juguetes from "./pages/Juguetes";
import Accesorios from "./pages/Accesorios";
import Salud from "./pages/Salud";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
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
