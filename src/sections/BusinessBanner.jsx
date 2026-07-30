import { Button, Reveal } from '../components/ui'

const stats = [
  { value: '24 / 7', label: 'Room Service' },
  { value: '100 %', label: 'Wi-Fi & Support' },
]

export default function BusinessBanner() {
  return (
    <section className="bg-ink-soft py-16 sm:py-20 lg:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="left">
          <p className="eyebrow mb-4">Hotel The Reegal</p>
          <h2 className="text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[44px]">
            Business Meets Hospitality
          </h2>
          <p className="mt-6">
            At The Regaal, business and comfort come together effortlessly. Designed for corporate travellers, business executives, industrial visitors, and discerning guests, we offer thoughtfully appointed rooms, modern amenities, seamless connectivity, and warm hospitality. Whether you're visiting for a meeting, an extended work assignment, or a relaxing stay, The Regaal ensures a refined experience where productivity meets comfort, making every visit efficient, relaxing, and memorable..
          </p>

          

          <Button to="/rooms" className="mt-10">
            Explore Rooms
          </Button>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <div className="group overflow-hidden">
            <img
              src="/images/businessMeets.jpeg"
              alt="Business facilities at The Reegal"
              loading="lazy"
              style={{ objectPosition: 'left center' }}
              className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
