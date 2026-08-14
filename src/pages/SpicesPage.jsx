import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  ChefHat,
  Clock,
  Flame,
  Leaf,
  PartyPopper,
  Soup,
  Truck,
  UtensilsCrossed,
  Users,
} from 'lucide-react'
import GalleryGrid from '../components/GalleryGrid'
import PageHero from '../components/PageHero'
import { Reveal, SectionHeading } from '../components/ui'
import { contact, spicesGallery, spicesOrder } from '../data/site'

const venues = [
  {
    tag: 'Indoor Dining',
    title: 'The Restaurant Centre',
    image: '/images/resturent1.jpeg',
    blurb:
      'Our air-conditioned multi-cuisine restaurant serves breakfast through dinner, with a menu that moves easily between Indian, Chinese and Continental favourites.',
  },
  {
    tag: 'Open Air',
    title: 'Rooftop Family Restaurant',
    image: '/images/skyroof.jpeg',
    focus: '50% 70%',
    blurb:
      'Dine under the open sky at our rooftop family restaurant, offering delicious cuisine and a vibrant ambience for memorable evenings.',
  },
]

const offerings = [
  { icon: UtensilsCrossed, label: 'Multi-Cuisine Menu' },
  { icon: ChefHat, label: 'Live Food Counters' },
  { icon: Soup, label: 'Breakfast to Dinner' },
  { icon: Leaf, label: 'Veg & Non-Veg' },
  { icon: PartyPopper, label: 'Party & Event Catering' },
  { icon: Users, label: 'Family Seating' },
  { icon: Truck, label: 'Takeaway & Delivery' },
  { icon: Clock, label: 'In-Room Dining' },
]

export default function SpicesPage() {
  // Resolved after mount so the rendered href is a real URL you can copy or open
  // in a new tab, rather than a click-time redirect.
  const [isAndroid, setIsAndroid] = useState(false)
  useEffect(() => {
    setIsAndroid(/android/i.test(navigator.userAgent))
  }, [])

  const orderHref = isAndroid ? spicesOrder.androidUrl : spicesOrder.webUrl

  return (
    <>
      <PageHero
        title="Regaal Spices"
        crumb="Regaal Spices"
        image="/images/resturent1.jpeg"
      />

      {/* Overview */}
      <section className="bg-ink-soft py-16 sm:py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="left">
            <p className="eyebrow mb-4">By Regaal Hotels</p>
            <h2 className="text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[44px]">
              Where Every Meal Feels Regal
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              <strong className="text-white">Regaal Spices</strong> is the dining arm of Regaal
              Hotels, Jalgaon — a multi-cuisine kitchen serving guests, families and corporate
              teams with the same standard of hospitality you find upstairs.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              From a working lunch to a rooftop dinner with family, every dish is prepared fresh,
              plated with care, and served by a team that treats each table as its own.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={orderHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-3.5 text-xs font-medium tracking-[0.2em] text-on-gold uppercase transition-colors duration-300 hover:bg-gold-light"
              >
                Order Online
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 border border-gold px-7 py-3.5 text-xs font-medium tracking-[0.2em] text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-on-gold"
              >
                Call to Reserve
              </a>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="mx-auto aspect-square w-full max-w-[380px] overflow-hidden rounded-full border border-white/10 shadow-2xl">
              <img
                src="/images/logowhite1.jpeg"
                alt="Regaal Spices"
                className="size-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Venues */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Two Ways to Dine"
              blurb="An air-conditioned restaurant downstairs, an open-air rooftop above — same kitchen, two moods."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16">
            {venues.map((venue, i) => (
              <Reveal key={venue.title} variant={i === 0 ? 'left-zoom' : 'right-zoom'} delay={i * 120}>
                <article className="on-photo group relative h-full overflow-hidden rounded-sm">
                  <img
                    src={venue.image}
                    alt={venue.title}
                    loading="lazy"
                    style={{ objectPosition: venue.focus ?? 'center' }}
                    className="h-96 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-scrim via-scrim/50 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="eyebrow mb-2">{venue.tag}</p>
                    <h3 className="text-2xl font-medium">{venue.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{venue.blurb}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we serve */}
      <section className="bg-ink-soft py-16 sm:py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="What We Serve"
              blurb="Everything from a quick working lunch to a full celebration spread."
            />
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:mt-14 lg:grid-cols-4">
            {offerings.map((item, i) => (
              <Reveal key={item.label} variant="drop" duration={800} delay={i * 80}>
                <div className="group flex h-full flex-col items-center gap-4 bg-ink-soft px-4 py-10 text-center transition-colors duration-500 hover:bg-gold">
                  <item.icon
                    className="size-8 text-gold transition-colors duration-500 group-hover:text-on-gold"
                    strokeWidth={1.5}
                  />
                  <p className="text-sm tracking-wide text-white transition-colors duration-500 group-hover:text-on-gold">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dish gallery */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="From Our Kitchen"
              blurb="A look at what comes out of the pass. Tap any dish to view it larger."
            />
          </Reveal>

          <div className="mt-12 lg:mt-16">
            <GalleryGrid
              images={spicesGallery}
              className="grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
            />
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="bg-ink-soft py-16 sm:py-20 lg:py-24">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight font-medium text-white sm:text-4xl lg:text-[44px]">
              Hungry? Order in a Few Taps
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Browse the full menu and order for delivery or takeaway.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={orderHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-3.5 text-xs font-medium tracking-[0.2em] text-on-gold uppercase transition-colors duration-300 hover:bg-gold-light"
              >
                Order Online
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 border border-gold px-7 py-3.5 text-xs font-medium tracking-[0.2em] text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-on-gold"
              >
                <Flame className="size-4" />
                {contact.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
