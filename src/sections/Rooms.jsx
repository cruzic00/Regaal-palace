import RoomCard from '../components/RoomCard'
import { Reveal, SectionHeading } from '../components/ui'
import { brand, rooms } from '../data/site'

const roomsIntro =
  'The Regaal offers comfortable, well-appointed rooms with modern amenities, perfect for corporate travellers seeking a productive and relaxing stay.'

export default function Rooms() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading title={`${brand.name} Rooms & Suites`} blurb={roomsIntro} />
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-2">
          {rooms.slice(0, 4).map((room, i) => (
            <Reveal
              key={room.slug}
              variant={i % 2 === 0 ? 'left-zoom' : 'right-zoom'}
              delay={i * 120}
            >
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
