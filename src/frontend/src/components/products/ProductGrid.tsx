import { Card, CardContent } from '@/components/ui/card';
import type { Product } from '@/data/products';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export default function ProductGrid({ products, onProductClick }: ProductGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg"
          onClick={() => onProductClick(product)}
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
            <p className="mb-2 text-xs text-muted-foreground">{product.category}</p>
            <p className="font-semibold">${product.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
