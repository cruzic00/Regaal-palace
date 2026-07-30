import {
  Armchair,
  Baby,
  Building2,
  Cake,
  CalendarCheck,
  CheckCircle2,
  ChefHat,
  Car,
  Coffee,
  GraduationCap,
  Handshake,
  Headset,
  Heart,
  Mail,
  MapPin,
  Mic,
  MonitorPlay,
  Music,
  Network,
  Palette,
  PartyPopper,
  Phone,
  Projector,
  Rocket,
  Snowflake,
  Sparkles,
  Users,
  UtensilsCrossed,
  Wifi,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import { Button, Reveal, SectionHeading } from '../components/ui'
import { brand, contact, departmentEmails } from '../data/site'

const businessOccasions = [
  { icon: Users, label: 'Corporate Meetings' },
  { icon: Mic, label: 'Conferences & Seminars' },
  { icon: GraduationCap, label: 'Training Programs & Workshops' },
  { icon: Handshake, label: 'Dealer Meets' },
  { icon: Rocket, label: 'Product Launches' },
  { icon: CalendarCheck, label: 'Annual Business Gatherings' },
  { icon: Network, label: 'Networking Events' },
  { icon: Building2, label: 'Board Meetings' },
]

const businessFacilities = [
  { icon: Snowflake, label: 'Fully air-conditioned event spaces' },
  { icon: Wifi, label: 'High-speed Wi-Fi' },
  { icon: MonitorPlay, label: 'Audio-visual support' },
  { icon: Projector, label: 'Projector & presentation setup (on request)' },
  { icon: Armchair, label: 'Flexible seating arrangements' },
  { icon: ChefHat, label: 'Corporate catering options' },
  { icon: Coffee, label: 'Tea, coffee & working lunch packages' },
  { icon: Headset, label: 'Dedicated event coordination team' },
  { icon: Car, label: 'Ample parking for guests' },
]

const celebrationOccasions = [
  { icon: Heart, label: 'Weddings' },
  { icon: Sparkles, label: 'Engagement Ceremonies' },
  { icon: PartyPopper, label: 'Reception Parties' },
  { icon: Cake, label: 'Birthday Celebrations' },
  { icon: CalendarCheck, label: 'Anniversary Celebrations' },
  { icon: Baby, label: 'Baby Showers' },
  { icon: Users, label: 'Family Get-Togethers' },
  { icon: Music, label: 'Cultural & Social Events' },
]

const celebrationServices = [
  { icon: Building2, label: 'Elegant banquet halls' },
  { icon: Palette, label: 'Customised décor and themes' },
  { icon: UtensilsCrossed, label: 'Multi-cuisine catering' },
  { icon: ChefHat, label: 'Live food counters (on request)' },
  { icon: Music, label: 'Entertainment arrangements' },
  { icon: Headset, label: 'Dedicated event planning assistance' },
  { icon: Armchair, label: 'Comfortable guest accommodation' },
  { icon: Car, label: 'Convenient parking facilities' },
]

const whyChoose = [
  'Elegant and versatile event venues',
  'Professional event planning support',
  'Premium catering and hospitality',
  'Comfortable accommodation for outstation guests',
  'Convenient location in Jalgaon',
  'Modern amenities and ample parking',
  'Tailor-made event packages for every occasion',
]

/** Reusable two-column block: occasion chips beside a service checklist. */
function EventTrack({ eyebrow, title, tagline, body, image, imageAlt, occasionsTitle, occasions, servicesTitle, services, reverse = false }) {
  return (
    <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
      <Reveal
        variant={reverse ? 'right-zoom' : 'left-zoom'}
        className={`lg:col-span-5 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className="lg:sticky lg:top-28">
          <div className="group overflow-hidden rounded-sm border border-white/10 shadow-2xl">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <p className="eyebrow mt-7">{eyebrow}</p>
          <h3 className="mt-3 font-display text-3xl leading-tight font-medium text-white sm:text-4xl">
            {title}
          </h3>
          <p className="mt-2 font-display text-lg text-gold">{tagline}</p>
          <p className="mt-4 text-base leading-relaxed text-white/70">{body}</p>
        </div>
      </Reveal>

      <Reveal
        variant={reverse ? 'left-zoom' : 'right-zoom'}
        delay={120}
        className={`lg:col-span-7 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <h4 className="text-xs font-medium tracking-[0.3em] text-white uppercase">
          {occasionsTitle}
        </h4>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {occasions.map((item) => (
            <div
              key={item.label}
              className="group flex items-center gap-3.5 rounded-sm border border-white/10 bg-ink-soft px-5 py-4 transition-all duration-300 hover:border-gold/50 hover:bg-white/[0.03]"
            >
              <item.icon className="size-5 shrink-0 text-gold" strokeWidth={1.5} />
              <span className="text-sm leading-snug text-white/90">{item.label}</span>
            </div>
          ))}
        </div>

        <h4 className="mt-12 text-xs font-medium tracking-[0.3em] text-white uppercase">
          {servicesTitle}
        </h4>
        <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
          {services.map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-gold" />
              <span className="text-sm leading-snug text-white/75">{item.label}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  )
}

export default function MeetingsEventsPage() {
  const eventsEmail =
    departmentEmails.find((d) => d.label.includes('Banquet'))?.email ?? contact.email.trim()

  return (
    <>
      <PageHero
        title="Meetings & Events"
        crumb="Meetings & Events"
        image="/images/weddings.jpeg"
      />

      {/* Overview */}
      <section className="bg-ink-soft py-16 sm:py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="left">
            <p className="eyebrow mb-4">Regaal Palace</p>
            <h2 className="text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[44px]">
              Where Every Occasion Becomes Memorable
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              At <strong className="text-white">The {brand.name}, Jalgaon</strong>, we provide the
              perfect setting for both professional gatherings and life&rsquo;s special
              celebrations. With elegant banquet spaces, modern facilities, exceptional catering,
              and dedicated event support, we ensure every occasion is flawlessly executed.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Whether you&rsquo;re hosting a corporate conference or celebrating a personal
              milestone, our team takes care of every detail so you can focus on creating lasting
              memories.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2.5 rounded-sm border border-gold/30 bg-ink px-4 py-3 text-sm font-medium text-gold">
                <Building2 className="size-4 shrink-0" />
                <span>Elegant Banquet Spaces</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-sm border border-gold/30 bg-ink px-4 py-3 text-sm font-medium text-gold">
                <ChefHat className="size-4 shrink-0" />
                <span>Exceptional Catering</span>
              </div>
            </div>

            <Button href="#plan-event" className="mt-9">
              Plan Your Event
            </Button>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group overflow-hidden rounded-sm border border-white/10 shadow-xl sm:mt-10">
                <img
                  src="/images/meeting.jpeg"
                  alt="Corporate meeting hall"
                  loading="lazy"
                  className="aspect-3/4 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="group overflow-hidden rounded-sm border border-white/10 shadow-xl">
                <img
                  src="/images/weddings.jpeg"
                  alt="Wedding banquet setup"
                  loading="lazy"
                  className="aspect-3/4 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Business Events */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="container-x">
          <EventTrack
            eyebrow="Business Events"
            title="Professional Spaces for Productive Gatherings"
            tagline="Designed for comfort, efficiency and success"
            body="Host your business events in a sophisticated environment designed for comfort, efficiency, and success. Our versatile venues are ideal for organisations looking to conduct meetings, presentations, and corporate engagements with ease."
            image="/images/meeting.jpeg"
            imageAlt="Corporate meeting hall at Regaal Palace"
            occasionsTitle="Ideal For"
            occasions={businessOccasions}
            servicesTitle="Corporate Event Facilities"
            services={businessFacilities}
          />

          <Reveal>
            <p className="mx-auto mt-14 max-w-3xl text-center font-display text-xl leading-relaxed text-white/80 italic sm:text-2xl lg:mt-20">
              &ldquo;Whether you&rsquo;re hosting a small executive meeting or a large corporate
              conference, The {brand.name} ensures a professional experience from start to
              finish.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* Celebrations */}
      <section className="bg-ink-soft py-16 sm:py-20 lg:py-28">
        <div className="container-x">
          <EventTrack
            reverse
            eyebrow="Celebrations"
            title="Celebrate Life’s Special Moments in Style"
            tagline="Elegant spaces, personalised service"
            body="Every celebration deserves a beautiful venue and exceptional hospitality. From intimate family gatherings to grand social occasions, The Regaal Palace offers elegant spaces and personalised services that transform your special day into an unforgettable experience."
            image="/images/weddings.jpeg"
            imageAlt="Wedding celebration at Regaal Palace"
            occasionsTitle="Perfect For"
            occasions={celebrationOccasions}
            servicesTitle="Celebration Services"
            services={celebrationServices}
          />

          <Reveal>
            <p className="mx-auto mt-14 max-w-3xl text-center text-base leading-relaxed text-white/70 lg:mt-20 sm:text-lg">
              Our experienced team works closely with you to personalise every detail, ensuring your
              celebration reflects your style and exceeds your expectations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title={`Why Choose The ${brand.name}?`}
              blurb="Every element of your event, handled with the same care we bring to every stay."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {whyChoose.map((item, i) => (
              <Reveal
                key={item}
                variant={i % 2 === 0 ? 'left-zoom' : 'right-zoom'}
                delay={i * 60}
                className="h-full"
              >
                <div className="flex h-full items-center gap-4 rounded-sm border border-white/10 bg-ink-soft p-6 transition-all hover:border-gold/50 hover:bg-white/[0.02]">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-semibold text-gold">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-snug font-medium text-white/90 sm:text-base">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Plan your event CTA */}
      <section id="plan-event" className="relative overflow-hidden bg-ink-soft py-16 sm:py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="left">
            <p className="eyebrow mb-4">Let&rsquo;s Plan Your Next Event</p>
            <h2 className="text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[40px]">
              Your Event, Hosted with Elegance and Professionalism
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              Whether you&rsquo;re organising a business conference or celebrating one of
              life&rsquo;s biggest milestones, <strong className="text-white">The {brand.name}, Jalgaon</strong>{' '}
              is the perfect venue to host your event.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Contact our Events Team today to discuss venue availability, customised packages,
              catering options, and accommodation for your guests.
            </p>

            <div className="mt-8 space-y-5 border-t border-line pt-8">
              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="group flex items-start gap-4"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Phone className="size-5" />
                </div>
                <div>
                  <p className="text-xs tracking-wider text-muted uppercase">Events Team</p>
                  <p className="mt-0.5 font-display text-xl font-medium text-gold">
                    {contact.phone}
                  </p>
                </div>
              </a>

              <a href={`mailto:${eventsEmail}`} className="group flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-xs tracking-wider text-muted uppercase">Banquet / Events</p>
                  <p className="mt-0.5 text-base break-all text-white transition-colors group-hover:text-gold">
                    {eventsEmail}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-xs tracking-wider text-muted uppercase">Venue</p>
                  <p className="mt-0.5 text-sm text-white/80">{contact.addressLines.join(', ')}</p>
                </div>
              </div>
            </div>

            <Button href={`mailto:${eventsEmail}?subject=Event Enquiry`} className="mt-9">
              Enquire About Your Event
            </Button>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="group overflow-hidden rounded-sm border border-white/10 shadow-2xl">
              <img
                src="/images/resturent1.jpeg"
                alt="Banquet and catering at Regaal Palace"
                loading="lazy"
                className="aspect-4/3 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
