import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Handshake, Award, Eye, Users, MapPin, TrendingUp } from "lucide-react";

import trustImg from "@assets/stock_images/business_handshake_t_4a4da0bf.jpg";
import qualityImg from "@assets/stock_images/quality_premium_fres_c0dcbddf.jpg";
import transparencyImg from "@assets/stock_images/transparency_clear_g_96e13882.jpg";

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Handshake,
      title: t("about.trust.title"),
      description: t("about.trust.description"),
      gradient: "gradient-primary",
      image: trustImg
    },
    {
      icon: Award,
      title: t("about.quality.title"),
      description: t("about.quality.description"),
      gradient: "gradient-strawberry",
      image: qualityImg
    },
    {
      icon: Eye,
      title: t("about.transparency.title"),
      description: t("about.transparency.description"),
      gradient: "gradient-blueberry",
      image: transparencyImg
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "30+",
      label: t("about.stats.years"),
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: MapPin,
      number: "15+",
      label: t("about.stats.countries"),
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: TrendingUp,
      number: "1000+",
      label: t("about.stats.connections"),
      gradient: "from-orange-500 to-red-600"
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12" data-testid="about-description">
            {t("about.description")}
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-8 text-center shadow-lg hover-lift"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`about-stat-${index}`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2" data-testid={`about-stat-number-${index}`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium" data-testid={`about-stat-label-${index}`}>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Values Section with Images */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div 
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-lg hover-lift group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                data-testid={`about-value-${index}`}
              >
                {/* Image with overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 ${value.gradient} opacity-60 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl">
                      <IconComponent className="text-white" size={32} />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-3" data-testid={`about-value-title-${index}`}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`about-value-description-${index}`}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
