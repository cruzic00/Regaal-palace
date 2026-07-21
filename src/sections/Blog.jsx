import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { Reveal, SectionHeading } from '../components/ui'
import { lead, posts } from '../data/site'

/**
 * Both trailing posts start stacked on the first card and deal out to the right.
 * One step is a card width plus the gap; lg only, where the row is three across.
 */
const fan = ['', 'lg:[--spread-x:-108%]', 'lg:[--spread-x:-216%]']

export default function Blog() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading title="Latest Post from Blog" blurb={lead} />
        </Reveal>

        <div className="mt-10 grid lg:mt-14 gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={i} variant="emerge" delay={i * 180} className={fan[i]}>
              <article className="group h-full bg-ink-soft">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute bottom-0 left-0 bg-gold px-4 py-2 text-xs font-medium tracking-[0.15em] text-scrim uppercase">
                    {post.category}
                  </span>
                </div>
                <div className="p-7">
                  <p className="flex items-center gap-2 text-sm text-white/50">
                    <CalendarDays className="size-4 text-gold" />
                    {post.date}
                  </p>
                  <h3 className="mt-3 text-xl leading-snug font-medium transition-colors duration-300 group-hover:text-gold">
                    {post.title}
                  </h3>
                  <Link
                    to="/blog"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-gold uppercase"
                  >
                    Read More
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
