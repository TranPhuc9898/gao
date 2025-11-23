import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'

interface CardProps {
  image: string
  title: string
  description: string
  href: string
  badge?: string
  imageAlt?: string
}

export function Card({ image, title, description, href, badge, imageAlt }: CardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <div className="absolute top-4 left-4 bg-earth text-white px-3 py-1 rounded-full text-sm font-medium">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl text-earth mb-2 group-hover:text-forest transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 line-clamp-3 mb-4">{description}</p>
        <div className="flex items-center text-earth font-medium">
          Xem chi tiết
          <svg
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  )
}
