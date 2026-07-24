import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VI CONNECT NETWORKSERVICES LTD" },
      {
        name: "description",
        content:
          "Get in touch with VI CONNECT NETWORKSERVICES LTD. Email viconnectnets@gmail.com or call 0788825646.",
      },
      { property: "og:title", content: "Contact VI CONNECT NETWORKSERVICES LTD" },
      {
        property: "og:description",
        content: "Reach us by email, phone, or the contact form on our website.",
      },
    ],
  }),
  component: ContactPage,
});

const info = [
  {
    Icon: Mail,
    title: "Email",
    value: "viconnectnets@gmail.com",
    href: "mailto:viconnectnets@gmail.com",
  },
  { Icon: Phone, title: "Phone", value: "0788825646", href: "tel:0788825646" },
  { Icon: MapPin, title: "Location", value: "Kigali, Rwanda", href: "#map" },
  { Icon: Clock, title: "Business Hours", value: "Mon–Sat, 8:00 – 18:00" },
];

function ContactPage() {
  return (
    <div>
      <section className="container-page pt-14 pb-8 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold">Get in Touch</h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Have a question, need a quote, or want to schedule an installation? We'd love to hear from
          you.
        </p>
      </section>

      <section className="container-page pb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {info.map(({ Icon, title, value, href }) => (
          <Card key={title} className="card-hover">
            <CardContent className="p-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center size-10 rounded-xl gradient-brand text-primary-foreground shrink-0">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground">{title}</h3>
                  {href ? (
                    <a href={href} className="font-semibold text-sm hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : (
                    <div className="font-semibold">{value}</div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="container-page pb-20 grid gap-8 lg:grid-cols-2">
        <Card>
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="text-muted-foreground mt-1 text-sm">
              We usually respond within 24 hours.
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Thanks! Your message has been sent.");
                (e.currentTarget as HTMLFormElement).reset();
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required placeholder="you@example.com" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="0788 123 456" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required placeholder="How can we help?" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card id="map" className="overflow-hidden">
            <div className="aspect-4/3 bg-muted relative">
              <iframe
                title="VI CONNECT location"
                src="https://www.google.com/maps?q=Kigali,Rwanda&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">Business Hours</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Monday – Friday</span>
                  <span>8:00 – 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>9:00 – 16:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
