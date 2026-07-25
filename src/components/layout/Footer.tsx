  import { Link } from "@tanstack/react-router";
import logoImage from "@/assets/logo.jpeg";
import { Facebook, Instagram, Youtube, Mail, MessageCircle, Phone, Zap } from "lucide-react";
import Twitter from "@/assets/twitter.svg";

const productCats = [
  { slug: "computers", name: "Computers" },
  { slug: "cctv", name: "CCTV Cameras" },
  { slug: "printers", name: "Printers" },
  { slug: "projectors", name: "Projectors" },
];

const services = [
  "Network Installation",
  "CCTV Installation",
  "Computer Maintenance",
  "IT Consulting",
  "Fiber Installation",
  "Technical Support",
];

export function Footer() {
  return (
    <footer className="border-t bg-emerald-600 mt-12">
      <div className="container-page py-10 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src={logoImage}
              alt="VI Connect Network Services logo"
              className="size-14 rounded-lg object-contain group-hover:scale-105 transition-transform"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display font-bold text-sm sm:text-base text-white">
                VI CONNECT
              </span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-100">
                Network Services
              </span>
            </span>
          </div>
          <p className="text-sm text-emerald-100">
            Quality electronic components and networking solutions for businesses, institutions and
            individuals.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              { Icon: Facebook, label: "Facebook", href: "https://web.facebook.com/profile.php?id=61592340235006" },
              { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/viconnectnets/" },
              { label: "Twitter", href: "https://x.com/VICONNECT_LTD", icon: <img src={Twitter} alt="Twitter" className="size-6" /> },
              { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@viconnetNetwork" },
            ].map(({ Icon, label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="grid place-items-center size-9 rounded-full border border-emerald-200 text-white hover:bg-white hover:text-emerald-600 transition-colors"
              >
                {icon ?? (Icon ? <Icon className="size-4" /> : null)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-emerald-100">
            {[
              ["/", "Home"],
              ["/products", "Products"],

              ["/services", "Services"],
              ["/about", "About Us"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Categories</h4>
          <ul className="space-y-2 text-sm text-emerald-100">
            {productCats.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products"
                  search={{ category: c.slug }}
                  className="hover:text-white transition-colors"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="font-semibold mt-6 mb-3 text-white">Services</h4>
          <ul className="space-y-2 text-sm text-emerald-100">
            {services.slice(0, 4).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-emerald-100">
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-white" />
              <a href="mailto:viconnectnets@gmail.com" className="hover:text-white">
                viconnectnets@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-white" />
              <a href="tel:0788825646" className="hover:text-white">
                0788825646
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-emerald-700">
        <div className="container-page py-5 text-xs text-emerald-100 text-center">
          © 2026 VI CONNECT NETWORKSERVICES LTD. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
