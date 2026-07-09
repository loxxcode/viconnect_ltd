import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Product } from "@/data/catalog";
import { categories, formatRwf } from "@/data/catalog";

export function ProductCard({ product }: { product: Product }) {
  const cat = categories.find((c) => c.slug === product.category);
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
        <span className="text-xs uppercase tracking-wide text-muted-foreground">
          {cat?.name}
        </span>
        <h3 className="font-semibold leading-snug line-clamp-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="pt-1 text-lg font-bold text-primary">{formatRwf(product.price)}</div>
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
