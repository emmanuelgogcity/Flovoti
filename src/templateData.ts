export type FrameColorOption = {
    id: string;
    name: string;
    value: string;
    accent: string;
  };
  
  export type InnerCardColorOption = {
    id: string;
    name: string;
    value: string;
    text: string;
  };
  
  export type InvitationFrame = {
    id: number;
    name: string;
    category: string;
    type: "free" | "premium";
    price: number;
    description: string;
    style: string;
    frameColors: FrameColorOption[];
    innerCardColors: InnerCardColorOption[];
  };
  
  export const frameColors: FrameColorOption[] = [
    {
      id: "gold",
      name: "Antique Gold",
      value: "#B08D57",
      accent: "#D4AF37",
    },
    {
      id: "rose-gold",
      name: "Rose Gold",
      value: "#B76E79",
      accent: "#E7A9A9",
    },
    {
      id: "burgundy",
      name: "Burgundy",
      value: "#7A263A",
      accent: "#A83F57",
    },
    {
      id: "emerald",
      name: "Emerald",
      value: "#176B5B",
      accent: "#3C9B86",
    },
    {
      id: "navy",
      name: "Royal Navy",
      value: "#1E3158",
      accent: "#48699E",
    },
    {
      id: "champagne",
      name: "Champagne",
      value: "#C9B27C",
      accent: "#E6D3A3",
    },
  ];
  
  export const innerCardColors: InnerCardColorOption[] = [
    {
      id: "white",
      name: "Pure White",
      value: "#FFFFFF",
      text: "#292524",
    },
    {
      id: "ivory",
      name: "Ivory",
      value: "#FFFDF5",
      text: "#292524",
    },
    {
      id: "cream",
      name: "Soft Cream",
      value: "#F8F1E3",
      text: "#292524",
    },
    {
      id: "blush",
      name: "Soft Blush",
      value: "#FCECEF",
      text: "#3F2930",
    },
    {
      id: "champagne",
      name: "Champagne",
      value: "#F4E9D2",
      text: "#3B3024",
    },
  ];
  
  const weddingFrameColors = frameColors;
  const weddingInnerCardColors = innerCardColors;
  
  export const invitationFrames: InvitationFrame[] = [
    {
      id: 101,
      name: "Elegant Gold Rose",
      category: "Wedding",
      type: "premium",
      price: 7500,
      description:
        "A luxurious floral arch with antique-gold roses, foliage and an elegant central invitation card.",
      style: "Luxury Floral",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 102,
      name: "Royal Palace",
      category: "Wedding",
      type: "premium",
      price: 8000,
      description:
        "A grand symmetrical royal frame inspired by elegant palace ornamentation.",
      style: "Royal Luxury",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 103,
      name: "Burgundy Royale",
      category: "Wedding",
      type: "premium",
      price: 7500,
      description:
        "Deep burgundy floral details combined with refined metallic gold ornamentation.",
      style: "Romantic Luxury",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 104,
      name: "Emerald Garden",
      category: "Wedding",
      type: "premium",
      price: 7500,
      description:
        "Rich botanical greenery arranged around an elegant luxury invitation card.",
      style: "Botanical Luxury",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 105,
      name: "Rose Gold Romance",
      category: "Wedding",
      type: "premium",
      price: 7000,
      description:
        "Soft romantic floral decoration with refined rose-gold detailing.",
      style: "Rose Gold",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 106,
      name: "Navy Royalty",
      category: "Wedding",
      type: "premium",
      price: 7500,
      description:
        "A sophisticated royal navy frame complemented by elegant metallic accents.",
      style: "Classic Royal",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 107,
      name: "Ivory Pearl",
      category: "Wedding",
      type: "premium",
      price: 7000,
      description:
        "An elegant ivory composition featuring pearl-inspired detailing and refined ornamentation.",
      style: "Pearl Elegance",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 108,
      name: "Champagne Elegance",
      category: "Wedding",
      type: "premium",
      price: 7000,
      description:
        "A sophisticated champagne-gold frame paired with a graceful central invitation card.",
      style: "Champagne Luxury",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 109,
      name: "Black & Gold Royale",
      category: "Wedding",
      type: "premium",
      price: 8000,
      description:
        "A dramatic black and metallic-gold luxury composition for an unforgettable celebration.",
      style: "Black Tie Luxury",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 110,
      name: "Blush Garden",
      category: "Wedding",
      type: "premium",
      price: 7000,
      description:
        "A soft romantic garden frame featuring delicate blush floral styling.",
      style: "Blush Floral",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 111,
      name: "Antique Romance",
      category: "Wedding",
      type: "premium",
      price: 7500,
      description:
        "A vintage-inspired floral frame with antique bronze and gold character.",
      style: "Vintage Luxury",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 112,
      name: "Crystal Elegance",
      category: "Wedding",
      type: "premium",
      price: 8000,
      description:
        "A refined frame inspired by crystal details, elegant light and luxury ornamentation.",
      style: "Crystal Luxury",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 113,
      name: "Golden Garden",
      category: "Wedding",
      type: "premium",
      price: 7500,
      description:
        "A botanical luxury frame built around richly detailed golden foliage.",
      style: "Golden Botanical",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 114,
      name: "Luxury Orchid",
      category: "Wedding",
      type: "premium",
      price: 7500,
      description:
        "Elegant orchid-inspired floral decoration surrounding a refined invitation center.",
      style: "Orchid Luxury",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 115,
      name: "Fairytale Arch",
      category: "Wedding",
      type: "premium",
      price: 8000,
      description:
        "An ornate fairytale arch with cascading floral details and elegant finishing.",
      style: "Fairytale Luxury",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 116,
      name: "Pearl Garden",
      category: "Wedding",
      type: "premium",
      price: 7500,
      description:
        "Soft white florals, pearl-inspired accents and elegant metallic decoration.",
      style: "Pearl Garden",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 117,
      name: "Imperial Gold",
      category: "Wedding",
      type: "premium",
      price: 8500,
      description:
        "A grand symmetrical gold frame designed to create an unmistakably luxurious invitation.",
      style: "Imperial Luxury",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 118,
      name: "Midnight Elegance",
      category: "Wedding",
      type: "premium",
      price: 8000,
      description:
        "A sophisticated midnight-inspired composition with elegant metallic detailing.",
      style: "Midnight Luxury",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 119,
      name: "Grand Floral Palace",
      category: "Wedding",
      type: "premium",
      price: 8500,
      description:
        "A statement floral composition combining a grand ornamental arch with dimensional luxury flowers.",
      style: "Grand Floral",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  
    {
      id: 120,
      name: "Simple Wedding Garden",
      category: "Wedding",
      type: "free",
      price: 0,
      description:
        "A clean floral wedding frame available free with a visible Flovoti watermark.",
      style: "Free Floral",
      frameColors: weddingFrameColors,
      innerCardColors: weddingInnerCardColors,
    },
  ];