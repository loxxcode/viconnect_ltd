import { createFileRoute } from "@tanstack/react-router";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/catalog";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Product Categories — VI CONNECT" },
      { name: "description", content: "Browse all product categories: networking equipment, CCTV, computer parts, electronic components and more." },
      { property: "og:title", content: "Product Categories — VI CONNECT" },
      { property: "og:description", content: "Browse all product categories at VI CONNECT NETWORKSERVICES LTD." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="container-page py-12">
      <div className="mb-10 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold">Product Categories</h1>
        <p className="text-muted-foreground mt-3">
          From networking hardware to microcontrollers — everything you need for connectivity,
          surveillance, computing and prototyping.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </div>
    </div>
  );
}
