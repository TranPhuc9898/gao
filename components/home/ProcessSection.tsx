'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Chọn Giống',
    desc: 'Tuyển chọn những hạt giống thuần chủng, khỏe mạnh nhất, lưu giữ gen quý bản địa.',
    color: '#4CAF50'
  },
  {
    num: '02',
    title: 'Gieo Trồng',
    desc: 'Gieo mạ trên đất phù sa màu mỡ, chăm sóc bằng nguồn nước sạch tự nhiên.',
    color: '#8BC34A'
  },
  {
    num: '03',
    title: 'Chăm Sóc',
    desc: 'Sử dụng phân bón hữu cơ, không hóa chất độc hại, bảo vệ hệ sinh thái đồng ruộng.',
    color: '#CDDC39'
  },
  {
    num: '04',
    title: 'Thu Hoạch',
    desc: 'Gặt lúa đúng độ chín vàng, phơi nắng tự nhiên để giữ trọn hương vị.',
    color: '#FFC107'
  },
  {
    num: '05',
    title: 'Thành Phẩm',
    desc: 'Xay xát, đóng gói chân không ngay tại nguồn để đảm bảo độ tươi ngon.',
    color: '#FF9800'
  }
]

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"])

  return (
    <section ref={containerRef} className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Ambient Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-[128px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Hành Trình Hạt Gạo
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            Từ hạt giống nhỏ bé đến bát cơm thơm lành là cả một quá trình 
            kết tinh của thiên nhiên và công sức con người.
          </p>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-yellow-400 to-primary box-shadow-[0_0_10px_rgba(76,175,80,0.8)]"
            />
          </div>

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                
                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                >
                  <div className="inline-block mb-4">
                    <span className="text-6xl font-script text-white/10 font-bold absolute -top-8 -left-4 z-0 select-none">
                      {step.num}
                    </span>
                    <h3 className="text-3xl font-bold text-primary relative z-10">{step.title}</h3>
                  </div>
                  <p className="text-white/70 text-lg font-light leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>

                {/* Center Point */}
                <div className="relative flex-shrink-0 w-12 h-12 hidden md:flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(76,175,80,0.8)] z-10"
                  />
                  <div className="absolute inset-0 rounded-full border border-white/20 animate-ping" style={{ animationDuration: '3s' }} />
                </div>

                {/* Visual/Image Placeholder Side */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 w-full"
                >
                  <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center group hover:bg-white/10 transition-colors overflow-hidden relative">
                    {/* Placeholder for future images */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/40" />
                    <span className="text-white/20 font-script text-2xl group-hover:text-white/40 transition-colors z-10">
                      Hình ảnh {step.title}
                    </span>
                    
                    {/* Magical Particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-float"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
