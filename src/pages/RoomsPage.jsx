import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import RoomCard from '../components/RoomCard'
import Amenities from '../sections/Amenities'
import { Reveal, SectionHeading } from '../components/ui'
import { brand, rooms } from '../data/site'

const roomsIntro =
  'The Regaal offers comfortable, well-appointed rooms with modern amenities, perfect for corporate travellers seeking a productive and relaxing stay.'

export default function RoomsPage() {
  const [params] = useSearchParams()
  const checkIn = params.get('checkIn')
  const checkOut = params.get('checkOut')
  const hasSearch = Boolean(checkIn && checkOut)

  return (
    <>
      <PageHero
        full
        title="Your Business Address in Jalgaon."
        subline="Comfortable stays, thoughtful hospitality and business-friendly convenience at The Regaal."
        crumb="Rooms"
        image="/images/allrooms.jpeg"
      />

      <section className="pt-16 sm:pt-20 lg:pt-28">
        <div className="container-x">
          {hasSearch && (
            <div className="mb-12 border border-gold/30 bg-ink-soft px-6 py-5 text-sm">
              Showing availability for{' '}
              <strong className="text-gold">{checkIn}</strong> →{' '}
              <strong className="text-gold">{checkOut}</strong> · {params.get('rooms')} ·{' '}
              {params.get('guests')}
            </div>
          )}

          <Reveal>
            <img
              src="/images/the-regaal-logo.png"
              alt="Regaal Hotels"
              className="mx-auto h-auto w-full max-w-[200px] object-contain sm:max-w-[240px]"
            />
          </Reveal>
        </div>
      </section>

      <Amenities />

      <section className="pb-16 sm:pb-20 lg:pb-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading title={`${brand.name} Rooms & Suites`} blurb={roomsIntro} />
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2">
            {rooms.map((room, i) => (
              <Reveal
                key={room.slug}
                variant={i % 2 === 0 ? 'left-zoom' : 'right-zoom'}
                delay={(i % 2) * 120}
              >
                <RoomCard room={room} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
