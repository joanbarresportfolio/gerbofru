import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Network, Lightbulb, ShieldCheck, CheckCircle } from "lucide-react";

export default function HowWeWork() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Network,
      number: "01",
      title: t("process.step1.title"),
      description: t("process.step1.description"),
      gradient: "from-green-500 to-emerald-600",
      position: "top"
    },
    {
      icon: Lightbulb,
      number: "02",
      title: t("process.step2.title"),
      description: t("process.step2.description"),
      gradient: "from-blue-500 to-cyan-600",
      position: "bottom"
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: t("process.step3.title"),
      description: t("process.step3.description"),
      gradient: "from-orange-500 to-red-600",
      position: "top"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="process-title">
            {t("process.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="process-description">
            {t("process.description")}
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-orange-500 transform -translate-y-1/2 opacity-20"></div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div 
                  key={index}
                  className={`relative ${step.position === 'bottom' ? 'md:mt-24' : ''}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  data-testid={`process-step-${index}`}
                >
                  <div className="bg-card rounded-2xl p-8 shadow-xl hover-lift border-2 border-primary/10 relative overflow-hidden group">
                    {/* Background gradient effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    {/* Number badge */}
                    <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative z-10`}>
                      <IconComponent className="text-white" size={36} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-display font-bold mb-4 relative z-10" data-testid={`process-step-title-${index}`}>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed relative z-10" data-testid={`process-step-description-${index}`}>
                      {step.description}
                    </p>
                    
                    {/* Check icon */}
                    <div className="mt-6 flex items-center gap-2 text-primary relative z-10">
                      <CheckCircle size={20} />
                      <span className="text-sm font-semibold">Verificado</span>
                    </div>
                  </div>
                  
                  {/* Connection line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-8 h-1 bg-gradient-to-r from-primary to-primary/50 transform -translate-y-1/2 z-0"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-card px-8 py-4 rounded-full shadow-lg border-2 border-primary/20">
            <motion.div 
              className="w-3 h-3 rounded-full bg-green-500"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.3, 1],
                boxShadow: [
                  "0 0 0 0 rgba(34, 197, 94, 0)",
                  "0 0 10px 3px rgba(34, 197, 94, 0.4)",
                  "0 0 0 0 rgba(34, 197, 94, 0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="font-semibold text-lg">
              Listos para conectar tu negocio
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
