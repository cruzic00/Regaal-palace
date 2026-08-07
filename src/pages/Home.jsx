import Hero from '../components/Hero'
import About from '../sections/About'
import Amenities from '../sections/Amenities'
import BookingSection from '../sections/BookingSection'
import Brands from '../sections/Brands'
import BusinessBanner from '../sections/BusinessBanner'
import EventsOverview from '../sections/EventsOverview'
import Facilities from '../sections/Facilities'
import Highlights from '../sections/Highlights'
import Manager from '../sections/Manager'
import Testimonials from '../sections/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <BookingSection />
      <Highlights />
      <Brands />
      <BusinessBanner />
      <About />
      <EventsOverview />
      <Amenities />
      <Manager />
      <Facilities />
      <Testimonials />
    </>
  )
}
