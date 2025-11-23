import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function StorySection() {
  return (
    <section className="py-16 md:py-24 bg-rice-light">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80"
              alt="Ruộng lúa Việt Nam"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm text-earth font-semibold mb-2 uppercase tracking-wide">
              Câu chuyện
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">
              Hành trình từ đất đến bàn cơm
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Mỗi hạt gạo trên bàn cơm đều mang trong mình câu chuyện của đất mẹ,
                của những người nông dân cần mẫu, và của thiên nhiên Việt Nam.
              </p>
              <p>
                Từ việc chọn giống, gieo mạ, cấy lúa, cho đến khi thu hoạch –
                tất cả đều được thực hiện với tình yêu và trách nhiệm với môi trường.
              </p>
              <p className="font-serif text-xl text-earth italic">
                "Trồng cây, trồng người, trồng tương lai"
              </p>
            </div>
            <div className="mt-8">
              <Button href="/blog" variant="outline">
                Đọc thêm câu chuyện
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
