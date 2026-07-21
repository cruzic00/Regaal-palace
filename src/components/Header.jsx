import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'
import { nav } from '../data/site'
import Logo from './Logo'

function useTheme() {
  const [light, setLight] = useState(
    () => localStorage.getItem('royella-theme') === 'light',
  )

  useEffect(() => {
    document.documentElement.classList.toggle('light', light)
    localStorage.setItem('royella-theme', light ? 'light' : 'dark')
  }, [light])

  return [light, () => setLight((v) => !v)]
}

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
                className="block px-6 py-2.5 text-sm text-white/75 transition-colors duration-200 hover:bg-gold hover:text-scrim"
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
  const [light, toggleTheme] = useTheme()
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/95 py-3 shadow-xl backdrop-blur' : 'on-photo py-7'
      }`}
    >
      <div className="container-x flex items-center justify-between gap-8">
        <Logo compact={scrolled} />

        <nav className="hidden items-center gap-9 xl:flex">
          {nav.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={light ? 'Apply dark mode' : 'Apply light mode'}
            title={light ? 'Apply Dark Mode' : 'Apply Light Mode'}
            className="text-gold transition-transform duration-500 hover:rotate-90"
          >
            {light ? <Moon className="size-6" /> : <Sun className="size-6" />}
          </button>

          <Link
            to="/rooms"
            className="relative hidden border border-white/40 px-8 py-4 font-display text-sm tracking-[0.16em] text-white uppercase transition-colors duration-300 after:absolute after:-bottom-px after:left-1/2 after:h-0.5 after:w-10 after:-translate-x-1/2 after:bg-gold hover:border-gold hover:text-gold sm:inline-block"
          >
            Booking Online
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="text-white xl:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-80 overflow-y-auto bg-ink-soft px-8 py-8 transition-transform duration-500 xl:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="mb-10 ml-auto block text-white"
        >
          <X className="size-6" />
        </button>
        <nav className="flex flex-col gap-5">
          {nav.map((item) => (
            <div key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `font-display text-sm tracking-[0.18em] uppercase ${
                    isActive ? 'text-gold' : 'text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
              {item.children && (
                <ul className="mt-3 ml-4 space-y-2 border-l border-white/15 pl-4">
                  {item.children.map((child, i) => (
                    <li key={`${child.label}-${i}`}>
                      <Link
                        to={child.to}
                        className="text-sm text-white/60 transition-colors hover:text-gold"
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
      </div>
    </header>
  )
}
