'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import riceProducts from '@/data/rice-products.json'

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(riceProducts[0])

  return (
    <section id="products" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Sản phẩm nổi bật
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-dark"
          >
            Bộ Sưu Tập <span className="text-primary italic">Gạo Quý</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Product List / Navigation */}
          <div className="lg:col-span-4 space-y-4">
            {riceProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onClick={() => setActiveProduct(product)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 group ${
                  activeProduct.id === product.id 
                    ? 'bg-white border-primary shadow-lg scale-105' 
                    : 'bg-white/50 border-transparent hover:bg-white hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-xl font-bold ${
                    activeProduct.id === product.id ? 'text-primary' : 'text-text-dark'
                  }`}>
                    {product.name}
                  </h3>
                  {activeProduct.id === product.id && (
                    <motion.div layoutId="active-dot" className="w-2 h-2 rounded-full bg-primary" />
                  )}
                </div>
                <p className="text-sm text-text-gray line-clamp-1">{product.tagline}</p>
              </motion.div>
            ))}
          </div>

          {/* Product Detail Display */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-gray-100"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Product Info */}
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                    {activeProduct.weight}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-dark mb-4">
                    {activeProduct.name}
                  </h3>
                  <p className="text-text-gray mb-6 leading-relaxed">
                    {activeProduct.tagline}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {activeProduct.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-text-dark">
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                      <button className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                        Đặt mua ngay
                      </button>
                      <span className="text-2xl font-bold text-primary">
                        {activeProduct.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 italic">
                      * Mua từ thiện? Liên hệ <a href="tel:0784691369" className="font-bold text-primary hover:underline">078 469 1369</a> (Cô Thảo) để có giá hỗ trợ tốt nhất.
                    </p>
                  </div>
                </div>

                {/* Product Image Placeholder */}
                <div className="relative aspect-[4/5] rounded-2xl bg-gray-100 overflow-hidden group">
                  <Image
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
