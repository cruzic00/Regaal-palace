import { Mail, Phone } from 'lucide-react'
import { contact } from '../data/site'

// lucide dropped brand marks, so the glyphs are inlined.
const glyph = (path) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
    <path d={path} />
  </svg>
)

const FACEBOOK = 'M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z'
const INSTAGRAM =
  'M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 1.8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8a3.2 3.2 0 0 0 3.2-3.2V8A3.2 3.2 0 0 0 16 4.8H8Z'
const LINKEDIN =
  'M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.2 8.5h3.5V21H3.2V8.5Zm5.7 0h3.35v1.7h.05c.47-.85 1.6-1.75 3.3-1.75 3.5 0 4.15 2.25 4.15 5.2V21h-3.5v-5.55c0-1.3-.02-3-1.85-3-1.85 0-2.13 1.4-2.13 2.9V21H8.9V8.5Z'
const WHATSAPP =
  'M17.5 14.4c-.3-.15-1.75-.86-2-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.34.45-.5.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.5.71.3 1.26.48 1.7.62.71.22 1.36.2 1.87.12.57-.08 1.75-.72 2-1.4.25-.7.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35ZM12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2Zm0 18.3a8.3 8.3 0 0 1-4.2-1.16l-.3-.18-3 .94.95-2.92-.2-.3A8.3 8.3 0 1 1 12 20.3Z'

// Replace the '#' social URLs with the real profiles; the WhatsApp number is a
// placeholder (country code + number, no spaces).
const items = [
  { label: 'Facebook', href: 'https://www.facebook.com/hotelregaalpalace', node: glyph(FACEBOOK) },
  { label: 'Instagram', href: 'https://www.instagram.com/newregalpalace', node: glyph(INSTAGRAM) },
  { label: 'LinkedIn', href: '#', node: glyph(LINKEDIN) },
  { label: 'WhatsApp', href: 'https://wa.me/912562222424', node: glyph(WHATSAPP) },
  { label: 'Email', href: `mailto:${contact.email.trim()}`, node: <Mail className="size-[18px]" /> },
  { label: 'Phone', href: `tel:${contact.phone.replace(/\s+/g, '')}`, node: <Phone className="size-[18px]" /> },
]

export default function FloatingContact() {
  return (
    <div className="fixed top-20 right-2.5 z-40 sm:bottom-4 sm:top-auto sm:left-4 sm:right-auto">
      <div className="flex flex-col gap-1.5 sm:gap-2.5">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            aria-label={item.label}
            title={item.label}
            className="grid size-8.5 sm:size-11 place-items-center rounded-full bg-gold text-on-gold shadow-lg transition-all duration-300 hover:scale-110 hover:bg-ink hover:text-gold active:scale-95"
          >
            {item.node}
          </a>
        ))}
      </div>
    </div>
  )
}
