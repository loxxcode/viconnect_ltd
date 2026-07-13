import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Headphones, ShieldCheck, Sparkles, Star, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/ProductCard";
import { CountUp } from "@/components/CountUp";
import { products } from "@/data/catalog";
import heroImage from "@/assets/hero.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import heroImage3 from "@/assets/hero-3.jpg";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const heroSlides = [
  { src: heroImage, alt: "Modern laptop and printer on office desk" },
  { src: heroImage2, alt: "HP laptop and multifunction printer with green accent lighting" },
  { src: heroImage3, alt: "Row of laser printers and laptops in showroom" },
];



const benefits = [
  { Icon: ShieldCheck, title: "Genuine Products", text: "Sourced from verified manufacturers and distributors." },
  { Icon: Truck, title: "Fast Delivery", text: "Nationwide dispatch with careful, protective packaging." },
  { Icon: Headphones, title: "Expert Support", text: "Technicians on hand to help you choose and install." },
  { Icon: Sparkles, title: "Competitive Pricing", text: "Fair prices for individuals, schools and businesses." },
];

const testimonials = [
  { name: "Jean-Paul K.", role: "IT Manager, Kigali", text: "VI CONNECT set up our office network end-to-end. Fast, clean and professional work." },
  { name: "Aline M.", role: "School Administrator", text: "They supplied and installed our CCTV system in two days. Everything works perfectly." },
  { name: "Eric N.", role: "Freelance Electrician", text: "My go-to shop for Arduino boards, sensors and networking parts. Great prices too." },
];

function HomePage() {
  const featured = products.slice(0, 8);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);



  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="container-page py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
              <Sparkles className="size-3.5" /> VI CONNECT NETWORKSERVICES LTD
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05]">
              Quality Electronic Components{" "}
              <span className="text-gradient-brand">& Networking Solutions</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              We provide reliable electronic parts, networking devices, computer accessories, and
              technical solutions for businesses, technicians, students, and individuals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/products">
                  Browse Products <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              {["Genuine parts", "Nationwide delivery", "Expert installation"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" /> {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative reveal">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-glow">
              <img
                src={heroImage}
                alt="Laptop and printer on a modern office desk"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-card border rounded-xl p-4 shadow-soft w-56">
              <div className="text-3xl font-bold text-primary">
                <CountUp end={1500} suffix="+" />
              </div>
              <div className="text-xs text-muted-foreground">Products delivered</div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="bg-secondary/40 border-y">
        <div className="container-page py-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold">Why Choose Us</h2>
            <p className="text-muted-foreground mt-2">
              A partner you can trust for supply, installation and support.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ Icon, title, text }) => (
              <Card key={title} className="card-hover">
                <CardContent className="p-6">
                  <div className="grid place-items-center size-12 rounded-xl gradient-brand text-primary-foreground mb-4">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container-page py-16">
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="text-muted-foreground mt-2">Hand-picked items from our catalog.</p>
          </div>
          <Button asChild variant="ghost">
            <Link to="/products">Shop all →</Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="gradient-brand text-primary-foreground">
        <div className="container-page py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { end: 1500, suffix: "+", label: "Products in stock" },
            { end: 800, suffix: "+", label: "Happy customers" },
            { end: 250, suffix: "+", label: "Projects delivered" },
            { end: 10, suffix: "+", label: "Years experience" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-bold">
                <CountUp end={s.end} suffix={s.suffix} />
              </div>
              <div className="text-sm opacity-90 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          <p className="text-muted-foreground mt-2">
            Trusted by technicians, schools and businesses.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="card-hover">
              <CardContent className="p-6">
                <div className="flex gap-1 text-primary mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed">"{t.text}"</p>
                <div className="mt-4">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-page pb-20">
        <Card className="overflow-hidden border-primary/30">
          <CardContent className="p-8 md:p-12 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Stay in the loop</h2>
              <p className="text-muted-foreground mt-2">
                Subscribe for new arrivals, offers and technical guides.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Subscribed! We'll be in touch.");
                (e.currentTarget as HTMLFormElement).reset();
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input type="email" required placeholder="your@email.com" className="h-12" />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
