'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  image: string;
  themeColor?: string;
  accentColor?: string;
  category: string;
}

export default function ProductCard({
  slug,
  name,
  tagline,
  image,
  themeColor = '#389E4C',
  accentColor = '#2B8C40',
  category
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <Link href={`/products/${slug}`}>
        {/* Card Content */}
        <div
          className="relative p-8 pt-16 pb-32 min-h-[500px]"
          style={{
            background: `linear-gradient(135deg, ${themeColor} 0%, ${accentColor} 100%)`
          }}
        >
          {/* Circular Badge */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white border-4 border-white/60 flex flex-col items-center justify-center shadow-xl"
          >
            {/* Logo or Icon */}
            <svg className="w-10 h-10 mb-1" fill="none" stroke={accentColor} viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-[9px] font-bold leading-tight text-center" style={{ color: accentColor }}>
              GẠO SẠCH<br/>CÂY TRÔM
            </p>
          </motion.div>

          {/* Product Name */}
          <div className="text-center mb-6">
            <motion.h3
              className="font-script text-5xl text-white mb-2 drop-shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              {category === 'rice' ? 'Gạo' : 'Trôm'}
            </motion.h3>
            <p className="text-3xl text-white font-black uppercase tracking-[0.2em] drop-shadow-lg">
              {name}
            </p>
            <div className="mt-4 inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">
              <p className="text-white text-sm italic">{tagline}</p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute left-8 bottom-48 opacity-30">
            {category === 'rice' ? (
              <svg className="w-12 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2M12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8M12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14M12 20C10.9 20 10 20.9 10 22H14C14 20.9 13.1 20 12 20Z"/>
              </svg>
            ) : (
              <svg className="w-12 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="3" />
                <circle cx="12" cy="16" r="3" />
                <path d="M12 11v2" stroke="currentColor" strokeWidth="2"/>
              </svg>
            )}
          </div>

          {/* Product Image Window */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-white/40 to-white/60 backdrop-blur-sm rounded-t-3xl border-t-4 border-white/60 p-6">
            <div className="relative h-full overflow-hidden rounded-xl">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Quality Badge */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-white/60 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke={themeColor} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-white text-xs font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              100% TỰ NHIÊN
            </p>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl pointer-events-none" />
      </Link>
    </motion.div>
  );
}
