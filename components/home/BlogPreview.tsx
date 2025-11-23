import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getLatestBlogs } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

export function BlogPreview() {
  const blogs = getLatestBlogs(3)

  const blogImages: Record<string, string> = {
    'van-hoa-trong-lua': 'photo-1574943320219-553eb213f72d',
    'bao-ton-cay-ban-dia': 'photo-1511497584788-876760111969',
    've-dep-thien-nhien': 'photo-1470071459604-3b5ec3a7fe05',
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-earth mb-2">
              Bài viết mới nhất
            </h2>
            <p className="text-gray-600">
              Khám phá văn hóa, thiên nhiên và truyền thống Việt Nam
            </p>
          </div>
          <div className="hidden md:block">
            <Button href="/blog" variant="outline">
              Xem tất cả
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/${blogImages[blog.slug] || 'photo-1500382017468-9049fed747ef'}?w=600&q=80`}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-rice px-2 py-1 rounded-full text-earth"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-earth mb-2 line-clamp-2 group-hover:text-forest transition-colors">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {blog.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center text-sm text-gray-500">
                  <span>{blog.author.name}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readingTime} phút đọc</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button href="/blog" variant="outline">
            Xem tất cả
          </Button>
        </div>
      </Container>
    </section>
  )
}
