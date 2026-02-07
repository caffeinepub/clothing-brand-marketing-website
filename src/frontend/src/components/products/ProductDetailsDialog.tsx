import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/state/cart/useCart';
import type { Product } from '@/data/products';

interface ProductDetailsDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProductDetailsDialog({
  product,
  open,
  onOpenChange,
}: ProductDetailsDialogProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) return;

    setIsAdding(true);
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image,
    });

    setTimeout(() => {
      setIsAdding(false);
      setSelectedSize('');
      onOpenChange(false);
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Product Image */}
          <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl">{product.name}</DialogTitle>
              <DialogDescription className="text-sm">{product.category}</DialogDescription>
            </DialogHeader>

            <p className="mb-6 text-2xl font-bold">${product.price}</p>

            <div className="mb-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h4 className="mb-3 text-sm font-semibold">Select Size</h4>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    className="min-w-[60px]"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              size="lg"
              disabled={!selectedSize || isAdding}
              onClick={handleAddToCart}
              className="mt-auto w-full"
            >
              {isAdding ? (
                <>
                  <Check className="mr-2 h-5 w-5" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart
                </>
              )}
            </Button>

            {!selectedSize && (
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Please select a size
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
