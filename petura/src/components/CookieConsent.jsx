import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  useEffect(() => {
    if (!isVisible) return;
    const onKey = (e) => {
      if (e.key === "Escape") handleReject();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Consentimiento de cookies"
        >
          <div className="container mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl border border-orange-100 p-6 flex flex-col md:flex-row items-center gap-6 relative">
            <button
              onClick={handleReject}
              aria-label="Cerrar"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
              <Cookie className="h-6 w-6 text-orange-600" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Valoramos su privacidad
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Utilizamos cookies propias y de terceros para mejorar nuestros
                servicios, analizar el tráfico del sitio y personalizar su
                experiencia. Al hacer clic en &quot;Aceptar&quot;, usted acepta
                el uso de estas tecnologías. Puede consultar nuestra
                <a
                  href="/privacidad"
                  className="text-orange-600 hover:underline"
                >
                  Política de Privacidad
                </a>{" "}
                para más información.
              </p>
            </div>

            <div className="flex gap-3 flex-shrink-0 w-full md:w-auto">
              <Button
                onClick={handleAccept}
                className="flex-1 md:flex-none bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
              >
                Aceptar Todo
              </Button>
              <Button
                variant="outline"
                onClick={handleReject}
                className="flex-1 md:flex-none border-gray-200"
              >
                Rechazar
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
