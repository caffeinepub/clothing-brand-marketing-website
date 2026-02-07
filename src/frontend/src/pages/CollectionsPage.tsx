import { useState } from 'react';
import ProductGrid from '@/components/products/ProductGrid';
import ProductDetailsDialog from '@/components/products/ProductDetailsDialog';
import { products } from '@/data/products';
import type { Product } from '@/data/products';

export default function CollectionsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Our Collections</h1>
        <p className="text-lg text-muted-foreground">
          Explore our carefully curated selection of contemporary fashion
        </p>
      </div>

      <ProductGrid products={products} onProductClick={setSelectedProduct} />

      <ProductDetailsDialog
        product={selectedProduct}
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      />
    </div>
  );
}
