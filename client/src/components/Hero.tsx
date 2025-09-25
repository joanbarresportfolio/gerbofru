import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Sprout, ShoppingCart } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToForm = (formId: string) => {
    const element = document.getElementById(formId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="inicio" className="pt-24 section-padding">
      <div 
        className="relative min-h-[80vh] flex items-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
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
