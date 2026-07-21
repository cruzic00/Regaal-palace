import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import RoomCard from '../components/RoomCard'
import { Reveal } from '../components/ui'
import { rooms } from '../data/site'

export default function RoomsPage() {
  const [params] = useSearchParams()
  const checkIn = params.get('checkIn')
  const checkOut = params.get('checkOut')
  const hasSearch = Boolean(checkIn && checkOut)

  return (
    <>
      <PageHero
        title="Rooms & Suites"
        crumb="Rooms"
        image="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-x">
          {hasSearch && (
            <div className="mb-12 border border-gold/30 bg-ink-soft px-6 py-5 text-sm">
              Showing availability for{' '}
              <strong className="text-gold">{checkIn}</strong> â†’{' '}
              <strong className="text-gold">{checkOut}</strong> Â· {params.get('rooms')} Â·{' '}
              {params.get('guests')}
            </div>
          )}

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, i) => (
              <Reveal key={room.slug} delay={(i % 3) * 120}>
                <RoomCard room={room} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
