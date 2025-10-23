import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Citrus, Apple, Cherry, Palmtree, Carrot, Grape, MessageCircle } from "lucide-react";

export default function Products() {
  const { t } = useLanguage();

  const productCategories = [
    {
      title: t("products.citrus.title"),
      items: t("products.citrus.items"),
      icon: Citrus,
      gradient: "gradient-primary",
    },
    {
      title: t("products.other_fruits.title"),
      items: t("products.other_fruits.items"),
      icon: Apple,
      gradient: "gradient-strawberry",
    },
    {
      title: t("products.stone_fruits.title"),
      items: t("products.stone_fruits.items"),
      icon: Cherry,
      gradient: "gradient-blueberry",
    },
    {
      title: t("products.tropical_fruits.title"),
      items: t("products.tropical_fruits.items"),
      icon: Palmtree,
      gradient: "bg-gradient-to-br from-orange-500 to-yellow-500",
    },
    {
      title: t("products.vegetables.title"),
      items: t("products.vegetables.items"),
      icon: Carrot,
      gradient: "bg-gradient-to-br from-green-600 to-green-400",
    },
    {
      title: t("products.berries.title"),
      items: t("products.berries.items"),
      icon: Grape,
      gradient: "bg-gradient-to-br from-purple-600 to-pink-500",
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {productCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div 
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-lg hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`product-category-${index}`}
              >
                <div className={`${category.gradient} p-6 text-center`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white" data-testid={`product-category-title-${index}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-center" data-testid={`product-category-items-${index}`}>
                    {category.items}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="bg-card rounded-xl p-8 text-center shadow-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          data-testid="products-other-notice"
        >
          <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-display font-bold mb-3" data-testid="products-other-title">
            {t("products.other_notice")}
          </h3>
          <p className="text-muted-foreground" data-testid="products-other-description">
            {t("products.other_description")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
