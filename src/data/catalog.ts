// Static catalog for VI CONNECT NETWORKSERVICES LTD.
// No backend — everything is served from this module.

import laptopPro from "@/assets/laptop-pro.jpg";
import desktopTower from "@/assets/desktop-tower.jpg";
import allInOne from "@/assets/all-in-one.jpg";
// import gamingLaptop from "@/assets/gaming-laptop.jpg";

// Printer product images (CDN assets)
import hpP2055dImg from "@/assets/printers/HP_LaserJet_P2055d_Printer.jpg";
import hpM401Img from "@/assets/printers/HP_LaserJet_Pro_M401dn.jpg";
import hp3101fdweImg from "@/assets/printers/HP_LaserJet_Pro MFP_3101fdwe.jpg";
import epsonL805 from "@/assets/printers/Epson_L805_Wi-Fi_Photo_Printer.jpeg";
import epsonL3210 from "@/assets/printers/Epson_EcoTank_L3210_Multifunction.jpg";

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number; // RWF
  createdAt: string;
  image: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
};

export const categories: Category[] = [
  {
    slug: "computers",
    name: "Computers",
    description: "Laptops, desktops and all-in-one PCs for work, study and gaming.",
    icon: "Laptop",
  },
  {
    slug: "printers",
    name: "Printers",
    description: "Laser, inkjet and multifunction printers for home and office.",
    icon: "Printer",
  },
];

export function formatRwf(amount: number): string {
  return `RWF ${amount.toLocaleString("en-US")}`;
}

export const products: Product[] = [
  // ===== COMPUTERS =====
  {
    id: "hp-elitebook-14",
    name: "HP EliteBook 840 G10 14\"",
    category: "computers",
    brand: "HP",
    price: 950000,
    createdAt: "2026-06-01T00:00:00.000Z",
    image: laptopPro,
    description:
      "Business-class HP EliteBook with Intel Core i5, 16GB RAM and 512GB SSD. Sleek aluminum chassis, long battery life and enterprise-grade security.",
    features: [
      "Intel Core i5 (13th gen)",
      "16GB DDR5 RAM, 512GB NVMe SSD",
      "14\" Full HD IPS anti-glare display",
      "Backlit keyboard & fingerprint reader",
    ],
    specs: {
      Brand: "HP",
      Model: "EliteBook 840 G10",
      Processor: "Intel Core i5 (13th gen)",
      RAM: "16GB DDR5",
      Storage: "512GB NVMe SSD",
      Display: "14\" FHD IPS",
      Warranty: "12 months",
    },
  },
  {
    id: "hp-pavilion-15",
    name: "HP Pavilion 15 Laptop",
    category: "computers",
    brand: "HP",
    price: 780000,
    createdAt: "2026-06-05T00:00:00.000Z",
    image: laptopPro,
    description:
      "Stylish HP Pavilion 15 for everyday productivity, study and entertainment. Powered by AMD Ryzen 5 with fast SSD storage.",
    features: [
      "AMD Ryzen 5 processor",
      "8GB DDR4 RAM, 512GB SSD",
      "15.6\" Full HD micro-edge display",
      "Wi-Fi 6 & Bluetooth 5",
    ],
    specs: {
      Brand: "HP",
      Model: "Pavilion 15",
      Processor: "AMD Ryzen 5",
      RAM: "8GB DDR4",
      Storage: "512GB SSD",
      Display: "15.6\" FHD",
      Warranty: "12 months",
    },
  },
  {
    id: "lenovo-thinkpad-e14",
    name: "Lenovo ThinkPad E14",
    category: "computers",
    brand: "Lenovo",
    price: 890000,
    createdAt: "2026-05-28T00:00:00.000Z",
    image: allInOne,
    description:
      "Rugged Lenovo ThinkPad E14 business laptop with legendary keyboard, MIL-STD durability and Intel Core i5 performance.",
    features: [
      "Intel Core i5 (13th gen)",
      "16GB DDR4 RAM, 512GB SSD",
      "14\" Full HD IPS display",
      "Spill-resistant TrackPoint keyboard",
    ],
    specs: {
      Brand: "Lenovo",
      Model: "ThinkPad E14",
      Processor: "Intel Core i5",
      RAM: "16GB DDR4",
      Storage: "512GB SSD",
      Display: "14\" FHD IPS",
      Warranty: "12 months",
    },
  },
  {
    id: "lenovo-ideapad-3",
    name: "Lenovo IdeaPad 3 15\"",
    category: "computers",
    brand: "Lenovo",
    price: 650000,
    createdAt: "2026-05-15T00:00:00.000Z",
    image: laptopPro,
    description:
      "Affordable Lenovo IdeaPad 3 with modern design, fast SSD and comfortable full-size keyboard — perfect for students and home use.",
    features: [
      "Intel Core i3 processor",
      "8GB DDR4 RAM, 256GB SSD",
      "15.6\" Full HD display",
      "Rapid Charge battery",
    ],
    specs: {
      Brand: "Lenovo",
      Model: "IdeaPad 3",
      Processor: "Intel Core i3",
      RAM: "8GB DDR4",
      Storage: "256GB SSD",
      Display: "15.6\" FHD",
      Warranty: "12 months",
    },
  },
  // {
  //   id: "gaming-laptop-rgb",
  //   name: "Nitro Gaming Laptop 15\" RGB",
  //   category: "computers",
  //   brand: "Acer",
  //   price: 1650000,
  //   createdAt: "2026-06-15T00:00:00.000Z",
  //   image: gamingLaptop,
  //   description:
  //     "High-performance gaming laptop featuring RGB backlit keyboard, dedicated NVIDIA graphics and a fast 144Hz display for immersive gameplay.",
  //   features: [
  //     "Intel Core i7 processor",
  //     "16GB DDR5 RAM, 1TB SSD",
  //     "NVIDIA RTX 4060 graphics",
  //     "15.6\" 144Hz FHD display",
  //   ],
  //   specs: {
  //     Brand: "Acer",
  //     Processor: "Intel Core i7 (13th gen)",
  //     GPU: "NVIDIA RTX 4060 8GB",
  //     RAM: "16GB DDR5",
  //     Storage: "1TB NVMe SSD",
  //     Warranty: "12 months",
  //   },
  // },
  {
    id: "desktop-tower-i5",
    name: "Office Desktop Tower i5",
    category: "computers",
    brand: "Dell",
    price: 620000,
    createdAt: "2026-05-20T00:00:00.000Z",
    image: desktopTower,
    description:
      "Reliable desktop tower for offices and small businesses. Comes ready to use with a solid state drive and Windows-ready configuration.",
    features: [
      "Intel Core i5 processor",
      "8GB DDR4 RAM, 256GB SSD + 1TB HDD",
      "Multiple USB & HDMI ports",
      "Energy-efficient design",
    ],
    specs: {
      Brand: "Dell",
      Processor: "Intel Core i5",
      RAM: "8GB DDR4",
      Storage: "256GB SSD + 1TB HDD",
      Ports: "USB 3.0, HDMI, VGA, RJ45",
      Warranty: "12 months",
    },
  },
  {
    id: "all-in-one-24",
    name: "All-in-One PC 24\"",
    category: "computers",
    brand: "Lenovo",
    price: 980000,
    createdAt: "2026-05-05T00:00:00.000Z",
    image: allInOne,
    description:
      "Space-saving all-in-one desktop with a crisp 24-inch display, integrated speakers and wireless keyboard & mouse combo.",
    features: [
      "24\" Full HD IPS display",
      "Intel Core i5, 8GB RAM, 512GB SSD",
      "Integrated webcam & speakers",
      "Wireless keyboard + mouse included",
    ],
    specs: {
      Brand: "Lenovo",
      Display: "24\" Full HD IPS",
      Processor: "Intel Core i5",
      RAM: "8GB DDR4",
      Storage: "512GB SSD",
      Warranty: "12 months",
    },
  },

  // ===== PRINTERS =====
  {
    id: "hp-laserjet-p2055d",
    name: "HP LaserJet P2055d Printer",
    category: "printers",
    brand: "HP",
    price: 280000,
    createdAt: "2026-06-20T00:00:00.000Z",
    image: hpP2055dImg,
    description:
      "Fast and dependable monochrome laser printer with automatic duplex printing. Ideal for busy small and medium offices.",
    features: [
      "Print speed up to 33 ppm",
      "Automatic duplex printing",
      "1200 x 1200 dpi resolution",
      "USB & parallel connectivity",
    ],
    specs: {
      Brand: "HP",
      Model: "LaserJet P2055d",
      Type: "Monochrome Laser",
      Speed: "33 ppm",
      Duplex: "Yes (automatic)",
      Warranty: "12 months",
    },
  },
  {
    id: "hp-laserjet-pro-m401",
    name: "HP LaserJet Pro M401dn",
    category: "printers",
    brand: "HP",
    price: 340000,
    createdAt: "2026-06-18T00:00:00.000Z",
    image: hpM401Img,
    description:
      "Business monochrome laser printer with fast first page out, network connectivity and low cost per page thanks to HP 80A toners.",
    features: [
      "Print speed up to 35 ppm",
      "Ethernet networking & USB",
      "Automatic duplex printing",
      "Uses HP 80A (CF280A) toner",
    ],
    specs: {
      Brand: "HP",
      Model: "LaserJet Pro M401dn",
      Type: "Monochrome Laser",
      Speed: "35 ppm",
      Connectivity: "Ethernet, USB",
      Warranty: "12 months",
    },
  },
  {
    id: "hp-laserjet-pro-3101fdwe",
    name: "HP LaserJet Pro MFP 3101fdwe",
    category: "printers",
    brand: "HP",
    price: 520000,
    createdAt: "2026-06-15T00:00:00.000Z",
    image: hp3101fdweImg,
    description:
      "All-in-one monochrome laser MFP with print, scan, copy and fax. Wireless connectivity and HP+ smart features for modern offices.",
    features: [
      "Print, scan, copy & fax",
      "Automatic document feeder (ADF)",
      "Wi-Fi, Ethernet & USB",
      "HP Smart app support",
    ],
    specs: {
      Brand: "HP",
      Model: "LaserJet Pro MFP 3101fdwe",
      Functions: "Print, Scan, Copy, Fax",
      Connectivity: "Wi-Fi, Ethernet, USB",
      Warranty: "12 months",
    },
  },
  // {
  //   id: "hp-laserjet-mfp-m128fn",
  //   name: "HP LaserJet Pro MFP M128fn",
  //   category: "printers",
  //   brand: "HP",
  //   price: 420000,
  //   createdAt: "2026-06-10T00:00:00.000Z",
  //   image: hpM128fn.url,
  //   description:
  //     "Compact monochrome all-in-one printer that prints, scans, copies and faxes over Ethernet. Great for small offices and shops.",
  //   features: [
  //     "Print, scan, copy, fax",
  //     "Automatic document feeder",
  //     "Ethernet networking",
  //     "Print speed up to 20 ppm",
  //   ],
  //   specs: {
  //     Brand: "HP",
  //     Model: "LaserJet Pro MFP M128fn",
  //     Functions: "Print, Scan, Copy, Fax",
  //     Connectivity: "Ethernet, USB",
  //     Warranty: "12 months",
  //   },
  // },
  // {
  //   id: "hp-deskjet-2875",
  //   name: "HP DeskJet Ink Advantage 2875",
  //   category: "printers",
  //   brand: "HP",
  //   price: 145000,
  //   createdAt: "2026-06-08T00:00:00.000Z",
  //   image: hp2875.url,
  //   description:
  //     "Affordable wireless all-in-one inkjet — print, scan and copy in vibrant color from any device. Perfect for home and study.",
  //   features: [
  //     "Wireless print, scan, copy",
  //     "Compact home design",
  //     "Mobile printing via HP Smart",
  //     "Vibrant color output",
  //   ],
  //   specs: {
  //     Brand: "HP",
  //     Model: "DeskJet Ink Advantage 2875",
  //     Type: "Color Inkjet AIO",
  //     Connectivity: "Wi-Fi, USB",
  //     Warranty: "12 months",
  //   },
  // },
  // {
  //   id: "hp-color-laserjet-m479fdw",
  //   name: "HP Color LaserJet Pro MFP M479fdw",
  //   category: "printers",
  //   brand: "HP",
  //   price: 1250000,
  //   createdAt: "2026-05-30T00:00:00.000Z",
  //   image: hpM479fdw.url,
  //   description:
  //     "Powerful color laser multifunction printer with print, scan, copy, fax and email — dual-band Wi-Fi for busy workgroups.",
  //   features: [
  //     "Color laser print, scan, copy, fax, email",
  //     "Dual-band Wi-Fi & Ethernet",
  //     "Automatic duplex printing",
  //     "Touchscreen control panel",
  //   ],
  //   specs: {
  //     Brand: "HP",
  //     Model: "Color LaserJet Pro MFP M479fdw",
  //     Type: "Color Laser MFP",
  //     Functions: "Print, Scan, Copy, Fax, Email",
  //     Connectivity: "Wi-Fi (dual-band), Ethernet, USB",
  //     Warranty: "12 months",
  //   },
  // },
  // {
  //   id: "hp-laserjet-pro-m428fdw",
  //   name: "HP LaserJet Pro MFP M428fdw",
  //   category: "printers",
  //   brand: "HP",
  //   price: 780000,
  //   createdAt: "2026-05-25T00:00:00.000Z",
  //   image: hpM428fdw.url,
  //   description:
  //     "Wireless A4 monochrome laser MFP with 38 ppm speed. Print, copy, scan, fax and email — built for heavy office workflows.",
  //   features: [
  //     "38 ppm print speed",
  //     "Print, copy, scan, fax, email",
  //     "Wi-Fi, Ethernet & USB",
  //     "Automatic duplex + ADF",
  //   ],
  //   specs: {
  //     Brand: "HP",
  //     Model: "LaserJet Pro MFP M428fdw",
  //     Type: "Monochrome Laser MFP",
  //     Speed: "38 ppm",
  //     Connectivity: "Wi-Fi, Ethernet, USB",
  //     Warranty: "12 months",
  //   },
  // },
  {
    id: "epson-l805",
    name: "Epson L805 Wi-Fi Photo Printer",
    category: "printers",
    brand: "Epson",
    price: 380000,
    createdAt: "2026-05-18T00:00:00.000Z",
    image: epsonL805,
    description:
      "Single-function 6-color ink tank photo printer. Wireless printing with borderless, lab-quality photos at low cost per print.",
    features: [
      "6-color ink tank system",
      "Borderless photo printing",
      "Wi-Fi & USB connectivity",
      "Low cost per photo",
    ],
    specs: {
      Brand: "Epson",
      Model: "L805",
      Type: "6-Color Photo Ink Tank",
      Connectivity: "Wi-Fi, USB",
      Warranty: "12 months",
    },
  },
  {
    id: "epson-l3210",
    name: "Epson EcoTank L3210 Multifunction",
    category: "printers",
    brand: "Epson",
    price: 210000,
    createdAt: "2026-05-12T00:00:00.000Z",
    image: epsonL3210,
    description:
      "Cost-effective EcoTank all-in-one — print, scan and copy with ultra-low running costs and high-yield refillable ink tanks.",
    features: [
      "Print, scan, copy",
      "Refillable EcoTank system",
      "Up to 3 years of ink included",
      "Compact home & office design",
    ],
    specs: {
      Brand: "Epson",
      Model: "EcoTank L3210",
      Type: "Color Ink Tank AIO",
      Connectivity: "USB",
      Warranty: "12 months",
    },
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelated(p: Product, limit = 4): Product[] {
  return products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, limit);
}

export function productsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export const brands = Array.from(new Set(products.map((p) => p.brand))).sort();
