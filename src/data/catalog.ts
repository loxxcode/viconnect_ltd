// Static catalog for VI CONNECT NETWORKSERVICES LTD.
// No backend — everything is served from this module.

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
  price: number; // USD
  availability: "in-stock" | "low-stock" | "out-of-stock";
  createdAt: string; // ISO for "newest" sort
  image: string; // unsplash keyword-based URL
  description: string;
  features: string[];
  specs: Record<string, string>;
};

export const categories: Category[] = [
  { slug: "network-switches", name: "Network Switches", description: "Managed and unmanaged switches for every scale.", icon: "Network" },
  { slug: "routers", name: "Routers", description: "Enterprise and SOHO routers for reliable connectivity.", icon: "Router" },
  { slug: "ethernet-cables", name: "Ethernet Cables", description: "Cat5e, Cat6, Cat6a patch and bulk cables.", icon: "Cable" },
  { slug: "fiber-optic-cables", name: "Fiber Optic Cables", description: "Single-mode and multi-mode fiber solutions.", icon: "Radio" },
  { slug: "rj45-connectors", name: "RJ45 Connectors", description: "Shielded and unshielded modular plugs.", icon: "Plug" },
  { slug: "crimping-tools", name: "Crimping Tools", description: "Professional-grade termination tools.", icon: "Wrench" },
  { slug: "patch-panels", name: "Patch Panels", description: "Cat6/Cat6a rack-mount patch panels.", icon: "LayoutGrid" },
  { slug: "wifi-access-points", name: "WiFi Access Points", description: "WiFi 6 & 6E indoor / outdoor APs.", icon: "Wifi" },
  { slug: "cctv-cameras", name: "CCTV Cameras", description: "IP and analog surveillance cameras.", icon: "Camera" },
  { slug: "dvr-nvr", name: "DVR / NVR Systems", description: "Recording systems with remote access.", icon: "Video" },
  { slug: "hard-drives", name: "Hard Drives", description: "HDD storage for surveillance and servers.", icon: "HardDrive" },
  { slug: "ssds", name: "SSDs", description: "NVMe and SATA solid state drives.", icon: "HardDrive" },
  { slug: "ram-modules", name: "RAM Modules", description: "DDR4 & DDR5 memory kits.", icon: "MemoryStick" },
  { slug: "motherboards", name: "Motherboards", description: "Consumer and workstation motherboards.", icon: "CircuitBoard" },
  { slug: "power-supplies", name: "Power Supplies", description: "80+ certified PSUs.", icon: "Zap" },
  { slug: "ups-systems", name: "UPS Systems", description: "Battery backup and surge protection.", icon: "BatteryCharging" },
  { slug: "computer-cases", name: "Computer Cases", description: "Airflow-optimized PC chassis.", icon: "Box" },
  { slug: "cooling-fans", name: "Cooling Fans", description: "Silent case and CPU fans.", icon: "Fan" },
  { slug: "hdmi-cables", name: "HDMI Cables", description: "4K & 8K certified HDMI cables.", icon: "Cable" },
  { slug: "usb-devices", name: "USB Devices", description: "Hubs, adapters and flash drives.", icon: "Usb" },
  { slug: "keyboards", name: "Keyboards", description: "Mechanical and office keyboards.", icon: "Keyboard" },
  { slug: "mouse", name: "Mouse", description: "Wired and wireless mice.", icon: "Mouse" },
  { slug: "monitors", name: "Monitors", description: "Business and gaming displays.", icon: "Monitor" },
  { slug: "laptop-chargers", name: "Laptop Chargers", description: "Genuine and universal chargers.", icon: "Plug2" },
  { slug: "adapters", name: "Adapters", description: "Video, network and power adapters.", icon: "PlugZap" },
  { slug: "electronic-components", name: "Electronic Components", description: "Resistors, capacitors, ICs and more.", icon: "Cpu" },
  { slug: "arduino-boards", name: "Arduino Boards", description: "Genuine Arduino and compatibles.", icon: "CircuitBoard" },
  { slug: "raspberry-pi", name: "Raspberry Pi", description: "SBCs, kits and accessories.", icon: "Cpu" },
  { slug: "sensors", name: "Sensors", description: "Temperature, motion, distance and more.", icon: "Radar" },
  { slug: "breadboards", name: "Breadboards", description: "Solderless prototyping boards.", icon: "LayoutGrid" },
  { slug: "power-modules", name: "Power Modules", description: "Buck, boost and regulator modules.", icon: "Zap" },
];

// Unsplash source images — deterministic keyword URLs, no auth needed
const img = (keywords: string, id: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=70&${encodeURIComponent(keywords)}`;

// A curated set of real Unsplash photo IDs relevant to tech / electronics
const PHOTOS = [
  "1518770660439-4636190af475", // circuit board
  "1587202372775-e229f172b9d7", // network switch
  "1544197150-b99a580bb7a8",     // server room
  "1526374965328-7f61d4dc18c5", // code / tech
  "1550009158-9ebf69173e03",     // motherboard
  "1591799264318-7e6ef8ddb7ea", // ethernet
  "1555617981-dac3880eac6e",     // ssd
  "1587825140708-dfaf72ae4b04", // router
  "1580894732444-8ecded7900cd", // cctv
  "1601524909162-ae8725290836", // cables
  "1517430816045-df4b7de11d1d", // keyboard
  "1527864550417-7fd91fc51a46", // monitor
  "1592899677977-9c10ca588bbd", // raspberry pi
  "1573164713988-8665fc963095", // arduino
  "1518432031352-d6fc5c10da5a", // fiber
];

const pickImg = (i: number) => `https://images.unsplash.com/photo-${PHOTOS[i % PHOTOS.length]}?auto=format&fit=crop&w=900&q=70`;

const BRANDS = ["Cisco", "TP-Link", "Ubiquiti", "D-Link", "MikroTik", "HP", "Dell", "Kingston", "Seagate", "WD", "Corsair", "Hikvision", "Dahua", "APC", "Arduino", "Raspberry Pi Foundation"];

// Programmatically build ~60 sample products across categories.
function makeProducts(): Product[] {
  const list: Product[] = [];
  let idx = 0;
  const now = Date.now();
  categories.slice(0, 20).forEach((cat, ci) => {
    // 2–3 products per category (first 20 categories) — keeps catalog rich but static-file small
    const count = ci % 3 === 0 ? 3 : 2;
    for (let n = 0; n < count; n++) {
      const brand = BRANDS[(ci + n) % BRANDS.length];
      const price = Math.round((15 + (idx % 40) * 12 + n * 7) * 100) / 100;
      const availStates: Product["availability"][] = ["in-stock", "in-stock", "low-stock", "out-of-stock"];
      const avail = availStates[(ci + n) % availStates.length];
      list.push({
        id: `${cat.slug}-${n + 1}`,
        name: `${brand} ${cat.name.replace(/s$/, "")} ${String.fromCharCode(65 + n)}${100 + idx}`,
        category: cat.slug,
        brand,
        price,
        availability: avail,
        createdAt: new Date(now - idx * 86400000).toISOString(),
        image: pickImg(idx),
        description: `Professional-grade ${cat.name.toLowerCase()} from ${brand}. Engineered for reliability in demanding business, educational and residential environments.`,
        features: [
          "Industry-standard compliance and certifications",
          "Durable build quality for long-term deployments",
          "Compatible with common networking and computing setups",
          "Backed by manufacturer warranty",
        ],
        specs: {
          Brand: brand,
          Category: cat.name,
          Warranty: "12 months",
          Origin: "Imported",
          SKU: `VC-${cat.slug.toUpperCase().slice(0, 4)}-${1000 + idx}`,
        },
      });
      idx++;
    }
  });
  return list;
}

export const products: Product[] = makeProducts();

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
