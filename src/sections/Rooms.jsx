import RoomCard from '../components/RoomCard'
import { Reveal, SectionHeading, spreadFromCentre, spreadFromCentreDelays } from '../components/ui'
import { brand, rooms } from '../data/site'

const roomsIntro =
  'Regaal Palace offers comfortable, well-appointed rooms with modern amenities, perfect for corporate travellers seeking a productive and relaxing stay.'

export default function Rooms() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading title={`${brand.possessive} Rooms & Suites`} blurb={roomsIntro} />
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {rooms.slice(0, 3).map((room, i) => (
            <Reveal
              key={room.slug}
              variant="emerge"
              delay={spreadFromCentreDelays[i]}
              className={spreadFromCentre[i]}
            >
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
