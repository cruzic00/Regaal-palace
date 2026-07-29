import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { nav } from '../data/site'
import Logo from './Logo'

function NavItem({ item }) {
  const linkCls = ({ isActive }) =>
    `relative flex items-center gap-1 font-display text-sm font-medium tracking-[0.16em] uppercase transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 ${
      isActive ? 'text-gold after:w-full' : 'text-white after:w-0 hover:text-gold hover:after:w-full'
    }`

  if (!item.children) {
    return (
      <NavLink to={item.to} className={linkCls}>
        {item.label}
      </NavLink>
    )
  }

  return (
    <div className="group relative">
      <NavLink to={item.to} className={linkCls}>
        {item.label}
        <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180" />
      </NavLink>

      <div className="invisible absolute top-full left-0 z-10 w-56 translate-y-3 pt-6 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <ul className="border-t-2 border-gold bg-ink-soft py-2 shadow-2xl">
          {item.children.map((child, i) => (
            <li key={`${child.label}-${i}`}>
              <Link
                to={child.to}
                className="block px-6 py-2.5 text-sm text-muted transition-colors duration-200 hover:bg-gold hover:text-on-gold"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent background scrolling when mobile menu is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-ink/95 py-3 shadow-xl backdrop-blur' : 'on-photo py-7'
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4 lg:gap-8">
          <Logo compact={scrolled} />

          <nav className="hidden items-center gap-4 lg:flex xl:gap-7">
            {nav.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href="mailto:reservations@regaalpalace.com?subject=Room Booking Enquiry"
              className="hidden border border-gold px-5 py-3 font-display text-xs tracking-[0.14em] text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-on-gold sm:inline-block xl:px-8 xl:py-4 xl:text-sm xl:tracking-[0.16em]"
            >
              Booking Online
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="text-white lg:hidden"
            >
              {open ? <X className="size-6 text-gold" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay drawer */}
      <div
        className={`fixed inset-0 z-50 flex flex-col justify-between bg-ink/98 px-7 py-8 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          open ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-4'
        }`}
        style={{ minHeight: '100dvh' }}
      >
        {/* Mobile Header Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <Logo compact />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex size-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold transition-colors hover:bg-gold hover:text-on-gold"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="my-auto flex flex-col gap-5 py-6 overflow-y-auto">
          {nav.map((item) => (
            <div key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `font-display text-xl tracking-[0.14em] uppercase transition-colors sm:text-2xl ${
                    isActive ? 'text-gold font-semibold' : 'text-white hover:text-gold'
                  }`
                }
              >
                {item.label}
              </NavLink>
              {item.children && (
                <ul className="mt-2.5 ml-4 space-y-2 border-l-2 border-gold/40 pl-4">
                  {item.children.map((child, i) => (
                    <li key={`${child.label}-${i}`}>
                      <Link
                        to={child.to}
                        className="font-sans text-sm tracking-wide text-white/75 transition-colors hover:text-gold"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Footer CTA */}
        <div className="space-y-4 border-t border-white/10 pt-5">
          <a
            href="mailto:reservations@regaalpalace.com?subject=Room Booking Enquiry"
            className="block w-full bg-gold py-3.5 text-center font-display text-xs tracking-[0.2em] font-medium text-on-gold uppercase transition-colors hover:bg-white"
          >
            Booking Online
          </a>
          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Call: 0256 2222424</span>
            <span>info@regaalpalace.com</span>
          </div>
        </div>
      </div>
    </>
  )
}
