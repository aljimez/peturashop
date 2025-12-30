import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const features = [
    { icon: Heart, text: "Hecho con Amor" },
    { icon: Shield, text: "Calidad Garantizada" },
    { icon: Truck, text: "Envío Gratis" },
  ];

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-green-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold"
            >
              🐾 Productos Premium para Mascotas
            </motion.span>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Todo lo que tu
              <span className="block bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                Amigo Peludo
              </span>
              Necesita
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Descubre nuestra colección curada de productos premium. Desde
              comida nutritiva hasta juguetes atractivos, tenemos todo para
              mantener a tus mascotas felices y saludables.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToProducts}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Comprar Ahora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-500 text-green-700 hover:bg-green-50 transition-all hover:scale-105"
              >
                Saber Más
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <feature.icon className="h-5 w-5 text-orange-500" />
                  <span className="text-sm font-medium text-gray-700">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-[500px] object-cover"
                alt="Happy pets with their favorite toys and products"
                src="https://images.unsplash.com/photo-1600032324497-ec69ec5df213"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 rounded-full p-2">
                    <Heart className="h-6 w-6 text-green-600 fill-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">4.9</p>
                    <p className="text-xs text-gray-600">Calificación</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-lg"
              >
                <p className="text-sm text-gray-600">Confiado por</p>
                <p className="text-2xl font-bold text-orange-500">
                  10k+ Dueños
                </p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-20 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-green-300 to-green-400 rounded-full opacity-20 blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
