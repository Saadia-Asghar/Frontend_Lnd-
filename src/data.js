export const categories = [
  {
    id: "textbooks",
    name: "Textbooks",
    description: "Coursebooks, study guides, and exam prep manuals",
    icon: "BookOpen",
    count: 24
  },
  {
    id: "electronics",
    name: "Electronics",
    description: "Laptops, tablets, calculators, monitors, and cables",
    icon: "Laptop",
    count: 18
  },
  {
    id: "dorm-living",
    name: "Dorm & Living",
    description: "Mini-fridges, lamps, storage bins, chairs, and decor",
    icon: "Home",
    count: 15
  },
  {
    id: "clothing",
    name: "Campus Wear",
    description: "Hoodies, varsity jackets, winter coats, and sportswear",
    icon: "Shirt",
    count: 12
  },
  {
    id: "transport",
    name: "Bikes & Transit",
    description: "Bicycles, skateboards, e-scooters, and locks",
    icon: "Bike",
    count: 9
  },
  {
    id: "supplies",
    name: "School Supplies",
    description: "Lab kits, drafting tools, backpacks, and stationary",
    icon: "GraduationCap",
    count: 14
  }
];

export const initialItems = [
  {
    id: "item-1",
    title: "Calculus: Early Transcendentals (8th Ed) - Stewart",
    price: 45,
    categoryId: "textbooks",
    categoryName: "Textbooks",
    condition: "Used - Like New",
    isNew: false,
    campusLocation: "North Hall Library Quad",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    description: "Hardcover in pristine shape with no highlighting or folded pages. Mandatory for MATH 151 and 152. Includes untouched webaccess code card in back sleeve.",
    seller: {
      name: "Alex Chen",
      email: "alex.chen@campus.edu",
      phone: "+1 (555) 234-8901",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      responseTime: "< 15 mins",
      rating: "4.9",
      campusRole: "Junior • Computer Science"
    },
    createdAt: "2 hours ago"
  },
  {
    id: "item-2",
    title: "iPad Air 4th Gen 64GB Space Gray + Apple Pencil 2",
    price: 320,
    categoryId: "electronics",
    categoryName: "Electronics",
    condition: "Used - Good",
    isNew: false,
    campusLocation: "Engineering Hall Lounge",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    description: "Great battery health (92%). Matte paper-feel screen protector installed from day one. Includes genuine Apple Pencil 2nd gen and USB-C magnetic braided cable.",
    seller: {
      name: "Sarah Miller",
      email: "s.miller@campus.edu",
      phone: "+1 (555) 412-9988",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      responseTime: "< 30 mins",
      rating: "5.0",
      campusRole: "Senior • Architecture"
    },
    createdAt: "4 hours ago"
  },
  {
    id: "item-3",
    title: "Foldable LED Dorm Desk Lamp with Qi Wireless Charging",
    price: 18,
    categoryId: "dorm-living",
    categoryName: "Dorm & Living",
    condition: "New",
    isNew: true,
    campusLocation: "Maple Residence Hall",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    description: "Brand new in box! Multi-temperature LED light with touch dimmer and built-in 10W wireless charging pad in the weighted base. Ideal for late night dorm study sessions.",
    seller: {
      name: "Jordan Lee",
      email: "jordan.lee@campus.edu",
      phone: "+1 (555) 678-1122",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      responseTime: "< 1 hour",
      rating: "4.8",
      campusRole: "Sophomore • Biology"
    },
    createdAt: "6 hours ago"
  },
  {
    id: "item-4",
    title: "TI-84 Plus CE Color Graphing Calculator with Slide Case",
    price: 65,
    categoryId: "electronics",
    categoryName: "Electronics",
    condition: "Used - Like New",
    isNew: false,
    campusLocation: "Science & Tech Building 2",
    image: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=800&q=80",
    description: "Rechargeable battery holds charge for weeks. Approved for ACT/SAT/AP and all university calculus/stats courses. Includes charging cable and protective teal case.",
    seller: {
      name: "Emily Davis",
      email: "emily.davis@campus.edu",
      phone: "+1 (555) 890-3344",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      responseTime: "< 10 mins",
      rating: "4.9",
      campusRole: "Graduate Student • Economics"
    },
    createdAt: "Just now"
  },
  {
    id: "item-5",
    title: "University Varsity Heavyweight Fleece Hoodie (Size M)",
    price: 25,
    categoryId: "clothing",
    categoryName: "Campus Wear",
    condition: "New",
    isNew: true,
    campusLocation: "Student Recreation Center",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    description: "Unworn official university heavyweight cotton fleece hoodie. Still with original campus bookstore tags attached. Ultra warm for winter semesters.",
    seller: {
      name: "Marcus Brody",
      email: "m.brody@campus.edu",
      phone: "+1 (555) 321-4455",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      responseTime: "< 2 hours",
      rating: "4.7",
      campusRole: "Freshman • Business Administration"
    },
    createdAt: "1 day ago"
  },
  {
    id: "item-6",
    title: "Trek FX 2 Commuter Bike (18-Speed) + Kryptonite U-Lock",
    price: 180,
    categoryId: "transport",
    categoryName: "Bikes & Transit",
    condition: "Used - Good",
    isNew: false,
    campusLocation: "West Campus Bike Hub",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80",
    description: "Recently tuned gears and brake pads at Campus Cycle. Smooth ride with lightweight aluminum frame and puncture-resistant tires. Giving away heavy duty U-lock for free.",
    seller: {
      name: "Daniel Kim",
      email: "d.kim@campus.edu",
      phone: "+1 (555) 765-4321",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
      responseTime: "< 20 mins",
      rating: "5.0",
      campusRole: "Senior • Mechanical Engineering"
    },
    createdAt: "1 day ago"
  },
  {
    id: "item-7",
    title: "EnergyStar Compact Mini Fridge with Separate Freezer",
    price: 75,
    categoryId: "dorm-living",
    categoryName: "Dorm & Living",
    condition: "Used - Good",
    isNew: false,
    campusLocation: "Tower B East Wing",
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
    description: "3.2 cu ft double door fridge and true freezer. Kept very clean, quiet compressor, works great in small dorms. Can help carry down elevator to your car or cart.",
    seller: {
      name: "Chloe Bennett",
      email: "c.bennett@campus.edu",
      phone: "+1 (555) 998-7711",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      responseTime: "< 45 mins",
      rating: "4.8",
      campusRole: "Senior • Psychology"
    },
    createdAt: "2 days ago"
  },
  {
    id: "item-8",
    title: "Organic Chemistry 240-Piece Molecular Model Set",
    price: 20,
    categoryId: "supplies",
    categoryName: "School Supplies",
    condition: "Used - Like New",
    isNew: false,
    campusLocation: "Chemistry Pavilion 104",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    description: "Complete set with every atom, bond link, and link-removal tool. Essential for stereochemistry visualization in CHEM 210/220. Comes in snap-shut plastic organizer box.",
    seller: {
      name: "Priya Patel",
      email: "priya.p@campus.edu",
      phone: "+1 (555) 543-2199",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      responseTime: "< 15 mins",
      rating: "5.0",
      campusRole: "Junior • Pre-Med / Biochemistry"
    },
    createdAt: "2 days ago"
  }
];
