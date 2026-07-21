import { Link } from 'react-router-dom'
import Crest from './Crest'

/** Ornate gold badge + wordmark, matching the template's crest treatment. */
export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <Crest className={`text-gold ${compact ? 'size-9' : 'size-12'}`} />

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
