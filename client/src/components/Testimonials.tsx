import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Star } from "lucide-react";

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t("testimonials.testimonial1.text"),
      name: t("testimonials.testimonial1.name"),
      role: t("testimonials.testimonial1.role"),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      text: t("testimonials.testimonial2.text"),
      name: t("testimonials.testimonial2.name"),
      role: t("testimonials.testimonial2.role"),
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      text: t("testimonials.testimonial3.text"),
      name: t("testimonials.testimonial3.name"),
      role: t("testimonials.testimonial3.role"),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="testimonials-title">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="testimonials-description">
            {t("testimonials.description")}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="fill-current" size={16} />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4" data-testid={`testimonial-text-${index}`}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-3" 
                  data-testid={`testimonial-image-${index}`}
                />
                <div>
                  <h4 className="font-semibold" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`testimonial-role-${index}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
