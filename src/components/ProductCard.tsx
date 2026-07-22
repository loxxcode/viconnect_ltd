import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Product } from "@/data/catalog";
import { categories, formatRwf } from "@/data/catalog";

export function ProductCard({ product, showCategoryBadge = true }: { product: Product; showCategoryBadge?: boolean }) {
  const cat = categories.find((c) => c.slug === product.category);

  return (
    <Card className="group overflow-hidden border border-border/60 bg-background/90 pt-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-4/3 overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="space-y-3 p-5">
        {showCategoryBadge && (
          <span className="inline-flex w-fit rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
            {cat?.name}
          </span>
        )}
        <div className="space-y-2">
          <h3 className="font-semibold leading-snug text-foreground">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        </div>
        
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button asChild className="w-full" variant="default">
          <Link to="/products/$id" params={{ id: product.id }}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
