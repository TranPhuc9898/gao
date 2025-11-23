'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import Masonry from 'react-masonry-css';
import type { Product } from '@/lib/types';

interface ProductGridProps {
  title: string;
  subtitle?: string;
  products: Product[];
  sectionId: string;
}

export default function ProductGrid({ title, subtitle, products, sectionId }: ProductGridProps) {
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <section id={sectionId} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-bold uppercase tracking-wider mb-2">
            SẢN PHẨM
          </p>
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-text-gray max-w-2xl mx-auto text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-8 w-auto"
          columnClassName="pl-8 bg-clip-padding"
        >
          {products.map((product, index) => (
            <div key={product.id} className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
