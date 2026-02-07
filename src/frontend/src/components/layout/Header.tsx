import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/state/cart/useCart';

export default function Header() {
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Collections', path: '/collections' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/generated/brand-logo.dim_512x512.png"
            alt="Brand Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-semibold tracking-tight">ATELIER</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium tracking-wide transition-colors hover:text-foreground/80"
              activeProps={{ className: 'text-foreground' }}
              inactiveProps={{ className: 'text-foreground/60' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Cart & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => navigate({ to: '/collections' })}
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <Badge
                variant="default"
                className="absolute -right-1 -top-1 h-5 min-w-5 rounded-full px-1 text-xs"
              >
                {itemCount}
              </Badge>
            )}
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-semibold">Menu</span>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-lg font-medium tracking-wide transition-colors hover:text-foreground/80"
                    activeProps={{ className: 'text-foreground' }}
                    inactiveProps={{ className: 'text-foreground/60' }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
