// Static catalog for VI CONNECT NETWORKSERVICES LTD.
// No backend — everything is served from this module.

import laptopPro from "@/assets/laptop-pro.jpg";
import desktopTower from "@/assets/desktop-tower.jpg";
import allInOne from "@/assets/all-in-one.jpg";
import gamingLaptop from "@/assets/gaming-laptop.jpg";
import laserPrinter from "@/assets/laser-printer.jpg";
import inkjetPrinter from "@/assets/inkjet-printer.jpg";
import multifunctionPrinter from "@/assets/multifunction-printer.jpg";
import photoPrinter from "@/assets/photo-printer.jpg";

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: string; // lucide icon name
};

export type Product = {
  id: string;
  name: string;
  category: string; // category slug
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

// Format a number as Rwandan Francs
export function formatRwf(amount: number): string {
  return `RWF ${amount.toLocaleString("en-US")}`;
}

export const products: Product[] = [
  {
    id: "laptop-pro-14",
    name: "VI Connect Pro Laptop 14\"",
    category: "computers",
    brand: "HP",
    price: 850000,
    createdAt: "2026-06-01T00:00:00.000Z",
    image: laptopPro,
    description:
      "Slim and lightweight 14-inch business laptop with Intel Core i5, 8GB RAM and 512GB SSD. Ideal for professionals, students and everyday productivity.",
    features: [
      "Intel Core i5 processor",
      "8GB DDR4 RAM, 512GB NVMe SSD",
      "14-inch Full HD display",
      "Backlit keyboard & fingerprint reader",
    ],
    specs: {
      Brand: "HP",
      Processor: "Intel Core i5 (12th gen)",
      RAM: "8GB DDR4",
      Storage: "512GB NVMe SSD",
      Display: "14\" Full HD",
      Warranty: "12 months",
    },
  },
  {
    id: "gaming-laptop-rgb",
    name: "Nitro Gaming Laptop 15\" RGB",
    category: "computers",
    brand: "Acer",
    price: 1650000,
    createdAt: "2026-06-15T00:00:00.000Z",
    image: gamingLaptop,
    description:
      "High-performance gaming laptop featuring RGB backlit keyboard, dedicated NVIDIA graphics and a fast 144Hz display for immersive gameplay.",
    features: [
      "Intel Core i7 processor",
      "16GB DDR5 RAM, 1TB SSD",
      "NVIDIA RTX 4060 graphics",
      "15.6\" 144Hz FHD display",
    ],
    specs: {
      Brand: "Acer",
      Processor: "Intel Core i7 (13th gen)",
      GPU: "NVIDIA RTX 4060 8GB",
      RAM: "16GB DDR5",
      Storage: "1TB NVMe SSD",
      Warranty: "12 months",
    },
  },
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
  {
    id: "laser-printer-mono",
    name: "Monochrome Laser Printer",
    category: "printers",
    brand: "HP",
    price: 220000,
    createdAt: "2026-06-10T00:00:00.000Z",
    image: laserPrinter,
    description:
      "Fast, reliable monochrome laser printer for busy offices. Delivers crisp text at up to 22 pages per minute.",
    features: [
      "Print speed up to 22 ppm",
      "Automatic duplex printing",
      "USB & Wi-Fi connectivity",
      "Low cost per page",
    ],
    specs: {
      Brand: "HP",
      Type: "Monochrome Laser",
      Speed: "22 ppm",
      Connectivity: "USB, Wi-Fi",
      Duplex: "Yes (automatic)",
      Warranty: "12 months",
    },
  },
  {
    id: "inkjet-color-mfp",
    name: "Color Inkjet Multifunction Printer",
    category: "printers",
    brand: "HP",
    price: 310000,
    createdAt: "2026-06-25T00:00:00.000Z",
    image: inkjetPrinter,
    description:
      "Compact color inkjet that prints, scans and copies with vibrant results. Perfect for home offices and small businesses.",
    features: [
      "Print, scan & copy",
      "Vivid color output",
      "Touchscreen control panel",
      "Wi-Fi, USB and mobile printing",
    ],
    specs: {
      Brand: "HP",
      Type: "Color Inkjet MFP",
      Functions: "Print, Scan, Copy",
      Connectivity: "Wi-Fi, USB, AirPrint",
      Warranty: "12 months",
    },
  },
  {
    id: "multifunction-office",
    name: "Office Multifunction Printer A4",
    category: "printers",
    brand: "Canon",
    price: 480000,
    createdAt: "2026-04-18T00:00:00.000Z",
    image: multifunctionPrinter,
    description:
      "Robust A4 multifunction printer with automatic document feeder, ideal for shared use in schools and busy offices.",
    features: [
      "Print, scan, copy & fax",
      "Automatic document feeder (ADF)",
      "Duplex printing & scanning",
      "Ethernet & Wi-Fi networking",
    ],
    specs: {
      Brand: "Canon",
      Type: "A4 Laser Multifunction",
      Functions: "Print, Scan, Copy, Fax",
      Connectivity: "Ethernet, Wi-Fi, USB",
      Warranty: "12 months",
    },
  },
  {
    id: "photo-printer-compact",
    name: "Compact Photo Printer",
    category: "printers",
    brand: "Epson",
    price: 195000,
    createdAt: "2026-03-10T00:00:00.000Z",
    image: photoPrinter,
    description:
      "Portable photo printer that produces lab-quality prints at home. Wireless printing straight from your phone or camera.",
    features: [
      "Lab-quality photo prints",
      "Wireless & Bluetooth printing",
      "Compact, portable design",
      "Direct printing from mobile devices",
    ],
    specs: {
      Brand: "Epson",
      Type: "Compact Photo Printer",
      Connectivity: "Wi-Fi, Bluetooth, USB",
      "Photo Size": "Up to 6x8 inch",
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
