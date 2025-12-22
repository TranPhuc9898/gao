'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const policies = [
    {
        id: 'delivery',
        title: 'Giao hàng',
        icon: '🚚',
        content: `
      ### Chính sách giao hàng tận nhà
      Chúng tôi cam kết mang những hạt gạo sạch nhất đến tận cửa nhà bạn với dịch vụ chuyên nghiệp:
      
      *   **Miễn phí vận chuyển:** Cho đơn hàng từ 10kg trở lên trong nội thành TP.HCM.
      *   **Giao hàng nhanh:** Nhận hàng trong vòng 2h - 4h kể từ khi xác nhận đơn hàng (đối với khu vực nội thành).
      *   **Kiểm tra hàng:** Khách hàng được quyền mở bao bì kiểm tra màu sắc và mùi thơm của gạo trước khi thanh toán.
      *   **Hỗ trợ chung cư:** Giao hàng tận căn hộ, hỗ trợ mang vác lên lầu cho người già và phụ nữ mang thai.
    `
    },
    {
        id: 'return',
        title: 'Đổi trả',
        icon: '🔄',
        content: `
      ### Chính sách đổi trả & Hoàn tiền
      Sự hài lòng của khách hàng là ưu tiên số 1 của Gạo Sạch Cây Trôm:
      
      *   **Đổi trả 100%:** Nếu gạo có dấu hiệu ẩm mốc, mối mọt hoặc không đúng chủng loại đã đặt.
      *   **Thời hạn đổi trả:** Trong vòng 7 ngày kể từ khi nhận hàng.
      *   **Điều kiện:** Quý khách vui lòng giữ lại bao bì và hóa đơn mua hàng.
      *   **Hoàn tiền nhanh:** Hoàn tiền qua chuyển khoản hoặc tiền mặt ngay khi thu hồi sản phẩm lỗi.
    `
    },
    {
        id: 'charity',
        title: 'Từ thiện',
        icon: '🍀',
        content: `
      ### Gạo từ thiện & Cộng đồng
      Chúng tôi luôn đồng hành cùng các hoạt động thiện nguyện:
      
      *   **Giá hỗ trợ:** Chiết khấu đặc biệt từ 10% - 20% cho các tổ chức, cá nhân mua gạo làm từ thiện.
      *   **Đóng gói theo yêu cầu:** Hỗ trợ chia túi nhỏ (1kg, 2kg, 5kg) không thu phí công đóng gói để dễ dàng phát quà.
      *   **Hỗ trợ vận chuyển:** Miễn phí vận chuyển đến tận nơi tổ chức phát quà hoặc các mái ấm, nhà chùa.
      *   **Đảm bảo chất lượng:** Gạo từ thiện vẫn đảm bảo độ sạch và an toàn như gạo ăn gia đình.
    </div>
    `
    }
]

export function PolicySection() {
    const [activePolicy, setActivePolicy] = useState(policies[0])

    return (
        <section id="policy" className="py-32 bg-[#FCFBF7]">
            <Container>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-accent font-black tracking-[0.3em] uppercase text-[10px] mb-4 block"
                        >
                            Quyền lợi khách hàng
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark">Chính sách & Cam kết</h2>
                    </div>

                    <div className="flex justify-center flex-wrap gap-6 mb-16">
                        {policies.map((policy) => (
                            <button
                                key={policy.id}
                                onClick={() => setActivePolicy(policy)}
                                className={`group flex items-center gap-3 px-10 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all duration-500 border-2 ${activePolicy.id === policy.id
                                        ? 'bg-primary border-primary text-white shadow-premium scale-105'
                                        : 'bg-white border-primary/5 text-primary-dark/50 hover:border-accent/40 hover:text-accent'
                                    }`}
                            >
                                <span className={`text-xl transition-transform duration-500 group-hover:scale-125 ${activePolicy.id === policy.id ? 'grayscale-0' : 'grayscale'}`}>
                                    {policy.icon}
                                </span>
                                {policy.title}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePolicy.id}
                            initial={{ opacity: 0, scale: 0.98, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: -20 }}
                            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                            className="bg-white p-12 md:p-20 rounded-[48px] shadow-glass border border-primary/5 relative overflow-hidden"
                        >
                            {/* Inner Decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                            <div className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:text-primary-dark prose-headings:font-bold prose-headings:tracking-tight max-w-none relative z-10">
                                <div
                                    className="font-sans leading-loose text-text-gray"
                                    dangerouslySetInnerHTML={{
                                        __html: activePolicy.content
                                            .replace(/### (.*)/g, '<h3 class="text-3xl text-primary font-serif mb-8">$1</h3>')
                                            .replace(/\* \*\*(.*)\*\*/g, '<li class="mb-4 flex gap-4"><span class="text-accent flex-shrink-0">✦</span><span><strong class="text-primary-dark font-black">$1</strong>')
                                            .replace(/: (.*)/g, ': $1</span></li>')
                                            .replace(/\n/g, '')
                                            .replace(/<\/div>/g, '') // Fix existing error
                                    }}
                                />
                            </div>

                            {/* Trust Badge */}
                            <div className="mt-16 pt-10 border-t border-primary/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M2.166 4.9L10 .303 17.834 4.9a1 1 0 01.536.887v5.213a1 1 0 01-.115.465l-7.5 13.5a1 1 0 01-1.51 0l-7.5-13.5A1 1 0 012.115 11V5.787a1 1 0 01.551-.887zM10 2.45L4.115 5.787a1 1 0 01-.444.113V10.3l6.329 11.391L16.329 10.3V5.9a1 1 0 01-.444-.113L10 2.45z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary-dark/40">Cam kết an tâm tuyệt đối</span>
                                </div>
                                <button className="text-primary font-black uppercase text-[10px] tracking-widest hover:text-accent transition-colors">Liên hệ tư vấn →</button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </Container>
        </section>
    )
}
