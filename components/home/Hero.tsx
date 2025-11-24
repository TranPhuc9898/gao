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
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
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
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white/90 text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
            Tinh hoa đất Việt
          </span>
        </motion.div>

        <h1 className="flex flex-col items-center justify-center mb-6">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-script text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-lg mb-2"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
          >
            Gạo Sạch
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold tracking-widest uppercase"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
          >
            Cây Trôm
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-white/90 font-light tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Hành trình từ hạt gạo trắng ngần đến những tán cây trôm xanh mát, 
          gói trọn hương vị của đất trời và tâm tình người nông dân.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#products"
            className="group relative px-8 py-4 bg-white text-primary-dark font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-xl"
          >
            <span className="relative z-10">Khám phá ngay</span>
            <div className="absolute inset-0 bg-cream transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>
          <a
            href="#story"
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/40 text-white font-medium rounded-full hover:bg-white/20 transition-all hover:scale-105"
          >
            Câu chuyện của chúng tôi
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs tracking-widest uppercase">Cuộn xuống</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
