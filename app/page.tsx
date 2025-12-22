import { Hero } from '@/components/home/Hero'
import AboutSection from '@/components/home/AboutSection'
import CleanRiceSection from '@/components/home/CleanRiceSection'
import ProcessSection from '@/components/home/ProcessSection'
import ProductShowcase from '@/components/home/ProductShowcase'
import { Testimonials } from '@/components/home/Testimonials'
import { PolicySection } from '@/components/home/PolicySection'
import ContactSection from '@/components/home/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CleanRiceSection />
      <ProductShowcase />
      <Testimonials />
      <PolicySection />
      <ProcessSection />
      <ContactSection />
    </>
  )
}
