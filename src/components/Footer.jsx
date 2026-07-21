import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { contact, gallery, usefulLinks } from '../data/site'

// lucide dropped brand marks, so the social glyphs are inlined.
const socials = [
  {
    label: 'Facebook',
    path: 'M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z',
  },
  {
    label: 'X',
    path: 'M17.5 4h2.8l-6.1 7 7.2 9.5h-5.6l-4.4-5.8-5 5.8H3.6l6.5-7.5L3.2 4h5.8l4 5.3L17.5 4Zm-1 14.8h1.6L8.1 5.6H6.4l10.1 13.2Z',
  },
  {
    label: 'Instagram',
    path: 'M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 1.8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8a3.2 3.2 0 0 0 3.2-3.2V8A3.2 3.2 0 0 0 16 4.8H8Z',
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink-soft pt-20">
      <div className="container-x grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="font-display text-3xl font-semibold text-white">
            Royella<span className="text-gold">.</span>
          </Link>
          <h4 className="mt-8 mb-5 text-xs font-medium tracking-[0.3em] text-white uppercase">
            Contact Info
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-gold" />
              {contact.phone}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-gold" />
              {contact.email}
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-gold" />
              <span>
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-medium tracking-[0.3em] text-white uppercase">
            Useful Links
          </h4>
          <ul className="space-y-3 text-sm">
            {usefulLinks.map((link) => (
              <li key={link}>
                <Link
                  to="/"
                  className="transition-colors duration-300 hover:text-gold"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-medium tracking-[0.3em] text-white uppercase">
            Gallery
          </h4>
          <div className="grid max-w-[220px] grid-cols-3 gap-2">
            {gallery.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                loading="lazy"
                className="aspect-square w-full object-cover opacity-70 transition-opacity duration-300 hover:opacity-100"
              />
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-medium tracking-[0.3em] text-white uppercase">
            Newsletter
          </h4>
          <p className="mb-5 text-sm">Subscribe our Newsletter</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border border-white/15 focus-within:border-gold"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              aria-label="Email address"
              className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </form>
          <button
            type="button"
            className="mt-4 w-full bg-gold px-6 py-3 text-xs font-medium tracking-[0.2em] text-scrim uppercase transition-colors duration-300 hover:bg-gold-light"
          >
            Subscribe Now
          </button>
          <div className="mt-7 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="grid size-9 place-items-center border border-white/15 text-white/70 transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-scrim"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 text-center text-sm text-white/45">
          © {new Date().getFullYear()} , Royella. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
