import { Link } from 'react-router-dom'
import { brand } from '../data/site'

/**
 * The supplied logo is a complete lockup — eagle, wordmark and tagline already
 * inside one square artwork — so it stands alone rather than sitting next to a
 * text wordmark.
 */
export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="shrink-0" aria-label={`${brand.name} — home`}>
      <img
        src="/logo.png"
        alt={brand.name}
        className={`w-auto object-contain transition-all duration-500 ${
          compact ? 'h-14' : 'h-20 lg:h-24'
        }`}
      />
    </Link>
  )
}
