import { Link, useParams } from 'react-router-dom'
import { BedDouble, Check, Maximize, Users } from 'lucide-react'
import PageHero from '../components/PageHero'
import RoomCard from '../components/RoomCard'
import { Button } from '../components/ui'
import { amenities, rooms } from '../data/site'

export default function RoomDetail() {
  const { slug } = useParams()
  const room = rooms.find((r) => r.slug === slug)

  if (!room) {
    return (
      <section className="container-x flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-4xl font-medium">Room not found</h1>
        <Button to="/rooms">Back to all rooms</Button>
      </section>
    )
  }

  const specs = [
    { icon: Maximize, label: 'Size', value: room.size },
    { icon: BedDouble, label: 'Bed', value: room.beds },
    { icon: Users, label: 'Capacity', value: room.guests },
  ]

  const others = rooms.filter((r) => r.slug !== room.slug).slice(0, 3)

  return (
    <>
      <PageHero title={room.name} crumb="Room Details" image={room.image} />

      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <img
              src={room.image}
              alt={room.name}
              className="aspect-16/10 w-full object-cover"
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {specs.map((spec) => (
                <div key={spec.label} className="border border-white/10 px-5 py-5">
                  <spec.icon className="mb-3 size-5 text-gold" />
                  <p className="text-xs tracking-[0.2em] text-white/45 uppercase">{spec.label}</p>
                  <p className="mt-1 text-white">{spec.value}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-14 text-3xl font-medium">About this room</h2>
            <p className="mt-4">{room.blurb}</p>
            <p className="mt-4">
              Rapidiously myocardinate cross-platform intellectual capital after marketing model.
              Appropriately create interactive infrastructures after maintainable are Holisticly
              facilitate stand-alone inframe compellingly create premier open data.
            </p>

            <h2 className="mt-14 text-3xl font-medium">Room amenities</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {amenities.map((a, i) => (
                <li key={`${a}-${i}`} className="flex items-center gap-3 text-sm">
                  <Check className="size-4 shrink-0 text-gold" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit border border-white/10 bg-ink-soft p-8 lg:sticky lg:top-28">
            <p className="text-sm text-white/50">Starting from</p>
            <p className="mt-1">
              <span className="font-display text-5xl font-semibold text-gold">${room.price}</span>
              <span className="ml-2 text-sm text-white/50">/ Night</span>
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4">
              {[
                { id: 'in', label: 'Check In', type: 'date' },
                { id: 'out', label: 'Check Out', type: 'date' },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="mb-2 block text-[11px] tracking-[0.2em] text-white/45 uppercase"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    className="w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white [color-scheme:dark] focus:border-gold focus:outline-none"
                  />
                </div>
              ))}
              <Button className="w-full">Book This Room</Button>
            </form>

            <p className="mt-5 text-center text-xs text-white/40">
              No prepayment needed — pay at the property.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-ink-soft py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-medium">You may also like</h2>
            <Link
              to="/rooms"
              className="text-xs font-medium tracking-[0.2em] text-gold uppercase hover:text-gold-light"
            >
              All rooms
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((r) => (
              <RoomCard key={r.slug} room={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
