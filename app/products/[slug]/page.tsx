import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { getAllProducts, getProductBySlug, getRelatedProducts } from '@/lib/data'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Không tìm thấy sản phẩm',
    }
  }

  return {
    title: product.metadata.title,
    description: product.metadata.description,
    keywords: product.metadata.keywords,
    openGraph: {
      title: product.metadata.title,
      description: product.metadata.description,
      type: 'website',
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.id, 2)

  const productImages: Record<string, string> = {
    gao: 'photo-1574943320219-553eb213f72d',
    cay: 'photo-1511497584788-876760111969',
    trom: 'photo-1470071459604-3b5ec3a7fe05',
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={`https://images.unsplash.com/${productImages[product.category]}?w=1920&q=80`}
            alt={product.name}
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10" />
        <div className="relative z-20 text-center px-6">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4 drop-shadow-2xl">
            {product.name}
          </h1>
          <p className="font-serif text-xl md:text-2xl text-rice italic">
            "{product.tagline}"
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{product.description}</ReactMarkdown>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-rice-light rounded-xl p-6 sticky top-24">
                <h3 className="font-serif text-2xl text-earth mb-4">Đặc điểm</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-forest mr-2 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {product.origin && (
                  <div className="mt-6 pt-6 border-t border-earth/20">
                    <h4 className="font-semibold text-earth mb-2">Nguồn gốc</h4>
                    <p className="text-gray-700">{product.origin}</p>
                  </div>
                )}

                {product.weight && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-earth mb-2">Quy cách</h4>
                    <p className="text-gray-700">{product.weight}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-white">
          <Container>
            <h2 className="font-serif text-3xl text-earth mb-8 text-center">
              Sản phẩm liên quan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedProducts.map((related) => (
                <Card
                  key={related.id}
                  image={`https://images.unsplash.com/${productImages[related.category]}?w=600&q=80`}
                  title={related.name}
                  description={related.tagline}
                  href={`/products/${related.slug}`}
                  imageAlt={related.name}
                />
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  )
}
