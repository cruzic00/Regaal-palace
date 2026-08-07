import { Building2, ChefHat } from 'lucide-react'
import { Button, Reveal } from '../components/ui'
import { brand } from '../data/site'

/**
 * Shared between the Meetings & Events page and the home page. `ctaHref` differs
 * per host: the events page scrolls to its own enquiry block, the home page
 * routes across to that page.
 */
export default function EventsOverview({ ctaHref = '/meetings-events' }) {
  return (
    <section className="bg-ink-soft py-16 sm:py-20 lg:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="left">
          <p className="eyebrow mb-4">{brand.name}</p>
          <h2 className="text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[44px]">
            Where Every Occasion Becomes Memorable
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
            At <strong className="text-white">{brand.name}, Jalgaon</strong>, we provide the perfect
            setting for both professional gatherings and life&rsquo;s special celebrations. With
            elegant banquet spaces, modern facilities, exceptional catering, and dedicated event
            support, we ensure every occasion is flawlessly executed.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Whether you&rsquo;re hosting a corporate conference or celebrating a personal milestone,
            our team takes care of every detail so you can focus on creating lasting memories.
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

          {ctaHref.startsWith('#') ? (
            <Button href={ctaHref} className="mt-9">
              Plan Your Event
            </Button>
          ) : (
            <Button to={ctaHref} className="mt-9">
              Plan Your Event
            </Button>
          )}
        </Reveal>

        <div className="relative">
          <Reveal variant="right">
            <div className="group overflow-hidden rounded-sm border border-white/10 shadow-2xl">
              <img
                src="/images/second.jpeg"
                alt="Corporate meeting hall"
                loading="lazy"
                className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal
            variant="left-far"
            delay={220}
            className="absolute -right-4 -bottom-8 z-10 hidden w-48 sm:block lg:-right-8 lg:w-60"
          >
            <div className="group overflow-hidden rounded-sm border-8 border-ink-soft shadow-2xl">
              <img
                src="/images/weddings.jpeg"
                alt="Wedding banquet setup"
                loading="lazy"
                className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
