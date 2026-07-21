import Hero from '../components/Hero'
import About from '../sections/About'
import Amenities from '../sections/Amenities'
import Blog from '../sections/Blog'
import BookingSection from '../sections/BookingSection'
import Facilities from '../sections/Facilities'
import Manager from '../sections/Manager'
import Offers from '../sections/Offers'
import Rooms from '../sections/Rooms'
import Testimonials from '../sections/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <BookingSection />
      <Rooms />
      <About />
      <Amenities />
      <Manager />
      <Facilities />
      <Offers />
      <Testimonials />
      <Blog />
    </>
  )
}
