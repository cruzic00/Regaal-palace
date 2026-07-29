import { BadgePercent, Briefcase, Headset, MapPin, Wifi } from 'lucide-react'
import { Reveal } from '../components/ui'

const highlights = [
  { icon: MapPin, label: 'Prime Location' },
  { icon: Wifi, label: 'High-Speed Wi-Fi' },
  { icon: Briefcase, label: 'Business-Friendly Rooms' },
  { icon: Headset, label: '24-Hour Assistance' },
  { icon: BadgePercent, label: 'Corporate Rates' },
]

export default function Highlights() {
  return (
    <section className="pt-8 pb-2 lg:pt-10 lg:pb-2">
      <div className="container-x">
        <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-8 sm:gap-x-10 lg:gap-x-16">
          {highlights.map((item, i) => (
            <Reveal key={item.label} variant="up" delay={i * 90}>
              <div className="flex w-32 flex-col items-center gap-3 text-center sm:w-40 lg:w-44">
                <item.icon className="size-8 shrink-0 text-gold" strokeWidth={1.5} />
                <span className="font-display text-base leading-snug text-white sm:text-lg">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
