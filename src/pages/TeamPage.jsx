import PageHero from '../components/PageHero'
import { Reveal, SectionHeading } from '../components/ui'
import { team } from '../data/site'

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
                    <div className="absolute inset-0 bg-gradient-to-t from-scrim/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
