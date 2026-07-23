import PageHero from '../components/PageHero'
import About from '../sections/About'
import Amenities from '../sections/Amenities'
import Facilities from '../sections/Facilities'
import Manager from '../sections/Manager'
import Testimonials from '../sections/Testimonials'

export default function AboutPage() {
  return (
    <>
      <PageHero
              title="About Us"
              crumb="About"
              image="/images/aboutus.jpeg"
              position="50% 0%"
            />
      <About />
      <Amenities />
      <Manager />
      <Facilities />
      <Testimonials />
    </>
  )
}
