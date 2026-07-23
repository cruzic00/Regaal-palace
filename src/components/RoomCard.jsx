import { Link } from 'react-router-dom'
import { BedDouble, Maximize } from 'lucide-react'

export default function RoomCard({ room }) {
  return (
    <article className="group bg-ink-soft">
      <div className="on-photo relative overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-scrim/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <Link
          to={`/rooms/${room.slug}`}
          className="absolute inset-x-0 bottom-0 translate-y-4 bg-gold py-3.5 text-center text-xs font-medium tracking-[0.2em] text-on-gold uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
        >
          View Details
        </Link>
        <div className="absolute top-5 left-5 bg-scrim/85 px-4 py-2 backdrop-blur">
          <span className="font-display text-xl font-semibold text-gold">${room.price}</span>
          <span className="ml-1 text-xs text-white/55">| Night</span>
        </div>
      </div>

      <div className="p-7">
        <p className="eyebrow mb-2">{room.category ?? 'Luxury Room'}</p>
        <h3 className="text-2xl font-medium">
          <Link to={`/rooms/${room.slug}`} className="transition-colors hover:text-gold">
            {room.name}
          </Link>
        </h3>
        <div className="mt-5 flex items-center gap-6 border-t border-line pt-5 text-sm">
          <span className="flex items-center gap-2">
            <Maximize className="size-4 text-gold" />
            {room.size}
          </span>
          <span className="flex items-center gap-2">
            <BedDouble className="size-4 text-gold" />
            {room.beds}
          </span>
        </div>
      </div>
    </article>
  )
}
