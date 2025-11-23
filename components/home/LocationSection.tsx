'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Top Image - Rice Fields */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/products/gao-st25-hero.png"
                alt="Gạo Sạch Cây Trôm ST25 - Long An"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Image - Longan Orchard */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=800&q=80"
                alt="Vườn nhãn Long An"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-cream-dark rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-earth-light/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* Title */}
              <h2 className="text-5xl md:text-6xl font-bold text-earth-dark mb-4">
                Long An
              </h2>
              <p className="text-xl text-earth-dark mb-8">
                Miền Nam - Việt Nam
              </p>

              {/* Vietnamese Description */}
              <p className="text-text-dark leading-relaxed mb-6">
                Long An là tỉnh nằm ở vùng Đồng bằng sông Cửu Long, Việt Nam. Đây là vựa lúa lớn nhất Việt Nam với
                diện tích trồng lúa hơn 400.000 ha. Ngoài ra, Long An còn nổi tiếng với nhãn lồng – đặc sản quý giá
                với hương vị ngọt thanh, thịt dày và mọng nước. Vùng đất màu mỡ này đã nuôi dưỡng nông nghiệp bền vững
                và mang lại nguồn thu nhập chính cho người dân địa phương.
              </p>

              {/* English Description */}
              <p className="text-text-dark leading-relaxed mb-8">
                Long An is a province in the Mekong Delta, Vietnam. It is <strong>Vietnam's largest rice granary</strong>{' '}
                with over 400,000 ha of rice cultivation area. Besides rice, Long An is also famous for its{' '}
                <strong>longan (nhãn lồng)</strong> – a precious specialty with sweet taste, thick flesh and juicy texture.
                This fertile land has nurtured sustainable agriculture and provided the main income source for local people.
              </p>

              {/* Illustration - Farmers */}
              <div className="mt-12 relative h-48">
                <div className="absolute bottom-0 left-0 right-0">
                  {/* Layered silhouettes */}
                  <div className="relative">
                    {/* Background Hills */}
                    <svg viewBox="0 0 400 100" className="w-full h-24 text-earth-light">
                      <path
                        fill="currentColor"
                        d="M0,50 Q100,20 200,50 T400,50 L400,100 L0,100 Z"
                        opacity="0.3"
                      />
                    </svg>

                    {/* Middle Hills */}
                    <svg viewBox="0 0 400 120" className="w-full h-28 absolute bottom-0 text-earth-medium">
                      <path
                        fill="currentColor"
                        d="M0,60 Q80,30 160,60 T320,60 L400,60 L400,120 L0,120 Z"
                        opacity="0.5"
                      />
                    </svg>

                    {/* Foreground */}
                    <svg viewBox="0 0 400 140" className="w-full h-32 absolute bottom-0 text-earth-dark">
                      <path
                        fill="currentColor"
                        d="M0,80 Q60,50 120,80 T240,80 L400,80 L400,140 L0,140 Z"
                        opacity="0.7"
                      />
                      {/* Rice plants */}
                      <g opacity="0.8">
                        <line x1="100" y1="80" x2="100" y2="60" stroke="currentColor" strokeWidth="2" />
                        <circle cx="100" cy="55" r="3" fill="currentColor" />
                        <line x1="150" y1="80" x2="150" y2="65" stroke="currentColor" strokeWidth="2" />
                        <circle cx="150" cy="60" r="3" fill="currentColor" />
                        <line x1="200" y1="80" x2="200" y2="62" stroke="currentColor" strokeWidth="2" />
                        <circle cx="200" cy="57" r="3" fill="currentColor" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Location Info */}
              <div className="mt-8 pt-6 border-t border-earth-dark/20">
                <h3 className="text-sm font-bold text-earth-dark uppercase tracking-wider mb-3">
                  Nơi mua sản phẩm
                </h3>
                <div className="space-y-2 text-sm text-text-gray">
                  <p>📍 <strong>Công ty Tân Đồng Tiến</strong></p>
                  <p className="ml-6">1056 Quốc Lộ 1, Khánh Hậu, Tân An, Long An</p>
                  <p>📍 <strong>Vựa Gạo Gái Đông</strong></p>
                  <p className="ml-6">Chuyên cung cấp gạo sạch, nguồn gốc rõ ràng</p>
                  <p>📍 <strong>Nhãn lồng Chợ Đào</strong></p>
                  <p className="ml-6">Vùng trồng nhãn đặc sản Cần Đước, Long An</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
