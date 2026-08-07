import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { brand, contact, departmentEmails, mapLocation, usefulLinks } from '../data/site'
import Logo from './Logo'

// lucide dropped brand marks, so the social glyphs are inlined. Swap href='#'
// for the real profile URLs.
const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/14hJj39Sbks/',
    path: 'M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/newregalpalace?igsh=cTVsbGI0MHk3amls',
    path: 'M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 1.8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8a3.2 3.2 0 0 0 3.2-3.2V8A3.2 3.2 0 0 0 16 4.8H8Z',
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink-soft pt-20">
      <div className="container-x grid gap-10 pb-14 sm:grid-cols-2 sm:gap-12 sm:pb-16 lg:grid-cols-4">
        <div>
          <Logo />
          <h4 className="mt-8 mb-5 text-xs font-medium tracking-[0.3em] text-white uppercase">
            Contact Info
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 transition-colors duration-300 hover:text-gold"
              >
                <Phone className="size-4 shrink-0 text-gold" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email.trim()}`}
                className="flex items-center gap-3 transition-colors duration-300 hover:text-gold"
              >
                <Mail className="size-4 shrink-0 text-gold" />
                {contact.email.trim()}
              </a>
            </li>
            <li>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  contact.addressLines.join(' '),
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 transition-colors duration-300 hover:text-gold"
              >
                <MapPin className="mt-1 size-4 shrink-0 text-gold" />
                <span>
                  {contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </a>
            </li>
          </ul>

          <div className="mt-7 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid size-9 place-items-center border border-line text-muted transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-on-gold"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-medium tracking-[0.3em] text-white uppercase">
            Email Us
          </h4>
          <ul className="space-y-3.5 text-sm">
            {departmentEmails.map((dept) => (
              <li key={dept.email}>
                <p className="text-xs tracking-wide text-faint">{dept.label}</p>
                <a
                  href={`mailto:${dept.email}`}
                  className="break-all transition-colors duration-300 hover:text-gold"
                >
                  {dept.email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-medium tracking-[0.3em] text-white uppercase">
            Useful Links
          </h4>
          <ul className="space-y-3 text-sm">
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-medium tracking-[0.3em] text-white uppercase">
            Find Us
          </h4>
          <a
            href={mapLocation.shareUrl}
            target="_blank"
            rel="noreferrer"
            className="block aspect-4/3 w-full overflow-hidden border border-line grayscale transition-all duration-300 hover:grayscale-0"
          >
            <iframe
              title="The Regaal location"
              src={`https://www.google.com/maps?q=${mapLocation.lat},${mapLocation.lng}(${encodeURIComponent(mapLocation.label)})&z=16&output=embed`}
              className="size-full pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x py-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} {brand.name}. All Rights Reserved.
          <span className="mt-1 block text-xs text-faint">{brand.parent}</span>
        </div>
      </div>
    </footer>
  )
}
