import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

/** Where each variant sits before it has arrived — and returns to on the way out. */
const restingState = {
  up: { transform: 'translateY(38px)', filter: 'blur(12px)' },
  'up-far': { transform: 'translateY(120px)', filter: 'blur(14px)' },
  // Falls in from above — stagger a row of these and it plays like piano keys.
  drop: { transform: 'translateY(-70px)', filter: 'blur(12px)' },
  left: { transform: 'translateX(-56px)', filter: 'blur(12px)' },
  right: { transform: 'translateX(56px)', filter: 'blur(12px)' },
  'right-far': { transform: 'translateX(180px)', filter: 'blur(14px)' },
  zoom: { transform: 'scale(1.1)', filter: 'blur(16px)' },
  // --spread-x/y let a caller start a card on top of a sibling, so a grid can
  // look like each card unpacked out of the one before it.
  emerge: {
    transform: 'translate(var(--spread-x, 0px), var(--spread-y, 0px)) scale(0.82)',
    filter: 'blur(14px)',
  },
  blur: { transform: 'none', filter: 'blur(20px)' },
}

const arrivedState = { transform: 'none', filter: 'blur(0px)' }

/**
 * Makes a three-up row unpack outwards from its middle card: the centre zooms in
 * alone, then the outer two travel out from behind it. 108% is one card width
 * plus the gap. Only applies at lg, where the three are actually side by side.
 */
export const spreadFromCentre = ['lg:[--spread-x:108%]', '', 'lg:[--spread-x:-108%]']
export const spreadFromCentreDelays = [220, 0, 220]

/**
 * Animates a block whenever it enters the viewport, and plays the same motion
 * backwards when it leaves — scroll up and it retreats, scroll down and it
 * arrives again. Transitions rather than keyframes, because a transition
 * reverses from wherever it currently is instead of restarting.
 */
export function Reveal({ children, delay = 0, duration = 1000, variant = 'up', className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect the OS setting rather than blurring the page for someone who
    // asked for less motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true)
      return
    }

    const io = new IntersectionObserver(([entry]) => setShown(entry.isIntersecting), {
      rootMargin: '0px 0px -12% 0px',
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  if (reduced) return <div className={className}>{children}</div>

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transitionProperty: 'opacity, transform, filter',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        // Stagger only on the way in; retreating all at once looks deliberate.
        transitionDelay: `${shown ? delay : 0}ms`,
        ...(shown ? arrivedState : restingState[variant]),
      }}
    >
      {children}
    </div>
  )
}

/** The gold diamond that sits above every section title in the design. */
export function Ornament({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="h-px w-14 bg-gold/40" />
      <span className="size-1.5 rotate-45 bg-gold" />
      <span className="h-px w-14 bg-gold/40" />
    </span>
  )
}

export function SectionHeading({ eyebrow, title, blurb, align = 'center', watermark = true }) {
  const centered = align === 'center'
  return (
    <div className={`relative max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      {centered && watermark && (
        // The logo washed into the background behind the title. Its navy plate
        // is so close to --color-ink that at this opacity only the gold artwork
        // reads; on the light theme it needs to go fainter still.
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2 opacity-[0.09] light:opacity-[0.035] lg:w-[400px]"
        />
      )}

      <div className="relative">
        {centered && <Ornament className="mb-5" />}
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="text-3xl leading-[1.15] font-medium sm:text-4xl lg:text-[44px]">{title}</h2>
        {blurb && <p className="mt-4 text-muted">{blurb}</p>}
      </div>
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
