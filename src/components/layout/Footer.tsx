import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Phone, Zap } from "lucide-react";

const productCats = [
  { slug: "network-switches", name: "Network Switches" },
  { slug: "routers", name: "Routers" },
  { slug: "cctv-cameras", name: "CCTV Cameras" },
  { slug: "wifi-access-points", name: "WiFi Access Points" },
  { slug: "arduino-boards", name: "Arduino Boards" },
  { slug: "raspberry-pi", name: "Raspberry Pi" },
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
    <footer className="border-t bg-secondary/40 mt-24">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="grid place-items-center size-9 rounded-lg gradient-brand text-primary-foreground">
              <Zap className="size-5" />
            </span>
            <span className="font-display font-bold">VI CONNECT</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Quality electronic components and networking solutions for businesses, technicians and
            individuals.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              { Icon: Facebook, label: "Facebook", href: "#" },
              { Icon: Instagram, label: "Instagram", href: "#" },
              { Icon: Linkedin, label: "LinkedIn", href: "#" },
              { Icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/250788825646" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid place-items-center size-9 rounded-full border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              ["/", "Home"],
              ["/products", "Products"],
              ["/categories", "Categories"],
              ["/services", "Services"],
              ["/about", "About Us"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-primary transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Categories</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {productCats.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products"
                  search={{ category: c.slug }}
                  className="hover:text-primary transition-colors"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="font-semibold mt-6 mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {services.slice(0, 4).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-primary" />
              <a href="mailto:viconnectnets@gmail.com" className="hover:text-primary">
                viconnectnets@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary" />
              <a href="tel:0788825646" className="hover:text-primary">
                0788825646
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container-page py-5 text-xs text-muted-foreground text-center">
          © 2026 VI CONNECT NETWORKSERVICES LTD. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
