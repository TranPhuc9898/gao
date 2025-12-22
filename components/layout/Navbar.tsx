'use client'

import Link from 'next/link'
import Image from 'next/image'
import siteConfig from '@/data/site-config.json'
import { Container } from '@/components/ui/Container'
import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })

  const links = [
    { href: '/', label: 'Trang chủ' },
    { href: '#story', label: 'Về chúng tôi' },
    { href: '#products', label: 'Sản phẩm' },
    { href: '#contact', label: 'Liên hệ' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Tagline */}
      <div className={`bg-primary-dark/95 backdrop-blur-sm text-accent py-2 text-center text-[10px] md:text-xs font-black tracking-[0.2em] transition-all duration-500 ${isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
        }`}>
        <div className="container mx-auto px-4 flex justify-center gap-4 md:gap-12 items-center">
          <span className="flex items-center gap-1.5"><span className="text-white opacity-50">🌾</span> GẠO SẠCH GIAO TẬN NƠI</span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-accent/30" />
          <span className="flex items-center gap-1.5"><span className="text-white opacity-50">🍚</span> CHUẨN ST NGUYÊN CÁM</span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-accent/30" />
          <span className="text-white px-2 py-0.5 rounded bg-accent/20 border border-accent/30">FREESHIP 2H</span>
        </div>
      </div>

      <motion.nav
        className={`transition-all duration-500 border-b ${isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-glass border-primary/5 py-3'
          : 'bg-transparent border-transparent py-5 md:py-8'
          }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 transition-all duration-500 scale-100 group-hover:scale-110 ${isScrolled ? 'border-accent shadow-premium' : 'border-white/20 shadow-xl'
                }`}>
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-script text-2xl md:text-3xl leading-none transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-accent'
                  }`}>Gạo Sạch Cây Trôm</span>
                <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] transition-colors duration-500 ${isScrolled ? 'text-primary-light' : 'text-white/60'
                  }`}>Thiên Nhiên Việt Ecosystem</span>
              </div>
            </Link>


            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 hover:text-accent relative group ${isScrolled ? 'text-primary-dark/70' : 'text-white/90'
                    }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              <button className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 ${isScrolled
                ? 'bg-primary text-white shadow-premium hover:shadow-primary/20 hover:-translate-y-0.5'
                : 'bg-accent text-primary-dark shadow-xl hover:bg-white hover:-translate-y-0.5'
                }`}>
                Đặt hàng ngay
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-3 rounded-2xl transition-all ${isScrolled
                ? 'text-primary-dark bg-primary/5'
                : 'text-white bg-white/10 backdrop-blur-md'
                }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="lg:hidden absolute top-full left-4 right-4 mt-4 bg-white/95 backdrop-blur-2xl rounded-[32px] shadow-2xl border border-primary/5 p-8 flex flex-col gap-6"
              >
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-primary-dark hover:text-accent font-black uppercase text-xs tracking-widest pb-4 border-b border-primary/5 last:border-0 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <button className="w-full py-4 bg-primary text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl shadow-premium">
                  Đặt hàng ngay
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </motion.nav>
    </div>
  )
}
