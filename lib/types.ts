export interface Product {
  id: string
  slug: string
  name: string
  category: 'gao' | 'cay' | 'trom' | 'rice' | 'longan'
  color?: string
  tagline: string
  description: string
  image: string
  gallery?: string[]
  features: string[]
  origin?: string
  weight?: string
  price?: string
  themeColor?: string
  accentColor?: string
  relatedProducts?: string[]
  metadata: {
    title: string
    description: string
    keywords: string[]
  }
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  featuredImage: string
  author: {
    name: string
    avatar?: string
  }
  publishedAt: string
  tags: string[]
  readingTime?: number
  metadata: {
    title: string
    description: string
    keywords: string[]
  }
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  logo: string
  social: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
  contact: {
    email: string
    phone?: string
  }
}
