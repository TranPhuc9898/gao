'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const pillars = [
  {
    id: 'soil',
    title: 'Đất Mẹ Thuần Khiết',
    description: 'Đất được để nghỉ ngơi, bồi đắp phù sa tự nhiên, không tồn dư hóa chất độc hại.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'water',
    title: 'Nước Nguồn Trong Lành',
    description: 'Dẫn thủy nhập điền từ những mạch nước ngầm và sông ngòi không bị ô nhiễm.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 'process',
    title: 'Canh Tác Tự Nhiên',
    description: 'Nói không với thuốc trừ sâu hóa học. Sử dụng thiên địch và chế phẩm sinh học.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    id: 'heart',
    title: 'Tâm Người Gieo Hạt',
    description: 'Sự tận tụy của người nông dân, nâng niu từng bông lúa như đứa con tinh thần.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
]

export default function CleanRiceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-yellow-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Triết lý canh tác
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-text-dark mb-6"
          >
            Thế nào là <span className="text-primary italic">Gạo Sạch?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-gray max-w-2xl mx-auto font-light leading-relaxed"
          >
            Không chỉ là một danh xưng, "Gạo Sạch" là lời cam kết về sự thuần khiết, 
            an toàn và tôn trọng quy luật của tự nhiên.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-8 rounded-2xl bg-cream/30 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 relative z-10">
                  {pillar.icon}
                </div>
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
              </div>
              
              <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">
                {pillar.title}
              </h3>
              <p className="text-text-gray text-sm leading-relaxed">
                {pillar.description}
              </p>

              {/* Magical Hover Effect Line */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-yellow-400"
                initial={{ width: 0 }}
                animate={{ width: hoveredIndex === index ? '100%' : '0%' }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
