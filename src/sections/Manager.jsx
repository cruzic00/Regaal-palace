import { Quote } from 'lucide-react'
import FixedBackdrop from '../components/FixedBackdrop'
import { Reveal } from '../components/ui'
import { manager } from '../data/site'

export default function Manager() {
  return (
    <section className="on-photo relative overflow-hidden py-16 sm:py-20 lg:py-32">
      <FixedBackdrop image={manager.image} scrim="bg-scrim/85" />

      <div className="relative container-x">
        <Reveal variant="left" className="max-w-3xl">
          <p className="eyebrow mb-4">Manager</p>
          <h2 className="text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[44px]">   
            Best Hotel for Corporates in Jalgaon 
          </h2>
          <p className="mt-6">{manager.body}</p>

          <blockquote className="mt-10 border-l-2 border-gold pl-6">
            <Quote className="mb-4 size-7 text-gold" />
            <p className="font-display text-2xl leading-snug text-white italic lg:text-3xl">
              “{manager.quote}”
            </p>
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <img
              src={manager.avatar}
              alt={manager.name}
              loading="lazy"
              className="size-16 rounded-full object-cover"
            />
            <div>
              <p className="font-display text-xl font-semibold text-white">{manager.name}</p>
              <p className="text-sm text-gold">{manager.role}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
