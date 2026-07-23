import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import { Button, Reveal, SectionHeading } from '../components/ui'
import { contact } from '../data/site'

const fieldCls =
  'w-full border border-line bg-transparent px-5 py-4 text-sm text-white placeholder:text-faint focus:border-gold focus:outline-none'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const cards = [
    {
      icon: Phone,
      label: 'Phone',
      lines: [contact.phone],
      href: `tel:${contact.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      lines: [contact.email.trim()],
      href: `mailto:${contact.email.trim()}`,
    },
    {
      icon: MapPin,
      label: 'Address',
      lines: contact.addressLines,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        contact.addressLines.join(' '),
      )}`,
      external: true,
    },
  ]

  return (
    <>
      <PageHero
        title="Contact Us"
        crumb="Contact"
        image="/images/aboutus1.jpeg"
      />

      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Contact Info"
              title="We’d love to hear from you"
              blurb="Reservations, private events or a question about your stay — the front desk answers every message."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-14">
            {cards.map((card, i) => (
              <Reveal key={card.label} delay={i * 110}>
                <a
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noreferrer' : undefined}
                  className="block h-full border border-line bg-ink-soft px-7 py-9 text-center transition-colors duration-300 hover:border-gold/40"
                >
                  <card.icon className="mx-auto mb-4 size-7 text-gold" />
                  <p className="text-xs tracking-[0.25em] text-faint uppercase">{card.label}</p>
                  {card.lines.map((line) => (
                    <p key={line} className="mt-1 text-white">
                      {line}
                    </p>
                  ))}
                </a>
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
                <Button type="submit">{sent ? 'Message Sent ✓' : 'Send Message'}</Button>
                {sent && (
                  <p className="mt-4 text-sm text-gold">
                    Thanks — the front desk will reply within one business day.
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
