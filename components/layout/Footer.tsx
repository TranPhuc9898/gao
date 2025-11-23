import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2C6 2 3 5 3 8c0 1.5.5 2.9 1.4 4L10 20l5.6-8c.9-1.1 1.4-2.5 1.4-4 0-3-3-6-7-6zm0 9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-script text-2xl leading-none">Gạo Sạch</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary">CÂY TRÔM</p>
                </div>
              </div>
            </Link>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Hành trình mang hạt gạo sạch từ những cánh đồng phù sa màu mỡ đến bữa cơm gia đình Việt. 
              Chúng tôi cam kết chất lượng và sự an toàn tuyệt đối.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Liên kết</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Trang chủ</Link></li>
              <li><Link href="#story" className="hover:text-white transition-colors">Câu chuyện</Link></li>
              <li><Link href="#products" className="hover:text-white transition-colors">Sản phẩm</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Contact Small */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Liên hệ</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>31/5 Hoàng Hoa Thám, P.13, Q.Tân Bình, TP.HCM</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg font-bold text-white">0785 691 369</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Gạo Sạch Cây Trôm. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
