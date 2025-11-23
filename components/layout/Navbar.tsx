'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

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
    { href: '#story', label: 'Câu chuyện' },
    { href: '#products', label: 'Sản phẩm' },
    { href: '#contact', label: 'Liên hệ' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-6'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
              isScrolled ? 'bg-primary border-primary text-white' : 'bg-white/10 border-white text-white backdrop-blur-sm'
            }`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2C6 2 3 5 3 8c0 1.5.5 2.9 1.4 4L10 20l5.6-8c.9-1.1 1.4-2.5 1.4-4 0-3-3-6-7-6zm0 9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
              </svg>
            </div>
            <div>
              <p className={`font-script text-2xl leading-none transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>Gạo Sạch</p>
              <p className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
                isScrolled ? 'text-primary-dark' : 'text-white/80'
              }`}>CÂY TRÔM</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium text-sm uppercase tracking-widest transition-colors hover:text-primary ${
                  isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <button className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
              isScrolled 
                ? 'bg-primary text-white hover:bg-primary-dark' 
                : 'bg-white text-primary hover:bg-cream'
            }`}>
              Đặt hàng ngay
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
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
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-gray-700 hover:text-primary font-medium uppercase text-sm border-b border-gray-50 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </Container>
    </motion.nav>
  )
}
