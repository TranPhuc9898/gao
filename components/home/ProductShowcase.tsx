'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import riceProducts from '@/data/rice-products.json'
import { Container } from '@/components/ui/Container'

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(riceProducts[0])

  return (
    <section id="products" className="py-32 bg-[#FCFBF7] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <Container>
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-black tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            Sản phẩm tinh hoa
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-primary-dark"
          >
            Bộ Sưu Tập <span className="text-accent italic font-medium">Gạo Quý</span>
          </motion.h2>
          <div className="w-24 h-1 bg-accent/30 mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Product Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-6">
            {riceProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onClick={() => setActiveProduct(product)}
                className={`relative cursor-pointer p-8 rounded-[32px] transition-all duration-500 group ${activeProduct.id === product.id
                  ? 'bg-primary shadow-premium scale-[1.02]'
                  : 'bg-white hover:bg-cream-dark border border-gray-100'
                  }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${activeProduct.id === product.id ? 'text-white' : 'text-primary'
                    }`}>
                    {product.name}
                  </h3>
                  {activeProduct.id === product.id && (
                    <motion.div
                      layoutId="active-indicator"
                      className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                    />
                  )}
                </div>
                <p className={`text-sm transition-colors duration-300 ${activeProduct.id === product.id ? 'text-white/60' : 'text-text-gray'
                  }`}>
                  {product.tagline}
                </p>

                {/* Visual Glow on Hover/Active */}
                {activeProduct.id === product.id && (
                  <div className="absolute inset-0 border-2 border-accent/20 rounded-[32px] animate-pulse-glow pointer-events-none" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Product Showcase Canvas */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -20 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white rounded-[48px] p-10 md:p-16 shadow-premium relative overflow-hidden border border-gray-50"
              >
                {/* Glass Card Inner Decoration */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                  {/* Info Panel */}
                  <div className="order-2 md:order-1">
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/10 font-sans">
                        {activeProduct.weight}
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest border border-accent/20 font-sans">
                        {activeProduct.packaging}
                      </span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark mb-4 leading-tight">
                      {activeProduct.name}
                    </h3>
                    <p className="text-accent font-semibold text-lg mb-10 italic">
                      "{activeProduct.tagline}"
                    </p>

                    <div className="mb-12 p-8 bg-cream border border-accent/10 rounded-[32px] shadow-inner relative group overflow-hidden">
                      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 mb-6 font-sans">Chi tiết kỹ thuật</h4>
                      <div className="grid grid-cols-1 gap-y-4">
                        {[
                          { label: 'Cảm quan', value: (activeProduct as any).specs.characteristics },
                          { label: 'Hình dáng', value: (activeProduct as any).specs.shape },
                          { label: 'Hàm lượng Amylose', value: (activeProduct as any).specs.amylose },
                          { label: 'Độ ẩm tiêu chuẩn', value: (activeProduct as any).specs.moisture }
                        ].map((spec, i) => (
                          <div key={i} className="flex items-center justify-between border-b border-primary/5 pb-2 last:border-0 last:pb-0">
                            <span className="text-xs text-text-gray font-sans">{spec.label}</span>
                            <span className="text-xs text-primary-dark font-bold font-sans">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-primary-dark/60 mb-10 group">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm font-bold font-sans tracking-wide">{(activeProduct as any).delivery}</p>
                    </div>

                    <div className="flex flex-col gap-6">
                      <div className="flex items-center justify-between p-6 bg-primary-dark rounded-[32px] shadow-2xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-accent translate-x-full group-hover:translate-x-0 transition-transform duration-500 opacity-10" />
                        <div className="relative z-10">
                          <p className="text-[10px] uppercase font-black text-accent tracking-[0.2em] mb-1 font-sans">Giá niêm yết</p>
                          <span className="text-3xl font-black text-white font-sans">
                            {activeProduct.price}
                          </span>
                        </div>
                        <button className="relative z-10 px-8 py-4 bg-accent text-primary-dark font-black rounded-2xl hover:bg-white transition-all shadow-lg font-sans text-sm tracking-tight">
                          MUA NGAY
                        </button>
                      </div>
                      <p className="text-[10px] text-text-gray/60 text-center uppercase font-bold tracking-widest font-sans">
                        Giao hàng tận nơi • Thanh toán linh hoạt
                      </p>
                    </div>
                  </div>

                  {/* Visual Panel */}
                  <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative w-full max-w-[320px] aspect-[3/4] group">
                      <div className="absolute inset-0 bg-primary/20 rounded-[40px] blur-[40px] -rotate-6 group-hover:rotate-0 transition-transform duration-700" />
                      <div className="relative w-full h-full bg-cream-dark rounded-[40px] border border-accent/20 shadow-2xl flex items-center justify-center p-10 overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                        <Image
                          src={activeProduct.image}
                          alt={activeProduct.name}
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                        />
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 animate-shimmer opacity-30 pointer-events-none" />
                        <div className="absolute bottom-10 inset-x-0 text-center translate-y-[20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                          <div className="w-8 h-1 bg-accent mx-auto rounded-full" />
                        </div>
                        {/* High-end badge */}
                        <div className="absolute top-6 right-6">
                          <div className="w-12 h-12 rounded-full border border-accent/50 bg-white/10 backdrop-blur-md flex items-center justify-center">
                            <span className="text-[8px] font-black text-accent tracking-tighter">PREMIUM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  )
}
