export const carousalItems: {
  name: string;
  to: string;
}[] = [
  {
    name: "blackFridaySale",
    to: "/images/carousal/blackFridaySale.jpg",
  },
  {
    name: "delievaryBySafeHands",
    to: "/images/carousal/delievaryBySafeHands.jpg",
  },
  {
    name: "digitisedPayment",
    to: "/images/carousal/digitisedPayment.jpg",
  },
  {
    name: "FriendlyDelievering",
    to: "/images/carousal/FriendlyDelievering.jpg",
  },
  {
    name: "Sale",
    to: "/images/carousal/Sale.jpg",
  },
  {
    name: "saleImage",
    to: "/images/carousal/saleImage.jpg",
  },
];

export const homeCardsItems: {
  name: string;
  to: string;
  description: string; 
  active?: boolean;
  subItems?: {
    name: string;
    to: string;
    img: string;
  }[]; // Optional subcategories for each item
}[] = [
  {
    name: "Electronics",
    to: "/electronics",
    description: "Find the latest in mobile phones, laptops, tablets, and more.",
    subItems: [
      {
        name: "Mobile Phones",
        to: "/electronics/mobile-phones",
        img: "/images/electronics/mobile.jpg",
      },
      {
        name: "Laptops",
        to: "/electronics/laptops",
        img: "/images/electronics/laptop.jpg",
      },
      {
        name: "Tablets",
        to: "/electronics/tablets",
        img: "/images/electronics/tablets.jpg",
      },
      {
        name: "Headphones",
        to: "/electronics/headphones",
        img: "/images/electronics/headphone.jpg",
      },
    ],
  },
  {
    name: "Fashion",
    to: "/fashion",
    description: "Trendy clothing, footwear, and accessories for every season.",
    subItems: [
      {
        name: "Men's Clothing",
        to: "/fashion/men-clothing",
        img: "/images/clothes/menClothing.jpg",
      },
      {
        name: "Women's Clothing",
        to: "/fashion/women-clothing",
        img: "/images/clothes/womenClothing.jpg",
      },
      {
        name: "Footwear",
        to: "/fashion/footwear",
        img: "/images/shoes/shoes.jpg",
      },
      {
        name: "Watches",
        to: "/fashion/watches",
        img: "/images/watches.jpg",
      },
    ],
  },
  {
    name: "Grocery",
    to: "/grocery",
    description: "Fresh produce, snacks, beverages, and everyday essentials.",
    subItems: [
      {
        name: "Fruits & Vegetables",
        to: "/grocery/fruits-vegetables",
        img: "/images/grocery/vegetables.png",
      },
      {
        name: "Snacks",
        to: "/grocery/snacks",
        img: "/images/grocery/snacks.jpg",
      },
      {
        name: "Beverages",
        to: "/grocery/beverages",
        img: "/images/grocery/beverages.png",
      },
      {
        name: "Dairy",
        to: "/grocery/dairy",
        img: "/images/grocery/dairy.jpg",
      },
    ],
  },
  {
    name: "Home & Furniture",
    to: "/home-furniture",
    description: "Furnish your home with stylish living, bedroom, and office decor.",
    subItems: [
      {
        name: "Living Room",
        to: "/home-furniture/living-room",
        img: "/images/furniture/livingRoom.jpg",
      },
      {
        name: "Bedroom",
        to: "/home-furniture/bedroom",
        img: "/images/furniture/bedroom.jpg",
      },
      {
        name: "Kitchen",
        to: "/home-furniture/kitchen",
        img: "/images/furniture/kitchen.jpg",
      },
      {
        name: "Office",
        to: "/home-furniture/office",
        img: "/images/furniture/office.jpg",
      },
    ],
  },
  {
    name: "Personal Care",
    to: "/beauty-care",
    description: "Skincare, haircare, and beauty products to enhance your routine.",
    subItems: [
      {
        name: "Skin Care",
        to: "/beauty-care/skin-care",
        img: "/images/personalCare/skinCare.jpg",
      },
      {
        name: "Hair Care",
        to: "/beauty-care/hair-care",
        img: "/images/personalCare/hairCare.jpg",
      },
      {
        name: "Makeup",
        to: "/beauty-care/makeup",
        img: "/images/personalCare/makeup.jpg",
      },
      {
        name: "Fragrance",
        to: "/beauty-care/fragrance",
        img: "/images/personalCare/fragrance.jpg",
      },
    ],
  },
  {
    name: "Appliances",
    to: "/appliances",
    description: "Upgrade your home with essential appliances for daily use.",
    subItems: [
      {
        name: "Refrigerators",
        to: "/appliances/refrigerators",
        img: "/images/appliances/refrigerator.jpg",
      },
      {
        name: "Washing Machines",
        to: "/appliances/washing-machines",
        img: "/images/appliances/washingMachines.jpg",
      },
      {
        name: "Microwaves",
        to: "/appliances/microwaves",
        img: "/images/appliances/microwaves.jpg",
      },
      {
        name: "Air Conditioners",
        to: "/appliances/air-conditioners",
        img: "/images/appliances/airConditioners.jpg",
      },
    ],
  },
  {
    name: "Sports & Outdoors",
    to: "/sports-outdoors",
    description: "Explore fitness equipment, camping gear, cycling, and more.",
    subItems: [
      {
        name: "Fitness Equipment",
        to: "/sports-outdoors/fitness-equipment",
        img: "/images/sportsAndOutdoors/fitnessEquipment.jpg",
      },
      {
        name: "Camping & Hiking",
        to: "/sports-outdoors/camping-hiking",
        img: "/images/sportsAndOutdoors/camping-hiking.jpg",
      },
      {
        name: "Cycling",
        to: "/sports-outdoors/cycling",
        img: "/images/sportsAndOutdoors/cycling.jpg",
      },
      {
        name: "Fishing",
        to: "/sports-outdoors/fishing",
        img: "/images/sportsAndOutdoors/fishing.jpg",
      }
    ],
  },
  {
    name: "Toys & Games",
    to: "/toys-games",
    description: "Fun games, action figures, dolls, and more for kids of all ages.",
    subItems: [
      {
        name: "Action Figures",
        to: "/toys-games/action-figures",
        img: "/images/toysAndGames/actionFigures.jpg",
      },
      {
        name: "Board Games",
        to: "/toys-games/board-games",
        img: "/images/toysAndGames/boardGames.jpg",
      },
      {
        name: "Building Sets",
        to: "/toys-games/building-sets",
        img: "/images/toysAndGames/buildingSets.jpg",
      },
      {
        name: "Dolls & Stuffed Animals",
        to: "/toys-games/dolls-stuffed-animals",
        img: "/images/toysAndGames/stuffedAnimals.jpg",
      },
    ],
  },
];

export const secondCarousalItems: {
  name:string,
  to:string,
  img:string
}[] = [
  {
    name :"shoes",
    to:"/shoes",
    img:"/images/shoes/shoes.jpg"
  },
  {
    name :"shoe1",
    to:"/shoes",
    img:"/images/shoes/shoe1.jpg"
  },  
  {
    name :"shoe2",
    to:"/shoes",
    img:"/images/shoes/shoe2.jpg"
  },
  {
    name :"shoe3",
    to:"/shoes",
    img:"/images/shoes/shoe3.jpg"
  },
  {
    name :"shoe4",
    to:"/shoes",
    img:"/images/shoes/shoe4.jpg"
  },
  {
    name :"shoe5",
    to:"/shoes",
    img:"/images/shoes/shoe5.jpg"
  },
  {
    name :"shoe6",
    to:"/shoes",
    img:"/images/shoes/shoe6.jpg"
  },
  {
    name :"shoe7",
    to:"/shoes",
    img:"/images/shoes/shoe7.jpg"
  },
  {
    name :"shoe8",
    to:"/shoes",
    img:"/images/shoes/shoe8.jpg"
  },
  {
    name :"shoe9",
    to:"/shoes",
    img:"/images/shoes/shoe9.jpg"
  },
]
 export const thirdCarousalItems: {
  name:string,
  to:string,
  img:string
}[] = [
  {
    name :"Face Cream",
    to: "/beauty-care/skin-care",
    img:"/images/cream.jpg"
  },
  {
    name :"Memory Card",
    to: "/electronics/memory-cards",
    img:"/images/memoryCard.jpg"
  },
  {
    name :"Camera",
    to: "/electronics/cameras",
    img:"/images/camera.jpg"
  },
  {
    name :"Camera Lens",
    to: "/electronics/cameras",
    img:"/images/cameraLens.jpg"
  },
  {
    name :"Lipstick",
    to: "/beauty-care/skin-care",
    img:"/images/lipstick.jpg"
  },
  {
    name :"Classic Camera",
    to: "/electronics/cameras",
    img:"/images/classicCamera.jpg"
  },
  {
    name :"Men Collection",
    to: "/fashion/men-clothing",
    img:"/images/mensCollection.jpg"
  },
  {
    name :"Watches",
    to: "/fashion/watches",
    img:"/images/watches.jpg"
  },
  
]

