'use client'

import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Liên hệ với chúng tôi
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-8">
              Mang hương vị <br/>
              <span className="text-primary italic">thiên nhiên</span> về nhà
            </h2>
            <p className="text-lg text-text-gray mb-12 font-light leading-relaxed">
              Chúng tôi luôn sẵn sàng lắng nghe và phục vụ bạn. Hãy liên hệ để được tư vấn về các loại gạo ngon nhất cho gia đình.
            </p>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-dark mb-1">Địa chỉ</h3>
                  <p className="text-text-gray">31/5 Hoàng Hoa Thám, Phường 13</p>
                  <p className="text-text-gray">Quận Tân Bình, TP. Hồ Chí Minh</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-dark mb-1">Hotline</h3>
                  <p className="text-2xl font-bold text-primary">0785 691 369</p>
                  <p className="text-sm text-text-gray mt-1">Hỗ trợ 24/7</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.203205776356!2d106.6455823!3d10.7994444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294975070123%3A0x573254004632541!2zMzEvNSBIb8OgbmcgSG9hIFRow6FtLCBQaMaw4budbmcgMTMsIFTDom4gQsOsbmgsIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
