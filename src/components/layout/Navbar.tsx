import { Link } from "@tanstack/react-router";
import { Menu, Moon, Sun } from "lucide-react";
import logoImage from "@/assets/logo.jpeg";
import { useState } from "react";
import { useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <img
        src={logoImage}
        alt="VI Connect Network Services logo"
        className="size-10 rounded-lg object-contain group-hover:scale-105 transition-transform"
      />
      <span className="flex flex-col leading-tight">
        <span className="font-display font-bold text-sm sm:text-base text-white">VI CONNECT</span>
        <span className="text-[10px] uppercase tracking-widest text-emerald-100">
          Network Services
        </span>
      </span>
    </Link>
  );
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggle}
      className="rounded-full text-white hover:bg-emerald-700"
    >
      {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-emerald-600 shadow-md">
      <div className="container-page flex items-center justify-between h-16">
        <Logo />
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 rounded-md text-sm font-medium text-emerald-50 hover:text-white hover:bg-emerald-700 transition-colors"
              activeProps={{ className: "text-white bg-emerald-700" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-emerald-700" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-emerald-600 border-emerald-700">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 rounded-md text-base font-medium text-emerald-50 hover:text-white hover:bg-emerald-700 transition-colors"
                    activeProps={{ className: "text-white bg-emerald-700" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
