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
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {highlights.map((item, i) => (
            <Reveal key={item.label} variant="up" delay={i * 90}>
              <div className="flex flex-col items-center gap-3 px-4 text-center">
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
