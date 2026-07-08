import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Product } from "@/data/catalog";
import { categories } from "@/data/catalog";

const availabilityLabel: Record<Product["availability"], { label: string; className: string }> = {
  "in-stock": { label: "In Stock", className: "bg-primary/15 text-primary border-primary/30" },
  "low-stock": { label: "Low Stock", className: "bg-amber-500/15 text-amber-600 border-amber-500/30" },
  "out-of-stock": { label: "Out of Stock", className: "bg-destructive/15 text-destructive border-destructive/30" },
};

export function ProductCard({ product }: { product: Product }) {
  const cat = categories.find((c) => c.slug === product.category);
  const avail = availabilityLabel[product.availability];
  return (
    <Card className="overflow-hidden card-hover border pt-0">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">
            {cat?.name}
          </span>
          <Badge variant="outline" className={avail.className}>
            {avail.label}
          </Badge>
        </div>
        <h3 className="font-semibold leading-snug line-clamp-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="pt-1 text-lg font-bold text-primary">${product.price.toFixed(2)}</div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant="default">
          <Link to="/products/$id" params={{ id: product.id }}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
