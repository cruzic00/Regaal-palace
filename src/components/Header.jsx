import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { BedDouble, Briefcase, ChevronDown, Menu, X } from 'lucide-react'
import { nav } from '../data/site'
import { scrollToTarget } from '../lib/smoothScroll'
import Logo from './Logo'

function NavItem({ item }) {
  // whitespace-nowrap keeps two-word labels ("Corporate Stays") on one line; the
  // type tightens at lg so all eight items fit a 1024px viewport.
  const linkCls = ({ isActive }) =>
    `relative flex items-center gap-1 font-display text-[10px] font-medium tracking-[0.05em] whitespace-nowrap uppercase transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 xl:text-[11px] xl:tracking-[0.08em] 2xl:text-xs 2xl:tracking-[0.1em] ${
      isActive ? 'text-gold after:w-full' : 'text-white after:w-0 hover:text-gold hover:after:w-full'
    }`

  const isHash = item.to.startsWith('#')

  const handleHashClick = (e) => {
    if (isHash) {
      e.preventDefault()
      scrollToTarget(item.to)
    }
  }

  if (!item.children) {
    if (isHash) {
      return (
        <a
          href={item.to}
          onClick={handleHashClick}
          className="relative flex items-center gap-1 font-display text-[10px] font-medium tracking-[0.05em] whitespace-nowrap text-white uppercase transition-colors duration-300 hover:text-gold after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-gold after:w-0 hover:after:w-full xl:text-[11px] xl:tracking-[0.08em] 2xl:text-xs 2xl:tracking-[0.1em]"
        >
          {item.label}
        </a>
      )
    }
    return (
      <NavLink to={item.to} className={linkCls}>
        {item.label}
      </NavLink>
    )
  }

  return (
    <div className="group relative">
      {isHash ? (
        <a
          href={item.to}
          onClick={handleHashClick}
          className="relative flex items-center gap-1 font-display text-[10px] font-medium tracking-[0.05em] whitespace-nowrap text-white uppercase transition-colors duration-300 hover:text-gold after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-gold after:w-0 hover:after:w-full xl:text-[11px] xl:tracking-[0.08em] 2xl:text-xs 2xl:tracking-[0.1em]"
        >
          {item.label}
          <ChevronDown className="size-3 transition-transform duration-300 group-hover:rotate-180" />
        </a>
      ) : (
        <NavLink to={item.to} className={linkCls}>
          {item.label}
          <ChevronDown className="size-3 transition-transform duration-300 group-hover:rotate-180" />
        </NavLink>
      )}

      <div className="invisible absolute top-full left-0 z-10 w-56 translate-y-3 pt-6 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <ul className="border-t-2 border-gold bg-ink-soft py-2 shadow-2xl">
          {item.children.map((child, i) => {
            const cls =
              'block px-6 py-2.5 text-sm text-muted transition-colors duration-200 hover:bg-gold hover:text-on-gold'
            return (
              <li key={`${child.label}-${i}`}>
                {/* A child with `href` points off-site, so it needs a plain
                    anchor rather than a router Link. */}
                {child.href ? (
                  <a href={child.href} target="_blank" rel="noreferrer" className={cls}>
                    {child.label}
                  </a>
                ) : (
                  <Link to={child.to} className={cls}>
                    {child.label}
                  </Link>
                )}
              </li>
            )
          })}
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
          scrolled ? 'bg-ink/95 py-3 shadow-xl backdrop-blur' : 'on-photo py-6'
        }`}
      >
        <div className="container-x flex items-center justify-between gap-2 lg:gap-3 xl:gap-4">
          <Logo compact={scrolled} className="shrink-0" />

          <nav className="hidden items-center gap-2 lg:flex xl:gap-3.5 2xl:gap-4.5">
            {nav.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Desktop / Tablet text buttons */}
            <a
              href="mailto:reservations@regaalpalace.com?subject=Room Booking Enquiry"
              className="hidden border border-gold bg-gold px-2.5 py-1.5 font-display text-[9px] font-semibold tracking-[0.05em] whitespace-nowrap text-on-gold uppercase transition-colors duration-300 hover:bg-transparent hover:text-gold sm:inline-block xl:px-3.5 xl:py-2 xl:text-[11px] xl:tracking-[0.08em]"
            >
              Book Your Stay
            </a>

            <Link
              to="/corporate-stays#inquiry-form"
              className="hidden border border-gold px-2.5 py-1.5 font-display text-[9px] font-semibold tracking-[0.05em] whitespace-nowrap text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-on-gold sm:inline-block xl:px-3.5 xl:py-2 xl:text-[11px] xl:tracking-[0.08em]"
            >
              Corporate Enquiries
            </Link>

            {/* Mobile icon buttons */}
            <a
              href="mailto:reservations@regaalpalace.com?subject=Room Booking Enquiry"
              title="Book Your Stay"
              aria-label="Book Your Stay"
              className="flex size-8.5 items-center justify-center rounded-sm border border-gold bg-gold text-on-gold transition-colors hover:bg-transparent hover:text-gold sm:hidden"
            >
              <BedDouble className="size-4" />
            </a>

            <Link
              to="/corporate-stays#inquiry-form"
              title="Corporate Enquiries"
              aria-label="Corporate Enquiries"
              className="flex size-8.5 items-center justify-center rounded-sm border border-gold/70 text-gold transition-colors hover:bg-gold hover:text-on-gold sm:hidden"
            >
              <Briefcase className="size-4" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="flex size-8.5 items-center justify-center text-white lg:hidden"
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
              {item.to.startsWith('#') ? (
                <a
                  href={item.to}
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    scrollToTarget(item.to)
                  }}
                  className="font-display text-xl tracking-[0.14em] uppercase transition-colors sm:text-2xl text-white hover:text-gold block"
                >
                  {item.label}
                </a>
              ) : (
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
              )}
              {item.children && (
                <ul className="mt-2.5 ml-4 space-y-2 border-l-2 border-gold/40 pl-4">
                  {item.children.map((child, i) => {
                    const cls =
                      'font-sans text-sm tracking-wide text-white/75 transition-colors hover:text-gold'
                    return (
                      <li key={`${child.label}-${i}`}>
                        {child.href ? (
                          <a href={child.href} target="_blank" rel="noreferrer" className={cls}>
                            {child.label}
                          </a>
                        ) : (
                          <Link to={child.to} className={cls}>
                            {child.label}
                          </Link>
                        )}
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Footer CTA */}
        <div className="space-y-2.5 border-t border-white/10 pt-5">
          <a
            href="mailto:reservations@regaalpalace.com?subject=Room Booking Enquiry"
            onClick={() => setOpen(false)}
            className="block w-full bg-gold py-3 text-center font-display text-xs font-semibold tracking-[0.15em] text-on-gold uppercase transition-colors hover:bg-white"
          >
            Book Your Stay
          </a>
          <Link
            to="/corporate-stays#inquiry-form"
            onClick={() => setOpen(false)}
            className="block w-full border border-gold py-3 text-center font-display text-xs font-semibold tracking-[0.15em] text-gold uppercase transition-colors hover:bg-gold hover:text-on-gold"
          >
            Corporate Enquiries
          </Link>
          <div className="flex items-center justify-between text-xs text-white/60 pt-1">
            <span>Call: 0256 2222424</span>
            <span>info@regaalpalace.com</span>
          </div>
        </div>
      </div>
    </>
  )
}
