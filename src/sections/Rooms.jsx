import RoomCard from '../components/RoomCard'
import { Reveal, SectionHeading } from '../components/ui'
import { lead, rooms } from '../data/site'

/**
 * The row unpacks outwards from the middle card: the centre one zooms in on its
 * own, then the outer two travel out from behind it. --spread-x only kicks in at
 * lg, where the three really are side by side.
 */
const spread = [
  'lg:[--spread-x:108%]', // left card starts over the centre
  '', // centre card just zooms
  'lg:[--spread-x:-108%]', // right card starts over the centre
]
const delays = [220, 0, 220]

export default function Rooms() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading title="Royella’s Rooms & Suites" blurb={lead} />
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.slice(0, 3).map((room, i) => (
            <Reveal key={room.slug} variant="emerge" delay={delays[i]} className={spread[i]}>
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
