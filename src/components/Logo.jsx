import { Link } from 'react-router-dom'

/** Ornate gold badge + wordmark, matching the template's crest treatment. */
export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <svg viewBox="0 0 64 64" className={compact ? 'size-9' : 'size-12'} aria-hidden="true">
        <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" className="text-gold" strokeWidth="1" />
        <circle cx="32" cy="32" r="15" fill="none" stroke="currentColor" className="text-gold/60" strokeWidth="0.75" />
        {/* Eight radiating flourishes around the ring */}
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d="M32 12 q3 4 0 8 q-3-4 0-8"
            fill="currentColor"
            className="text-gold"
            transform={`rotate(${i * 45} 32 32)`}
          />
        ))}
        <text
          x="32"
          y="39"
          textAnchor="middle"
          className="fill-gold font-display"
          fontSize="19"
          fontWeight="600"
        >
          R
        </text>
      </svg>

      <span className="leading-none">
        <span
          className={`block font-display font-semibold tracking-[0.14em] text-white uppercase ${
            compact ? 'text-xl' : 'text-2xl'
          }`}
        >
          Royella
        </span>
        <span className="mt-1 block text-[10px] tracking-[0.42em] text-white/70 uppercase">
          City Hotel
        </span>
      </span>
    </Link>
  )
}
