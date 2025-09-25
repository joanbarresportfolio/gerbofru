import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Heart, Circle, Check } from "lucide-react";

export default function Products() {
  const { t } = useLanguage();

  const products = [
    {
      title: t("products.strawberries.title"),
      description: t("products.strawberries.description"),
      features: [
        t("products.strawberries.feature1"),
        t("products.strawberries.feature2"),
        t("products.strawberries.feature3")
      ],
      icon: Heart,
      gradient: "gradient-strawberry",
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Fresas frescas de alta calidad"
    },
    {
      title: t("products.blueberries.title"),
      description: t("products.blueberries.description"),
      features: [
        t("products.blueberries.feature1"),
        t("products.blueberries.feature2"),
        t("products.blueberries.feature3")
      ],
      icon: Circle,
      gradient: "gradient-blueberry",
      image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Arándanos frescos premium"
    }
  ];

  return (
    <section id="productos" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="products-title">
            {t("products.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="products-description">
            {t("products.description")}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div 
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                data-testid={`product-card-${index}`}
              >
                <img 
                  src={product.image} 
                  alt={product.alt} 
                  className="w-full h-64 object-cover" 
                  data-testid={`product-image-${index}`}
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 ${product.gradient} rounded-full flex items-center justify-center mr-3`}>
                      <IconComponent className="text-white text-sm" size={16} />
                    </div>
                    <h3 className="text-2xl font-display font-bold" data-testid={`product-title-${index}`}>
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4" data-testid={`product-description-${index}`}>
                    {product.description}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="text-primary mr-2" size={16} />
                        <span data-testid={`product-feature-${index}-${featureIndex}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
