import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { fruitsData } from "@shared/fruitsData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import citrusImg from "@assets/stock_images/fresh_citrus_fruits__e919d02e.jpg";
import otherFruitsImg from "@assets/stock_images/fresh_apples_pears_v_2ed55177.jpg";
import stoneFruitsImg from "@assets/stock_images/fresh_peaches_nectar_a0217221.jpg";
import tropicalFruitsImg from "@assets/stock_images/tropical_fruits_mang_b38c1f2a.jpg";
import vegetablesImg from "@assets/stock_images/fresh_vegetables_pep_f3bd30cd.jpg";
import berriesImg from "@assets/stock_images/fresh_berries_strawb_1726fe5c.jpg";

import orange1 from "@assets/stock_images/fresh_oranges_citrus_94f1bde7.jpg";
import orange2 from "@assets/stock_images/fresh_oranges_citrus_0b447f9a.jpg";
import orange3 from "@assets/stock_images/fresh_oranges_citrus_4fea8636.jpg";
import orange4 from "@assets/stock_images/fresh_oranges_citrus_0d4040c9.jpg";

import fruit1 from "@assets/stock_images/fresh_watermelon_mel_f8f45fe8.jpg";
import fruit2 from "@assets/stock_images/fresh_watermelon_mel_0c16b157.jpg";
import fruit3 from "@assets/stock_images/fresh_watermelon_mel_fcb0d3ea.jpg";
import fruit4 from "@assets/stock_images/fresh_watermelon_mel_d4e9f52f.jpg";

import stone1 from "@assets/stock_images/fresh_peach_nectarin_7a9a48f5.jpg";
import stone2 from "@assets/stock_images/fresh_peach_nectarin_ce7634fa.jpg";
import stone3 from "@assets/stock_images/fresh_peach_nectarin_7b87cf9c.jpg";
import stone4 from "@assets/stock_images/fresh_peach_nectarin_4c37baee.jpg";

import tropical1 from "@assets/stock_images/fresh_pomegranate_av_fceec9e9.jpg";
import tropical2 from "@assets/stock_images/fresh_pomegranate_av_a01e1514.jpg";
import tropical3 from "@assets/stock_images/fresh_pomegranate_av_cda23805.jpg";
import tropical4 from "@assets/stock_images/fresh_pomegranate_av_f01f5c35.jpg";
import tropical5 from "@assets/stock_images/fresh_pomegranate_av_a6ad31ba.jpg";

import veg1 from "@assets/stock_images/fresh_peppers_eggpla_cc5dc567.jpg";
import veg2 from "@assets/stock_images/fresh_peppers_eggpla_6a86acc9.jpg";
import veg3 from "@assets/stock_images/fresh_peppers_eggpla_5d03ac47.jpg";
import veg4 from "@assets/stock_images/fresh_peppers_eggpla_5cc00623.jpg";
import veg5 from "@assets/stock_images/fresh_peppers_eggpla_5bf47288.jpg";
import veg6 from "@assets/stock_images/fresh_lettuce_brocco_4acb56d5.jpg";
import veg7 from "@assets/stock_images/fresh_lettuce_brocco_44a26920.jpg";
import veg8 from "@assets/stock_images/fresh_lettuce_brocco_f64d4b28.jpg";
import veg9 from "@assets/stock_images/fresh_lettuce_brocco_a8b3ce17.jpg";
import veg10 from "@assets/stock_images/fresh_lettuce_brocco_4b4e9ad8.jpg";
import veg11 from "@assets/stock_images/fresh_lettuce_brocco_4d7d7411.jpg";

import berry1 from "@assets/stock_images/fresh_strawberries_1ae902cb.jpg";
import berry2 from "@assets/stock_images/fresh_blueberries_cdca1fe6.jpg";
import berry3 from "@assets/stock_images/fresh_raspberries_e8e49bad.jpg";
import berry4 from "@assets/stock_images/fresh_blackberries_4f333457.jpg";

const categoryImages: Record<string, string> = {
  citricos: citrusImg,
  "otras-frutas": otherFruitsImg,
  "fruta-hueso": stoneFruitsImg,
  "fruta-tropical": tropicalFruitsImg,
  verduras: vegetablesImg,
  berries: berriesImg,
};

const fruitImages: Record<string, string[]> = {
  citricos: [orange1, orange2, orange3, orange4],
  "otras-frutas": [fruit1, fruit2, fruit3, fruit4],
  "fruta-hueso": [stone1, stone2, stone3, stone4],
  "fruta-tropical": [tropical1, tropical2, tropical3, tropical4, tropical5],
  verduras: [
    veg1,
    veg2,
    veg3,
    veg4,
    veg5,
    veg6,
    veg7,
    veg8,
    veg9,
    veg10,
    veg11,
  ],
  berries: [berry1, berry2, berry3, berry4],
};

export default function Products() {
  const { t, language } = useLanguage();

  const getCategoryName = (category: typeof fruitsData[0]) => {
    switch (language) {
      case "es": return category.name;
      case "en": return category.nameEn;
      case "cs": return category.nameCs;
      case "pt": return category.namePt;
      default: return category.name;
    }
  };

  const getCategoryDescription = (category: typeof fruitsData[0]) => {
    switch (language) {
      case "es": return category.description;
      case "en": return category.descriptionEn;
      case "cs": return category.descriptionCs;
      case "pt": return category.descriptionPt;
      default: return category.description;
    }
  };

  const getFruitName = (fruit: typeof fruitsData[0]['fruits'][0]) => {
    switch (language) {
      case "es": return fruit.name;
      case "en": return fruit.nameEn;
      case "cs": return fruit.nameCs;
      case "pt": return fruit.namePt;
      default: return fruit.name;
    }
  };

  const getFruitSeason = (fruit: typeof fruitsData[0]['fruits'][0]) => {
    switch (language) {
      case "es": return fruit.season;
      case "en": return fruit.seasonEn;
      case "cs": return fruit.seasonCs;
      case "pt": return fruit.seasonPt;
      default: return fruit.season;
    }
  };

  const getSeasonLabel = () => {
    switch (language) {
      case "es": return "🗓️ Temporada:";
      case "en": return "🗓️ Season:";
      case "cs": return "🗓️ Sezóna:";
      case "pt": return "🗓️ Temporada:";
      default: return "🗓️ Temporada:";
    }
  };

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
          <h2
            className="text-3xl md:text-4xl font-display font-bold mb-4"
            data-testid="products-title"
          >
            {t("products.title")}
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="products-description"
          >
            {t("products.description")}
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-6">
          {fruitsData.map((category, categoryIndex) => (
            <AccordionItem
              key={category.id}
              value={category.id}
              className="bg-card rounded-xl overflow-hidden shadow-lg border-none"
              data-testid={`product-category-${category.id}`}
            >
              <AccordionTrigger className="hover:no-underline p-0 border-none">
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-6 p-6">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={categoryImages[category.id]}
                        alt={getCategoryName(category)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-4xl">{category.icon}</span>
                        <h3
                          className="text-2xl font-display font-bold"
                          data-testid={`category-title-${category.id}`}
                        >
                          {getCategoryName(category)}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {getCategoryDescription(category)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-6 pb-6 pt-2">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.fruits.map((fruit, fruitIndex) => {
                      const images = fruitImages[category.id] || [];
                      const fruitImage = images[fruitIndex % images.length];

                      return (
                        <motion.div
                          key={fruit.id}
                          className="bg-background rounded-lg overflow-hidden shadow-md hover-lift"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: fruitIndex * 0.05,
                          }}
                          data-testid={`fruit-card-${fruit.id}`}
                        >
                          <div className="h-48 overflow-hidden">
                            <img
                              src={fruitImage}
                              alt={getFruitName(fruit)}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h4
                              className="text-lg font-display font-bold mb-2"
                              data-testid={`fruit-name-${fruit.id}`}
                            >
                              {getFruitName(fruit)}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-primary">
                              <span className="font-semibold">
                                {getSeasonLabel()}
                              </span>
                              <span data-testid={`fruit-season-${fruit.id}`}>
                                {getFruitSeason(fruit)}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
