import { Quote, Star } from 'lucide-react'
import {
  Reveal,
  SectionHeading,
  spreadFromCentre,
  spreadFromCentreDelays,
} from '../components/ui'
import { lead, testimonials } from '../data/site'

export default function Testimonials() {
  return (
    <section className="bg-ink-soft py-16 sm:py-20 lg:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading title="Customer’s Testimonial" blurb={lead} />
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name}
              variant="emerge"
              delay={spreadFromCentreDelays[i]}
              className={spreadFromCentre[i]}
            >
              <figure className="relative h-full border border-white/10 bg-ink p-8 transition-colors duration-500 hover:border-gold/40">
                <Quote className="absolute top-6 right-7 size-9 text-gold/25" />
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed">“{item.quote}”</blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-white/10 pt-6">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    loading="lazy"
                    className="size-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-display text-lg font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-gold">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
