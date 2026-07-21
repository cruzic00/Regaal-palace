import RoomCard from '../components/RoomCard'
import { Reveal, SectionHeading, spreadFromCentre, spreadFromCentreDelays } from '../components/ui'
import { lead, rooms } from '../data/site'

export default function Rooms() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading title="Royella’s Rooms & Suites" blurb={lead} />
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
