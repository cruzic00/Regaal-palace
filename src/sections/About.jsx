import { Button, Reveal } from '../components/ui'

const stats = [
  { value: '40 +', label: 'Luxury Rooms' },
  { value: '4.9', label: 'Customer Ratings' },
]

export default function About() {
  return (
    <section className="bg-ink-soft py-16 sm:py-20 lg:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-none">
          <Reveal variant="left">
            <div className="group overflow-hidden">
              <img
                src="/images/sofa1.jpeg"
                alt="Poolside at the resort"
                loading="lazy"
                className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </Reveal>

          <Reveal
            variant="right-far"
            delay={220}
            className="absolute -right-4 bottom-8 hidden w-52 sm:block lg:-right-10 lg:w-64"
          >
            <div className="group overflow-hidden border-8 border-ink-soft">
              <img
                src="/images/business-class.jpeg"
                alt="Hotel lobby"
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </Reveal>
        </div>

        <Reveal variant="right" delay={120} className="order-1 lg:order-none">
          <p className="eyebrow mb-4"> Hotel Regaal Palace</p>
          <h2 className="text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[44px]">
            Best Business Hotel in Jalgaon  
          </h2>
          <p className="mt-6">
            Enjoy comfortable, well-appointed rooms at Regaal Palace, designed for a restful and productive corporate stay. With modern amenities and a convenient location, our rooms offer the perfect balance of comfort, convenience, and relaxation for business travellers.
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
