'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const testimonials = [
    {
        name: 'Chị Lan Anh',
        role: 'Nội trợ (Quận 7, TP.HCM)',
        content: 'Gạo ST25 của Cây Trôm rất thơm, cơm dẻo và ngọt. Đặc biệt là giao hàng rất nhanh và đóng gói hút chân không rất sạch sẽ. Gia đình mình rất yên tâm khi sử dụng.',
        rating: 5
    },
    {
        name: 'Anh Minh Tuân',
        role: 'Chủ quán cơm niêu',
        content: 'Tôi đã thử qua nhiều loại gạo nhưng gạo 5451 ở đây có độ dẻo vừa phải, cơm tơi xốp rất hợp để nấu cơm niêu. Giá cả lại rất ổn định cho khách sỉ.',
        rating: 5
    },
    {
        name: 'Bà Ngọc Tuyết',
        role: 'Khách hàng thân thiết',
        content: 'Sản phẩm gạo hữu cơ nguyên cám rất tốt cho sức khỏe người già như tôi. Cảm ơn Thiên Nhiên Việt đã mang đến dòng gạo chất lượng như vậy.',
        rating: 5
    }
]

const partners = [
    { name: 'Đối tác Từ thiện', logo: 'CHARITY' },
    { name: 'Hội Nông Dân', logo: 'FARMERS' },
    { name: 'Chuỗi Cửa Hàng Sạch', logo: 'STORE' },
    { name: 'Tài trợ Xã hội', logo: 'SOCIAL' }
]

export function Testimonials() {
    return (
        <section className="py-32 bg-[#FDFCF8] relative overflow-hidden">
            {/* Decorative background grains */}
            <div className="absolute top-20 left-10 text-8xl opacity-10 select-none hidden lg:block">🌾</div>
            <div className="absolute bottom-20 right-10 text-8xl opacity-10 select-none hidden lg:block rotate-12">🌾</div>

            <Container>
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-6"
                    >
                        Được tin dùng
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-primary-dark"
                    >
                        Cảm nhận từ <span className="text-accent italic">Khách hàng</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-10 rounded-[40px] shadow-glass border border-primary/5 relative group hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Quote mark */}
                            <div className="absolute top-8 right-10 text-6xl font-serif text-accent/20 group-hover:text-accent/40 transition-colors">“</div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-text-gray font-sans leading-loose mb-10 italic">
                                "{item.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-cream-dark flex items-center justify-center font-bold text-primary font-sans border border-accent/10">
                                    {item.name.charAt(item.name.lastIndexOf(' ') + 1)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary-dark font-sans leading-none mb-1">{item.name}</h4>
                                    <p className="text-[10px] text-text-gray uppercase tracking-widest font-black">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Partners / Charity Logo grid */}
                <div className="pt-20 border-t border-primary/5">
                    <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-text-gray/40 mb-12">Đồng hành cùng cộng đồng & Đối tác</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-40 hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0">
                        {partners.map((partner, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-4 group">
                                <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl border border-primary/5 bg-white shadow-sm flex items-center justify-center font-black text-primary/40 text-[10px] text-center p-4 group-hover:shadow-md group-hover:border-accent/20 transition-all duration-500 group-hover:-translate-y-1">
                                    {partner.logo}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-gray/60 group-hover:text-primary transition-colors">{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
