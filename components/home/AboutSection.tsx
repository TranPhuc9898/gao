'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

export default function AboutSection() {
  return (
    <section id="story" className="py-32 bg-[#FCFBF7] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[650px] w-full rounded-[48px] overflow-hidden shadow-premium group"
          >
            <Image
              src="/images/story-bg.png"
              alt="Câu chuyện Gạo Cây Trôm"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Elegant Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-60" />

            {/* Decorative Frame */}
            <div className="absolute inset-8 border border-white/20 rounded-[32px] z-10 pointer-events-none group-hover:inset-10 transition-all duration-700" />

            {/* Visual Hook */}
            <div className="absolute bottom-12 left-12 z-20">
              <span className="text-accent text-sm font-black tracking-[0.3em] uppercase block mb-2">Đặc sản vùng cao</span>
              <p className="text-white text-2xl font-serif italic">"Hương vị của đất, tinh khiết từ nước"</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">
                Di sản & Cam kết
              </span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary-dark mb-10 leading-tight">
                Gìn giữ <span className="text-accent italic font-medium">hồn quê</span> <br />
                trong từng hạt ngọc
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-lg text-text-gray leading-loose font-sans font-medium">
                <strong className="text-primary font-black">Gạo Sạch Cây Trôm</strong> là dòng sản phẩm gạo cao cấp được phát triển bởi <strong className="text-primary font-black">Thiên Nhiên Việt Ecosystem</strong>. Chúng tôi định nghĩa "Gạo Sạch" dựa trên 3 tiêu chuẩn khắt khe nhất:
              </p>

              <div className="space-y-6">
                {[
                  {
                    num: '01',
                    title: 'Nguồn giống & Canh tác',
                    desc: 'Sử dụng giống lúa thuần chủng ST25, OM5451. Canh tác theo mô hình Lúa - Tôm tự nhiên, tuyệt đối không hóa chất.'
                  },
                  {
                    num: '02',
                    title: 'Quy trình chế biến',
                    desc: 'Dây chuyền xay xát hiện đại, kiểm soát độ ẩm < 14%. Không chất tẩy trắng, không hương liệu nhân tạo.'
                  },
                  {
                    num: '03',
                    title: 'Chứng nhận chất lượng',
                    desc: '100% đạt chuẩn VietGAP & OCOP. Từng lô gạo đều có mã truy xuất nguồn gốc minh bạch.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-accent font-black text-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-black text-primary-dark text-lg mb-1 tracking-tight">{item.title}</h4>
                      <p className="text-sm text-text-gray leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                {['Chứng nhận VietGAP', 'Chứng nhận OCOP', 'Kiểm định An Toàn'].map((cert, idx) => (
                  <div key={idx} className="aspect-[4/3] bg-white border border-accent/10 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md hover:border-accent/30 transition-all cursor-default group">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[8px] text-primary font-black uppercase tracking-widest text-center px-2">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-16 flex items-center gap-6"
            >
              <div className="h-[2px] w-16 bg-accent opacity-30" />
              <span className="font-script text-4xl text-primary transform -rotate-2">Thiên Nhiên Việt Ecosystem</span>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
