import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import { Button, Reveal, SectionHeading } from '../components/ui'
import { contact } from '../data/site'

const fieldCls =
  'w-full border border-white/15 bg-transparent px-5 py-4 text-sm text-white placeholder:text-white/35 focus:border-gold focus:outline-none'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const cards = [
    { icon: Phone, label: 'Phone', lines: [contact.phone] },
    { icon: Mail, label: 'Email', lines: [contact.email] },
    { icon: MapPin, label: 'Address', lines: contact.addressLines },
  ]

  return (
    <>
      <PageHero
        title="Contact Us"
        crumb="Contact"
        image="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Contact Info"
              title="Weâ€™d love to hear from you"
              blurb="Reservations, private events or a question about your stay â€” the front desk answers every message."
            />
          </Reveal>

          <div className="mt-10 grid lg:mt-14 gap-6 md:grid-cols-3">
            {cards.map((card, i) => (
              <Reveal key={card.label} delay={i * 110}>
                <div className="h-full border border-white/10 bg-ink-soft px-7 py-9 text-center">
                  <card.icon className="mx-auto mb-4 size-7 text-gold" />
                  <p className="text-xs tracking-[0.25em] text-white/45 uppercase">{card.label}</p>
                  {card.lines.map((line) => (
                    <p key={line} className="mt-1 text-white">
                      {line}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2"
            >
              <input required placeholder="Your name" aria-label="Your name" className={fieldCls} />
              <input
                required
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className={fieldCls}
              />
              <input
                placeholder="Subject"
                aria-label="Subject"
                className={`${fieldCls} sm:col-span-2`}
              />
              <textarea
                required
                rows={6}
                placeholder="Write your message"
                aria-label="Message"
                className={`${fieldCls} sm:col-span-2`}
              />
              <div className="sm:col-span-2">
                <Button type="submit">{sent ? 'Message Sent âœ“' : 'Send Message'}</Button>
                {sent && (
                  <p className="mt-4 text-sm text-gold">
                    Thanks â€” the front desk will reply within one business day.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
