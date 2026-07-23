import PageHero from '../components/PageHero'
import About from '../sections/About'
import Amenities from '../sections/Amenities'
import Facilities from '../sections/Facilities'
import Manager from '../sections/Manager'
import Testimonials from '../sections/Testimonials'

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" image="/images/aboutus.jpeg" />
      <About />
      <Amenities />
      <Manager />
      <Facilities />
      <Testimonials />
    </>
  )
}
