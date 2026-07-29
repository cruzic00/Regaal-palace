import { useState } from 'react'
import {
  Award,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock,
  Coffee,
  FileCheck2,
  Headset,
  IndianRupee,
  MapPin,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Wifi,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import { Button, Reveal, SectionHeading } from '../components/ui'

const benefits = [
  {
    icon: IndianRupee,
    title: 'Exclusive Corporate Rates',
    desc: 'Attractive negotiated corporate tariffs for companies of all sizes ensuring maximum cost savings.',
  },
  {
    icon: CalendarDays,
    title: 'Priority Reservations',
    desc: 'Guaranteed priority room allocations and fast-track booking support for your team.',
  },
  {
    icon: Clock,
    title: 'Flexible Check-In / Out',
    desc: 'Flexible check-in and check-out times tailored to match your corporate travel itineraries.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Wi-Fi',
    desc: 'Complimentary high-speed Internet across all executive rooms, meeting areas, and lounges.',
  },
  {
    icon: Sparkles,
    title: 'Daily Housekeeping',
    desc: 'Pristine, hygienic, and sanitized rooms maintained daily with meticulous attention to detail.',
  },
  {
    icon: Coffee,
    title: 'Complimentary Breakfast',
    desc: 'Delicious gourmet breakfast spread served every morning to jumpstart your productive day.',
  },
  {
    icon: Headset,
    title: 'Dedicated Account Manager',
    desc: 'Personal corporate relationship manager to assist with reservations, billing, and custom requests.',
  },
]

const services = [
  {
    icon: Building2,
    title: 'Company Bookings',
    tagline: 'Hassle-free corporate travel management',
    desc: 'Managing business travel is simple with The Regaal. We work closely with organisations to provide seamless accommodation solutions for employees, clients, vendors, and project teams.',
    image: '/images/meeting.jpeg',
    points: [
      'Individual executive bookings',
      'Multiple room reservations',
      'Last-minute business travel support',
      'Monthly billing options (for approved accounts)',
      'Dedicated account management',
    ],
  },
  {
    icon: CalendarDays,
    title: 'Long Stay Packages',
    tagline: 'Extended comfort & flexibility',
    desc: 'For professionals on extended assignments, relocation projects, audits, or training programs, The Regaal offers specially designed long-stay packages that combine luxury, flexibility, and value.',
    image: '/images/sofa1.jpeg',
    points: [
      'Ideal for project teams & consultants',
      'Corporate relocations & audit teams',
      'Training participants & PSU officials',
      'Discounted long-stay tariff structures',
      'Full access to all hotel amenities',
    ],
  },
  {
    icon: Users,
    title: 'Group Accommodation',
    tagline: 'Coordinated group stay solutions',
    desc: 'Planning accommodation for conferences, corporate events, factory visits, or team travel? Our team efficiently manages group bookings with customised packages tailored to your needs.',
    image: '/images/executive-class.jpeg',
    points: [
      'Block room reservations',
      'Coordinated group check-ins',
      'Custom meal & dining arrangements',
      'Customised corporate billing',
      'Dedicated guest support throughout stay',
    ],
  },
  {
    icon: FileCheck2,
    title: 'GST Billing & Compliance',
    tagline: 'Simplified accounting & reimbursement',
    desc: 'The Regaal provides 100% GST-compliant invoices to simplify your company accounting, tax filing, and employee reimbursement processes.',
    image: '/images/banner-1.jpeg',
    points: [
      'GST invoices for every eligible stay',
      'Company name & GSTIN on invoices',
      'Transparent itemized billing',
      'Multiple digital payment options',
      'Digital invoices for easy record keeping',
    ],
  },
]

const whyChoose = [
  'Premium business hotel in Jalgaon',
  'Comfortable and spacious executive rooms',
  'High-speed Wi-Fi and work-friendly spaces',
  'Professional and courteous service',
  'Delicious dining options',
  'Secure and hassle-free environment',
  'Easy access to business districts and industrial areas',
  'Excellent value for frequent corporate travellers',
]

export default function CorporateStaysPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    stayType: 'Individual Executive',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        title="Corporate Stays"
        crumb="Corporate Stays"
        image="/images/business-class.jpeg"
      />

      {/* Overview Section */}
      <section className="bg-ink-soft py-16 sm:py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="left">
            <p className="eyebrow mb-4">Corporate Hospitality in Jalgaon</p>
            <h2 className="text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[44px]">
              Business Stays, Redefined
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              At <strong className="text-white">The Regaal, Jalgaon</strong>, we understand the unique needs of today's business travellers. Whether you're visiting for a corporate meeting, industrial project, training program, or extended assignment, we provide a seamless blend of professional convenience and warm hospitality.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Strategically located with easy access to Jalgaon's commercial and industrial hubs, The Regaal is the preferred accommodation partner for corporate executives, business teams, consultants, and long-term guests.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2.5 rounded-sm border border-gold/30 bg-ink px-4 py-3 text-sm font-medium text-gold">
                <Award className="size-4 shrink-0" />
                <span>Preferred Business Address</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-sm border border-gold/30 bg-ink px-4 py-3 text-sm font-medium text-gold">
                <ShieldCheck className="size-4 shrink-0" />
                <span>GST Compliant Invoicing</span>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="group overflow-hidden rounded-sm border border-white/10 shadow-2xl">
              <img
                src="/images/businessMeets.jpeg"
                alt="Corporate Stays at The Regaal"
                loading="lazy"
                style={{ objectPosition: 'left center' }}
                className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Corporate Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Corporate Room Rates & Benefits"
              blurb="We offer attractive negotiated corporate tariffs for companies of all sizes. Our customised business packages deliver exceptional value while ensuring superior comfort and service."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mt-16">
            {benefits.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group flex h-full flex-col bg-ink-soft p-7 transition-all duration-500 hover:bg-gold hover:text-on-gold">
                  <item.icon className="size-8 text-gold transition-colors duration-500 group-hover:text-on-gold" />
                  <h3 className="mt-5 text-xl font-medium text-white transition-colors duration-500 group-hover:text-on-gold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60 transition-colors duration-500 group-hover:text-on-gold/80">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}

            {/* Custom Tariff Callout Card */}
            <Reveal delay={benefits.length * 80}>
              <div className="flex h-full flex-col justify-between bg-gold p-7 text-on-gold">
                <div>
                  <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-on-gold/80">
                    Custom Corporate Tariffs
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold leading-snug text-on-gold">
                    Need Custom Corporate Rates?
                  </h3>
                  <p className="mt-3 text-sm text-on-gold/90">
                    Contact our sales team today to discuss customized packages and annual contracts tailored for your organization.
                  </p>
                </div>
                <a
                  href="#inquiry-form"
                  className="mt-6 inline-flex items-center justify-center bg-on-gold px-5 py-3 font-display text-xs font-medium tracking-[0.16em] text-gold uppercase transition-colors hover:bg-ink hover:text-gold"
                >
                  Request Corporate Tariff
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="bg-ink-soft py-16 sm:py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Tailored Solutions for Every Business Need"
              blurb="From single executive bookings to long-stay projects and large conference delegations, we handle every detail with efficiency."
            />
          </Reveal>

          <div className="mt-12 space-y-16 lg:mt-20 lg:space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={service.title}
                  className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
                >
                  <Reveal
                    variant={isEven ? 'left' : 'right'}
                    className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className="group overflow-hidden rounded-sm border border-white/10 shadow-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="aspect-16/10 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </Reveal>

                  <Reveal
                    variant={isEven ? 'right' : 'left'}
                    className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div className="flex items-center gap-3">
                      <service.icon className="size-7 text-gold" />
                      <span className="eyebrow">{service.tagline}</span>
                    </div>

                    <h3 className="mt-3 text-3xl font-medium sm:text-4xl">{service.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                      {service.desc}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {service.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-3 text-sm text-white/85 sm:text-base">
                          <CheckCircle2 className="size-5 shrink-0 text-gold" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Why Choose The Regaal for Corporate Stays?"
              blurb="Experience hospitality engineered specifically for the modern business traveller."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:mt-16">
            {whyChoose.map((item, i) => (
              <Reveal key={item} delay={i * 60} className="h-full">
                <div className="flex h-full items-center gap-4 rounded-sm border border-white/10 bg-ink-soft p-6 transition-all hover:border-gold/50 hover:bg-white/[0.02]">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-semibold text-gold">
                    {i + 1}
                  </span>
                  <p className="text-sm font-medium leading-snug text-white/90 sm:text-base">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us & Inquiry Form Section */}
      <section id="inquiry-form" className="bg-ink-soft py-16 sm:py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Left Info Column */}
            <Reveal variant="left" className="lg:col-span-5">
              <p className="eyebrow mb-4">Partner With Us</p>
              <h2 className="text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[40px]">
                Looking for a Reliable Accommodation Partner in Jalgaon?
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/75">
                Whether you're a corporate organisation, manufacturing company, travel management company (TMC), PSU, government department, or educational institution, <strong className="text-white">The Regaal</strong> offers customised corporate accommodation solutions designed around your business needs.
              </p>

              <div className="mt-8 space-y-5 border-t border-line pt-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Headset className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">Corporate Sales Hotline</p>
                    <p className="font-display text-xl font-medium text-gold mt-0.5">0256 2222424</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Send className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">Corporate Email</p>
                    <p className="text-base text-white mt-0.5">info@regaalpalace.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">Hotel Location</p>
                    <p className="text-sm text-white/80 mt-0.5">
                      Plot No 324/2 Sugan Heights, Teresvar Navin Bus Stand Javal, Jilha Peth, Jalgaon, Maharashtra 425001
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Interactive Form */}
            <Reveal variant="right" className="lg:col-span-7">
              <div className="rounded-sm border border-gold/30 bg-ink p-8 sm:p-10 shadow-2xl">
                <h3 className="font-display text-2xl font-medium text-white sm:text-3xl">
                  Request Corporate Tariff & Rates
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Fill in your details below and our Corporate Sales Team will connect with you promptly.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-sm border border-gold/40 bg-gold/10 p-8 text-center">
                    <CheckCircle2 className="mx-auto size-12 text-gold" />
                    <h4 className="mt-4 font-display text-2xl font-medium text-gold">
                      Inquiry Submitted Successfully!
                    </h4>
                    <p className="mt-2 text-sm text-white/80">
                      Thank you for reaching out to The Regaal. Our Corporate Sales Manager will contact you shortly with custom corporate rate details.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 inline-block text-xs font-medium tracking-[0.16em] text-gold uppercase underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted mb-2">
                          Company / Organization Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Tata Consultancy Services"
                          className="w-full border border-line bg-ink-soft px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted mb-2">
                          Contact Person Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Full Name"
                          className="w-full border border-line bg-ink-soft px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted mb-2">
                          Official Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full border border-line bg-ink-soft px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full border border-line bg-ink-soft px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-muted mb-2">
                        Type of Stay Required
                      </label>
                      <select
                        value={formData.stayType}
                        onChange={(e) => setFormData({ ...formData, stayType: e.target.value })}
                        className="w-full border border-line bg-ink-soft px-4 py-3 text-sm text-white focus:border-gold focus:outline-none"
                      >
                        <option value="Individual Executive">Individual Executive Travel</option>
                        <option value="Long Stay Package">Long Stay / Relocation Package</option>
                        <option value="Group Accommodation">Group Accommodation / Event</option>
                        <option value="Annual Corporate Tie-up">Annual Corporate Tie-up Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-muted mb-2">
                        Requirements / Expected Room Days
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention dates, number of rooms, special meal or billing requests..."
                        className="w-full border border-line bg-ink-soft px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold focus:outline-none"
                      />
                    </div>

                    <Button type="submit" className="w-full justify-center">
                      Submit Corporate Inquiry
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
