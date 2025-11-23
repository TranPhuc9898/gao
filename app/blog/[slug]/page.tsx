import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { getAllBlogs, getBlogBySlug } from '@/lib/data'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  const blogs = getAllBlogs()
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) {
    return {
      title: 'Không tìm thấy bài viết',
    }
  }

  return {
    title: blog.metadata.title,
    description: blog.metadata.description,
    keywords: blog.metadata.keywords,
    openGraph: {
      title: blog.metadata.title,
      description: blog.metadata.description,
      type: 'article',
      publishedTime: blog.publishedAt,
    },
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  const blogImages: Record<string, string> = {
    'van-hoa-trong-lua': 'photo-1574943320219-553eb213f72d',
    'bao-ton-cay-ban-dia': 'photo-1511497584788-876760111969',
    've-dep-thien-nhien': 'photo-1470071459604-3b5ec3a7fe05',
  }

  const formattedDate = new Date(blog.publishedAt).toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={`https://images.unsplash.com/${blogImages[blog.slug] || 'photo-1500382017468-9049fed747ef'}?w=1920&q=80`}
          alt={blog.title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      </div>

      {/* Article Header */}
      <section className="py-16 md:py-24">
        <Container maxWidth="lg">
          <div className="max-w-3xl mx-auto">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-rice rounded-full text-sm text-earth font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl text-earth mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-gray-600 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-earth rounded-full flex items-center justify-center text-white font-semibold">
                  {blog.author.name.charAt(0)}
                </div>
                <span className="font-medium">{blog.author.name}</span>
              </div>
              <span>•</span>
              <time dateTime={blog.publishedAt}>{formattedDate}</time>
              <span>•</span>
              <span>{blog.readingTime} phút đọc</span>
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-earth max-w-none mt-12">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="font-serif text-3xl text-earth mt-8 mb-4">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="font-serif text-2xl text-forest mt-6 mb-3">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="font-serif text-xl text-earth-dark mt-4 mb-2">{children}</h3>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-earth pl-6 italic text-gray-700 my-6 bg-rice-light py-4 rounded-r-lg">
                      {children}
                    </blockquote>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-2 my-6">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="space-y-2 my-6">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-700 leading-relaxed">{children}</li>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
                  ),
                }}
              >
                {blog.content}
              </ReactMarkdown>
            </div>
          </div>
        </Container>
      </section>
    </article>
  )
}
