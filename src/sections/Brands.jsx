import { Reveal } from '../components/ui'
import { brands } from '../data/site'

export default function Brands() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <h2 className="text-center font-display text-3xl leading-tight font-medium text-white sm:text-4xl lg:text-[44px]">
            Our Brands
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Two names, one standard of hospitality.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:mt-16">
          {brands.map((item, i) => (
            <Reveal key={item.name} variant={i === 0 ? 'left-zoom' : 'right-zoom'} delay={i * 120}>
              <div className="group flex h-full flex-col items-center rounded-sm border border-white/10 bg-ink-soft px-8 py-10 text-center transition-colors duration-500 hover:border-gold/50">
                {/* Both marks are 500x500, so sizing by width shows each one
                    whole — no fixed height to clip against. */}
                <div className="flex w-full items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.name}
                    loading="lazy"
                    className="h-auto w-full max-w-[240px] object-contain transition-transform duration-700 ease-out group-hover:scale-105 sm:max-w-[270px]"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium text-white">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
