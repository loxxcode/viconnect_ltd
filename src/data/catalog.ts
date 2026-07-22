// Static catalog for VI CONNECT NETWORKSERVICES LTD.
// No backend — everything is served from this module.

import laptopPro from "@/assets/laptop_pro.jpg";
import desktopTower from "@/assets/desktop-tower.jpg";
import allInOne from "@/assets/all-in-one.jpg";
import Smart_LED_Bulbs from "@/assets/Smart_LED_Bulbs.jpeg";
import HP_Pavilion_15_Laptop from "@/assets/HP_Pavilion_15_Laptop.jpg";
import Lenovo_IdeaPad_315 from "@/assets/Lenovo_IdeaPad_315.jpg";
import cartridgeCanonToner057 from "@/assets/Cartridge_Canon_Toner057.jpg";
import cashMachine from "@/assets/Cash_machine.jpeg";
import desktopComputer from "@/assets/Desktop_computer.jpeg";
import usbTypeCHub from "@/assets/usb_typec_hub.jpg";
import wifiRouter from "@/assets/Wifi_router.jpeg";
import jblHeadphone from "@/assets/JBL_Headphone.jpg";
import rfidReader from "@/assets/rfid_reader.jpeg";
import bluetoothMouse from "@/assets/bluetoothUsbMouse.jpg";
import allTypeOfComputerBatteriesandItsCables from "@/assets/allTypeOfComputerBatteriesandItsCables.jpg";
import smartVideoKit from "@/assets/smart_video_kit.jpg";
import smartNetCamera from "@/assets/smart_net_camera.jpg";
import televisionHdColorKit from "@/assets/telivision_hd_colorkit.jpg";
import logitechC270HdWebcam from "@/assets/Logitech_C270_HdWebcam.jpg";
import smartWifiCamera from "@/assets/Smart_wifi_Camera.jpg";
import BenQProjector from "@/assets/BenQProjector.jpg";
import AcerProjector from "@/assets/AcerProjector.jpg";
import EpsonProjector from "@/assets/EpsonProjector.jpg";
import allInOneTouchscreenPos from "@/assets/All-in-OneTouchScreen-POS.jpeg";

// Printer product images (CDN assets)
import hpP2055dImg from "@/assets/printers/HP_LaserJet_P2055d_Printer.jpg";
import hpM401Img from "@/assets/printers/HP_LaserJet_Pro_M401dn.jpg";
import hp3101fdweImg from "@/assets/printers/HP_LaserJet_Pro MFP_3101fdwe.jpg";
import epsonL805 from "@/assets/printers/Epson_L805_Wi-Fi_Photo_Printer.jpeg";
import epsonL3210 from "@/assets/printers/Epson_EcoTank_L3210_Multifunction.jpg";
import npg59DrumUnit from "@/assets/printers/npg-59_drum_unit.jpeg";
import inkjetPrinter from "@/assets/printers/inkjet_printer.jpg";
import multifunctionPrinter from "@/assets/printers/multifunction_printer.jpg";
import receiptPrinter from "@/assets/printers/reciept_printer.jpeg";
import LenovoThinkPadE14 from "@/assets/Lenovo_ThinkPad_E14.jpg"

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
    slug: "cctv",
    name: "CCTV Cameras",
    description: "Security cameras and monitoring kits for homes, shops and offices.",
    icon: "Camera",
  },
  {
    slug: "printers",
    name: "Printers",
    description: "Laser, inkjet and multifunction printers for home and office.",
    icon: "Printer",
  },
  {
    slug: "projectors",
    name: "Projectors",
    description: "Presentation and entertainment projectors for meetings, training and home viewing.",
    icon: "Projector",
  },
  {
    slug: "pos",
    name: "POS & Touchscreens",
    description: "Modern retail and hospitality checkout solutions with touchscreen displays.",
    icon: "Monitor",
  },
  {
    slug: "computer-accessories",
    name: "Computer Accessories",
    description: "Useful add-ons and peripherals that improve everyday computing and productivity.",
    icon: "Usb",
  },
];

export function formatRwf(amount: number): string {
  return `RWF ${amount.toLocaleString("en-US")}`;
}

export const products: Product[] = [
  // ===== COMPUTERS =====
  {
    id: "hp-elitebook-14",
    name: 'HP EliteBook 840 G10 14',
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
      '14" Full HD IPS anti-glare display',
      "Backlit keyboard & fingerprint reader",
    ],
    specs: {
      Brand: "HP",
      Model: "EliteBook 840 G10",
      Processor: "Intel Core i5 (13th gen)",
      RAM: "16GB DDR5",
      Storage: "512GB NVMe SSD",
      Display: '14" FHD IPS',
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
    image: HP_Pavilion_15_Laptop,
    description:
      "Stylish HP Pavilion 15 for everyday productivity, study and entertainment. Powered by AMD Ryzen 5 with fast SSD storage.",
    features: [
      "AMD Ryzen 5 processor",
      "8GB DDR4 RAM, 512GB SSD",
      '15.6" Full HD micro-edge display',
      "Wi-Fi 6 & Bluetooth 5",
    ],
    specs: {
      Brand: "HP",
      Model: "Pavilion 15",
      Processor: "AMD Ryzen 5",
      RAM: "8GB DDR4",
      Storage: "512GB SSD",
      Display: '15.6" FHD',
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
    image: LenovoThinkPadE14,
    description:
      "Rugged Lenovo ThinkPad E14 business laptop with legendary keyboard, MIL-STD durability and Intel Core i5 performance.",
    features: [
      "Intel Core i5 (13th gen)",
      "16GB DDR4 RAM, 512GB SSD",
      '14" Full HD IPS display',
      "Spill-resistant TrackPoint keyboard",
    ],
    specs: {
      Brand: "Lenovo",
      Model: "ThinkPad E14",
      Processor: "Intel Core i5",
      RAM: "16GB DDR4",
      Storage: "512GB SSD",
      Display: '14" FHD IPS',
      Warranty: "12 months",
    },
  },
  {
    id: "lenovo-ideapad-3",
    name: 'Lenovo IdeaPad 3 15',
    category: "computers",
    brand: "Lenovo",
    price: 650000,
    createdAt: "2026-05-15T00:00:00.000Z",
    image: Lenovo_IdeaPad_315,
    description:
      "Affordable Lenovo IdeaPad 3 with modern design, fast SSD and comfortable full-size keyboard — perfect for students and home use.",
    features: [
      "Intel Core i3 processor",
      "8GB DDR4 RAM, 256GB SSD",
      '15.6" Full HD display',
      "Rapid Charge battery",
    ],
    specs: {
      Brand: "Lenovo",
      Model: "IdeaPad 3",
      Processor: "Intel Core i3",
      RAM: "8GB DDR4",
      Storage: "256GB SSD",
      Display: '15.6" FHD',
      Warranty: "12 months",
    },
  },
  {
    id: "Smart_LED_Bulbs",
    name: "Smart LED Bulbs",
    category: "computers",
    brand: "River",
    price: 1650000,
    createdAt: "2026-06-15T00:00:00.000Z",
    image: Smart_LED_Bulbs,
    description:
      "Energy-efficient smart LED bulb with Wi-Fi connectivity, customizable brightness and colors, voice assistant support, and remote control through a mobile app.",

    features: [
      "Wi-Fi enabled smart control",
      "Customizable colors",
      "Dimmable brightness settings",
      "Compatible with Alexa & Google Assistant",
    ],

    specs: {
      Brand: "Philips",
      Type: "Smart LED Bulb",
      Connectivity: "Wi-Fi",
      Power: "9W",
      Brightness: "806 Lumens",
      Color: "RGB + Warm & Cool White",
      Lifespan: "25,000 hours",
      Voltage: "110V-240V",
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
    name: 'All-in-One PC 24"',
    category: "computers",
    brand: "Lenovo",
    price: 980000,
    createdAt: "2026-05-05T00:00:00.000Z",
    image: allInOne,
    description:
      "Space-saving all-in-one desktop with a crisp 24-inch display, integrated speakers and wireless keyboard & mouse combo.",
    features: [
      '24" Full HD IPS display',
      "Intel Core i5, 8GB RAM, 512GB SSD",
      "Integrated webcam & speakers",
      "Wireless keyboard + mouse included",
    ],
    specs: {
      Brand: "Lenovo",
      Display: '24" Full HD IPS',
      Processor: "Intel Core i5",
      RAM: "8GB DDR4",
      Storage: "512GB SSD",
      Warranty: "12 months",
    },
  },

  // ===== CCTV & SECURITY =====
  {
    id: "smart-video-kit",
    name: "Smart Video Kit",
    category: "cctv",
    brand: "VI Connect",
    price: 290000,
    createdAt: "2026-06-24T00:00:00.000Z",
    image: smartVideoKit,
    description:
      "Complete smart video monitoring kit for homes and small businesses with remote viewing and dependable surveillance coverage.",
    features: [
      "HD video recording",
      "Remote mobile access",
      "Night vision support",
      "Easy installation and setup",
    ],
    specs: {
      Brand: "VI Connect",
      Type: "Video Surveillance Kit",
      Resolution: "1080p",
      Connectivity: "Wi-Fi / PoE",
      Storage: "microSD / NVR compatible",
      Warranty: "12 months",
    },
  },
  {
    id: "smart-net-camera",
    name: "Smart Net Camera",
    category: "cctv",
    brand: "VI Connect",
    price: 185000,
    createdAt: "2026-06-23T00:00:00.000Z",
    image: smartNetCamera,
    description:
      "Compact smart network camera built for indoor monitoring, motion alerts and reliable 24/7 security coverage.",
    features: [
      "Live remote monitoring",
      "Motion detection alerts",
      "Compact indoor design",
      "Cloud or local recording support",
    ],
    specs: {
      Brand: "VI Connect",
      Type: "Network Camera",
      Resolution: "1080p",
      Connectivity: "Wi-Fi",
      Power: "DC 5V",
      Warranty: "12 months",
    },
  },
  {
    id: "television-hd-colorkit",
    name: "Television HD ColorKit",
    category: "cctv",
    brand: "HD Color",
    price: 240000,
    createdAt: "2026-06-22T00:00:00.000Z",
    image: televisionHdColorKit,
    description:
      "High-definition color surveillance solution designed for clear day and night monitoring in shops, offices and homes.",
    features: [
      "Sharp HD color imaging",
      "Outdoor-ready monitoring",
      "Weather-resistant build",
      "Wide viewing angle",
    ],
    specs: {
      Brand: "HD Color",
      Type: "HD CCTV Camera",
      Resolution: "4MP",
      Connectivity: "HD-over-coax / IP",
      Weatherproof: "Yes",
      Warranty: "12 months",
    },
  },
  {
    id: "logitech-c270-hdwebcam",
    name: "Logitech C270 HD Webcam",
    category: "cctv",
    brand: "Logitech",
    price: 65000,
    createdAt: "2026-06-21T00:00:00.000Z",
    image: logitechC270HdWebcam,
    description:
      "Reliable HD webcam for video calls, live streaming and simple surveillance monitoring with clear image quality.",
    features: [
      "720p HD video",
      "Built-in noise-reducing mic",
      "Easy plug-and-play setup",
      "Compatible with major video apps",
    ],
    specs: {
      Brand: "Logitech",
      Model: "C270",
      Resolution: "720p HD",
      Connectivity: "USB",
      Warranty: "6 months",
    },
  },
  {
    id: "smart-wifi-camera",
    name: "Smart WiFi Camera",
    category: "cctv",
    brand: "VI Connect",
    price: 175000,
    createdAt: "2026-06-20T00:00:00.000Z",
    image: smartWifiCamera,
    description:
      "WiFi-enabled security camera for easy installation, mobile monitoring and instant alerts around your property.",
    features: [
      "Wireless setup",
      "Remote view from mobile",
      "Night vision capability",
      "Motion-triggered notifications",
    ],
    specs: {
      Brand: "VI Connect",
      Type: "WiFi Security Camera",
      Resolution: "1080p",
      Connectivity: "Wi-Fi",
      Alert: "Motion detection",
      Warranty: "12 months",
    },
  },

  // ===== PROJECTORS & POS =====
  {
    id: "benq-projector",
    name: "BenQ Projector",
    category: "projectors",
    brand: "BenQ",
    price: 1450000,
    createdAt: "2026-07-10T00:00:00.000Z",
    image: BenQProjector,
    description:
      "Bright and reliable projector for classrooms, meetings and home entertainment with sharp image clarity and easy setup.",
    features: [
      "Full HD projection with vivid color",
      "Portable and easy to install",
      "Ideal for presentations and training",
      "Long lamp life with low maintenance",
    ],
    specs: {
      Brand: "BenQ",
      Model: "MW560",
      Resolution: "1920x1080",
      Brightness: "3600 lumens",
      Connectivity: "HDMI, VGA, USB",
      Warranty: "12 months",
    },
  },
  {
    id: "acer-projector",
    name: "Acer Projector",
    category: "projectors",
    brand: "Acer",
    price: 1280000,
    createdAt: "2026-07-08T00:00:00.000Z",
    image: AcerProjector,
    description:
      "Stylish projector with clear output and flexible settings for business meetings, classrooms and movie nights.",
    features: [
      "High-contrast display for sharper visuals",
      "Compact form for easy mobility",
      "Supports modern HDMI connections",
      "Quiet operation for focused presentations",
    ],
    specs: {
      Brand: "Acer",
      Model: "K138ST",
      Resolution: "1280x720",
      Brightness: "3000 lumens",
      Connectivity: "HDMI, VGA, Audio",
      Warranty: "12 months",
    },
  },
  {
    id: "epson-projector",
    name: "Epson Projector",
    category: "projectors",
    brand: "Epson",
    price: 1320000,
    createdAt: "2026-07-06T00:00:00.000Z",
    image: EpsonProjector,
    description:
      "Dependable Epson projector for professional presentations and immersive viewing with crisp detail and balanced color.",
    features: [
      "Excellent image brightness and clarity",
      "Flexible connectivity for laptops and media devices",
      "Energy-efficient performance",
      "Built for boardrooms and educational spaces",
    ],
    specs: {
      Brand: "Epson",
      Model: "EB-X05",
      Resolution: "1024x768",
      Brightness: "3200 lumens",
      Connectivity: "HDMI, USB, VGA",
      Warranty: "12 months",
    },
  },
  {
    id: "all-in-one-touchscreen-pos",
    name: "All-in-One Touchscreen POS",
    category: "pos",
    brand: "VI Connect",
    price: 1600000,
    createdAt: "2026-07-03T00:00:00.000Z",
    image: allInOneTouchscreenPos,
    description:
      "Modern touchscreen point-of-sale terminal for retail counters with fast processing, sleek design and easy checkout workflows.",
    features: [
      "Responsive all-in-one touchscreen display",
      "Fast transaction processing for busy counters",
      "Clean cable-free look for retail setups",
      "Easy integration with payment and inventory tools",
    ],
    specs: {
      Brand: "VI Connect",
      Type: "Touchscreen POS",
      Display: "15.6 inch",
      Processor: "Intel i3",
      Storage: "128GB SSD",
      Connectivity: "USB, HDMI, LAN",
      Warranty: "12 months",
    },
  },

  // ===== MISCELLANEOUS ELECTRONICS =====
  {
    id: "Cartridge_Canon_Toner057",
    name: "Cartridge Canon Toner 057",
    category: "printers",
    brand: "Canon",
    price: 32000,
    createdAt: "2026-06-22T00:00:00.000Z",
    image: cartridgeCanonToner057,
    description:
      "Original Canon toner cartridge for reliable black-and-white printing with sharp text and consistent output.",
    features: [
      "High-yield toner for office use",
      "Sharp and consistent print quality",
      "Designed for Canon laser printers",
      "Easy installation and replacement",
    ],
    specs: {
      Brand: "Canon",
      Model: "Toner 057",
      Type: "Laser Toner Cartridge",
      Compatibility: "Canon laser printers",
      Warranty: "6 months",
    },
  },
  {
    id: "Cash_machine",
    name: "Cash Machine",
    category: "computers",
    brand: "NCR",
    price: 1450000,
    createdAt: "2026-06-21T00:00:00.000Z",
    image: cashMachine,
    description:
      "Secure cash handling terminal designed for retail counters, quick transactions and dependable daily operation.",
    features: [
      "Fast card and cash processing",
      "Durable retail-ready design",
      "Secure transaction confirmation",
      "Easy integration with point-of-sale systems",
    ],
    specs: {
      Brand: "NCR",
      Type: "Cash Handling Terminal",
      Connectivity: "POS / network ready",
      Use: "Retail and cashier counters",
      Warranty: "12 months",
    },
  },
  {
    id: "Desktop_computer",
    name: "Desktop Computer",
    category: "computers",
    brand: "Dell",
    price: 720000,
    createdAt: "2026-06-20T00:00:00.000Z",
    image: desktopComputer,
    description:
      "Reliable desktop computer for office work, web browsing and everyday productivity with modern connectivity.",
    features: [
      "Intel Core i5 processor",
      "8GB RAM and SSD storage",
      "Multiple USB and HDMI ports",
      "Ideal for office and home use",
    ],
    specs: {
      Brand: "Dell",
      Processor: "Intel Core i5",
      RAM: "8GB",
      Storage: "256GB SSD",
      Ports: "USB, HDMI, RJ45",
      Warranty: "12 months",
    },
  },
  {
    id: "usb_typec_hub",
    name: "USB Type-C Hub",
    category: "computers",
    brand: "Anker",
    price: 65000,
    createdAt: "2026-06-19T00:00:00.000Z",
    image: usbTypeCHub,
    description:
      "Compact USB Type-C hub that expands laptop connectivity with extra ports for data, display and charging.",
    features: [
      "Multiple USB and HDMI ports",
      "Fast data transfer",
      "Compact portable design",
      "Great for laptops and ultrabooks",
    ],
    specs: {
      Brand: "Anker",
      Type: "USB Type-C Hub",
      Ports: "4x USB + HDMI",
      Compatibility: "Windows, macOS, Linux",
      Warranty: "6 months",
    },
  },
  {
    id: "Wifi_router",
    name: "WiFi Router",
    category: "computers",
    brand: "TP-Link",
    price: 180000,
    createdAt: "2026-06-18T00:00:00.000Z",
    image: wifiRouter,
    description:
      "High-performance WiFi router for homes and small offices with stable coverage and strong wireless speeds.",
    features: [
      "Dual-band wireless coverage",
      "Fast and stable internet sharing",
      "Easy setup and management",
      "Suitable for streaming and remote work",
    ],
    specs: {
      Brand: "TP-Link",
      Type: "Wireless Router",
      Connectivity: "Wi-Fi 5 / Ethernet",
      Coverage: "Up to 120 sqm",
      Warranty: "12 months",
    },
  },
  {
    id: "JBL_Headphone",
    name: "JBL Headphone",
    category: "computers",
    brand: "JBL",
    price: 240000,
    createdAt: "2026-06-17T00:00:00.000Z",
    image: jblHeadphone,
    description:
      "Wireless over-ear headphones with rich sound, comfortable fit and reliable Bluetooth connectivity for daily listening.",
    features: [
      "Deep bass and clear audio",
      "Bluetooth wireless connection",
      "Comfortable padded ear cups",
      "Long battery life",
    ],
    specs: {
      Brand: "JBL",
      Type: "Wireless Headphones",
      Connectivity: "Bluetooth",
      Battery: "Up to 20 hours",
      Warranty: "12 months",
    },
  },
  {
    id: "rfid_reader",
    name: "RFID Reader",
    category: "computers",
    brand: "HID",
    price: 260000,
    createdAt: "2026-06-16T00:00:00.000Z",
    image: rfidReader,
    description:
      "RFID reader for secure identification, authentication and fast access control in office and retail settings.",
    features: [
      "Fast tag scanning",
      "Secure access control",
      "Compact and durable design",
      "Easy integration with systems",
    ],
    specs: {
      Brand: "HID",
      Type: "RFID Reader",
      Frequency: "13.56 MHz",
      Connectivity: "USB / serial",
      Warranty: "12 months",
    },
  },
  {
    id: "all-types-computer-batteries-and-cables",
    name: "All Types of Computer Batteries and Cables",
    category: "computers",
    brand: "Generic",
    price: 45000,
    createdAt: "2026-06-09T00:00:00.000Z",
    image: allTypeOfComputerBatteriesandItsCables,
    description:
      "A practical collection of computer batteries and essential cables for laptops, desktops and other devices, suitable for repairs and replacements.",
    features: [
      "Wide range of battery and cable options",
      "Useful for repairs and maintenance",
      "Compatible with common computer setups",
      "Durable and reliable everyday use",
    ],
    specs: {
      Brand: "Generic",
      Type: "Computer Batteries & Cables",
      Compatibility: "Laptops, desktops, peripheral devices",
      Warranty: "3 months",
    },
  },

  // ===== PRINTERS =====
  {
    id: "npg-59_drum_unit",
    name: "NPG-59 Drum Unit",
    category: "printers",
    brand: "Canon",
    price: 95000,
    createdAt: "2026-06-15T00:00:00.000Z",
    image: npg59DrumUnit,
    description:
      "Replacement drum unit for Canon printers, delivering dependable page output and consistent print quality.",
    features: [
      "Reliable imaging performance",
      "Long-lasting drum life",
      "Ideal for office printing",
      "Easy replacement process",
    ],
    specs: {
      Brand: "Canon",
      Model: "NPG-59",
      Type: "Drum Unit",
      Compatibility: "Canon laser printers",
      Warranty: "6 months",
    },
  },
  {
    id: "inkjet_printer",
    name: "Inkjet Printer",
    category: "printers",
    brand: "Epson",
    price: 210000,
    createdAt: "2026-06-14T00:00:00.000Z",
    image: inkjetPrinter,
    description:
      "Compact inkjet printer for everyday printing, scanning and copying at home or in a small office.",
    features: [
      "Color printing",
      "Compact footprint",
      "Affordable operating cost",
      "Wireless or USB connectivity",
    ],
    specs: {
      Brand: "Epson",
      Type: "Inkjet Printer",
      Connectivity: "USB / Wireless",
      Functionality: "Print",
      Warranty: "12 months",
    },
  },
  {
    id: "multifunction_printer",
    name: "Multifunction Printer",
    category: "printers",
    brand: "HP",
    price: 450000,
    createdAt: "2026-06-13T00:00:00.000Z",
    image: multifunctionPrinter,
    description:
      "All-in-one office printer that handles print, scan and copy tasks with speed and reliability.",
    features: [
      "Print, scan and copy",
      "Automatic document feeder",
      "Built for office workloads",
      "Network-ready operation",
    ],
    specs: {
      Brand: "HP",
      Type: "Multifunction Printer",
      Functions: "Print, Scan, Copy",
      Connectivity: "USB / Network",
      Warranty: "12 months",
    },
  },
  {
    id: "reciept_printer",
    name: "Receipt Printer",
    category: "printers",
    brand: "POSIflex",
    price: 160000,
    createdAt: "2026-06-12T00:00:00.000Z",
    image: receiptPrinter,
    description:
      "Compact receipt printer for retail counters and hospitality environments that need fast, reliable printing.",
    features: [
      "Fast thermal receipt printing",
      "Compact counter-friendly design",
      "Low maintenance operation",
      "Ideal for POS systems",
    ],
    specs: {
      Brand: "POSIflex",
      Type: "Receipt Printer",
      Printing: "Thermal",
      Connectivity: "USB / Serial",
      Warranty: "12 months",
    },
  },
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
  {
  id: "bluetooth-slim-silent-wireless-mouse",
  name: "Bluetooth Slim Silent Wireless and USB Mouse RGB",
  category: "computer-accessories",
  brand: "Generic",
  price: 25000,
  createdAt: "2026-06-10T00:00:00.000Z",
  image: bluetoothMouse,
  description:
    "Slim and rechargeable wireless Bluetooth mouse with RGB backlighting, silent clicks, adjustable DPI settings, and a USB receiver for reliable connectivity. Compatible with laptops, Macs, Windows PCs, Android devices, and tablets.",
  features: [
    "Bluetooth + 2.4GHz USB receiver connectivity",
    "Silent click design for quiet operation",
    "Rechargeable built-in battery",
    "RGB backlit lighting effects",
    "3 adjustable DPI levels (800/1200/1600 DPI)",
    "Slim and lightweight ergonomic design",
  ],
  specs: {
    Brand: "Generic",
    Model: "Slim Silent Wireless Mouse",
    Connectivity: "Bluetooth 5.0 + 2.4GHz USB Receiver",
    DPI: "800 / 1200 / 1600",
    Compatibility: "Windows, macOS, Android, Laptop, PC, Mac",
    Warranty: "6 months",
  },
},
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
