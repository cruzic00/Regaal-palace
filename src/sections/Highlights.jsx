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
    <section className="py-8 lg:py-12">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-white/10 border border-white/10 sm:grid-cols-3 lg:grid-cols-5">
          {highlights.map((item, i) => (
            <Reveal key={item.label} variant="up" delay={i * 90} className="h-full">
              <div className="group flex h-full min-h-[140px] flex-col items-center justify-center gap-3 bg-ink px-4 py-8 text-center transition-colors duration-500 hover:bg-gold cursor-pointer">
                <item.icon className="size-8 shrink-0 text-gold transition-colors duration-500 group-hover:text-on-gold" strokeWidth={1.5} />
                <span className="font-display text-base font-medium leading-snug text-white transition-colors duration-500 group-hover:text-on-gold sm:text-lg">
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
