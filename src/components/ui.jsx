import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const variantAnimation = {
  up: 'animate-rise',
  left: 'animate-slide-left',
  right: 'animate-slide-right',
  zoom: 'animate-zoom-in',
  blur: 'animate-blur-in',
}

/**
 * Animates a block in the first time it scrolls into view. Every variant lands
 * from a blurred state, which is what makes the motion read as depth.
 */
export function Reveal({ children, delay = 0, variant = 'up', className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect the OS setting rather than blurring the page for someone who
    // asked for less motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${shown ? variantAnimation[variant] : 'opacity-0'} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/** The gold diamond that sits above every section title in the design. */
export function Ornament({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="h-px w-8 bg-gold/50" />
      <span className="size-1.5 rotate-45 bg-gold" />
      <span className="h-px w-8 bg-gold/50" />
    </span>
  )
}

export function SectionHeading({ eyebrow, title, blurb, align = 'center' }) {
  const centered = align === 'center'
  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      {centered && <Ornament className="mb-5" />}
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[44px]">{title}</h2>
      {blurb && <p className="mt-4 text-white/55">{blurb}</p>}
    </div>
  )
}

const base =
  'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300'

const variants = {
  solid: 'bg-gold text-scrim hover:bg-gold-light',
  outline: 'border border-white/25 text-white hover:border-gold hover:text-gold',
  dark: 'bg-ink text-white hover:bg-gold hover:text-scrim',
}

export function Button({ to, href, variant = 'solid', className = '', children, ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}
