import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import RoomCard from '../components/RoomCard'
import { Reveal, SectionHeading } from '../components/ui'
import { brand, rooms } from '../data/site'

const roomsIntro =
  'The Regaal Hotels offers comfortable, well-appointed rooms with modern amenities, perfect for corporate travellers seeking a productive and relaxing stay.'

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

      <section className="py-16 sm:py-20 lg:py-32">
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
              className="mx-auto mb-8 h-auto w-full max-w-[200px] object-contain sm:max-w-[240px] lg:mb-10"
            />
          </Reveal>

          {/* Watermark off: the real logo already sits directly above this. */}
          <Reveal>
            <SectionHeading
              title={`${brand.possessive} Rooms & Suites`}
              blurb={roomsIntro}
              watermark={false}
            />
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
