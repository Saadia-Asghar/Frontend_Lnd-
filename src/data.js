export const categories = [
  {
    id: "clothing",
    name: "Clothing & Jewelry",
    shortName: "Clothing",
    description: "Hoodies, sneakers, jackets, and accessories",
    icon: "Shirt",
    color: "#F97316", // Warm orange matching the shot's t-shirt
    bgLight: "#FFF7ED",
    count: 28
  },
  {
    id: "books",
    name: "Books",
    shortName: "Books",
    description: "Textbooks, course guides, and exam manuals",
    icon: "BookOpen",
    color: "#3B82F6", // Blue matching the books
    bgLight: "#EFF6FF",
    count: 42
  },
  {
    id: "music-games",
    name: "Music & Games",
    shortName: "Games",
    description: "Consoles, controllers, games, and headphones",
    icon: "Gamepad2",
    color: "#6366F1", // Indigo matching controller
    bgLight: "#EEF2FF",
    count: 16
  },
  {
    id: "electronics",
    name: "Electronics",
    shortName: "Electronics",
    description: "Laptops, iPads, chargers, and calculators",
    icon: "Laptop",
    color: "#0EA5E9", // Sky blue
    bgLight: "#F0F9FF",
    count: 35
  },
  {
    id: "dorm-living",
    name: "Dorm & Living",
    shortName: "Dorm",
    description: "Desk lamps, storage, mini-fridges, and decor",
    icon: "Home",
    color: "#10B981", // Emerald
    bgLight: "#ECFDF5",
    count: 19
  },
  {
    id: "transport",
    name: "Bikes & Transit",
    shortName: "Bikes",
    description: "Bicycles, skateboards, and campus transit",
    icon: "Bike",
    color: "#8B5CF6", // Violet
    bgLight: "#F5F3FF",
    count: 11
  }
];

export const initialItems = [
  {
    id: "item-1",
    title: "Adidas Shoes for Men",
    subtitle: "Ultraboost 20 Triple Black",
    price: 219,
    size: "US 10.5",
    categoryId: "clothing",
    categoryName: "Clothing & Jewelry",
    condition: "Used - Like New",
    isNew: false,
    campusLocation: "North Hall Quad",
    // Clean sneaker matching Dribbble shot
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
    description: "Authentic Adidas Ultraboost 20 in primeknit black with iridescent boost accents. Worn only twice on campus indoor tracks. Sole traction is 99% intact with original box.",
    seller: {
      name: "Marcus Vance",
      email: "marcus.v@campus.edu",
      phone: "+1 (555) 234-8901",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      responseTime: "< 10 mins",
      rating: "4.9",
      campusRole: "Junior • Sports Science"
    },
    createdAt: "2 hours ago",
    timeAgo: "2 hours ago",
    isLiked: true
  },
  {
    id: "item-2",
    title: "Adidas jacket for Men",
    subtitle: "Trefoil Classic Track Jacket",
    price: 199,
    size: "M",
    categoryId: "clothing",
    categoryName: "Clothing & Jewelry",
    condition: "New",
    isNew: true,
    campusLocation: "Campus Recreation Center",
    // Clean black hoodie/jacket matching Dribbble shot
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=80",
    description: "Brand new Adidas Originals Trefoil fleece jacket in black with signature white trefoil print. Never worn with retail tags still attached. Size Medium fits true to size.",
    seller: {
      name: "Sarah Miller",
      email: "s.miller@campus.edu",
      phone: "+1 (555) 412-9988",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      responseTime: "< 25 mins",
      rating: "5.0",
      campusRole: "Senior • Business"
    },
    createdAt: "3 hours ago",
    timeAgo: "3 hours ago",
    isLiked: false
  },
  {
    id: "item-3",
    title: "Button-Down Denim Jacket",
    subtitle: "Vintage Washed Cotton Denim",
    price: 48,
    size: "L",
    categoryId: "clothing",
    categoryName: "Clothing & Jewelry",
    condition: "Used - Good",
    isNew: false,
    campusLocation: "Arts & Humanities Courtyard",
    // Clean denim jacket matching Dribbble shot
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=700&q=80",
    description: "Classic light wash vintage denim jacket. Brass buttons with dual chest pockets. Great casual layer for cool campus evenings between dorms and library.",
    seller: {
      name: "Jordan Lee",
      email: "jordan.l@campus.edu",
      phone: "+1 (555) 678-1122",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      responseTime: "< 1 hour",
      rating: "4.8",
      campusRole: "Sophomore • Graphic Design"
    },
    createdAt: "4 hours ago",
    timeAgo: "4 hours ago",
    isLiked: false
  },
  {
    id: "item-4",
    title: "Adidas NMD_R1 Runner for Men",
    subtitle: "Core Black with Solar Red Plugs",
    price: 140,
    size: "US 9.5",
    categoryId: "clothing",
    categoryName: "Clothing & Jewelry",
    condition: "Used - Like New",
    isNew: false,
    campusLocation: "Engineering Building Lobby",
    // Clean sneaker matching bottom right of Dribbble shot
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=700&q=80",
    description: "Adidas NMD R1 runner with iconic red EVA midsole stabilizers. Primeknit breathable upper. Clean condition, sanitized, ready for immediate campus pickup.",
    seller: {
      name: "Daniel Kim",
      email: "d.kim@campus.edu",
      phone: "+1 (555) 765-4321",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
      responseTime: "< 15 mins",
      rating: "5.0",
      campusRole: "Senior • Mechanical Engineering"
    },
    createdAt: "5 hours ago",
    timeAgo: "5 hours ago",
    isLiked: true
  },
  {
    id: "item-5",
    title: "Stewart Calculus: Early Transcendentals",
    subtitle: "8th Edition Hardcover + WebAssign Card",
    price: 45,
    size: "Book",
    categoryId: "books",
    categoryName: "Books",
    condition: "Used - Like New",
    isNew: false,
    campusLocation: "Science & Engineering Library",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
    description: "Hardcover in pristine shape with crisp pages and no highlighter markings. Mandatory text for MATH 151 and 152. Handover at library front desk.",
    seller: {
      name: "Alex Chen",
      email: "alex.c@campus.edu",
      phone: "+1 (555) 890-3344",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      responseTime: "< 20 mins",
      rating: "4.9",
      campusRole: "Junior • Computer Science"
    },
    createdAt: "6 hours ago",
    timeAgo: "6 hours ago",
    isLiked: false
  },
  {
    id: "item-6",
    title: "iPad Air 4th Gen 64GB + Apple Pencil 2",
    subtitle: "Space Gray with Magnetic Folio Case",
    price: 320,
    size: "64GB",
    categoryId: "electronics",
    categoryName: "Electronics",
    condition: "Used - Good",
    isNew: false,
    campusLocation: "Student Union Lounge",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80",
    description: "Battery health at 92%. Matte screen protector applied. Comes with 2nd gen Apple Pencil and magnetic folio case. Perfect for digital campus note-taking.",
    seller: {
      name: "Emily Davis",
      email: "e.davis@campus.edu",
      phone: "+1 (555) 321-4455",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      responseTime: "< 30 mins",
      rating: "4.8",
      campusRole: "Graduate Student • Economics"
    },
    createdAt: "8 hours ago",
    timeAgo: "8 hours ago",
    isLiked: false
  },
  {
    id: "item-7",
    title: "TI-84 Plus CE Color Graphing Calculator",
    subtitle: "Mint Color Edition + Slide Case",
    price: 65,
    size: "Standard",
    categoryId: "electronics",
    categoryName: "Electronics",
    condition: "Used - Like New",
    isNew: false,
    campusLocation: "Math & Physics Building",
    image: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=700&q=80",
    description: "Rechargeable lithium battery holds charge for over a month. Preloaded with periodic table and stats apps. Approved for all university exams.",
    seller: {
      name: "Priya Patel",
      email: "priya.p@campus.edu",
      phone: "+1 (555) 543-2199",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      responseTime: "< 15 mins",
      rating: "5.0",
      campusRole: "Junior • Pre-Med"
    },
    createdAt: "12 hours ago",
    timeAgo: "12 hours ago",
    isLiked: true
  },
  {
    id: "item-8",
    title: "Foldable LED Dorm Desk Lamp",
    subtitle: "Touch Dimmer + Qi Wireless Charger",
    price: 18,
    size: "Compact",
    categoryId: "dorm-living",
    categoryName: "Dorm & Living",
    condition: "New",
    isNew: true,
    campusLocation: "Maple Residence Hall",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",
    description: "Brand new in box! 3 lighting modes (warm, cool, neutral) with built-in 10W wireless charging pad in the base. Ideal for quiet night studying in dorms.",
    seller: {
      name: "Chloe Bennett",
      email: "c.bennett@campus.edu",
      phone: "+1 (555) 998-7711",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      responseTime: "< 45 mins",
      rating: "4.8",
      campusRole: "Senior • Psychology"
    },
    createdAt: "1 day ago",
    timeAgo: "1 day ago",
    isLiked: false
  }
];
