import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { TrendingUp, Handshake, Truck, ShieldCheck } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: TrendingUp,
      title: t("services.commercial_opportunities.title"),
      description: t("services.commercial_opportunities.description"),
      gradient: "from-green-500 to-emerald-600",
      iconColor: "text-white"
    },
    {
      icon: Handshake,
      title: t("services.agreements.title"),
      description: t("services.agreements.description"),
      gradient: "from-blue-500 to-cyan-600",
      iconColor: "text-white"
    },
    {
      icon: Truck,
      title: t("services.logistics.title"),
      description: t("services.logistics.description"),
      gradient: "from-purple-500 to-pink-600",
      iconColor: "text-white"
    },
    {
      icon: ShieldCheck,
      title: t("services.trust.title"),
      description: t("services.trust.description"),
      gradient: "from-orange-500 to-red-600",
      iconColor: "text-white"
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-secondary/50">
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
                className="bg-card rounded-2xl shadow-lg hover-lift overflow-hidden group border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`service-card-${index}`}
              >
                {/* Icon header with gradient */}
                <div className={`bg-gradient-to-br ${service.gradient} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                    <IconComponent className={service.iconColor} size={32} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors" data-testid={`service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`service-description-${index}`}>
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`h-1 bg-gradient-to-r ${service.gradient}`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
