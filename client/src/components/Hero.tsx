import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Sprout, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

import heroImage1 from "@assets/stock_images/fresh_fruit_harvest__48637bed.jpg";
import heroImage2 from "@assets/stock_images/orange_grove_citrus__d61d8f4a.jpg";
import heroImage3 from "@assets/stock_images/strawberry_field_far_aaa0a5b2.jpg";
import heroImage4 from "@assets/stock_images/vegetable_farm_agric_20608878.jpg";

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

export default function Hero() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const scrollToForm = (formId: string) => {
    const element = document.getElementById(formId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="inicio" className="pt-24 section-padding">
      <div className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background images carousel */}
        <AnimatePresence mode="sync">
          {heroImages.map((image, index) => (
            index === currentImageIndex && (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
              >
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Content */}
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-testid="hero-title"
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              data-testid="hero-subtitle"
            >
              {t("hero.subtitle")}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                onClick={() => scrollToForm("form-proveedor")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-lift"
                data-testid="button-supplier"
              >
                <Sprout className="mr-2 h-5 w-5" />
                {t("hero.supplier_btn")}
              </Button>
              <Button
                onClick={() => scrollToForm("form-comprador")}
                size="lg"
                className="bg-blueberry hover:bg-blueberry/90 text-white font-semibold hover-lift"
                data-testid="button-buyer"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {t("hero.buyer_btn")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
