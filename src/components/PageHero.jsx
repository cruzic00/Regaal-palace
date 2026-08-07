import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import FixedBackdrop from './FixedBackdrop'

const defaultImage =
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80'

export default function PageHero({ title, subline, crumb, image, position, full = false }) {
  return (
    <section
      className={`on-photo relative flex items-center overflow-hidden ${
        full ? 'h-[100svh]' : 'h-[52vh] min-h-[380px]'
      }`}
    >
      <FixedBackdrop image={image ?? defaultImage} position={position} />
      <div className="relative container-x pt-20 text-center">
        <h1 className="animate-rise text-4xl font-medium sm:text-5xl lg:text-[64px]">{title}</h1>
        {subline && (
          <p className="mt-3  mx-auto text-base text-white/80 sm:text-lg">
            {subline}
          </p>
        )}
        <nav className="mt-5 flex items-center justify-center gap-2 text-sm">
          <Link to="/" className="transition-colors hover:text-gold">
            Home
          </Link>
          <ChevronRight className="size-4 text-gold" />
          <span className="text-gold">{crumb ?? title}</span>
        </nav>
      </div>
    </section>
  )
}
