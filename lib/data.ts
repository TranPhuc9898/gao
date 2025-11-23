import productsData from '@/data/products.json'
import riceProductsData from '@/data/rice-products.json'
import longanProductsData from '@/data/longan-products.json'
import blogsData from '@/data/blogs.json'
import siteConfig from '@/data/site-config.json'
import type { Product, BlogPost, SiteConfig } from './types'

// Products
export function getAllProducts(): Product[] {
  return productsData as Product[]
}

export function getRiceProducts(): Product[] {
  return riceProductsData as Product[]
}

export function getLonganProducts(): Product[] {
  return longanProductsData as Product[]
}

export function getProductBySlug(slug: string): Product | undefined {
  // Search in all product sources
  const allProducts = [...productsData, ...riceProductsData, ...longanProductsData]
  return allProducts.find((p) => p.slug === slug) as Product | undefined
}

export function getRelatedProducts(productId: string, limit = 2): Product[] {
  const product = productsData.find((p) => p.id === productId) as Product
  if (!product?.relatedProducts) return []

  return productsData
    .filter((p) => product.relatedProducts!.includes(p.id))
    .slice(0, limit) as Product[]
}

// Blogs
export function getAllBlogs(): BlogPost[] {
  return blogsData
    .sort((a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    ) as BlogPost[]
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogsData.find((b) => b.slug === slug) as BlogPost | undefined
}

export function getBlogsByTag(tag: string): BlogPost[] {
  return blogsData.filter((b) => b.tags.includes(tag)) as BlogPost[]
}

export function getLatestBlogs(limit = 3): BlogPost[] {
  return getAllBlogs().slice(0, limit)
}

// Site Config
export function getSiteConfig(): SiteConfig {
  return siteConfig as SiteConfig
}
