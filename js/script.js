/**
 * ImpactCart - Modern Social-Impact E-Commerce Platform
 * Shared JavaScript Library & State Management
 * Pure Vanilla JavaScript & LocalStorage
 */

// ==========================================
// 1. DATA REPOSITORY: PRODUCTS & CATEGORIES
// ==========================================
const IMPACT_PRODUCTS = [
    {
        id: 1,
        name: "Recycled Learning Notebook (Pack of 3)",
        category: "Education",
        categorySlug: "education",
        price: 120,
        originalPrice: 160,
        rating: 4.8,
        reviewsCount: 142,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "📚 Supports Learning",
        impactType: "education",
        impactPoints: 12,
        impactText: "Provides 1 complete notebook & pencil kit to an underprivileged student.",
        impactSummary: {
            learningKits: 1,
            wasteReducedKg: 0.5,
            communityBeneficiaries: 1,
            ecoChoices: 1
        },
        description: "Crafted from 100% post-consumer recycled paper with chemical-free bindings, each set funds school supplies for children in need.",
        fullDescription: "Our Recycled Learning Notebooks are thoughtfully made with high-grade, unbleached recycled paper, minimizing deforestation and reducing landfill waste. Every purchase directly sponsors education kits for students in rural community classrooms.",
        specs: {
            "Pages": "160 ruled pages per book",
            "Material": "100% Post-Consumer Recycled Paper",
            "Binding": "Eco-friendly sewn thread",
            "Dimensions": "A5 (14.8 x 21.0 cm)",
            "Origin": "Jaipur Community Artisan Cluster"
        },
        inStock: true,
        isFeatured: true
    },
    {
        id: 2,
        name: "Handmade Natural Jute Market Tote",
        category: "Handmade",
        categorySlug: "handmade",
        price: 350,
        originalPrice: 450,
        rating: 4.9,
        reviewsCount: 98,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🌱 Plastic Free",
        impactType: "eco",
        impactPoints: 10,
        impactText: "Eliminates ~250 single-use plastic bags and supports women weavers.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 2.5,
            communityBeneficiaries: 2,
            ecoChoices: 1
        },
        description: "Hand-woven from 100% biodegradable golden jute fibers by women artisan collectives in West Bengal.",
        fullDescription: "Strong, stylish, and completely biodegradable. This heavy-duty tote bag carries up to 15 kg of groceries or work essentials, completely eliminating your need for single-use plastic shopping bags while securing fair livelihoods for artisan women.",
        specs: {
            "Capacity": "Up to 15 kg",
            "Material": "Natural Golden Jute & Cotton handles",
            "Closure": "Wooden button loop",
            "Dimensions": "38 cm x 42 cm x 12 cm",
            "Care": "Spot clean with damp cloth"
        },
        inStock: true,
        isFeatured: true
    },
    {
        id: 3,
        name: "Artisan Insulated Bamboo Bottle (650ml)",
        category: "Eco-Friendly",
        categorySlug: "eco-friendly",
        price: 480,
        originalPrice: 650,
        rating: 4.7,
        reviewsCount: 215,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "♻️ Zero Waste",
        impactType: "eco",
        impactPoints: 14,
        impactText: "Prevents over 300 disposable plastic bottles yearly & promotes sustainable bamboo farming.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 4.2,
            communityBeneficiaries: 1,
            ecoChoices: 2
        },
        description: "Double-walled stainless steel interior wrapped in ethically harvested organic bamboo. Keeps beverages hot for 12 hrs, cold for 24 hrs.",
        fullDescription: "Elevate your hydration habits with this premium thermal flask. Made with vacuum-insulated food-grade 304 stainless steel and encased in natural polished bamboo, each piece carries unique organic wood grains.",
        specs: {
            "Volume": "650 ml",
            "Thermal Retention": "12 hrs Hot / 24 hrs Cold",
            "Material": "Food-grade 304 SS & Natural Bamboo",
            "Lid": "Leak-proof with built-in tea infuser",
            "BPA Free": "100% Non-toxic & BPA Free"
        },
        inStock: true,
        isFeatured: true
    },
    {
        id: 4,
        name: "Eco-Friendly Seed Stationery Kit",
        category: "Education",
        categorySlug: "education",
        price: 250,
        originalPrice: 320,
        rating: 4.9,
        reviewsCount: 164,
        image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🌱 Plantable Seeds",
        impactType: "education",
        impactPoints: 11,
        impactText: "Includes 5 seed pencils + 5 seed pens that grow into herbs & flowers when planted after use.",
        impactSummary: {
            learningKits: 1,
            wasteReducedKg: 0.8,
            communityBeneficiaries: 1,
            ecoChoices: 2
        },
        description: "10 plantable writing instruments packed in recycled craft paper box. Write, finish, and plant into soil to grow organic basil, tomato & marigold.",
        fullDescription: "A revolutionary zero-waste stationery set. Once pencils and pens become too short to write, plant the capsule end in a pot with soil and sunlight, water regularly, and watch fresh green sprouts appear in 7-10 days!",
        specs: {
            "Contents": "5 Seed Pencils (Graphite) + 5 Seed Pens (Blue/Black)",
            "Seeds Included": "Tomato, Basil, Marigold, Coriander, Chili",
            "Body": "100% Recycled Newspaper & Recycled Card",
            "Ink": "Non-toxic organic dye ink",
            "Safe for Kids": "Yes, completely non-toxic"
        },
        inStock: true,
        isFeatured: true
    },
    {
        id: 5,
        name: "Handmade Organic Cotton Pouch",
        category: "Handmade",
        categorySlug: "handmade",
        price: 180,
        originalPrice: 240,
        rating: 4.6,
        reviewsCount: 76,
        image: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🎨 Handcrafted",
        impactType: "handmade",
        impactPoints: 9,
        impactText: "Supports handloom textile artisans with fair wages and ethical working conditions.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 0.6,
            communityBeneficiaries: 1,
            ecoChoices: 1
        },
        description: "Versatile zippered pouch made from hand-spun organic cotton and colored with plant-based botanical dyes.",
        fullDescription: "Perfect for cosmetics, travel toiletries, cables, or stationery. Hand-block printed using ancestral woodblock printing methods passed down through generations of rural artisan families.",
        specs: {
            "Fabric": "100% Handloom Organic Cotton (GOTS certified)",
            "Dyes": "Natural Indigo and Turmeric extracts",
            "Zipper": "Durable antique brass zipper",
            "Dimensions": "20 cm x 14 cm",
            "Origin": "Kutch Artisan Weaver Self-Help Group"
        },
        inStock: true,
        isFeatured: true
    },
    {
        id: 6,
        name: "Community Craft Celebration Gift Box",
        category: "Gifts",
        categorySlug: "gifts",
        price: 650,
        originalPrice: 850,
        rating: 5.0,
        reviewsCount: 189,
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🎁 Meaningful Gift",
        impactType: "community",
        impactPoints: 20,
        impactText: "Benefits 4 artisan families across clay, candle making, tea cultivation, and packaging.",
        impactSummary: {
            learningKits: 1,
            wasteReducedKg: 1.5,
            communityBeneficiaries: 4,
            ecoChoices: 3
        },
        description: "An artisan gift hamper containing a hand-poured soy candle, organic mountain tea, brass bookmark, and seed greeting card.",
        fullDescription: "Make celebrations truly meaningful. Each element inside this curated gift box is handcrafted by different micro-entrepreneurs and marginalized cooperatives, creating a ripple of positive social transformation.",
        specs: {
            "Hamper Includes": "1 Soy Candle (120g), 1 Organic Tea Tin (50g), 1 Etched Brass Bookmark, 1 Plantable Card",
            "Packaging": "Pine wood keepsake box handcrafted by rural carpenters",
            "Fragrance": "Natural Lavender & Bergamot essential oils",
            "Dimensions": "24 x 18 x 10 cm",
            "Impact Certificate": "Included inside box with artisan signatures"
        },
        inStock: true,
        isFeatured: true
    },
    {
        id: 7,
        name: "Solar Emergency & Study Lamp",
        category: "Education",
        categorySlug: "education",
        price: 890,
        originalPrice: 1150,
        rating: 4.8,
        reviewsCount: 88,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "💡 Clean Energy",
        impactType: "education",
        impactPoints: 18,
        impactText: "1-for-1 match: Funds solar study hours for students in off-grid rural villages.",
        impactSummary: {
            learningKits: 2,
            wasteReducedKg: 3.0,
            communityBeneficiaries: 2,
            ecoChoices: 2
        },
        description: "Compact, ultra-bright solar LED lamp with 3 brightness modes, USB phone charging port, and 16-hour runtime on single solar charge.",
        fullDescription: "Designed for reliable study and emergency lighting without kerosene fumes. Rugged, water-resistant casing with an integrated monocrystalline solar panel and LiFePO4 battery that lasts over 5 years.",
        specs: {
            "Lighting Modes": "Low (16 hrs), Medium (8 hrs), Ultra-Bright (4 hrs)",
            "Solar Panel": "Integrated High Efficiency Monocrystalline",
            "Battery": "Safe Lithium Iron Phosphate (2000+ cycles)",
            "Bonus Feature": "USB 5V Out for emergency mobile charging",
            "Weight": "280 grams"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 8,
        name: "Upcycled Denim Urban Daypack",
        category: "Eco-Friendly",
        categorySlug: "eco-friendly",
        price: 999,
        originalPrice: 1400,
        rating: 4.9,
        reviewsCount: 112,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "♻️ 1.5kg Denim Diverted",
        impactType: "eco",
        impactPoints: 16,
        impactText: "Diverts 1.5 kg textile waste from landfills and saves ~3,500 liters of water.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 5.0,
            communityBeneficiaries: 2,
            ecoChoices: 3
        },
        description: "Stylish everyday backpack handcrafted from discarded denim jeans and lined with recycled PET fabric.",
        fullDescription: "Every backpack is one-of-a-kind with subtle variations in denim tones and stitches. Features a padded 15.6-inch laptop compartment, water-repellent recycled inner lining, and ergonomic shoulder straps.",
        specs: {
            "Laptop Sleeve": "Fits up to 15.6-inch laptops",
            "Fabric": "Upcycled 100% Cotton Denim + Recycled rPET Lining",
            "Pockets": "1 Main compartment, 2 front zip pockets, 2 side bottle slots",
            "Dimensions": "44 cm x 30 cm x 14 cm",
            "Water Resistance": "Water-resistant treated base & lining"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 9,
        name: "Handcrafted Terracotta Planter Duo",
        category: "Handmade",
        categorySlug: "handmade",
        price: 420,
        originalPrice: 550,
        rating: 4.7,
        reviewsCount: 83,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🎨 Traditional Pottery",
        impactType: "handmade",
        impactPoints: 10,
        impactText: "Sustains generational potter communities and uses 100% natural, unglazed earthenware clay.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 1.0,
            communityBeneficiaries: 2,
            ecoChoices: 1
        },
        description: "Set of 2 porous, breathable terracotta pots for indoor succulents and air-purifying indoor plants.",
        fullDescription: "Clay pottery naturally regulates soil moisture and aeration, helping your plants thrive while honoring ancient craft traditions. Hand-thrown on traditional potter wheels using river clay without synthetic glazes.",
        specs: {
            "Quantity": "Set of 2 Pots with matching drain saucers",
            "Material": "Natural River Clay Terracotta",
            "Drainage": "Center drainage hole with saucer included",
            "Dimensions": "Small: 10x10 cm, Medium: 14x14 cm",
            "Finish": "Natural textured unglazed earth"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 10,
        name: "Fair-Trade Organic Mountain Tea Box",
        category: "Community",
        categorySlug: "community",
        price: 550,
        originalPrice: 680,
        rating: 4.9,
        reviewsCount: 138,
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🤝 Fair Trade",
        impactType: "community",
        impactPoints: 13,
        impactText: "Direct trade returns 40% higher earnings to smallholder organic tea farmers in the Nilgiris.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 0.7,
            communityBeneficiaries: 3,
            ecoChoices: 2
        },
        description: "Trio collection of whole-leaf loose teas: Himalayan Green, Spiced Masala Chai, and Calming Chamomile.",
        fullDescription: "Grown at high altitudes without chemical pesticides or synthetic fertilizers. Hand-plucked by independent women farmers receiving fair-trade premiums that fund community healthcare clinics.",
        specs: {
            "Net Weight": "150 grams (3 tins x 50g each)",
            "Certification": "USDA Organic & Fair Trade Certified",
            "Packaging": "Reusable airtight metal caddies in recycled kraft sleeve",
            "Shelf Life": "18 Months from harvest date",
            "Caffeine Level": "Varied (Green: Low, Masala: Medium, Chamomile: Zero)"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 11,
        name: "Hand-Carved Reclaimed Wood Desk Organizer",
        category: "Handmade",
        categorySlug: "handmade",
        price: 720,
        originalPrice: 950,
        rating: 4.8,
        reviewsCount: 94,
        image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1507842229451-79b1be8868f7?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🌳 Reclaimed Wood",
        impactType: "handmade",
        impactPoints: 14,
        impactText: "Salvaged from decommissioned architecture; supports master woodcarvers.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 3.5,
            communityBeneficiaries: 2,
            ecoChoices: 2
        },
        description: "Elegant desktop organizer with phone stand, pen slots, business card holder, and sticky note dock.",
        fullDescription: "Turn clutter into an eco-friendly aesthetic masterpiece. Crafted exclusively from salvaged teak and mango wood, hand-sanded to a silky finish, and sealed with organic beeswax polish.",
        specs: {
            "Material": "100% Reclaimed Solid Teak & Mango Wood",
            "Finish": "Non-toxic natural beeswax coating",
            "Slots": "Phone dock with cable slot, 4 pen wells, memo slot, clip tray",
            "Dimensions": "26 cm x 12 cm x 8 cm",
            "Rubber Feet": "Natural cork non-scratch base pads"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 12,
        name: "Plantable Seed Paper Calendar & Cards Set",
        category: "Gifts",
        categorySlug: "gifts",
        price: 299,
        originalPrice: 399,
        rating: 4.9,
        reviewsCount: 151,
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🌱 12 Plantable Sheets",
        impactType: "eco",
        impactPoints: 12,
        impactText: "12 calendar cards embedded with live seeds that grow into 12 different herbs and blossoms.",
        impactSummary: {
            learningKits: 1,
            wasteReducedKg: 0.9,
            communityBeneficiaries: 1,
            ecoChoices: 2
        },
        description: "12-Month standalone desktop calendar on handmade seed paper with a reclaimed wooden easel stand.",
        fullDescription: "At the end of each month, don't throw your calendar page away—tear it, plant it under moist soil, water daily, and harvest fresh wildflowers and herbs throughout the year.",
        specs: {
            "Pages": "12 Month Cards + 2 Greeting Postcards",
            "Stand": "Included hand-cut repurposed pine wood block",
            "Seeds Embedded": "Wildflower mix, Sweet Basil, Lemon Mint, Daisy, Celosia",
            "Paper Type": "Handmade recycled cotton-rag seed paper",
            "Dimensions": "10 cm x 15 cm"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 13,
        name: "Organic Neem Wood Culinary Set (5 Utensils)",
        category: "Eco-Friendly",
        categorySlug: "eco-friendly",
        price: 390,
        originalPrice: 520,
        rating: 4.8,
        reviewsCount: 127,
        image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🌿 Antibacterial Wood",
        impactType: "eco",
        impactPoints: 11,
        impactText: "100% natural antimicrobial neem wood replacing microplastic Teflon & nylon spoons.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 1.2,
            communityBeneficiaries: 2,
            ecoChoices: 2
        },
        description: "Handcrafted kitchen utensils made from naturally antimicrobial pruned neem wood. Safe for non-stick cookware.",
        fullDescription: "Upgrade your culinary tools with pure unpolished neem wood. Naturally antibacterial, heat resistant, and free of artificial varnishes or glues. Each spatula and spoon is sculpted by hereditary rural carpenters.",
        specs: {
            "Set Includes": "1 Flat Spatula, 1 Curved Frying Spatula, 1 Rice Ladle, 1 Soup Spoon, 1 Tasting Spoon",
            "Wood Source": "Ethically pruned Indian Neem trees",
            "Finish": "Cold-pressed coconut oil coating",
            "Heat Resistance": "Safe up to 220°C"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 14,
        name: "Handwoven Kauna Reed Storage Basket",
        category: "Handmade",
        categorySlug: "handmade",
        price: 580,
        originalPrice: 750,
        rating: 4.9,
        reviewsCount: 65,
        image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🎨 Wetland Reed Craft",
        impactType: "handmade",
        impactPoints: 15,
        impactText: "Preserves Manipur wetland eco-crafts and provides sustained income for 3 women artisans.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 2.0,
            communityBeneficiaries: 3,
            ecoChoices: 2
        },
        description: "Versatile, breathable laundry and organizer basket woven from water reeds harvested from North-East wetlands.",
        fullDescription: "Hand-braided using organic Kauna reeds (water grass). Extremely sturdy, water-tolerant, and naturally flexible. Ideal for organizing books, textiles, toys, or indoor plants.",
        specs: {
            "Material": "100% Wild Water Kauna Reed",
            "Handles": "Integrated dual braided reed loops",
            "Dimensions": "32 cm diameter x 35 cm height",
            "Origin": "Manipur Women Artisan Self-Help Cluster"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 15,
        name: "Upcycled Coconut Shell Soy Wax Candle Trio",
        category: "Gifts",
        categorySlug: "gifts",
        price: 340,
        originalPrice: 450,
        rating: 4.8,
        reviewsCount: 140,
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🥥 Upcycled Coconut Shells",
        impactType: "eco",
        impactPoints: 10,
        impactText: "Rescues discarded coconut shells from food waste and uses non-toxic pure soy wax.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 1.5,
            communityBeneficiaries: 2,
            ecoChoices: 2
        },
        description: "Set of 3 hand-poured aromatherapeutic candles nestled in polished real coconut shells with wooden crackling wicks.",
        fullDescription: "Indulge in cozy, non-toxic candlelight. Made from pure botanical soy wax and scented with natural essential oils (Vanilla Coffee, Lemongrass, Sandalwood). 100% paraffin-free and clean burning.",
        specs: {
            "Burn Time": "25-30 hours per candle",
            "Wax Type": "100% Non-GMO Soy Wax",
            "Wick": "Eco wooden crackling booster wick",
            "Scents": "Warm Vanilla, Mountain Lemongrass, Sacred Sandal"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 16,
        name: "Hand-Carved Walnut Wood Bookmark Set (Pack of 4)",
        category: "Education",
        categorySlug: "education",
        price: 220,
        originalPrice: 299,
        rating: 4.9,
        reviewsCount: 104,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "📚 Heritage Craft",
        impactType: "education",
        impactPoints: 9,
        impactText: "Funds educational apprenticeships for young woodcarving students in Kashmir valley.",
        impactSummary: {
            learningKits: 1,
            wasteReducedKg: 0.3,
            communityBeneficiaries: 1,
            ecoChoices: 1
        },
        description: "Intricately fretted wooden bookmarks featuring Mughal lattice motifs and silk tassels.",
        fullDescription: "A treasure for book lovers. Hand-sawn from seasoned Kashmiri walnut wood scraps left over from luxury furniture manufacturing, turning timber offcuts into delicate literary art.",
        specs: {
            "Pieces": "Set of 4 distinct carved patterns",
            "Wood": "Repurposed Walnut Wood",
            "Tassel": "Hand-spun recycled silk thread",
            "Thickness": "Ultra-thin 1.8mm to protect book spines"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 17,
        name: "Wild Tribal Co-op Raw Forest Honey (350g)",
        category: "Community",
        categorySlug: "community",
        price: 440,
        originalPrice: 550,
        rating: 5.0,
        reviewsCount: 173,
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🍯 Tribal Forest Co-op",
        impactType: "community",
        impactPoints: 14,
        impactText: "Directly funds livelihood security and primary healthcare for indigenous honey forager families in Nilambur.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 0.5,
            communityBeneficiaries: 3,
            ecoChoices: 2
        },
        description: "Unprocessed, unpasteurized multi-floral raw honey ethically harvested from wild cliff beehives in deep forests.",
        fullDescription: "Rich in active enzymes, wild pollens, and propolis. Harvested by traditional indigenous foragers who preserve the hives and take only surplus honey, maintaining forest biodiversity balance.",
        specs: {
            "Net Weight": "350g in recyclable glass jar",
            "Processing": "Raw, single-filtered, unheated",
            "Flora": "Wild forest blossoms (Kurinji, Mahua, Jamun)",
            "Certification": "Purity Lab Certified Zero-Sugar-Syrup"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 18,
        name: "Upcycled Rubber Tyre Travel Wallet",
        category: "Eco-Friendly",
        categorySlug: "eco-friendly",
        price: 499,
        originalPrice: 699,
        rating: 4.8,
        reviewsCount: 89,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "♻️ Tyre Waste Diverted",
        impactType: "eco",
        impactPoints: 13,
        impactText: "Diverts 0.8 kg discarded vehicular tyre rubber from polluting landfill fires.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 3.2,
            communityBeneficiaries: 1,
            ecoChoices: 2
        },
        description: "Indestructible, waterproof passport and card wallet handcrafted from discarded inner tyre tubes.",
        fullDescription: "Tough as leather but 100% vegan and recycled. Thoroughly sanitized and machine-stitched by skilled upcycling craftswomen into a sleek travel organizer with RFID-blocking card slots.",
        specs: {
            "Slots": "Passport slot, boarding pass flap, 6 card slots, coin zip",
            "Material": "Upcycled automotive inner tube rubber",
            "Lining": "Recycled cotton canvas",
            "Waterproof": "100% Weatherproof exterior"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 19,
        name: "Handloom Organic Khadi Throw / Yoga Blanket",
        category: "Handmade",
        categorySlug: "handmade",
        price: 850,
        originalPrice: 1100,
        rating: 4.9,
        reviewsCount: 71,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🎨 Handspun Khadi",
        impactType: "handmade",
        impactPoints: 17,
        impactText: "Revives heritage charkha hand-spinning and supports 2 handloom weavers in Wardha.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 1.8,
            communityBeneficiaries: 2,
            ecoChoices: 2
        },
        description: "Ultra-soft textured cotton throw made from rain-fed indigenous cotton hand-spun on traditional wheels.",
        fullDescription: "Breathable in summer and cozy in winter. Woven by generational pit-loom artisans using chemical-free indigenous Kala cotton, connecting ancient Indian craft philosophy with modern home styling.",
        specs: {
            "Dimensions": "150 cm x 200 cm",
            "Fabric": "100% Hand-spun Organic Khadi Cotton",
            "Edges": "Hand-knotted fringe borders",
            "Care": "Gentle hand wash with mild eco soap"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 20,
        name: "Solar & Robotics STEM Learning Box for Kids",
        category: "Education",
        categorySlug: "education",
        price: 699,
        originalPrice: 950,
        rating: 5.0,
        reviewsCount: 118,
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "📚 1-for-1 STEM Match",
        impactType: "education",
        impactPoints: 19,
        impactText: "1-for-1 program: Every box sold sends 1 practical solar science kit to an underserved rural school.",
        impactSummary: {
            learningKits: 2,
            wasteReducedKg: 0.5,
            communityBeneficiaries: 2,
            ecoChoices: 1
        },
        description: "Hands-on DIY solar experiment kit containing 6 buildable solar projects (solar car, mini fan, beacon light).",
        fullDescription: "Spark children's creativity and love for clean renewable energy. Laser-cut birch wood parts assemble without glue, accompanied by an illustrated comic book exploring solar physics and green inventions.",
        specs: {
            "Age Group": "8 to 14 Years",
            "Projects": "6 Buildable Solar Powered Models",
            "Components": "Solar cell module, mini DC motor, wooden chassis, colored wires",
            "Safety": "No soldering or batteries required; 100% safe"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 21,
        name: "Artisan Terracotta Chai Kulhad Set (Pack of 6)",
        category: "Handmade",
        categorySlug: "handmade",
        price: 280,
        originalPrice: 380,
        rating: 4.8,
        reviewsCount: 156,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🎨 Pure River Clay",
        impactType: "handmade",
        impactPoints: 10,
        impactText: "Supports potters cooperative in Gorakhpur and replaces 500+ disposable plastic tea cups.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 1.0,
            communityBeneficiaries: 2,
            ecoChoices: 1
        },
        description: "Reusable earthen clay cups baked in traditional wood kilns for an authentic, aromatic tea experience.",
        fullDescription: "Experience the timeless earthy aroma of Kulhad chai. Fired at optimal temperatures to make them reusable and durable while preserving the natural mineral properties of earth clay.",
        specs: {
            "Capacity": "180 ml per cup",
            "Quantity": "Set of 6 handcrafted Kulhad cups",
            "Material": "100% Natural terracotta river clay",
            "Microwave Safe": "Yes"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 22,
        name: "Herbal Cold-Pressed Hair Care & Scalp Elixir",
        category: "Community",
        categorySlug: "community",
        price: 520,
        originalPrice: 650,
        rating: 4.9,
        reviewsCount: 92,
        image: "https://images.unsplash.com/photo-1608248597359-009919f1eb1c?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1608248597359-009919f1eb1c?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🌿 Herbal Self-Help",
        impactType: "community",
        impactPoints: 12,
        impactText: "Formulated by a self-help cooperative of women wildcrafters in the Western Ghats.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 0.6,
            communityBeneficiaries: 3,
            ecoChoices: 1
        },
        description: "Traditional botanical hair oil slow-infused with Bhringraj, Amla, Brahmi, and cold-pressed coconut oil.",
        fullDescription: "Made according to ancient Ayurvedic slow-infusion methods over wood fires. Packed in reusable amber glass with a dropper cap to preserve botanical potency without synthetic preservatives.",
        specs: {
            "Volume": "100 ml",
            "Key Herbs": "Bhringraj, Fresh Amla, Hibiscus, Fenugreek, Brahmi",
            "Base Oil": "Cold-Pressed Virgin Coconut & Sesame Oil",
            "Free From": "Mineral oil, parabens, artificial fragrance"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 23,
        name: "Zero-Waste Solid Shampoo & Conditioner Bar Duo",
        category: "Eco-Friendly",
        categorySlug: "eco-friendly",
        price: 310,
        originalPrice: 420,
        rating: 4.7,
        reviewsCount: 168,
        image: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🌱 Plastic-Free Haircare",
        impactType: "eco",
        impactPoints: 11,
        impactText: "Eliminates 4 plastic liquid shampoo bottles and saves 3 liters of water per bar.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 2.8,
            communityBeneficiaries: 1,
            ecoChoices: 2
        },
        description: "Concentrated plant-based solid shampoo and conditioner bars in compostable aluminum travel tins.",
        fullDescription: "Formulated with cocoa butter, argan oil, and French green clay. Rich natural lather that gently cleanses without stripping natural oils, packed with zero plastic packaging.",
        specs: {
            "Weight": "80g Shampoo Bar + 60g Conditioner Bar",
            "Durability": "Equivalent to ~80 hair washes",
            "Packaging": "Reusable travel aluminum slider tins",
            "pH Balanced": "Yes (5.5 pH balanced)"
        },
        inStock: true,
        isFeatured: false
    },
    {
        id: 24,
        name: "Artisan Hand-Etched Brass Tea Strainer & Spoon",
        category: "Gifts",
        categorySlug: "gifts",
        price: 380,
        originalPrice: 499,
        rating: 4.9,
        reviewsCount: 84,
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
        ],
        badge: "🎁 Brass Heritage",
        impactType: "handmade",
        impactPoints: 12,
        impactText: "Supports master brass metal smiths of Moradabad practicing generational engraving techniques.",
        impactSummary: {
            learningKits: 0,
            wasteReducedKg: 0.8,
            communityBeneficiaries: 2,
            ecoChoices: 1
        },
        description: "Pure heirloom brass tea strainer with finely perforated floral mesh and matching hand-beaten leaf teaspoon.",
        fullDescription: "A luxurious and sustainable companion for loose-leaf tea rituals. Solid brass with food-safe tin lining (kalai), handcrafted by artisan metalworkers.",
        specs: {
            "Material": "100% Pure Virgin Brass",
            "Finish": "Hand-engraved floral handle with gold luster",
            "Strainer Mesh": "Fine laser-cut micro perforations",
            "Gift Box": "Included handmade mulberry paper gift sleeve"
        },
        inStock: true,
        isFeatured: false
    }
];

const IMPACT_CATEGORIES = [
    {
        id: "education",
        name: "Education",
        icon: "fa-book-open",
        color: "#2563eb",
        badge: "📚 Supports Learning",
        shortDesc: "Learning materials and educational products.",
        description: "Every purchase directly supports school kits, solar study lamps, and literacy programs for underserved students.",
        impactMetric: "Over 12,500 learning tools distributed",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "eco-friendly",
        name: "Eco-Friendly",
        icon: "fa-leaf",
        color: "#16a34a",
        badge: "🌱 Sustainable",
        shortDesc: "Products designed to reduce environmental impact.",
        description: "Biodegradable, upcycled, and zero-waste daily alternatives that conserve resources and protect ecosystems.",
        impactMetric: "18,400+ kg plastic & textile waste diverted",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "handmade",
        name: "Handmade",
        icon: "fa-paint-brush",
        color: "#d97706",
        badge: "🎨 Artisan Made",
        shortDesc: "Products created by local artisans.",
        description: "Celebrating heritage arts, ethical block-printing, traditional pottery, and handloom weaving collectives.",
        impactMetric: "450+ artisan livelihoods sustained",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "community",
        name: "Community",
        icon: "fa-handshake",
        color: "#0d9488",
        badge: "🤝 Fair Trade",
        shortDesc: "Products that support community initiatives.",
        description: "Empowering rural cooperatives, smallholder farmers, and self-help groups with direct fair-trade income.",
        impactMetric: "25,600+ community beneficiary hours",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "gifts",
        name: "Gifts",
        icon: "fa-gift",
        color: "#9333ea",
        badge: "🎁 Purposeful Gifting",
        shortDesc: "Meaningful gifts with a social impact.",
        description: "Curated gift boxes and hampers that tell inspiring stories and multiply positive impact with every gift given.",
        impactMetric: "10,000+ smiles gifted with purpose",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
    }
];

const IMPACT_STORIES_DATA = [
    {
        id: 1,
        title: "A Notebook That Started a Journey",
        category: "Education",
        categoryBadge: "📚 Education Impact",
        beneficiary: "Aarav Sharma, Grade 7 Student",
        location: "Alwar, Rajasthan",
        excerpt: "How 100 recycled notebooks opened the doors to science and curiosity for a classroom of eager dreamers.",
        fullStory: "In a small government school outside Alwar, Aarav always wanted to draw astronomical charts. Through ImpactCart's recycled stationery program, his entire class received complete annual study kits. Today, Aarav leads the school science club and dreams of becoming an astrophysicist.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        quote: "Having my own fresh notebook made me feel like my thoughts mattered. I fill every page with wonder.",
        relatedProductId: 1
    },
    {
        id: 2,
        title: "From Local Craft to Global Customer",
        category: "Handmade",
        categoryBadge: "🎨 Artisan Empowerment",
        beneficiary: "Meena Devi, Master Jute Weaver",
        location: "Murshidabad, West Bengal",
        excerpt: "Empowering a cooperative of 40 rural women to turn ancestral jute weaving into independent financial security.",
        fullStory: "Meena Devi learned jute weaving from her grandmother but lacked a fair marketplace. By joining our artisan network, Meena's cooperative now earns steady, above-market wages. She has since renovated her family home and enrolled both her daughters in college.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        quote: "Our hands have always known this art. Now our community is finally respected and rewarded for it.",
        relatedProductId: 2
    },
    {
        id: 3,
        title: "A Sustainable Choice for a Cleaner Future",
        category: "Eco-Friendly",
        categoryBadge: "🌱 Climate Action",
        beneficiary: "Green Roots Community Forest",
        location: "Wayanad, Kerala",
        excerpt: "Replacing 50,000 single-use plastic bottles through sustainable bamboo alternatives and reforesting hillsides.",
        fullStory: "Our bamboo crafts partner with regenerative bamboo farmers in Wayanad. By substituting single-use plastic bottles with insulated bamboo flasks, customer orders have helped restore native bamboo groves that prevent monsoon soil erosion.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
        quote: "When consumers choose bamboo over plastic, they heal our rivers and keep our forests alive.",
        relatedProductId: 3
    },
    {
        id: 4,
        title: "Building Better Learning Spaces",
        category: "Education",
        categoryBadge: "💡 Clean Energy & Learning",
        beneficiary: "Adarsh Vidya Kendra",
        location: "Sundarbans Delta",
        excerpt: "Bringing safe solar study lights to off-grid river islands where kerosene lamps once endangered health.",
        fullStory: "In the Sundarbans mangrove delta, grid electricity is prone to week-long disruptions. ImpactCart purchases funded solar study lamps for 280 middle schoolers, boosting evening homework completion rates by 68% without kerosene fumes.",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
        quote: "My children now read safely after sunset. No soot, no burnt fingers—just bright, clean light.",
        relatedProductId: 7
    },
    {
        id: 5,
        title: "Empowering Local Potters & Clay Keepers",
        category: "Handmade",
        categoryBadge: "🤝 Heritage Revival",
        beneficiary: "Rameshwar Kumbhar, Potter Guild",
        location: "Khurja, Uttar Pradesh",
        excerpt: "Reviving generational terracotta sculpting through eco-friendly urban planter designs and zero plastic packaging.",
        fullStory: "Generational terracotta artisans faced stiff competition from cheap imported plastic pots. ImpactCart connected Rameshwar's potters guild with mindful urban plant lovers, reviving 14 traditional kiln workshops.",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
        quote: "Clay is alive. When you plant in terracotta, you nurture nature and keep our ancient songs alive.",
        relatedProductId: 9
    },
    {
        id: 6,
        title: "Small Purchases, Meaningful Change",
        category: "Community",
        categoryBadge: "👥 Community Resilience",
        beneficiary: "Nilgiri Organic Growers Collective",
        location: "Kotagiri, Tamil Nadu",
        excerpt: "How direct fair-trade tea purchases provided healthcare insurance for 120 organic smallholder tea farmers.",
        fullStory: "Small organic tea growers often suffer from volatile auction prices. Our direct community partnership guarantees a 40% premium over fair-trade minimums, funding free health clinics and clean drinking water wells.",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        quote: "Every cup of tea enjoyed in the city brings health, dignity, and clean water to our mountains.",
        relatedProductId: 10
    }
];

// ==========================================
// 2. STATE MANAGEMENT (LOCAL STORAGE)
// ==========================================
const STORAGE_KEYS = {
    CART: "impactcart_cart_v2",
    WISHLIST: "impactcart_wishlist_v2",
    ORDERS: "impactcart_orders_v2",
    IMPACT_TOTALS: "impactcart_impact_v2"
};

class StateManager {
    static getCart() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
        } catch (e) {
            console.error("Error reading cart:", e);
            return [];
        }
    }

    static saveCart(cart) {
        try {
            localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
            StateManager.updateBadges();
            window.dispatchEvent(new Event("cartUpdated"));
        } catch (e) {
            console.error("Error saving cart:", e);
        }
    }

    static addToCart(productId, quantity = 1) {
        const cart = StateManager.getCart();
        const existingIndex = cart.findIndex(item => item.id === productId);
        const product = IMPACT_PRODUCTS.find(p => p.id === productId);

        if (!product) return false;

        if (existingIndex > -1) {
            cart[existingIndex].quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                originalPrice: product.originalPrice,
                image: product.image,
                category: product.category,
                badge: product.badge,
                impactType: product.impactType,
                impactPoints: product.impactPoints,
                impactSummary: product.impactSummary,
                quantity: quantity
            });
        }
        StateManager.saveCart(cart);
        Toast.show(`Added "${product.name}" to cart! 🛒`, "success");
        return true;
    }

    static updateCartQty(productId, quantity) {
        let cart = StateManager.getCart();
        if (quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
            Toast.show("Item removed from cart.", "info");
        } else {
            const item = cart.find(item => item.id === productId);
            if (item) item.quantity = quantity;
        }
        StateManager.saveCart(cart);
    }

    static removeFromCart(productId) {
        let cart = StateManager.getCart();
        const removed = cart.find(p => p.id === productId);
        cart = cart.filter(item => item.id !== productId);
        StateManager.saveCart(cart);
        if (removed) {
            Toast.show(`Removed "${removed.name}" from cart.`, "info");
        }
    }

    static clearCart() {
        localStorage.removeItem(STORAGE_KEYS.CART);
        StateManager.updateBadges();
        window.dispatchEvent(new Event("cartUpdated"));
    }

    static getCartCalculations() {
        const cart = StateManager.getCart();
        let subtotal = 0;
        let learningKits = 0;
        let wasteReducedKg = 0;
        let communityBeneficiaries = 0;
        let ecoChoices = 0;
        let totalImpactPoints = 0;

        cart.forEach(item => {
            const qty = item.quantity;
            subtotal += item.price * qty;
            if (item.impactSummary) {
                learningKits += (item.impactSummary.learningKits || 0) * qty;
                wasteReducedKg += (item.impactSummary.wasteReducedKg || 0) * qty;
                communityBeneficiaries += (item.impactSummary.communityBeneficiaries || 0) * qty;
                ecoChoices += (item.impactSummary.ecoChoices || 0) * qty;
            }
            totalImpactPoints += (item.impactPoints || 10) * qty;
        });

        // Shipping rule: Free if subtotal >= 999 or cart is empty, else ₹50
        const shipping = (subtotal >= 999 || subtotal === 0) ? 0 : 50;
        
        // Demo discount rule: ₹100 off if subtotal >= 1000
        const discount = subtotal >= 1000 ? 100 : 0;
        const total = Math.max(0, subtotal + shipping - discount);

        return {
            itemCount: cart.reduce((sum, item) => sum + item.quantity, 0),
            subtotal,
            shipping,
            discount,
            total,
            learningKits,
            wasteReducedKg: parseFloat(wasteReducedKg.toFixed(1)),
            communityBeneficiaries,
            ecoChoices,
            totalImpactPoints
        };
    }

    // Wishlist
    static getWishlist() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST)) || [];
        } catch (e) {
            return [];
        }
    }

    static saveWishlist(list) {
        try {
            localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(list));
            StateManager.updateBadges();
            window.dispatchEvent(new Event("wishlistUpdated"));
        } catch (e) {
            console.error(e);
        }
    }

    static isInWishlist(productId) {
        const list = StateManager.getWishlist();
        return list.includes(productId);
    }

    static toggleWishlist(productId) {
        let list = StateManager.getWishlist();
        const product = IMPACT_PRODUCTS.find(p => p.id === productId);
        let added = false;

        if (list.includes(productId)) {
            list = list.filter(id => id !== productId);
            Toast.show(`Removed "${product ? product.name : 'Item'}" from wishlist.`, "info");
        } else {
            list.push(productId);
            added = true;
            Toast.show(`Added "${product ? product.name : 'Item'}" to wishlist! ❤️`, "success");
        }
        StateManager.saveWishlist(list);
        return added;
    }

    static removeFromWishlist(productId) {
        let list = StateManager.getWishlist();
        list = list.filter(id => id !== productId);
        StateManager.saveWishlist(list);
        Toast.show("Item removed from wishlist.", "info");
    }

    // Orders
    static getOrders() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS)) || [];
        } catch (e) {
            return [];
        }
    }

    static saveOrder(orderData) {
        const orders = StateManager.getOrders();
        orders.unshift(orderData);
        localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
        
        // Also update cumulative impact
        const prevImpact = StateManager.getCumulativeImpact();
        const newImpact = {
            learningKits: prevImpact.learningKits + (orderData.impact.learningKits || 0),
            wasteReducedKg: prevImpact.wasteReducedKg + (orderData.impact.wasteReducedKg || 0),
            communityBeneficiaries: prevImpact.communityBeneficiaries + (orderData.impact.communityBeneficiaries || 0),
            ecoChoices: prevImpact.ecoChoices + (orderData.impact.ecoChoices || 0),
            totalImpactPoints: prevImpact.totalImpactPoints + (orderData.impact.totalImpactPoints || 0),
            totalOrders: prevImpact.totalOrders + 1
        };
        localStorage.setItem(STORAGE_KEYS.IMPACT_TOTALS, JSON.stringify(newImpact));
        StateManager.clearCart();
        return orderData;
    }

    static getCumulativeImpact() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEYS.IMPACT_TOTALS)) || {
                learningKits: 12,
                wasteReducedKg: 18.4,
                communityBeneficiaries: 24,
                ecoChoices: 15,
                totalImpactPoints: 78,
                totalOrders: 3
            };
        } catch (e) {
            return {
                learningKits: 12,
                wasteReducedKg: 18.4,
                communityBeneficiaries: 24,
                ecoChoices: 15,
                totalImpactPoints: 78,
                totalOrders: 3
            };
        }
    }

    static updateBadges() {
        const cart = StateManager.getCart();
        const wishlist = StateManager.getWishlist();

        const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        const wishlistCount = wishlist.length;

        document.querySelectorAll(".cart-count-badge").forEach(el => {
            el.textContent = cartCount;
            el.style.display = cartCount > 0 ? "inline-flex" : "none";
        });

        document.querySelectorAll(".wishlist-count-badge").forEach(el => {
            el.textContent = wishlistCount;
            el.style.display = wishlistCount > 0 ? "inline-flex" : "none";
        });
    }
}

// ==========================================
// 3. TOAST NOTIFICATION SYSTEM
// ==========================================
class Toast {
    static init() {
        if (!document.getElementById("toast-container")) {
            const container = document.createElement("div");
            container.id = "toast-container";
            container.className = "toast-container";
            document.body.appendChild(container);
        }
    }

    static show(message, type = "success", duration = 3500) {
        Toast.init();
        const container = document.getElementById("toast-container");
        const toast = document.createElement("div");
        toast.className = `toast-message toast-${type}`;

        const icons = {
            success: "fa-check-circle",
            info: "fa-info-circle",
            warning: "fa-exclamation-triangle",
            error: "fa-times-circle"
        };

        toast.innerHTML = `
            <i class="fas ${icons[type] || 'fa-bell'} toast-icon"></i>
            <span class="toast-text">${message}</span>
            <button class="toast-close" aria-label="Close Notification">&times;</button>
        `;

        toast.querySelector(".toast-close").addEventListener("click", () => {
            toast.classList.add("toast-hiding");
            setTimeout(() => toast.remove(), 300);
        });

        container.appendChild(toast);

        setTimeout(() => {
            if (toast.parentElement) {
                toast.classList.add("toast-hiding");
                setTimeout(() => toast.remove(), 300);
            }
        }, duration);
    }
}

// ==========================================
// 4. COMMON UI: HEADER, MOBILE NAV & SEARCH
// ==========================================
function initGlobalNavigation() {
    // Active link highlighting
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath || (currentPath === "" && href === "index.html")) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    // Mobile Hamburger Toggle
    const menuToggle = document.querySelector(".menu-toggle-btn");
    const mobileMenu = document.querySelector(".mobile-nav-drawer");
    const navOverlay = document.querySelector(".nav-overlay");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", !isExpanded);
            mobileMenu.classList.toggle("open");
            if (navOverlay) navOverlay.classList.toggle("active");
            document.body.classList.toggle("no-scroll");
        });

        if (navOverlay) {
            navOverlay.addEventListener("click", () => {
                menuToggle.setAttribute("aria-expanded", "false");
                mobileMenu.classList.remove("open");
                navOverlay.classList.remove("active");
                document.body.classList.remove("no-scroll");
            });
        }
    }

    // Search Dialog Trigger
    const searchTriggers = document.querySelectorAll(".search-trigger-btn");
    const searchModal = document.getElementById("search-modal");
    const searchInput = document.getElementById("global-search-input");
    const closeSearch = document.getElementById("close-search-modal");

    if (searchModal) {
        searchTriggers.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                searchModal.classList.add("active");
                if (searchInput) {
                    setTimeout(() => searchInput.focus(), 100);
                }
            });
        });

        if (closeSearch) {
            closeSearch.addEventListener("click", () => searchModal.classList.remove("active"));
        }

        searchModal.addEventListener("click", (e) => {
            if (e.target === searchModal) searchModal.classList.remove("active");
        });

        // Search Form Submit
        const searchForm = document.getElementById("global-search-form");
        if (searchForm && searchInput) {
            searchForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const query = searchInput.value.trim();
                if (query) {
                    window.location.href = `products.html?search=${encodeURIComponent(query)}`;
                }
            });
        }
    }

    // Initialize badges
    StateManager.updateBadges();
}

// ==========================================
// 5. REUSABLE CARD RENDERERS
// ==========================================
function renderProductCard(product) {
    const isWishlisted = StateManager.isInWishlist(product.id);
    const discountPercent = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

    return `
        <article class="product-card" data-product-id="${product.id}" data-category="${product.categorySlug}" data-price="${product.price}">
            <div class="product-badge-wrap">
                <span class="impact-badge ${product.impactType}">${product.badge}</span>
                ${discountPercent > 0 ? `<span class="discount-badge">-${discountPercent}%</span>` : ''}
            </div>
            
            <button class="wishlist-toggle-btn ${isWishlisted ? 'active' : ''}" 
                    onclick="handleWishlistClick(event, ${product.id})" 
                    aria-label="Save ${product.name} to wishlist" 
                    title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
            </button>

            <a href="product-details.html?id=${product.id}" class="product-img-link" aria-label="View details for ${product.name}">
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" />
            </a>

            <div class="product-content">
                <span class="product-category-label">${product.category}</span>
                <h3 class="product-title">
                    <a href="product-details.html?id=${product.id}">${product.name}</a>
                </h3>

                <div class="product-rating">
                    <div class="stars-wrap" aria-label="Rating: ${product.rating} out of 5 stars">
                        ${renderStarRating(product.rating)}
                    </div>
                    <span class="rating-number">(${product.reviewsCount})</span>
                </div>

                <div class="product-impact-hint">
                    <i class="fas fa-sparkles text-emerald"></i>
                    <span>+${product.impactPoints} Impact pts • ${product.impactSummary.wasteReducedKg > 0 ? `${product.impactSummary.wasteReducedKg}kg waste saved` : 'Education sponsor'}</span>
                </div>

                <div class="product-footer">
                    <div class="product-price-box">
                        <span class="current-price">₹${product.price}</span>
                        ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice}</span>` : ''}
                    </div>

                    <button class="btn btn-primary btn-sm add-to-cart-btn" onclick="handleAddToCartClick(event, ${product.id})">
                        <i class="fas fa-shopping-bag"></i> Add
                    </button>
                </div>
            </div>
        </article>
    `;
}

function renderStarRating(rating) {
    let stars = "";
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += `<i class="fas fa-star text-amber"></i>`;
        } else if (i === fullStars + 1 && hasHalf) {
            stars += `<i class="fas fa-star-half-alt text-amber"></i>`;
        } else {
            stars += `<i class="far fa-star text-gray"></i>`;
        }
    }
    return stars;
}

function handleAddToCartClick(e, productId) {
    e.preventDefault();
    e.stopPropagation();
    StateManager.addToCart(productId, 1);
}

function handleWishlistClick(e, productId) {
    e.preventDefault();
    e.stopPropagation();
    const btn = e.currentTarget;
    const added = StateManager.toggleWishlist(productId);
    
    if (added) {
        btn.classList.add("active");
        btn.querySelector("i").className = "fas fa-heart";
    } else {
        btn.classList.remove("active");
        btn.querySelector("i").className = "far fa-heart";
    }
}

// ==========================================
// 6. ANIMATED COUNTERS (HERO / IMPACT)
// ==========================================
function initStatCounters() {
    const statElements = document.querySelectorAll(".stat-number[data-target]");
    if (!statElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.getAttribute("data-target"));
                const suffix = el.getAttribute("data-suffix") || "";
                const prefix = el.getAttribute("data-prefix") || "";
                const duration = 1800; // ms
                const start = performance.now();

                function updateCounter(currentTime) {
                    const elapsed = currentTime - start;
                    const progress = Math.min(elapsed / duration, 1);
                    // Ease out quadratic
                    const easeProgress = 1 - (1 - progress) * (1 - progress);
                    const currentVal = Math.floor(easeProgress * target);

                    el.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
                    }
                }

                requestAnimationFrame(updateCounter);
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.25 });

    statElements.forEach(el => observer.observe(el));
}

// ==========================================
// 7. INITIALIZE ON DOM CONTENT LOADED
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initGlobalNavigation();
    initStatCounters();
    Toast.init();
});
