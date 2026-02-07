export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Linen Shirt',
    category: 'Shirts',
    price: 89,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
    description:
      'A timeless linen shirt crafted from premium European linen. Perfect for warm weather, this breathable piece offers both comfort and sophistication.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: '2',
    name: 'Tailored Wool Blazer',
    category: 'Outerwear',
    price: 249,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
    description:
      'Impeccably tailored blazer in fine wool blend. Features a modern slim fit with structured shoulders and notch lapels for a refined silhouette.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '3',
    name: 'Organic Cotton Tee',
    category: 'T-Shirts',
    price: 45,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    description:
      'Essential crew neck tee made from 100% organic cotton. Soft, durable, and versatile—a wardrobe staple that pairs with everything.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '4',
    name: 'Slim Fit Chinos',
    category: 'Pants',
    price: 95,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
    description:
      'Contemporary chinos with a slim, tapered fit. Crafted from stretch cotton twill for all-day comfort and a polished appearance.',
    sizes: ['28', '30', '32', '34', '36', '38'],
  },
  {
    id: '5',
    name: 'Merino Wool Sweater',
    category: 'Knitwear',
    price: 135,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
    description:
      'Luxurious crew neck sweater in fine merino wool. Lightweight yet warm, with a refined texture that elevates any outfit.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '6',
    name: 'Denim Jacket',
    category: 'Outerwear',
    price: 159,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    description:
      'Classic denim jacket with a modern twist. Features premium Japanese denim with subtle fading and a comfortable relaxed fit.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '7',
    name: 'Oxford Button-Down',
    category: 'Shirts',
    price: 79,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
    description:
      'Traditional oxford cloth button-down in premium cotton. A versatile piece that transitions seamlessly from casual to smart-casual.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: '8',
    name: 'Cashmere Scarf',
    category: 'Accessories',
    price: 98,
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80',
    description:
      'Luxuriously soft cashmere scarf. An elegant accessory that adds warmth and sophistication to any ensemble.',
    sizes: ['One Size'],
  },
  {
    id: '9',
    name: 'Leather Belt',
    category: 'Accessories',
    price: 65,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583bb?w=800&q=80',
    description:
      'Full-grain leather belt with brushed metal buckle. Handcrafted from premium Italian leather that develops a beautiful patina over time.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '10',
    name: 'Wool Trousers',
    category: 'Pants',
    price: 145,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
    description:
      'Elegant wool trousers with a tailored fit. Features a flat front and subtle pleats for a sophisticated, professional look.',
    sizes: ['28', '30', '32', '34', '36', '38'],
  },
  {
    id: '11',
    name: 'Henley Long Sleeve',
    category: 'T-Shirts',
    price: 59,
    image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&q=80',
    description:
      'Classic henley in soft cotton jersey. Features a three-button placket and ribbed cuffs for a casual yet refined aesthetic.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '12',
    name: 'Quilted Vest',
    category: 'Outerwear',
    price: 119,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    description:
      'Lightweight quilted vest with premium down fill. Perfect for layering, offering warmth without bulk in a sleek silhouette.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
];
