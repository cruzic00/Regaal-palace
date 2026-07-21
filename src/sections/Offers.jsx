import { Link } from 'react-router-dom'
import { Reveal, SectionHeading } from '../components/ui'
import { offers } from '../data/site'

/**
 * All four start stacked on the first card and fan out to their own column, so
 * the row reads as dealing cards off a pile. One step is a card width + gap.
 */
const fan = [
  '',
  'lg:[--spread-x:-108%]',
  'lg:[--spread-x:-216%]',
  'lg:[--spread-x:-324%]',
]

export default function Offers() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading eyebrow="Offers" title="Royellaâ€™s Limited Period Best Offers" />
        </Reveal>

        <div className="mt-10 grid lg:mt-14 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer, i) => (
            <Reveal key={offer.name} variant="emerge" delay={i * 150} className={fan[i]}>
              <Link to="/rooms" className="on-photo group relative block overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.name}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-scrim/95 via-scrim/25 to-transparent" />
                <span className="absolute top-5 left-5 bg-gold px-3 py-1.5 text-xs font-medium tracking-[0.15em] text-scrim uppercase">
                  {offer.discount}
                </span>
                <h3 className="absolute inset-x-0 bottom-0 p-6 text-xl font-medium transition-colors duration-300 group-hover:text-gold">
                  {offer.name}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
