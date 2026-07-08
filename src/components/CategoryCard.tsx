import { Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Category } from "@/data/catalog";
import { productsByCategory } from "@/data/catalog";

export function CategoryCard({ category }: { category: Category }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[category.icon] ?? Icons.Package;
  const count = productsByCategory(category.slug).length;
  return (
    <Link
      to="/products"
      search={{ category: category.slug }}
      className="block group"
    >
      <Card className="card-hover h-full">
        <CardContent className="p-6 flex flex-col items-start gap-3">
          <div className="grid place-items-center size-12 rounded-xl gradient-brand text-primary-foreground shadow-soft group-hover:scale-110 transition-transform">
            <Icon className="size-6" />
          </div>
          <div>
            <h3 className="font-semibold">{category.name}</h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {category.description}
            </p>
          </div>
          <div className="mt-auto text-xs text-primary font-medium">
            {count} {count === 1 ? "product" : "products"} →
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
