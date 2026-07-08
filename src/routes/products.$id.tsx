import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, CheckCircle2, Mail, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/ProductCard";
import { categories, getProduct, getRelated } from "@/data/catalog";

import type { Product } from "@/data/catalog";

export const Route = createFileRoute("/products/$id")({
  loader: ({ params }): { product: Product } => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — VI CONNECT` },
        { name: "description", content: product.description },
        { property: "og:title", content: `${product.name} — VI CONNECT` },
        { property: "og:description", content: product.description },
        { property: "og:image", content: product.image },
        { name: "twitter:image", content: product.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-3xl font-bold">Product not found</h1>
      <Button asChild className="mt-6"><Link to="/products">Back to products</Link></Button>
    </div>
  ),
  component: ProductDetail,
});

const availabilityLabel = {
  "in-stock": { label: "In Stock", className: "bg-primary/15 text-primary border-primary/30" },
  "low-stock": { label: "Low Stock", className: "bg-amber-500/15 text-amber-600 border-amber-500/30" },
  "out-of-stock": { label: "Out of Stock", className: "bg-destructive/15 text-destructive border-destructive/30" },
} as const;

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const cat = categories.find((c) => c.slug === product.category);
  const related = getRelated(product);
  const gallery = [product.image, product.image, product.image];
  const [active, setActive] = useState(0);
  const avail = availabilityLabel[product.availability];

  return (
    <div className="container-page py-10">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/products">
          <ArrowLeft className="mr-2 size-4" /> Back to products
        </Link>
      </Button>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="aspect-square rounded-2xl overflow-hidden border bg-muted">
            <img src={gallery[active]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition ${
                  active === i ? "border-primary" : "border-transparent hover:border-border"
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">{cat?.name}</span>
            <Badge variant="outline" className={avail.className}>{avail.label}</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{product.name}</h1>
          <div className="mt-4 text-4xl font-bold text-primary">${product.price.toFixed(2)}</div>
          <p className="mt-5 text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="mt-6">
            <h3 className="font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-3">Specifications</h3>
            <div className="rounded-xl border overflow-hidden">
              {Object.entries(product.specs).map(([k, v], i) => (
                <div key={k} className={`flex justify-between px-4 py-3 text-sm ${i % 2 ? "bg-muted/40" : ""}`}>
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="mt-8 bg-secondary/40">
            <CardContent className="p-5 flex flex-wrap items-center gap-4 justify-between">
              <div>
                <div className="font-semibold">Ready to order?</div>
                <div className="text-sm text-muted-foreground">Contact us for pricing, stock and delivery.</div>
              </div>
              <div className="flex gap-2">
                <Button asChild><a href="tel:0788825646"><Phone className="mr-2 size-4" />Call</a></Button>
                <Button asChild variant="outline"><a href="mailto:viconnectnets@gmail.com"><Mail className="mr-2 size-4" />Email</a></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
