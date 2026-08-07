import GalleryGrid from '../components/GalleryGrid'
import PageHero from '../components/PageHero'
import { Reveal, SectionHeading } from '../components/ui'
import { gallery } from '../data/site'

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        crumb="Gallery"
        image="/images/room-1.jpeg"
        position="center"
      />

      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="A closer look at The Regaal"
              blurb="Rooms, dining and the spaces in between — a glimpse of what a stay with us looks like."
            />
          </Reveal>

          <div className="mt-12 lg:mt-16">
            <GalleryGrid images={gallery} className="grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4" />
          </div>
        </div>
      </section>
    </>
  )
}
