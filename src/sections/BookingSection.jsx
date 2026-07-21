import BookingBar from '../components/BookingBar'
import { Reveal } from '../components/ui'

/**
 * Deliberately sits fully below the hero — nothing of it peeks over the fold,
 * so it only arrives once you scroll past the slider.
 */
export default function BookingSection() {
  return (
    <section className="pt-16 lg:pt-20">
      <div className="container-x">
        <Reveal variant="up-far">
          <div className="border-t-2 border-gold shadow-2xl">
            <BookingBar />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
