import PageHero from '../components/PageHero'
import { Reveal, SectionHeading } from '../components/ui'
import { team } from '../data/site'

// lucide dropped brand marks, so the social glyphs are inlined.
const socials = [
  { label: 'Facebook', path: 'M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z' },
  {
    label: 'X',
    path: 'M17.5 4h2.8l-6.1 7 7.2 9.5h-5.6l-4.4-5.8-5 5.8H3.6l6.5-7.5L3.2 4h5.8l4 5.3L17.5 4Zm-1 14.8h1.6L8.1 5.6H6.4l10.1 13.2Z',
  },
  {
    label: 'Instagram',
    path: 'M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 1.8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8a3.2 3.2 0 0 0 3.2-3.2V8A3.2 3.2 0 0 0 16 4.8H8Z',
  },
]

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        crumb="Our Team"
        image="/images/back1.jpeg"
      />

      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Our Team"
              title="The people behind the regal touch"
              blurb="From the front desk to the kitchen, a team built around one idea — every guest leaves as a returning one."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} variant="up" delay={i * 110}>
                <article className="group text-center">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      loading="lazy"
                      className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-scrim/80 via-transparent to-transparent" />

                    {/* Socials slide up on hover */}
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-4 justify-center gap-2 pb-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {socials.map((social) => (
                        <a
                          key={social.label}
                          href="#"
                          aria-label={`${member.name} on ${social.label}`}
                          className="grid size-9 place-items-center bg-ink/70 text-white backdrop-blur transition-colors duration-300 hover:bg-gold hover:text-on-gold"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path d={social.path} />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm tracking-wide text-gold">{member.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
