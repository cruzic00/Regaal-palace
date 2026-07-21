import { Button, Reveal } from '../components/ui'

const stats = [
  { value: '250 +', label: 'Luxury Rooms' },
  { value: '4.9', label: 'Customer Ratings' },
]

export default function About() {
  return (
    <section className="bg-ink-soft py-24 lg:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="left" className="relative">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
            alt="Poolside at the resort"
            loading="lazy"
            className="aspect-4/5 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80"
            alt="Hotel lobby"
            loading="lazy"
            className="absolute -right-4 bottom-8 hidden aspect-square w-52 border-8 border-ink-soft object-cover sm:block lg:-right-10 lg:w-64"
          />
        </Reveal>

        <Reveal variant="right" delay={120}>
          <p className="eyebrow mb-4">Luxury Hotel and Resort</p>
          <h2 className="text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[44px]">
            Luxury Best Hotel in City California, USA
          </h2>
          <p className="mt-6">
            Rapidiously myocardinate cross-platform intellectual capital after marketing model.
            Appropriately create interactive infrastructures after maintainable are Holisticly
            facilitate stand-alone inframe Compellingly create premier open data through
            economically.
          </p>

          <div className="mt-10 flex gap-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl font-semibold text-gold">{stat.value}</p>
                <p className="mt-1 text-sm tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>

          <Button to="/about" className="mt-10">
            More About
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
