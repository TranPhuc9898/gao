import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { getSiteConfig } from '@/lib/data'

export function Footer() {
  const config = getSiteConfig()

  return (
    <footer className="bg-forest-dark text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-xl font-bold mb-2">{config.name}</h3>
            <p className="text-rice-light text-sm">{config.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-rice-light hover:text-white transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/products/gao" className="text-rice-light hover:text-white transition-colors">
                  Gạo
                </Link>
              </li>
              <li>
                <Link href="/products/cay" className="text-rice-light hover:text-white transition-colors">
                  Cây
                </Link>
              </li>
              <li>
                <Link href="/products/trom" className="text-rice-light hover:text-white transition-colors">
                  Trôm
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-rice-light hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Mạng xã hội</h4>
            <ul className="space-y-2 text-sm">
              {config.social.facebook && (
                <li>
                  <a
                    href={config.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rice-light hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                </li>
              )}
              {config.social.instagram && (
                <li>
                  <a
                    href={config.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rice-light hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              )}
              {config.social.twitter && (
                <li>
                  <a
                    href={config.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rice-light hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-sm text-rice-light">
              <li>{config.contact.email}</li>
              {config.contact.phone && <li>{config.contact.phone}</li>}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-forest text-center text-sm text-rice-light">
          <p>&copy; {new Date().getFullYear()} {config.name}. Tất cả quyền được bảo lưu.</p>
        </div>
      </Container>
    </footer>
  )
}
