import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Handshake, Award, Eye } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Handshake,
      title: t("about.trust.title"),
      description: t("about.trust.description"),
      gradient: "gradient-primary"
    },
    {
      icon: Award,
      title: t("about.quality.title"),
      description: t("about.quality.description"),
      gradient: "gradient-strawberry"
    },
    {
      icon: Eye,
      title: t("about.transparency.title"),
      description: t("about.transparency.description"),
      gradient: "gradient-blueberry"
    }
  ];

  return (
    <section id="nosotros" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="about-title">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="about-description">
            {t("about.description")}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="text-2xl text-white" size={32} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2" data-testid={`about-value-title-${index}`}>
                  {value.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`about-value-description-${index}`}>
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
