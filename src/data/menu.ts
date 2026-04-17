export type MenuItem = {
  name: string;
  description: string;
  priceEUR: number;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  image: {
    src: string;
    alt: string;
  };
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "pizza",
    title: "Pizza",
    subtitle: "Neapolitan-inspired, slow-fermented dough.",
    image: {
      src: "/images/menu/pizza.png",
      alt: "Neapolitan-style pizza at Bella Napoli",
    },
    items: [
            {
        name: "Prosciutto e Funghi",
        description:
          "Prosciutto, mushrooms, tomato, mozzarella, thyme.",
        priceEUR: 17,
        tags: ["Signature"],
      },
      {
        name: "Margherita",
        description:
          "San Marzano tomato, fior di latte, basil, extra virgin olive oil.",
        priceEUR: 14,
        tags: ["Vegetarian"],
      },
      {
        name: "Tartufo",
        description:
          "Fontina, mushrooms, truffle cream, Parmigiano, chives.",
        priceEUR: 20,
      },
      {
        name: "Diavola",
        description:
          "Spicy salami, tomato, fior di latte, chilli, oregano.",
        priceEUR: 16,
      }
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    subtitle: "Hand-finished sauces, classic technique.",
    image: {
      src: "/images/menu/pasta.png",
      alt: "Fresh pasta at Bella Napoli",
    },
    items: [
      {
        name: "Tagliatelle al Ragu",
        description:
          "Slow-cooked beef ragu, Parmigiano Reggiano, black pepper.",
        priceEUR: 22,
      },
      {
        name: "Spaghetti alla Carbonara",
        description:
          "Guanciale, pecorino, egg, black pepper.",
        priceEUR: 21,
      },
      {
        name: "Cacio e Pepe",
        description: "Pecorino Romano, black pepper, silky emulsion.",
        priceEUR: 19,
        tags: ["Vegetarian"],
      },
      {
        name: "Pappardelle ai Funghi",
        description:
          "Wild mushrooms, garlic, parsley, white wine, aged cheese.",
        priceEUR: 23,
        tags: ["Vegetarian"],
      },
    ],
  },
  {
    id: "secondi",
    title: "Secondi",
    subtitle: "Seasonal mains, refined plating.",
    image: {
      src: "/images/menu/branzino.png",
      alt: "Bella Napoli menu presentation",
    },
    items: [
      {
        name: "Branzino al Forno",
        description:
          "Oven-roasted sea bass, lemon, capers, herbs, olive oil.",
        priceEUR: 28,
        tags: ["Gluten-free"],
      },
      {
        name: "Pollo alla Cacciatora",
        description:
          "Braised chicken, tomato, olives, rosemary, roasted shallots.",
        priceEUR: 26,
      },
      {
        name: "Bistecca, Peppercorn",
        description:
          "Seared steak, peppercorn sauce, charred greens.",
        priceEUR: 34,
        tags: ["Signature"],
      },
    ],
  },
  {
    id: "dolci",
    title: "Dolci",
    subtitle: "Sweet finishes, balanced and light.",
    image: {
      src: "/images/menu/affogato.png",
      alt: "Bella Napoli menu presentation",
    },
    items: [
      {
        name: "Tiramisu",
        description: "Espresso, mascarpone, cocoa, ladyfingers.",
        priceEUR: 10,
        tags: ["Vegetarian"],
      },
      {
        name: "Panna Cotta",
        description: "Vanilla panna cotta, seasonal berry compote.",
        priceEUR: 9,
        tags: ["Vegetarian", "Gluten-free"],
      },
      {
        name: "Affogato",
        description: "Vanilla gelato, hot espresso, amaretti crumble.",
        priceEUR: 8,
        tags: ["Vegetarian"],
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    subtitle: "Aperitivi, classics, and house selections.",
    image: {
      src: "/images/menu/drink.png",
      alt: "Bella Napoli menu presentation",
    },
    items: [
      {
        name: "San Pellegrino (750ml)",
        description: "Sparkling mineral water.",
        priceEUR: 6,
      },
      {
        name: "Acqua Panna (750ml)",
        description: "Still mineral water.",
        priceEUR: 6,
      },
      {
        name: "Cardinale",
        description: "Gin, dry vermouth, Campari",
        priceEUR: 13,
      },
      {
        name: "Spritz",
        description: "Aperitivo, prosecco, soda, citrus.",
        priceEUR: 12,
      },
    ],
  },
];
