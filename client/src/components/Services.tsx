import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Users, MessageCircle, Globe, Truck } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Users,
      title: t("services.intermediation.title"),
      description: t("services.intermediation.description"),
      gradient: "gradient-primary"
    },
    {
      icon: MessageCircle,
      title: t("services.negotiation.title"),
      description: t("services.negotiation.description"),
      gradient: "gradient-strawberry"
    },
    {
      icon: Globe,
      title: t("services.export.title"),
      description: t("services.export.description"),
      gradient: "gradient-blueberry"
    },
    {
      icon: Truck,
      title: t("services.logistics.title"),
      description: t("services.logistics.description"),
      gradient: "bg-accent"
    }
  ];

  return (
    <section id="servicios" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="services-title">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="services-description">
            {t("services.description")}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-md hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`service-card-${index}`}
              >
                <div className={`w-12 h-12 ${service.gradient} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="text-xl text-white" size={24} />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2" data-testid={`service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
