'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="story" className="py-24 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/story-bg.png"
              alt="Câu chuyện Gạo Cây Trôm"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            {/* Decorative Frame */}
            <div className="absolute inset-4 border border-white/20 rounded-xl z-10 pointer-events-none" />
          </motion.div>

          {/* Content Side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                Về chúng tôi
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-8 leading-tight">
                Gìn giữ <span className="text-primary italic">hồn quê</span> <br/>
                trong từng sản phẩm
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-text-gray leading-relaxed font-light"
            >
              <p>
                <strong className="text-primary-dark font-medium">Gạo Cây Trôm</strong> không chỉ là một thương hiệu, 
                mà là tâm huyết của những người con Long An mong muốn đưa hương vị quê hương vươn xa.
              </p>
              <p>
                Chúng tôi tin rằng, nông nghiệp bền vững bắt đầu từ sự tôn trọng đất đai. 
                Mỗi hạt gạo, mỗi trái nhãn lồng đều được nuôi dưỡng từ phù sa sông nước và 
                tình yêu của người nông dân chân chất.
              </p>
              <p>
                Dự án này là lời tri ân gửi đến vẻ đẹp bình dị của những cánh đồng lúa bạt ngàn, 
                những vườn cây trĩu quả, và những con người đã dành cả cuộc đời để gìn giữ 
                màu xanh cho đất mẹ.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-primary" />
                <span className="font-script text-3xl text-primary-dark">Thiên nhiên Việt</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
