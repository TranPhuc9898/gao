import { Container } from '@/components/ui/Container'
import Link from 'next/link'
import Image from 'next/image'
import { getAllProducts } from '@/lib/data'

export function ProductsGrid() {
  const products = getAllProducts()

  const productConfig = {
    gao: {
      color: 'primary',
      bgGradient: 'from-white to-gray-50',
      image: 'photo-1574943320219-553eb213f72d',
      badge: '5451',
    },
    cay: {
      color: 'secondary',
      bgGradient: 'from-white to-gray-50',
      image: 'photo-1511497584788-876760111969',
      badge: 'ST25',
    },
    trom: {
      color: 'primary',
      bgGradient: 'from-white to-gray-50',
      image: 'photo-1470071459604-3b5ec3a7fe05',
      badge: 'ORGANIC',
    },
  }

  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-bold uppercase tracking-wider mb-2">SẢN PHẨM</p>
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Gạo Sạch Cây Trôm
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            ✦ 100% Tự nhiên  •  Không chất bảo quản  •  Giữ nguyên vị cảm ✦
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => {
            const config = productConfig[product.category as keyof typeof productConfig]
            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group block relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Packaging-style background */}
                <div className={`relative bg-gradient-to-br ${config.bgGradient} p-8 pt-16 pb-32 min-h-[500px] border border-gray-100`}>
                  {/* Circular Badge - Top */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-primary/5 backdrop-blur-sm border-4 border-primary/10 flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <svg className="w-10 h-10 text-primary mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2C6 2 3 5 3 8c0 1.5.5 2.9 1.4 4L10 20l5.6-8c.9-1.1 1.4-2.5 1.4-4 0-3-3-6-7-6zm0 9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
                      </svg>
                      <p className="text-primary text-[10px] font-bold leading-tight">GẠO SẠCH<br/>CÂY TRÔM</p>
                    </div>
                  </div>

                  {/* Product Name - Script + Bold */}
                  <div className="text-center mb-6">
                    <h3 className="font-script text-5xl text-primary mb-2 drop-shadow-sm">
                      Gạo Sạch
                    </h3>
                    <p className="text-3xl text-primary-dark font-black uppercase tracking-[0.2em] drop-shadow-sm">
                      {product.name.toUpperCase()}
                    </p>
                    <div className="mt-4 inline-block bg-primary/10 backdrop-blur-sm px-4 py-1 rounded-full">
                      <p className="text-primary text-2xl font-bold">{config.badge}</p>
                    </div>
                  </div>

                  {/* Decorative Wheat */}
                  <div className="absolute left-8 bottom-48">
                    <svg className="w-12 h-32 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2M12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8M12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14M12 20C10.9 20 10 20.9 10 22H14C14 20.9 13.1 20 12 20Z"/>
                    </svg>
                  </div>

                  {/* Window Effect - Show Rice */}
                  <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-white/40 to-white/60 backdrop-blur-sm rounded-t-3xl border-t-4 border-white/60 p-6">
                    <div className="relative h-full overflow-hidden rounded-xl">
                      <Image
                        src={`https://images.unsplash.com/${config.image}?w=400&q=80`}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Quality Badges at Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center border-2 border-primary/20">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-primary text-xs font-bold">VIỆT NAM CHẤT LƯỢNG</p>
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center border-2 border-orange/20">
                      <p className="text-orange text-xs font-black">100%</p>
                    </div>
                  </div>

                  {/* Features Text */}
                  <div className="absolute bottom-20 left-6 right-6">
                    <p className="text-gray-600 text-sm text-center italic">
                      ⭐ Không chất bảo quản
                    </p>
                    <p className="text-gray-600 text-sm text-center italic">
                      ⭐ Giữ nguyên vị cảm
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl pointer-events-none"></div>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
