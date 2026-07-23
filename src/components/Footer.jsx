import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { brand, contact, departmentEmails, gallery, usefulLinks } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-ink-soft pt-20">
      <div className="container-x grid gap-10 pb-14 sm:grid-cols-2 sm:gap-12 sm:pb-16 lg:grid-cols-4">
        <div>
          <Link to="/" className="font-display text-3xl font-semibold text-white">
            {brand.name}<span className="text-gold">.</span>
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
