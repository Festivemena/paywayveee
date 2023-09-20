import Image from 'next/image'
import Header from '@/components/header'
import Hero from '@/components/hero'
// import Carousel from '@/components/carousel'
import Invite from '@/components/invite'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'
import Partners from '@/components/partners'
import CarouselSlider from '@/components/newcarousel'
import Features from '@/components/features'

export default function Home() {
  return (
    <main className="bg-white pt-4 w-full h-full">
      <div className="px-6 sticky top-0 bg-white w-full z-30 absolute lg:px-24">
        <Header />
      </div>
      <div className="h-[1000px] pl-20 bg-white">
        <Hero />
      </div>
      <div className="h-[1250px]">
        <CarouselSlider />
      </div>

      <Invite />
      <Testimonials />
      <Partners />
      <Features />
      <Footer />
    </main>
  );
}
