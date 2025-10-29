export interface FruitItem {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  season: string;
  seasonEn: string;
}

export interface FruitCategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  fruits: FruitItem[];
}

export const fruitsData: FruitCategory[] = [
  {
    id: "citricos",
    name: "Cítricos",
    nameEn: "Citrus",
    description: "Frutas cítricas frescas y jugosas, ricas en vitamina C",
    descriptionEn: "Fresh and juicy citrus fruits, rich in vitamin C",
    icon: "",
    fruits: [
      {
        id: "naranjas",
        name: "Naranja",
        nameEn: "Orange",
        description: "Naranjas valencianas de gran calidad, perfectas para zumo o consumo directo. Dulces, jugosas y con un equilibrio perfecto entre acidez y dulzor.",
        descriptionEn: "High-quality Valencian oranges, perfect for juice or direct consumption. Sweet, juicy with a perfect balance between acidity and sweetness.",
        season: "Noviembre - Mayo",
        seasonEn: "November - May"
      },
      {
        id: "mandarina",
        name: "Mandarina",
        nameEn: "Mandarin",
        description: "Mandarinas clementinas fáciles de pelar, sin semillas. Sabor dulce e intenso, ideales para snacks saludables.",
        descriptionEn: "Easy-to-peel clementine mandarins, seedless. Sweet and intense flavor, ideal for healthy snacks.",
        season: "Octubre - Febrero",
        seasonEn: "October - February"
      },
      {
        id: "limon",
        name: "Limón",
        nameEn: "Lemon",
        description: "Limones aromáticos y jugosos, con alto contenido en zumo. Perfectos para gastronomía y bebidas.",
        descriptionEn: "Aromatic and juicy lemons with high juice content. Perfect for cooking and beverages.",
        season: "Todo el año",
        seasonEn: "Year-round"
      },
      {
        id: "pomelo",
        name: "Pomelo",
        nameEn: "Grapefruit",
        description: "Pomelos rojos y amarillos, refrescantes y ligeramente amargos. Excelente fuente de antioxidantes.",
        descriptionEn: "Red and yellow grapefruits, refreshing and slightly bitter. Excellent source of antioxidants.",
        season: "Diciembre - Abril",
        seasonEn: "December - April"
      }
    ]
  },
  {
    id: "otras-frutas",
    name: "Otras Frutas",
    nameEn: "Other Fruits",
    description: "Variedad de frutas de temporada de máxima calidad",
    descriptionEn: "Variety of seasonal fruits of maximum quality",
    icon: "",
    fruits: [
      {
        id: "sandia",
        name: "Sandía",
        nameEn: "Watermelon",
        description: "Sandías dulces y refrescantes, con pulpa crujiente y jugosa. Perfectas para el verano, con alto contenido en agua.",
        descriptionEn: "Sweet and refreshing watermelons with crispy, juicy flesh. Perfect for summer, high water content.",
        season: "Junio - Septiembre",
        seasonEn: "June - September"
      },
      {
        id: "melon",
        name: "Melón",
        nameEn: "Melon",
        description: "Melones tipo piel de sapo y amarillo, aromáticos y dulces. Textura suave y sabor característico.",
        descriptionEn: "Piel de sapo and yellow melons, aromatic and sweet. Smooth texture and distinctive flavor.",
        season: "Mayo - Septiembre",
        seasonEn: "May - September"
      },
      {
        id: "pera",
        name: "Pera",
        nameEn: "Pear",
        description: "Peras conferencia y blanquilla, jugosas y aromáticas. Textura mantecosa y sabor dulce delicado.",
        descriptionEn: "Conference and blanquilla pears, juicy and aromatic. Buttery texture and delicate sweet flavor.",
        season: "Agosto - Marzo",
        seasonEn: "August - March"
      },
      {
        id: "manzana",
        name: "Manzana",
        nameEn: "Apple",
        description: "Manzanas golden, fuji y granny smith. Crujientes y versátiles, perfectas para consumo directo o cocinar.",
        descriptionEn: "Golden, fuji and granny smith apples. Crispy and versatile, perfect for fresh eating or cooking.",
        season: "Agosto - Abril",
        seasonEn: "August - April"
      },
      {
        id: "kaki",
        name: "Caqui",
        nameEn: "Persimmon",
        description: "Caquis persimon de la Ribera del Xúquer, dulces y sin semillas. Textura firme y sabor único.",
        descriptionEn: "Ribera del Xúquer persimon, sweet and seedless. Firm texture and unique flavor.",
        season: "Octubre - Enero",
        seasonEn: "October - January"
      }
    ]
  },
  {
    id: "fruta-hueso",
    name: "Fruta de Hueso",
    nameEn: "Stone Fruits",
    description: "Frutas de hueso jugosas y aromáticas de temporada",
    descriptionEn: "Juicy and aromatic seasonal stone fruits",
    icon: "",
    fruits: [
      {
        id: "melocoton",
        name: "Melocotón",
        nameEn: "Peach",
        description: "Melocotones de pulpa amarilla y roja, aromáticos y jugosos. Sabor dulce y textura aterciopelada.",
        descriptionEn: "Yellow and red flesh peaches, aromatic and juicy. Sweet flavor and velvety texture.",
        season: "Mayo - Septiembre",
        seasonEn: "May - September"
      },
      {
        id: "nectarina",
        name: "Nectarina",
        nameEn: "Nectarine",
        description: "Nectarinas de piel lisa y brillante, muy aromáticas. Sabor intenso y refrescante.",
        descriptionEn: "Smooth and shiny-skinned nectarines, very aromatic. Intense and refreshing flavor.",
        season: "Mayo - Septiembre",
        seasonEn: "May - September"
      },
      {
        id: "ciruela",
        name: "Ciruela",
        nameEn: "Plum",
        description: "Ciruelas rojas y amarillas, dulces y jugosas. Perfectas para consumo fresco o conservas.",
        descriptionEn: "Red and yellow plums, sweet and juicy. Perfect for fresh consumption or preserves.",
        season: "Junio - Septiembre",
        seasonEn: "June - September"
      },
      {
        id: "paraguayo",
        name: "Paraguayo",
        nameEn: "Flat Peach",
        description: "Paraguayos de forma achatada, muy dulces y aromáticos. Textura crujiente y jugosa.",
        descriptionEn: "Flat-shaped peaches, very sweet and aromatic. Crispy and juicy texture.",
        season: "Junio - Agosto",
        seasonEn: "June - August"
      },
      {
        id: "albaricoque",
        name: "Albaricoque",
        nameEn: "Apricot",
        description: "Albaricoques aromáticos de color naranja intenso. Dulces y ricos en betacarotenos.",
        descriptionEn: "Aromatic apricots with intense orange color. Sweet and rich in beta-carotene.",
        season: "Mayo - Julio",
        seasonEn: "May - July"
      }
    ]
  },
  {
    id: "fruta-tropical",
    name: "Fruta Tropical",
    nameEn: "Tropical Fruits",
    description: "Frutas tropicales exóticas cultivadas en España",
    descriptionEn: "Exotic tropical fruits grown in Spain",
    icon: "",
    fruits: [
      {
        id: "granada",
        name: "Granada",
        nameEn: "Pomegranate",
        description: "Granadas mollar de Elche, dulces y sin pepitas duras. Ricas en antioxidantes y de sabor intenso.",
        descriptionEn: "Elche mollar pomegranates, sweet without hard seeds. Rich in antioxidants and intense flavor.",
        season: "Septiembre - Enero",
        seasonEn: "September - January"
      },
      {
        id: "aguacate",
        name: "Aguacate",
        nameEn: "Avocado",
        description: "Aguacates hass cremosos y nutritivos. Textura mantecosa, perfectos para consumo fresco.",
        descriptionEn: "Creamy and nutritious hass avocados. Buttery texture, perfect for fresh consumption.",
        season: "Octubre - Mayo",
        seasonEn: "October - May"
      },
      {
        id: "mango",
        name: "Mango",
        nameEn: "Mango",
        description: "Mangos osteen de cultivo español, dulces y aromáticos. Pulpa jugosa de color naranja intenso.",
        descriptionEn: "Spanish-grown osteen mangoes, sweet and aromatic. Juicy flesh with intense orange color.",
        season: "Agosto - Octubre",
        seasonEn: "August - October"
      },
      {
        id: "pina",
        name: "Piña",
        nameEn: "Pineapple",
        description: "Piñas tropicales dulces y jugosas. Sabor refrescante y alto contenido en vitaminas.",
        descriptionEn: "Sweet and juicy tropical pineapples. Refreshing flavor and high vitamin content.",
        season: "Todo el año",
        seasonEn: "Year-round"
      },
      {
        id: "nispero",
        name: "Níspero",
        nameEn: "Loquat",
        description: "Nísperos de Callosa d'En Sarrià, dulces y aromáticos. Textura delicada y sabor único.",
        descriptionEn: "Callosa d'En Sarrià loquats, sweet and aromatic. Delicate texture and unique flavor.",
        season: "Marzo - Mayo",
        seasonEn: "March - May"
      }
    ]
  },
  {
    id: "verduras",
    name: "Verduras",
    nameEn: "Vegetables",
    description: "Verduras frescas de huerta, cultivadas con esmero",
    descriptionEn: "Fresh garden vegetables, carefully cultivated",
    icon: "",
    fruits: [
      {
        id: "pimientos",
        name: "Pimientos",
        nameEn: "Peppers",
        description: "Pimientos rojos, verdes y amarillos. Crujientes, dulces y versátiles para cocinar.",
        descriptionEn: "Red, green and yellow peppers. Crispy, sweet and versatile for cooking.",
        season: "Mayo - Noviembre",
        seasonEn: "May - November"
      },
      {
        id: "berenjena",
        name: "Berenjena",
        nameEn: "Eggplant",
        description: "Berenjenas de piel brillante y pulpa blanca. Textura suave, ideales para asar o freír.",
        descriptionEn: "Shiny-skinned eggplants with white flesh. Smooth texture, ideal for roasting or frying.",
        season: "Junio - Octubre",
        seasonEn: "June - October"
      },
      {
        id: "pepino",
        name: "Pepino",
        nameEn: "Cucumber",
        description: "Pepinos crujientes y refrescantes. Perfectos para ensaladas, con alto contenido en agua.",
        descriptionEn: "Crispy and refreshing cucumbers. Perfect for salads, high water content.",
        season: "Abril - Octubre",
        seasonEn: "April - October"
      },
      {
        id: "calabacin",
        name: "Calabacín",
        nameEn: "Zucchini",
        description: "Calabacines tiernos de piel fina. Versátiles y delicados, ideales para múltiples preparaciones.",
        descriptionEn: "Tender thin-skinned zucchini. Versatile and delicate, ideal for multiple preparations.",
        season: "Abril - Octubre",
        seasonEn: "April - October"
      },
      {
        id: "apio",
        name: "Apio",
        nameEn: "Celery",
        description: "Apio fresco y crujiente, aromático. Rico en fibra, perfecto para caldos y ensaladas.",
        descriptionEn: "Fresh and crispy celery, aromatic. High in fiber, perfect for broths and salads.",
        season: "Todo el año",
        seasonEn: "Year-round"
      },
      {
        id: "iceberg",
        name: "Lechuga Iceberg",
        nameEn: "Iceberg Lettuce",
        description: "Lechuga iceberg crujiente y refrescante. Hojas compactas, perfecta para ensaladas.",
        descriptionEn: "Crispy and refreshing iceberg lettuce. Compact leaves, perfect for salads.",
        season: "Todo el año",
        seasonEn: "Year-round"
      },
      {
        id: "romana",
        name: "Lechuga Romana",
        nameEn: "Romaine Lettuce",
        description: "Lechuga romana de hojas alargadas y crujientes. Sabor suave y textura firme.",
        descriptionEn: "Romaine lettuce with elongated crispy leaves. Mild flavor and firm texture.",
        season: "Todo el año",
        seasonEn: "Year-round"
      },
      {
        id: "little-gem",
        name: "Little Gem",
        nameEn: "Little Gem",
        description: "Lechuga little gem pequeña y compacta. Hojas tiernas con corazón dulce y crujiente.",
        descriptionEn: "Small and compact little gem lettuce. Tender leaves with sweet, crispy heart.",
        season: "Todo el año",
        seasonEn: "Year-round"
      },
      {
        id: "brocoli",
        name: "Brócoli",
        nameEn: "Broccoli",
        description: "Brócoli fresco de floretes compactos. Rico en nutrientes y sabor suave.",
        descriptionEn: "Fresh broccoli with compact florets. Nutrient-rich with mild flavor.",
        season: "Octubre - Abril",
        seasonEn: "October - April"
      },
      {
        id: "coliflor",
        name: "Coliflor",
        nameEn: "Cauliflower",
        description: "Coliflor blanca de cabezas firmes. Versátil y nutritiva, sabor delicado.",
        descriptionEn: "White cauliflower with firm heads. Versatile and nutritious, delicate flavor.",
        season: "Octubre - Abril",
        seasonEn: "October - April"
      },
      {
        id: "cebolla",
        name: "Cebolla",
        nameEn: "Onion",
        description: "Cebollas dulces y de guarda. Base fundamental de la cocina mediterránea.",
        descriptionEn: "Sweet and storage onions. Fundamental base of Mediterranean cuisine.",
        season: "Todo el año",
        seasonEn: "Year-round"
      },
      {
        id: "zanahoria",
        name: "Zanahoria",
        nameEn: "Carrot",
        description: "Zanahorias crujientes y dulces. Ricas en betacarotenos, versátiles en cocina.",
        descriptionEn: "Crispy and sweet carrots. Rich in beta-carotene, versatile in cooking.",
        season: "Todo el año",
        seasonEn: "Year-round"
      },
      {
        id: "ajo",
        name: "Ajo",
        nameEn: "Garlic",
        description: "Ajos morados y blancos de gran calidad. Aromáticos e imprescindibles en la cocina.",
        descriptionEn: "High-quality purple and white garlic. Aromatic and essential in cooking.",
        season: "Todo el año",
        seasonEn: "Year-round"
      }
    ]
  },
  {
    id: "berries",
    name: "Berries",
    nameEn: "Berries",
    description: "Frutos rojos delicados de máxima frescura",
    descriptionEn: "Delicate red berries of maximum freshness",
    icon: "",
    fruits: [
      {
        id: "fresa",
        name: "Fresa",
        nameEn: "Strawberry",
        description: "Fresas de Huelva aromáticas y dulces. Color rojo brillante, sabor intenso y textura jugosa.",
        descriptionEn: "Aromatic and sweet Huelva strawberries. Bright red color, intense flavor and juicy texture.",
        season: "Enero - Junio",
        seasonEn: "January - June"
      },
      {
        id: "arandano",
        name: "Arándano",
        nameEn: "Blueberry",
        description: "Arándanos azules ricos en antioxidantes. Sabor dulce-ácido equilibrado, perfectos para snacks.",
        descriptionEn: "Blue blueberries rich in antioxidants. Balanced sweet-tart flavor, perfect for snacks.",
        season: "Mayo - Septiembre",
        seasonEn: "May - September"
      },
      {
        id: "frambuesa",
        name: "Frambuesa",
        nameEn: "Raspberry",
        description: "Frambuesas delicadas de sabor intenso. Aromáticas y ligeramente ácidas, muy valoradas en repostería.",
        descriptionEn: "Delicate raspberries with intense flavor. Aromatic and slightly tart, highly valued in pastry.",
        season: "Mayo - Octubre",
        seasonEn: "May - October"
      },
      {
        id: "mora",
        name: "Mora",
        nameEn: "Blackberry",
        description: "Moras jugosas de color negro brillante. Sabor dulce con toques ácidos, ricas en vitaminas.",
        descriptionEn: "Juicy blackberries with shiny black color. Sweet flavor with tart notes, rich in vitamins.",
        season: "Junio - Septiembre",
        seasonEn: "June - September"
      }
    ]
  }
];
