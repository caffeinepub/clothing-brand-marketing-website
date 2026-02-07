import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, Leaf, Package } from 'lucide-react';
import { products } from '@/data/products';

export default function HomePage() {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-banner.dim_1920x900.png"
            alt="Hero Banner"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        </div>
        <div className="container relative mx-auto flex h-full items-center px-4 md:px-6">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Elevate Your Style
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Discover our curated collection of timeless pieces designed for the modern individual.
              Quality craftsmanship meets contemporary design.
            </p>
            <Button
              size="lg"
              className="group"
              onClick={() => navigate({ to: '/collections' })}
            >
              Shop Collections
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Featured Collection</h2>
          <p className="text-muted-foreground">
            Handpicked pieces that define this season's aesthetic
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg"
              onClick={() => navigate({ to: '/collections' })}
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="mb-1 font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">${product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Brand Values */}
      <section className="border-t border-border/40 bg-muted/30">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Why Choose Us</h2>
            <p className="text-muted-foreground">
              Our commitment to excellence in every detail
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">
                Each piece is crafted from the finest materials, ensuring durability and comfort that
                lasts.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Sustainable Fashion</h3>
              <p className="text-sm text-muted-foreground">
                We're committed to ethical production practices and environmentally conscious materials.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Timeless Design</h3>
              <p className="text-sm text-muted-foreground">
                Our collections transcend trends, offering versatile pieces that remain stylish season
                after season.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
