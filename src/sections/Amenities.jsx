import {
  BellRing,
  Coffee,
  ConciergeBell,
  Dumbbell,
  KeyRound,
  Sparkles,
  Utensils,
  WavesLadder,
  Wifi,
} from 'lucide-react'
import { Reveal, SectionHeading } from '../components/ui'
import { amenities } from '../data/site'

// Pick the icon from the facility name so reordering or renaming in site.js
// can't desync the icons from their labels.
function iconFor(name) {
  const n = name.toLowerCase()
  if (n.includes('wi-fi') || n.includes('wifi') || n.includes('internet')) return Wifi
  if (n.includes('gym') || n.includes('fitness')) return Dumbbell
  if (n.includes('breakfast')) return Coffee
  if (n.includes('restaurant') || n.includes('dining') || n.includes('food')) return Utensils
  if (n.includes('pool') || n.includes('swim')) return WavesLadder
  if (n.includes('key') || n.includes('smart')) return KeyRound
  if (n.includes('room service')) return BellRing
  if (n.includes('room')) return ConciergeBell
  return Sparkles
}

const facilitiesIntro =
  'Enjoy modern hotel facilities designed for a comfortable, convenient, and memorable stay.'

export default function Amenities() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading title="Hotel’s Facilities" blurb={facilitiesIntro} />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:mt-14 lg:grid-cols-6">
          {amenities.map((name, i) => {
            const Icon = iconFor(name)
            return (
              <Reveal key={`${name}-${i}`} variant="drop" duration={800} delay={i * 90}>
                <div className="group flex h-full flex-col items-center gap-4 bg-ink px-4 py-10 text-center transition-colors duration-500 hover:bg-gold">
                  <Icon className="size-8 text-gold transition-colors duration-500 group-hover:text-on-gold" />
                  <p className="text-sm tracking-wide text-white transition-colors duration-500 group-hover:text-on-gold">
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
