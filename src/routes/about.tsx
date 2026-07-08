import { createFileRoute } from "@tanstack/react-router";
import { Award, Eye, HandshakeIcon, Rocket, ShieldCheck, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CountUp } from "@/components/CountUp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — VI CONNECT NETWORKSERVICES LTD" },
      { name: "description", content: "Learn about VI CONNECT NETWORKSERVICES LTD — our mission, vision, values and team." },
      { property: "og:title", content: "About VI CONNECT NETWORKSERVICES LTD" },
      { property: "og:description", content: "Our mission, vision and team behind VI CONNECT NETWORKSERVICES LTD." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { Icon: ShieldCheck, title: "Integrity", text: "We deal honestly with every customer, every time." },
  { Icon: Award, title: "Quality", text: "Genuine products and workmanship you can rely on." },
  { Icon: HandshakeIcon, title: "Partnership", text: "We work alongside our customers as long-term partners." },
  { Icon: Rocket, title: "Innovation", text: "We keep up with the latest technology so you don't have to." },
];

const team = [
  { name: "Victor I.", role: "Founder & Lead Engineer", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=70" },
  { name: "Sarah M.", role: "Network Specialist", photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=70" },
  { name: "David K.", role: "CCTV & Security Lead", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=70" },
  { name: "Grace U.", role: "Customer Success", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=70" },
];

function AboutPage() {
  return (
    <div>
      <section className="container-page pt-14 pb-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            About <span className="text-gradient-brand">VI CONNECT</span>
          </h1>
          <p className="text-lg text-muted-foreground mt-5">
            VI CONNECT NETWORKSERVICES LTD is a technology company focused on supplying quality
            electronic components, networking equipment and computer accessories — and installing
            them properly. We serve businesses, technicians, schools and individuals with reliable
            products and professional service.
          </p>
        </div>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-glow">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=70"
            alt="Our team"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="container-page py-12 grid gap-6 md:grid-cols-2">
        <Card className="card-hover">
          <CardContent className="p-8">
            <div className="grid place-items-center size-12 rounded-xl gradient-brand text-primary-foreground mb-4">
              <Target className="size-6" />
            </div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground mt-3">
              To empower our customers with high-quality electronic and networking solutions,
              backed by expert installation and honest support.
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-8">
            <div className="grid place-items-center size-12 rounded-xl gradient-brand text-primary-foreground mb-4">
              <Eye className="size-6" />
            </div>
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="text-muted-foreground mt-3">
              To be the most trusted partner for electronics and connectivity in the region — the
              first name customers think of when technology matters.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-secondary/40 border-y">
        <div className="container-page py-14">
          <h2 className="text-3xl font-bold text-center">Our Core Values</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-10">
            {values.map(({ Icon, title, text }) => (
              <Card key={title} className="card-hover">
                <CardContent className="p-6">
                  <Icon className="size-8 text-primary mb-3" />
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
            <Users className="size-7 text-primary" /> Meet the Team
          </h2>
          <p className="text-muted-foreground mt-2">The people behind every install and support call.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <Card key={m.name} className="card-hover overflow-hidden pt-0">
              <div className="aspect-square overflow-hidden bg-muted">
                <img src={m.photo} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <CardContent>
                <div className="font-semibold">{m.name}</div>
                <div className="text-sm text-muted-foreground">{m.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="gradient-brand text-primary-foreground">
        <div className="container-page py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { end: 1500, suffix: "+", label: "Products supplied" },
            { end: 800, suffix: "+", label: "Happy customers" },
            { end: 250, suffix: "+", label: "Projects delivered" },
            { end: 98, suffix: "%", label: "Satisfaction rate" },
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
    </div>
  );
}
