import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductCard } from "@/components/ProductCard";
import { brands, categories, products } from "@/data/catalog";

const searchSchema = z.object({
  category: z.string().optional(),
  brand: z.string().optional(),
  q: z.string().optional(),
  sort: z.string().optional(),
});

export const Route = createFileRoute("/products")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Products — VI CONNECT NETWORK SERVICES LTD" },
      { name: "description", content: "Browse our catalog of computers and printers for home, school and business." },
      { property: "og:title", content: "Products — VI CONNECT NETWORKSERVICES LTD" },
      { property: "og:description", content: "Browse our catalog of computers and printers." },
    ],
  }),
  component: ProductsPage,
});

const PAGE_SIZE = 12;

function ProductsPage() {
  const params = Route.useSearch();
  const navigate = Route.useNavigate();

  const [q, setQ] = useState(params.q ?? "");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const category = params.category ?? "all";
  const brand = params.brand ?? "all";
  const sort = params.sort ?? "newest";

  const update = (patch: Record<string, string | undefined>) => {
    navigate({
      search: (prev: z.infer<typeof searchSchema>) => {
        const next: Record<string, string | undefined> = { ...prev, ...patch };
        for (const k of Object.keys(next)) {
          if (next[k] === "all" || next[k] === "") next[k] = undefined;
        }
        return next;
      },
    });
    setVisible(PAGE_SIZE);
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (brand !== "all") list = list.filter((p) => p.brand === brand);
    if (q.trim()) {
      const needle = q.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(needle) ||
          p.description.toLowerCase().includes(needle) ||
          p.brand.toLowerCase().includes(needle),
      );
    }
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "alpha":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        list.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
    }
    return list;
  }, [category, brand, sort, q]);

  const shown = filtered.slice(0, visible);

  return (
    <div className="container-page py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Products</h1>
        <p className="text-muted-foreground mt-2">
          {filtered.length} {filtered.length === 1 ? "product" : "products"} available
        </p>
      </div>

      {/* Filters */}
      <div className="grid gap-3 md:grid-cols-[1fr_repeat(3,minmax(0,180px))] mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setVisible(PAGE_SIZE);
            }}
            className="pl-9 h-11"
          />
        </div>
        <Select value={category} onValueChange={(v) => update({ category: v })}>
          <SelectTrigger className="h-11"><SelectValue placeholder="Category" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((c) => (
              <SelectItem key={c.slug} value={c.slug}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={brand} onValueChange={(v) => update({ brand: v })}>
          <SelectTrigger className="h-11"><SelectValue placeholder="Brand" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Brands</SelectItem>
            {brands.map((b) => (
              <SelectItem key={b} value={b}>{b}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sort} onValueChange={(v) => update({ sort: v })}>
          <SelectTrigger className="h-11"><SelectValue placeholder="Sort" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-asc">Price: Low → High</SelectItem>
            <SelectItem value="price-desc">Price: High → Low</SelectItem>
            <SelectItem value="alpha">Alphabetical</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {shown.length === 0 ? (
        <div className="py-20 text-center text-muted-foreground">
          No products match your filters.
        </div>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shown.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          {visible < filtered.length && (
            <div className="mt-10 flex justify-center">
              <Button size="lg" variant="outline" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                Load More
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
