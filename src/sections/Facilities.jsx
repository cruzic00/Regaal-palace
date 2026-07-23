import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/ui'
import { facilities, facilityBlurb } from '../data/site'

/**
 * A 2x2 grid that unpacks one card at a time: each card starts sitting on the
 * previous one and walks to its own cell. Offsets are one cell + gap, and only
 * apply from sm up, where the second column actually exists.
 */
const chain = [
  '', // card 1 just zooms into place
  'sm:[--spread-x:-105%]', // from card 1, to its left
  'sm:[--spread-x:105%] sm:[--spread-y:-110%]', // from card 2, up and right
  'sm:[--spread-x:-105%]', // from card 3, to its left
]

export default function Facilities() {
  return (
    <section className="bg-ink-soft py-16 sm:py-20 lg:py-32">
      <div className="container-x">
        <Reveal>
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Facilities</p>
            <h2 className="text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[44px]">
              Enjoy Complete & Best Quality Facilities
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14">
          {facilities.map((item, i) => (
            <Reveal key={item.no} variant="emerge" delay={i * 200} className={chain[i]}>
              <article className="on-photo group relative h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{ objectPosition: item.focus ?? 'center' }}
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-scrim via-scrim/40 to-transparent" />

                <span className="absolute top-6 right-7 font-display text-6xl font-semibold text-white/15">
                  {item.no}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="eyebrow mb-2">{item.tag}</p>
                  <h3 className="flex items-center gap-2 text-2xl font-medium">
                    {item.title}
                    <ArrowUpRight className="size-5 -translate-x-2 text-gold opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm text-white/60 transition-all duration-500 group-hover:max-h-32">
                    {facilityBlurb}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
