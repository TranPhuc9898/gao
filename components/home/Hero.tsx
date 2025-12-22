'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} className="relative h-[110vh] w-full overflow-hidden flex items-center justify-center">
      {/* Cinematic Background */}
      <motion.div
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/products/Gemini_Generated_Image_ng5sh2ng5sh2ng5s.png"
          alt="Gạo Cây Trôm Hero"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 via-transparent to-primary-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/20 via-transparent to-primary-dark/20" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md text-accent text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 shadow-glass">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Tinh hoa đất Việt
          </span>
        </motion.div>

        <h1 className="flex flex-col items-center justify-center mb-10 text-white">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-script text-7xl md:text-9xl text-accent drop-shadow-2xl mb-1"
            style={{ textShadow: '0 4px 30px rgba(212,175,55,0.4)' }}
          >
            Gạo Sạch
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-sans font-black tracking-tighter uppercase"
          >
            CÂY TRÔM
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed font-sans"
        >
          Sản phẩm nông nghiệp cao cấp từ <span className="text-accent font-medium">Thiên Nhiên Việt Ecosystem</span>.
          Vị ngọt phù sa, chuẩn sạch tinh khôi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-10 py-5 bg-accent text-primary-dark font-black rounded-full transition-all overflow-hidden shadow-premium hover:shadow-accent/20">
            <span className="relative z-10">ĐẶT HÀNG NGAY</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all">
            XEM SẢN PHẨM
          </button>
        </motion.div>

        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 pt-10 border-t border-white/10"
        >
          <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mb-6">Đạt tiêu chuẩn chất lượng quốc gia</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['VIETGAP', 'OCOP 4-SAO', 'ORGANIC', 'HỮU CƠ'].map((cert, i) => (
              <div key={i} className="flex items-center gap-2 group cursor-help">
                <div className="w-12 h-12 rounded-full border border-accent/40 flex items-center justify-center text-[8px] font-bold text-accent group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300">
                  {cert.split(' ')[0]}
                </div>
                <span className="text-white/60 text-[11px] font-medium tracking-wider group-hover:text-accent transition-colors font-sans">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-bold">Cuộn để khám phá</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent/0 via-accent to-accent/0 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
