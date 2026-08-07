import Hero from '../components/Hero'
import About from '../sections/About'
import Amenities from '../sections/Amenities'
import BookingSection from '../sections/BookingSection'
import Brands from '../sections/Brands'
import BusinessBanner from '../sections/BusinessBanner'
import Facilities from '../sections/Facilities'
import Highlights from '../sections/Highlights'
import Manager from '../sections/Manager'
import Rooms from '../sections/Rooms'
import Testimonials from '../sections/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <BookingSection />
      <Highlights />
      <Brands />
      <Rooms />
      <BusinessBanner />
      <About />
      <Amenities />
      <Manager />
      <Facilities />
      <Testimonials />
    </>
  )
}
