import { Coffee, ConciergeBell, KeyRound, Sparkles, WavesLadder, Wifi } from 'lucide-react'
import { Reveal, SectionHeading } from '../components/ui'
import { amenities, lead } from '../data/site'

const icons = [ConciergeBell, Wifi, KeyRound, Coffee, WavesLadder, Sparkles]

export default function Amenities() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading title="Hotel’s Facilities" blurb={lead} />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:mt-14 lg:grid-cols-6">
          {amenities.map((name, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={`${name}-${i}`} variant="drop" duration={800} delay={i * 90}>
                <div className="group flex h-full flex-col items-center gap-4 bg-ink px-4 py-10 text-center transition-colors duration-500 hover:bg-gold">
                  <Icon className="size-8 text-gold transition-colors duration-500 group-hover:text-scrim" />
                  <p className="text-sm tracking-wide text-white transition-colors duration-500 group-hover:text-scrim">
                    {name}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
