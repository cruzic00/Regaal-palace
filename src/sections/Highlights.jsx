import { Briefcase, CalendarDays, Headset, IndianRupee, MapPin, Wifi } from 'lucide-react'
import { Reveal } from '../components/ui'

const highlights = [
  { icon: MapPin, label: 'Prime Location' },
  { icon: Wifi, label: 'High-Speed Wi-Fi' },
  { icon: Briefcase, label: 'Business-Friendly Rooms' },
  { icon: Headset, label: '24-Hour Assistance' },
  { icon: IndianRupee, label: 'Corporate Rates' },
  { icon: CalendarDays, label: 'Long Stay' },
]

export default function Highlights() {
  return (
    <section className="py-8 lg:py-12">
      <div className="container-x">
        <Reveal>
          <h2 className="mb-8 text-center font-display text-2xl leading-tight font-medium text-white sm:text-3xl lg:mb-12 lg:text-4xl">
            Why Business Travellers Choose The Reegal
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-white/10 border border-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {highlights.map((item, i) => (
            <Reveal
              key={item.label}
              variant={i % 2 === 0 ? 'left-zoom' : 'right-zoom'}
              delay={i * 80}
              className="h-full"
            >
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
