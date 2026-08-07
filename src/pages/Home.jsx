import Hero from '../components/Hero'
import About from '../sections/About'
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
      <About brandLabel="Regaal Hotels" />
      <EventsOverview brandLabel="Regaal Hotels" />
      <Manager />
      <Facilities />
      <Testimonials />
    </>
  )
}
