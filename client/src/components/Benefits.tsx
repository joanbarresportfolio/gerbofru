import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Sprout, ShoppingCart, CheckCircle } from "lucide-react";

export default function Benefits() {
  const { t } = useLanguage();

  const supplierBenefits = [
    {
      title: t("benefits.suppliers.market_access.title"),
      description: t("benefits.suppliers.market_access.description")
    },
    {
      title: t("benefits.suppliers.secure_sales.title"),
      description: t("benefits.suppliers.secure_sales.description")
    },
    {
      title: t("benefits.suppliers.logistics_support.title"),
      description: t("benefits.suppliers.logistics_support.description")
    },
    {
      title: t("benefits.suppliers.better_prices.title"),
      description: t("benefits.suppliers.better_prices.description")
    }
  ];

  const buyerBenefits = [
    {
      title: t("benefits.buyers.certified_fruit.title"),
      description: t("benefits.buyers.certified_fruit.description")
    },
    {
      title: t("benefits.buyers.reliable_network.title"),
      description: t("benefits.buyers.reliable_network.description")
    },
    {
      title: t("benefits.buyers.time_savings.title"),
      description: t("benefits.buyers.time_savings.description")
    },
    {
      title: t("benefits.buyers.constant_supply.title"),
      description: t("benefits.buyers.constant_supply.description")
    }
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" data-testid="benefits-title">
            {t("benefits.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="benefits-description">
            {t("benefits.description")}
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits for Suppliers */}
          <motion.div 
            className="bg-card p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mr-4">
                <Sprout className="text-xl text-primary-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold" data-testid="benefits-suppliers-title">
                {t("benefits.suppliers.title")}
              </h3>
            </div>
            <ul className="space-y-4">
              {supplierBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1" data-testid={`supplier-benefit-title-${index}`}>
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-testid={`supplier-benefit-description-${index}`}>
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Benefits for Buyers */}
          <motion.div 
            className="bg-card p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-blueberry rounded-lg flex items-center justify-center mr-4">
                <ShoppingCart className="text-xl text-white" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold" data-testid="benefits-buyers-title">
                {t("benefits.buyers.title")}
              </h3>
            </div>
            <ul className="space-y-4">
              {buyerBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-blueberry mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1" data-testid={`buyer-benefit-title-${index}`}>
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-testid={`buyer-benefit-description-${index}`}>
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
