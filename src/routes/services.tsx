import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cable,
  Camera,
  Cog,
  Cpu,
  HardDrive,
  Headphones,
  Network,
  Radio,
  ServerCog,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    createPageHead({
      title: "Services — VI CONNECT Electronics & Networking in Kigali",
      description:
        "Professional electronics, CCTV, network installation, IT consulting and technical support in Kigali, Rwanda. We deliver, install and maintain computers and networking systems.",
      pathname: "/services",
    }),
  component: ServicesPage,
});

const services = [
  {
    Icon: Network,
    title: "Network Installation",
    text: "Structured cabling, switching and WiFi rollouts for offices of any size.",
  },
  {
    Icon: Camera,
    title: "CCTV Installation",
    text: "IP and analog surveillance systems with remote monitoring.",
  },
  {
    Icon: Cog,
    title: "Computer Maintenance",
    text: "Preventive maintenance and repair for desktops and laptops.",
  },
  {
    Icon: HardDrive,
    title: "Electronic Devices Supply",
    text: "Sourcing and supplying genuine electronic and networking equipment.",
  },
  {
    Icon: Wrench,
    title: "Network Troubleshooting",
    text: "Diagnose and fix connectivity, throughput and reliability issues.",
  },
  {
    Icon: Headphones,
    title: "IT Consulting",
    text: "Advisory on infrastructure, procurement and best practices.",
  },
  {
    Icon: Radio,
    title: "Fiber Installation",
    text: "Fiber runs, fusion splicing and termination for high-speed links.",
  },
  {
    Icon: Cpu,
    title: "Hardware Upgrades",
    text: "RAM, SSD, GPU and motherboard upgrades to extend device life.",
  },
  {
    Icon: ServerCog,
    title: "Server Installation",
    text: "On-site and rack server deployment, configuration and hardening.",
  },
  {
    Icon: Cable,
    title: "Technical Support",
    text: "Ongoing support contracts with fast response times.",
  },
];

function ServicesPage() {
  return (
    <div>
      <section className="container-page pt-14 pb-8 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold">Our Services</h1>
        <p className="text-muted-foreground mt-4 text-lg">
          We supply, install and support the technology that keeps your operations running — from a
          single workstation to a full office network.
        </p>
      </section>
      <section className="container-page pb-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, text }) => (
            <Card key={title} className="card-hover h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center size-12 rounded-xl gradient-brand text-primary-foreground shrink-0">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-semibold text-md">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="container-page pb-20">
        <Card className="gradient-brand text-primary-foreground border-0">
          <CardContent className="p-8 md:p-12 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Need a custom quote?</h2>
              <p className="opacity-90 mt-2 max-w-lg">
                Tell us about your project and we'll respond with a tailored proposal.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Contact us <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
