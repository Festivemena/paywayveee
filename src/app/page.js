import Image from 'next/image'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Carousel from '@/components/carousel'
import Invite from '@/components/invite'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'
import Partners from '@/components/partners'
import CarouselSlider from '@/components/newcarousel'

export default function Home() {
  return (
    <main className="bg-white pt-4 w-full h-full">
      <div className="px-24">
        <Header />
        <Hero />
      </div>
      <div className="bg-[#000212] w-full h-[1100px]">
        <CarouselSlider />
      </div>

      <Invite />
      <Testimonials />
      <Partners />
      <Footer />
    </main>
  );
}
