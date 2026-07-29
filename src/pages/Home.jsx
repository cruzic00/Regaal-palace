import Hero from '../components/Hero'
import About from '../sections/About'
import Amenities from '../sections/Amenities'
import BookingSection from '../sections/BookingSection'
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
      <Rooms />
      <About />
      <Amenities />
      <Manager />
      <Facilities />
      <Testimonials />
    </>
  )
}
