import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ title, crumb, image }) {
  return (
    <section className="on-photo relative flex h-[52vh] min-h-[380px] items-center overflow-hidden">
      <img
        src={
          image ??
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80'
        }
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-scrim/75" />
      <div className="relative container-x pt-20 text-center">
        <h1 className="animate-rise text-4xl font-medium sm:text-5xl lg:text-[64px]">{title}</h1>
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
