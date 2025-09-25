import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function HowWeWork() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "1",
      title: t("process.step1.title"),
      description: t("process.step1.description"),
      gradient: "gradient-primary"
    },
    {
      number: "2",
      title: t("process.step2.title"),
      description: t("process.step2.description"),
      gradient: "gradient-strawberry"
    },
    {
      number: "3",
      title: t("process.step3.title"),
      description: t("process.step3.description"),
      gradient: "gradient-blueberry"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="process-title">
            {t("process.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="process-description">
            {t("process.description")}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`w-20 h-20 ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6 relative z-10`}>
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3" data-testid={`process-step-title-${index}`}>
                {step.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`process-step-description-${index}`}>
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
