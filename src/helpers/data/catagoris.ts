const navItems: {
    name: string;
    to?: string;
    active?: boolean;
    subItems?: {
        name: string;
        to: string;
        subSubItems?: {
            name: string;
            to: string;
        }[]; // Optional third level subcategories
    }[]; // Optional subcategories for each item
}[] = [
    {
        name: "Electronics",
        to: "/electronics",
        subItems: [
            { 
                name: "Mobile Phones", 
                to: "/electronics/mobile-phones",
                subSubItems: [
                    { name: "Samsung", to: "/electronics/mobile-phones/samsung" },
                    { name: "Nokia", to: "/electronics/mobile-phones/nokia" },
                    { name: "iPhone", to: "/electronics/mobile-phones/iphone" },
                    { name: "Mi", to: "/electronics/mobile-phones/mi" },
                    { name: "Lenovo", to: "/electronics/mobile-phones/lenovo" },
                    { name: "Google", to: "/electronics/mobile-phones/google" },
                    { name: "OnePlus", to: "/electronics/mobile-phones/oneplus" },
                    { name: "Xiaomi", to: "/electronics/mobile-phones/xiaomi" },
                    { name: "Oppo", to: "/electronics/mobile-phones/oppo" },
                    { name: "Realme", to: "/electronics/mobile-phones/realme" },
                ],
            },
            { 
                name: "Laptops", 
                to: "/electronics/laptops",
                subSubItems: [
                    { name: "Dell", to: "/electronics/laptops/dell" },
                    { name: "HP", to: "/electronics/laptops/hp" },
                    { name: "Lenovo", to: "/electronics/laptops/lenovo" },
                    { name: "MacBook", to: "/electronics/laptops/macbook" },
                    { name: "Acer", to: "/electronics/laptops/acer" },
                    { name: "Asus", to: "/electronics/laptops/asus" },
                    { name: "Microsoft Surface", to: "/electronics/laptops/microsoft-surface" },
                    { name: "MSI", to: "/electronics/laptops/msi" },
                    { name: "Razer", to: "/electronics/laptops/razer" },
                    { name: "Samsung", to: "/electronics/laptops/samsung" },
                ],
            },
            { 
                name: "Tablets", 
                to: "/electronics/tablets",
                subSubItems: [
                    { name: "Samsung Galaxy Tab", to: "/electronics/tablets/samsung-galaxy-tab" },
                    { name: "iPad", to: "/electronics/tablets/ipad" },
                    { name: "Lenovo Tab", to: "/electronics/tablets/lenovo-tab" },
                    { name: "Amazon Fire", to: "/electronics/tablets/amazon-fire" },
                    { name: "Microsoft Surface Go", to: "/electronics/tablets/microsoft-surface-go" },
                    { name: "Huawei MediaPad", to: "/electronics/tablets/huawei-mediapad" },
                    { name: "Xiaomi Mi Pad", to: "/electronics/tablets/xiaomi-mi-pad" },
                    { name: "Asus ZenPad", to: "/electronics/tablets/asus-zenpad" },
                    { name: "Google Pixel Slate", to: "/electronics/tablets/google-pixel-slate" },
                    { name: "Realme Pad", to: "/electronics/tablets/realme-pad" },
                ],
            },
            { 
                name: "Cameras", 
                to: "/electronics/cameras",
                subSubItems: [
                    { name: "Canon", to: "/electronics/cameras/canon" },
                    { name: "Nikon", to: "/electronics/cameras/nikon" },
                    { name: "Sony", to: "/electronics/cameras/sony" },
                    { name: "Fujifilm", to: "/electronics/cameras/fujifilm" },
                    { name: "Olympus", to: "/electronics/cameras/olympus" },
                    { name: "Panasonic", to: "/electronics/cameras/panasonic" },
                    { name: "GoPro", to: "/electronics/cameras/gopro" },
                    { name: "Leica", to: "/electronics/cameras/leica" },
                    { name: "Ricoh", to: "/electronics/cameras/ricoh" },
                    { name: "Kodak", to: "/electronics/cameras/kodak" },
                ],
            },
            { 
                name: "Headphones", 
                to: "/electronics/headphones",
                subSubItems: [
                    { name: "Sony", to: "/electronics/headphones/sony" },
                    { name: "Bose", to: "/electronics/headphones/bose" },
                    { name: "Sennheiser", to: "/electronics/headphones/sennheiser" },
                    { name: "JBL", to: "/electronics/headphones/jbl" },
                    { name: "Beats", to: "/electronics/headphones/beats" },
                    { name: "Audio-Technica", to: "/electronics/headphones/audio-technica" },
                    { name: "Marshall", to: "/electronics/headphones/marshall" },
                    { name: "Skullcandy", to: "/electronics/headphones/skullcandy" },
                    { name: "Bang & Olufsen", to: "/electronics/headphones/bang-olufsen" },
                    { name: "Bowers & Wilkins", to: "/electronics/headphones/bowers-wilkins" },
                ],
            },
        ],
    },
    {
        name: "Fashion",
        to: "/fashion",
        subItems: [
            { 
                name: "Men's Clothing", 
                to: "/fashion/men-clothing",
                subSubItems: [
                    { name: "Shirts", to: "/fashion/men-clothing/shirts" },
                    { name: "Jeans", to: "/fashion/men-clothing/jeans" },
                    { name: "T-shirts", to: "/fashion/men-clothing/t-shirts" },
                    { name: "Jackets", to: "/fashion/men-clothing/jackets" },
                    { name: "Suits", to: "/fashion/men-clothing/suits" },
                    { name: "Sweaters", to: "/fashion/men-clothing/sweaters" },
                    { name: "Shorts", to: "/fashion/men-clothing/shorts" },
                    { name: "Sweatshirts", to: "/fashion/men-clothing/sweatshirts" },
                    { name: "Pants", to: "/fashion/men-clothing/pants" },
                    { name: "Activewear", to: "/fashion/men-clothing/activewear" },
                ],
            },
            { 
                name: "Women's Clothing", 
                to: "/fashion/women-clothing",
                subSubItems: [
                    { name: "Dresses", to: "/fashion/women-clothing/dresses" },
                    { name: "Tops", to: "/fashion/women-clothing/tops" },
                    { name: "Skirts", to: "/fashion/women-clothing/skirts" },
                    { name: "Pants", to: "/fashion/women-clothing/pants" },
                    { name: "Jackets", to: "/fashion/women-clothing/jackets" },
                    { name: "Sweaters", to: "/fashion/women-clothing/sweaters" },
                    { name: "Blouses", to: "/fashion/women-clothing/blouses" },
                    { name: "Coats", to: "/fashion/women-clothing/coats" },
                    { name: "Cardigans", to: "/fashion/women-clothing/cardigans" },
                    { name: "Jeans", to: "/fashion/women-clothing/jeans" },
                ],
            },
            { 
                name: "Footwear", 
                to: "/fashion/footwear",
                subSubItems: [
                    { name: "Boots", to: "/fashion/footwear/boots" },
                    { name: "Sneakers", to: "/fashion/footwear/sneakers" },
                    { name: "Sandals", to: "/fashion/footwear/sandals" },
                    { name: "Formal Shoes", to: "/fashion/footwear/formal-shoes" },
                    { name: "Flats", to: "/fashion/footwear/flats" },
                    { name: "Slippers", to: "/fashion/footwear/slippers" },
                    { name: "Loafers", to: "/fashion/footwear/loafers" },
                    { name: "Flip Flops", to: "/fashion/footwear/flip-flops" },
                    { name: "Running Shoes", to: "/fashion/footwear/running-shoes" },
                    { name: "Heels", to: "/fashion/footwear/heels" },
                ],
            },
            { 
                name: "Watches", 
                to: "/fashion/watches",
                subSubItems: [
                    { name: "Casio", to: "/fashion/watches/casio" },
                    { name: "Rolex", to: "/fashion/watches/rolex" },
                    { name: "Seiko", to: "/fashion/watches/seiko" },
                    { name: "Fossil", to: "/fashion/watches/fossil" },
                    { name: "Tag Heuer", to: "/fashion/watches/tag-heuer" },
                    { name: "Citizen", to: "/fashion/watches/citizen" },
                    { name: "Omega", to: "/fashion/watches/omega" },
                    { name: "Patek Philippe", to: "/fashion/watches/patek-philippe" },
                    { name: "Tissot", to: "/fashion/watches/tissot" },
                    { name: "Hublot", to: "/fashion/watches/hublot" },
                ],
            },
        ],
    },
    {
        name: "Grocery",
        to: "/grocery",
        subItems: [
            { 
                name: "Fruits & Vegetables", 
                to: "/grocery/fruits-vegetables",
                subSubItems: [
                    { name: "Apples", to: "/grocery/fruits-vegetables/apples" },
                    { name: "Bananas", to: "/grocery/fruits-vegetables/bananas" },
                    { name: "Oranges", to: "/grocery/fruits-vegetables/oranges" },
                    { name: "Tomatoes", to: "/grocery/fruits-vegetables/tomatoes" },
                    { name: "Potatoes", to: "/grocery/fruits-vegetables/potatoes" },
                    { name: "Carrots", to: "/grocery/fruits-vegetables/carrots" },
                    { name: "Cucumbers", to: "/grocery/fruits-vegetables/cucumbers" },
                    { name: "Lettuce", to: "/grocery/fruits-vegetables/lettuce" },
                    { name: "Strawberries", to: "/grocery/fruits-vegetables/strawberries" },
                    { name: "Pineapple", to: "/grocery/fruits-vegetables/pineapple" },
                ],
            },
            { 
                name: "Snacks", 
                to: "/grocery/snacks",
                subSubItems: [
                    { name: "Chips", to: "/grocery/snacks/chips" },
                    { name: "Biscuits", to: "/grocery/snacks/biscuits" },
                    { name: "Chocolate", to: "/grocery/snacks/chocolate" },
                    { name: "Nuts", to: "/grocery/snacks/nuts" },
                    { name: "Cookies", to: "/grocery/snacks/cookies" },
                    { name: "Popcorn", to: "/grocery/snacks/popcorn" },
                    { name: "Candy", to: "/grocery/snacks/candy" },
                    { name: "Granola Bars", to: "/grocery/snacks/granola-bars" },
                    { name: "Ice Cream", to: "/grocery/snacks/ice-cream" },
                    { name: "Gum", to: "/grocery/snacks/gum" },
                ],
            },
            { 
                name: "Beverages", 
                to: "/grocery/beverages",
                subSubItems: [
                    { name: "Tea", to: "/grocery/beverages/tea" },
                    { name: "Coffee", to: "/grocery/beverages/coffee" },
                    { name: "Juices", to: "/grocery/beverages/juices" },
                    { name: "Soft Drinks", to: "/grocery/beverages/soft-drinks" },
                    { name: "Energy Drinks", to: "/grocery/beverages/energy-drinks" },
                    { name: "Water", to: "/grocery/beverages/water" },
                    { name: "Milk", to: "/grocery/beverages/milk" },
                    { name: "Sports Drinks", to: "/grocery/beverages/sports-drinks" },
                    { name: "Alcoholic Beverages", to: "/grocery/beverages/alcoholic-beverages" },
                    { name: "Smoothies", to: "/grocery/beverages/smoothies" },
                ],
            },
            { 
                name: "Dairy", 
                to: "/grocery/dairy",
                subSubItems: [
                    { name: "Milk", to: "/grocery/dairy/milk" },
                    { name: "Cheese", to: "/grocery/dairy/cheese" },
                    { name: "Yogurt", to: "/grocery/dairy/yogurt" },
                    { name: "Butter", to: "/grocery/dairy/butter" },
                    { name: "Cream", to: "/grocery/dairy/cream" },
                    { name: "Ice Cream", to: "/grocery/dairy/ice-cream" },
                    { name: "Cottage Cheese", to: "/grocery/dairy/cottage-cheese" },
                    { name: "Milk Powder", to: "/grocery/dairy/milk-powder" },
                    { name: "Kefir", to: "/grocery/dairy/kefir" },
                    { name: "Paneer", to: "/grocery/dairy/paneer" },
                ],
            },
        ],
    },
    {
        name: "Home & Furniture",
        to: "/home-furniture",
        subItems: [
            { 
                name: "Living Room", 
                to: "/home-furniture/living-room",
                subSubItems: [
                    { name: "Sofas", to: "/home-furniture/living-room/sofas" },
                    { name: "Coffee Tables", to: "/home-furniture/living-room/coffee-tables" },
                    { name: "TV Units", to: "/home-furniture/living-room/tv-units" },
                    { name: "Bookshelves", to: "/home-furniture/living-room/bookshelves" },
                    { name: "Armchairs", to: "/home-furniture/living-room/armchairs" },
                    { name: "Rugs", to: "/home-furniture/living-room/rugs" },
                    { name: "Lamps", to: "/home-furniture/living-room/lamps" },
                    { name: "Side Tables", to: "/home-furniture/living-room/side-tables" },
                    { name: "Storage Cabinets", to: "/home-furniture/living-room/storage-cabinets" },
                    { name: "Curtains", to: "/home-furniture/living-room/curtains" },
                ],
            },
            { 
                name: "Bedroom", 
                to: "/home-furniture/bedroom",
                subSubItems: [
                    { name: "Beds", to: "/home-furniture/bedroom/beds" },
                    { name: "Wardrobes", to: "/home-furniture/bedroom/wardrobes" },
                    { name: "Dressing Tables", to: "/home-furniture/bedroom/dressing-tables" },
                    { name: "Nightstands", to: "/home-furniture/bedroom/nightstands" },
                    { name: "Mattresses", to: "/home-furniture/bedroom/mattresses" },
                    { name: "Bedding", to: "/home-furniture/bedroom/bedding" },
                    { name: "Chairs", to: "/home-furniture/bedroom/chairs" },
                    { name: "Lamps", to: "/home-furniture/bedroom/lamps" },
                    { name: "Curtains", to: "/home-furniture/bedroom/curtains" },
                    { name: "Storage", to: "/home-furniture/bedroom/storage" },
                ],
            },
            { 
                name: "Kitchen", 
                to: "/home-furniture/kitchen",
                subSubItems: [
                    { name: "Kitchen Cabinets", to: "/home-furniture/kitchen/cabinets" },
                    { name: "Sink Units", to: "/home-furniture/kitchen/sink-units" },
                    { name: "Dining Tables", to: "/home-furniture/kitchen/dining-tables" },
                    { name: "Refrigerators", to: "/home-furniture/kitchen/refrigerators" },
                    { name: "Stoves", to: "/home-furniture/kitchen/stoves" },
                    { name: "Microwaves", to: "/home-furniture/kitchen/microwaves" },
                    { name: "Dishwashers", to: "/home-furniture/kitchen/dishwashers" },
                    { name: "Storage Units", to: "/home-furniture/kitchen/storage" },
                    { name: "Countertops", to: "/home-furniture/kitchen/countertops" },
                    { name: "Ovens", to: "/home-furniture/kitchen/ovens" },
                ],
            },
            { 
                name: "Office", 
                to: "/home-furniture/office",
                subSubItems: [
                    { name: "Desks", to: "/home-furniture/office/desks" },
                    { name: "Chairs", to: "/home-furniture/office/chairs" },
                    { name: "Storage Cabinets", to: "/home-furniture/office/storage-cabinets" },
                    { name: "File Organizers", to: "/home-furniture/office/file-organizers" },
                    { name: "Lamps", to: "/home-furniture/office/lamps" },
                    { name: "Bookshelves", to: "/home-furniture/office/bookshelves" },
                    { name: "Filing Cabinets", to: "/home-furniture/office/filing-cabinets" },
                    { name: "Desk Organizers", to: "/home-furniture/office/desk-organizers" },
                    { name: "Conference Tables", to: "/home-furniture/office/conference-tables" },
                    { name: "Office Chairs", to: "/home-furniture/office/office-chairs" }
                ]
            },
            { 
                name: "Outdoor", 
                to: "/home-furniture/outdoor",
                subSubItems: [
                    { name: "Patio Furniture", to: "/home-furniture/outdoor/patio-furniture" },
                    { name: "Outdoor Storage", to: "/home-furniture/outdoor/storage" },
                    { name: "Outdoor Lighting", to: "/home-furniture/outdoor/lighting" },
                    { name: "Grills", to: "/home-furniture/outdoor/grills" },
                    { name: "Outdoor Rugs", to: "/home-furniture/outdoor/rugs" },
                    { name: "Gazebos", to: "/home-furniture/outdoor/gazebos" },
                    { name: "Fire Pits", to: "/home-furniture/outdoor/fire-pits" },
                    { name: "Outdoor Dining Sets", to: "/home-furniture/outdoor/dining-sets" },
                    { name: "Hammocks", to: "/home-furniture/outdoor/hammocks" },
                    { name: "Deck Furniture", to: "/home-furniture/outdoor/deck-furniture" }
                ]
            }
        ],
    },
    {
        name: "Personal Care",
        to: "/beauty-care",
        subItems: [
            { 
                name: "Skin Care", 
                to: "/beauty-care/skin-care",
                subSubItems: [
                    { name: "Cleansers", to: "/beauty-care/skin-care/cleansers" },
                    { name: "Moisturizers", to: "/beauty-care/skin-care/moisturizers" },
                    { name: "Sunscreen", to: "/beauty-care/skin-care/sunscreen" },
                    { name: "Face Masks", to: "/beauty-care/skin-care/face-masks" },
                    { name: "Serums", to: "/beauty-care/skin-care/serums" },
                    { name: "Exfoliators", to: "/beauty-care/skin-care/exfoliators" },
                    { name: "Under Eye Cream", to: "/beauty-care/skin-care/under-eye-cream" },
                    { name: "Lip Care", to: "/beauty-care/skin-care/lip-care" },
                    { name: "Night Creams", to: "/beauty-care/skin-care/night-creams" },
                    { name: "Toners", to: "/beauty-care/skin-care/toners" },
                ],
            },
            { 
                name: "Hair Care", 
                to: "/beauty-care/hair-care",
                subSubItems: [
                    { name: "Shampoos", to: "/beauty-care/hair-care/shampoos" },
                    { name: "Conditioners", to: "/beauty-care/hair-care/conditioners" },
                    { name: "Hair Oils", to: "/beauty-care/hair-care/hair-oils" },
                    { name: "Hair Masks", to: "/beauty-care/hair-care/hair-masks" },
                    { name: "Hair Serums", to: "/beauty-care/hair-care/hair-serums" },
                    { name: "Hair Color", to: "/beauty-care/hair-care/hair-color" },
                    { name: "Hair Brushes", to: "/beauty-care/hair-care/hair-brushes" },
                    { name: "Dry Shampoos", to: "/beauty-care/hair-care/dry-shampoos" },
                    { name: "Hair Growth Products", to: "/beauty-care/hair-care/hair-growth-products" },
                    { name: "Straighteners", to: "/beauty-care/hair-care/straighteners" },
                ],
            },
            { 
                name: "Makeup", 
                to: "/beauty-care/makeup",
                subSubItems: [
                    { name: "Foundations", to: "/beauty-care/makeup/foundations" },
                    { name: "Lipsticks", to: "/beauty-care/makeup/lipsticks" },
                    { name: "Mascaras", to: "/beauty-care/makeup/mascaras" },
                    { name: "Blushes", to: "/beauty-care/makeup/blushes" },
                    { name: "Eyeshadows", to: "/beauty-care/makeup/eyeshadows" },
                    { name: "Highlighters", to: "/beauty-care/makeup/highlighters" },
                    { name: "Primers", to: "/beauty-care/makeup/primers" },
                    { name: "Concealers", to: "/beauty-care/makeup/concealers" },
                    { name: "Brushes", to: "/beauty-care/makeup/brushes" },
                    { name: "Setting Sprays", to: "/beauty-care/makeup/setting-sprays" },
                ],
            },
            { 
                name: "Fragrance", 
                to: "/beauty-care/fragrance",
                subSubItems: [
                    { name: "Perfumes", to: "/beauty-care/fragrance/perfumes" },
                    { name: "Eau De Toilette", to: "/beauty-care/fragrance/eau-de-toilette" },
                    { name: "Eau De Parfum", to: "/beauty-care/fragrance/eau-de-parfum" },
                    { name: "Deodorants", to: "/beauty-care/fragrance/deodorants" },
                    { name: "Body Mists", to: "/beauty-care/fragrance/body-mists" },
                    { name: "Colognes", to: "/beauty-care/fragrance/colognes" },
                    { name: "Roll-ons", to: "/beauty-care/fragrance/roll-ons" },
                    { name: "Gift Sets", to: "/beauty-care/fragrance/gift-sets" },
                    { name: "Fragrance Oils", to: "/beauty-care/fragrance/fragrance-oils" },
                    { name: "Aftershaves", to: "/beauty-care/fragrance/aftershaves" },
                ],
            },
        ],
    },
    {
        name: "Appliances",
        to: "/appliances",
        subItems: [
            { 
                name: "Refrigerators", 
                to: "/appliances/refrigerators",
                subSubItems: [
                    { name: "Samsung", to: "/appliances/refrigerators/samsung" },
                    { name: "LG", to: "/appliances/refrigerators/lg" },
                    { name: "Whirlpool", to: "/appliances/refrigerators/whirlpool" },
                    { name: "Bosch", to: "/appliances/refrigerators/bosch" },
                    { name: "Haier", to: "/appliances/refrigerators/haier" },
                    { name: "Godrej", to: "/appliances/refrigerators/godrej" },
                    { name: "Panasonic", to: "/appliances/refrigerators/panasonic" },
                    { name: "Siemens", to: "/appliances/refrigerators/siemens" },
                    { name: "Sharp", to: "/appliances/refrigerators/sharp" },
                    { name: "Mitashi", to: "/appliances/refrigerators/mitashi" },
                ],
            },
            { 
                name: "Washing Machines", 
                to: "/appliances/washing-machines",
                subSubItems: [
                    { name: "Samsung", to: "/appliances/washing-machines/samsung" },
                    { name: "LG", to: "/appliances/washing-machines/lg" },
                    { name: "Whirlpool", to: "/appliances/washing-machines/whirlpool" },
                    { name: "Bosch", to: "/appliances/washing-machines/bosch" },
                    { name: "Haier", to: "/appliances/washing-machines/haier" },
                    { name: "IFB", to: "/appliances/washing-machines/ifb" },
                    { name: "Panasonic", to: "/appliances/washing-machines/panasonic" },
                    { name: "Siemens", to: "/appliances/washing-machines/siemens" },
                    { name: "Godrej", to: "/appliances/washing-machines/godrej" },
                    { name: "BPL", to: "/appliances/washing-machines/bpl" },
                ],
            },
            { 
                name: "Microwaves", 
                to: "/appliances/microwaves",
                subSubItems: [
                    { name: "Samsung", to: "/appliances/microwaves/samsung" },
                    { name: "LG", to: "/appliances/microwaves/lg" },
                    { name: "Whirlpool", to: "/appliances/microwaves/whirlpool" },
                    { name: "Bosch", to: "/appliances/microwaves/bosch" },
                    { name: "Panasonic", to: "/appliances/microwaves/panasonic" },
                    { name: "Sharp", to: "/appliances/microwaves/sharp" },
                    { name: "Haier", to: "/appliances/microwaves/haier" },
                    { name: "Godrej", to: "/appliances/microwaves/godrej" },
                    { name: "Miele", to: "/appliances/microwaves/miele" },
                    { name: "IFB", to: "/appliances/microwaves/ifb" },
                ]
            },
            { 
                name: "Air Conditioners", 
                to: "/appliances/air-conditioners",
                subSubItems: [
                    { name: "Voltas", to: "/appliances/air-conditioners/voltas" },
                    { name: "LG", to: "/appliances/air-conditioners/lg" },
                    { name: "Samsung", to: "/appliances/air-conditioners/samsung" },
                    { name: "Whirlpool", to: "/appliances/air-conditioners/whirlpool" },
                    { name: "Daikin", to: "/appliances/air-conditioners/daikin" },
                    { name: "Blue Star", to: "/appliances/air-conditioners/blue-star" },
                    { name: "Hitachi", to: "/appliances/air-conditioners/hitachi" },
                    { name: "Carrier", to: "/appliances/air-conditioners/carrier" },
                    { name: "Lloyd", to: "/appliances/air-conditioners/lloyd" },
                    { name: "Godrej", to: "/appliances/air-conditioners/godrej" },
                ],
            },
            { 
                name: "Dishwashers", 
                to: "/appliances/dishwashers",
                subSubItems: [
                    { name: "Bosch", to: "/appliances/dishwashers/bosch" },
                    { name: "IFB", to: "/appliances/dishwashers/ifb" },
                    { name: "Siemens", to: "/appliances/dishwashers/siemens" },
                    { name: "Samsung", to: "/appliances/dishwashers/samsung" },
                    { name: "Whirlpool", to: "/appliances/dishwashers/whirlpool" },
                    { name: "LG", to: "/appliances/dishwashers/lg" },
                    { name: "Miele", to: "/appliances/dishwashers/miele" },
                    { name: "Electrolux", to: "/appliances/dishwashers/electrolux" },
                    { name: "Haier", to: "/appliances/dishwashers/haier" },
                    { name: "Kitchenaid", to: "/appliances/dishwashers/kitchenaid" },
                ],
            },
        ],
    },
    {
        name: "Sports & Outdoors",
        to: "/sports-outdoors",
        subItems: [
            { 
                name: "Fitness Equipment", 
                to: "/sports-outdoors/fitness-equipment",
                subSubItems: [
                    { name: "Treadmills", to: "/sports-outdoors/fitness-equipment/treadmills" },
                    { name: "Exercise Bikes", to: "/sports-outdoors/fitness-equipment/exercise-bikes" },
                    { name: "Dumbbells", to: "/sports-outdoors/fitness-equipment/dumbbells" },
                    { name: "Yoga Mats", to: "/sports-outdoors/fitness-equipment/yoga-mats" },
                    { name: "Ellipticals", to: "/sports-outdoors/fitness-equipment/ellipticals" },
                    { name: "Kettlebells", to: "/sports-outdoors/fitness-equipment/kettlebells" },
                    { name: "Resistance Bands", to: "/sports-outdoors/fitness-equipment/resistance-bands" },
                    { name: "Home Gym Equipment", to: "/sports-outdoors/fitness-equipment/home-gym-equipment" },
                    { name: "Rowing Machines", to: "/sports-outdoors/fitness-equipment/rowing-machines" },
                    { name: "Dumbbell Sets", to: "/sports-outdoors/fitness-equipment/dumbbell-sets" }
                ]
            },
            { 
                name: "Camping & Hiking", 
                to: "/sports-outdoors/camping-hiking",
                subSubItems: [
                    { name: "Tents", to: "/sports-outdoors/camping-hiking/tents" },
                    { name: "Backpacks", to: "/sports-outdoors/camping-hiking/backpacks" },
                    { name: "Sleeping Bags", to: "/sports-outdoors/camping-hiking/sleeping-bags" },
                    { name: "Camping Furniture", to: "/sports-outdoors/camping-hiking/camping-furniture" },
                    { name: "Lanterns & Lights", to: "/sports-outdoors/camping-hiking/lanterns-lights" },
                    { name: "Cookware", to: "/sports-outdoors/camping-hiking/cookware" },
                    { name: "Hiking Shoes", to: "/sports-outdoors/camping-hiking/hiking-shoes" },
                    { name: "Portable Stoves", to: "/sports-outdoors/camping-hiking/portable-stoves" },
                    { name: "First Aid Kits", to: "/sports-outdoors/camping-hiking/first-aid-kits" },
                    { name: "Thermal Blankets", to: "/sports-outdoors/camping-hiking/thermal-blankets" }
                ]
            },
            { 
                name: "Cycling", 
                to: "/sports-outdoors/cycling",
                subSubItems: [
                    { name: "Mountain Bikes", to: "/sports-outdoors/cycling/mountain-bikes" },
                    { name: "Road Bikes", to: "/sports-outdoors/cycling/road-bikes" },
                    { name: "Cycling Accessories", to: "/sports-outdoors/cycling/cycling-accessories" },
                    { name: "Bicycle Helmets", to: "/sports-outdoors/cycling/bicycle-helmets" },
                    { name: "Cycling Shoes", to: "/sports-outdoors/cycling/cycling-shoes" },
                    { name: "Cycling Apparel", to: "/sports-outdoors/cycling/cycling-apparel" },
                    { name: "Bicycle Pumps", to: "/sports-outdoors/cycling/bicycle-pumps" },
                    { name: "Cycling Tools", to: "/sports-outdoors/cycling/cycling-tools" },
                    { name: "Bicycle Bags", to: "/sports-outdoors/cycling/bicycle-bags" },
                    { name: "Water Bottles", to: "/sports-outdoors/cycling/water-bottles" }
                ]
            },
            { 
                name: "Fishing", 
                to: "/sports-outdoors/fishing",
                subSubItems: [
                    { name: "Fishing Rods", to: "/sports-outdoors/fishing/fishing-rods" },
                    { name: "Fishing Reels", to: "/sports-outdoors/fishing/fishing-reels" },
                    { name: "Fishing Lures", to: "/sports-outdoors/fishing/fishing-lures" },
                    { name: "Fishing Tackle Boxes", to: "/sports-outdoors/fishing/fishing-tackle-boxes" },
                    { name: "Fishing Lines", to: "/sports-outdoors/fishing/fishing-lines" },
                    { name: "Fishing Hooks", to: "/sports-outdoors/fishing/fishing-hooks" },
                    { name: "Fishing Nets", to: "/sports-outdoors/fishing/fishing-nets" },
                    { name: "Fishing Chairs", to: "/sports-outdoors/fishing/fishing-chairs" },
                    { name: "Fishing Sunglasses", to: "/sports-outdoors/fishing/fishing-sunglasses" },
                    { name: "Fish Finders", to: "/sports-outdoors/fishing/fish-finders" }
                ]
            },
            { 
                name: "Running", 
                to: "/sports-outdoors/running",
                subSubItems: [
                    { name: "Running Shoes", to: "/sports-outdoors/running/running-shoes" },
                    { name: "Running Apparel", to: "/sports-outdoors/running/running-apparel" },
                    { name: "Running Watches", to: "/sports-outdoors/running/running-watches" },
                    { name: "Compression Gear", to: "/sports-outdoors/running/compression-gear" },
                    { name: "Hydration Packs", to: "/sports-outdoors/running/hydration-packs" },
                    { name: "Foam Rollers", to: "/sports-outdoors/running/foam-rollers" },
                    { name: "Running Socks", to: "/sports-outdoors/running/running-socks" },
                    { name: "Pedometers", to: "/sports-outdoors/running/pedometers" },
                    { name: "Running Belts", to: "/sports-outdoors/running/running-belts" },
                    { name: "Heart Rate Monitors", to: "/sports-outdoors/running/heart-rate-monitors" }
                ]
            }
        ]
    },    
    {
        name: "Toys & Games",
        to: "/toys-games",
        subItems: [
            { 
                name: "Action Figures", 
                to: "/toys-games/action-figures",
                subSubItems: [
                    { name: "Superheroes", to: "/toys-games/action-figures/superheroes" },
                    { name: "Anime", to: "/toys-games/action-figures/anime" },
                    { name: "Dinosaurs", to: "/toys-games/action-figures/dinosaurs" },
                    { name: "Robots", to: "/toys-games/action-figures/robots" },
                    { name: "Cars & Vehicles", to: "/toys-games/action-figures/cars-vehicles" },
                    { name: "Fantasy", to: "/toys-games/action-figures/fantasy" },
                    { name: "Monsters", to: "/toys-games/action-figures/monsters" },
                    { name: "Sports Figures", to: "/toys-games/action-figures/sports-figures" },
                    { name: "Trains", to: "/toys-games/action-figures/trains" },
                    { name: "Figures & Statues", to: "/toys-games/action-figures/figures-statues" }
                ]
            },
            { 
                name: "Board Games", 
                to: "/toys-games/board-games",
                subSubItems: [
                    { name: "Strategy Games", to: "/toys-games/board-games/strategy-games" },
                    { name: "Family Games", to: "/toys-games/board-games/family-games" },
                    { name: "Party Games", to: "/toys-games/board-games/party-games" },
                    { name: "Trivia Games", to: "/toys-games/board-games/trivia-games" },
                    { name: "Card Games", to: "/toys-games/board-games/card-games" },
                    { name: "Classic Games", to: "/toys-games/board-games/classic-games" },
                    { name: "Puzzle Games", to: "/toys-games/board-games/puzzle-games" },
                    { name: "Educational Games", to: "/toys-games/board-games/educational-games" },
                    { name: "Multiplayer Games", to: "/toys-games/board-games/multiplayer-games" },
                    { name: "Kids Games", to: "/toys-games/board-games/kids-games" }
                ]
            },
            { 
                name: "Building Sets", 
                to: "/toys-games/building-sets",
                subSubItems: [
                    { name: "LEGO", to: "/toys-games/building-sets/lego" },
                    { name: "K'NEX", to: "/toys-games/building-sets/knex" },
                    { name: "Mega Bloks", to: "/toys-games/building-sets/mega-bloks" },
                    { name: "Wooden Building Blocks", to: "/toys-games/building-sets/wooden-building-blocks" },
                    { name: "Mecano", to: "/toys-games/building-sets/mecano" },
                    { name: "Plus-Plus", to: "/toys-games/building-sets/plus-plus" },
                    { name: "Playmobil", to: "/toys-games/building-sets/playmobil" },
                    { name: "Snap Circuits", to: "/toys-games/building-sets/snap-circuits" },
                    { name: "Zoob", to: "/toys-games/building-sets/zoob" },
                    { name: "Tegu", to: "/toys-games/building-sets/tegu" }
                ]
            },
            { 
                name: "Dolls & Stuffed Animals", 
                to: "/toys-games/dolls-stuffed-animals",
                subSubItems: [
                    { name: "Barbie Dolls", to: "/toys-games/dolls-stuffed-animals/barbie-dolls" },
                    { name: "American Girl Dolls", to: "/toys-games/dolls-stuffed-animals/american-girl-dolls" },
                    { name: "Baby Dolls", to: "/toys-games/dolls-stuffed-animals/baby-dolls" },
                    { name: "Stuffed Bears", to: "/toys-games/dolls-stuffed-animals/stuffed-bears" },
                    { name: "Collectible Dolls", to: "/toys-games/dolls-stuffed-animals/collectible-dolls" },
                    { name: "Fashion Dolls", to: "/toys-games/dolls-stuffed-animals/fashion-dolls" },
                    { name: "Reborn Dolls", to: "/toys-games/dolls-stuffed-animals/reborn-dolls" },
                    { name: "Plush Animals", to: "/toys-games/dolls-stuffed-animals/plush-animals" },
                    { name: "Doll Houses", to: "/toys-games/dolls-stuffed-animals/doll-houses" },
                    { name: "Interactive Dolls", to: "/toys-games/dolls-stuffed-animals/interactive-dolls" }
                ]
            },
            { 
                name: "Educational Toys", 
                to: "/toys-games/educational-toys",
                subSubItems: [
                    { name: "STEM Toys", to: "/toys-games/educational-toys/stem-toys" },
                    { name: "Math Toys", to: "/toys-games/educational-toys/math-toys" },
                    { name: "Science Kits", to: "/toys-games/educational-toys/science-kits" },
                    { name: "Language & Literacy", to: "/toys-games/educational-toys/language-literacy" },
                    { name: "Art & Craft Kits", to: "/toys-games/educational-toys/art-craft-kits" },
                    { name: "Building Blocks", to: "/toys-games/educational-toys/building-blocks" },
                    { name: "Puzzle Toys", to: "/toys-games/educational-toys/puzzle-toys" },
                    { name: "Interactive Learning Toys", to: "/toys-games/educational-toys/interactive-learning-toys" },
                    { name: "Musical Toys", to: "/toys-games/educational-toys/musical-toys" },
                    { name: "Robotics Kits", to: "/toys-games/educational-toys/robotics-kits" }
                ]
            }
        ]
    }     
];


export default navItems