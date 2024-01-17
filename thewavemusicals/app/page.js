import Image from 'next/image'
import About from './components/about'
import Footer from './components/footer'
import Testimonials from './components/testimonials'


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">

      <About />
      <Testimonials />
      <Footer />

    </div>
  )
}
