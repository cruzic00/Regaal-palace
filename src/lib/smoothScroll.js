import Lenis from 'lenis'

let lenis = null

/** Starts Lenis and its rAF loop. Returns a teardown for the calling effect. */
export function initSmoothScroll() {
  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.6,
  })

  let frame = requestAnimationFrame(function raf(time) {
    lenis.raf(time)
    frame = requestAnimationFrame(raf)
  })

  return () => {
    cancelAnimationFrame(frame)
    lenis.destroy()
    lenis = null
  }
}

/** Jump to the top without Lenis animating the whole page on route change. */
export function jumpToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true })
  else window.scrollTo(0, 0)
}

// The header is fixed, so a section scrolled flush to the viewport top would sit
// underneath it. Stop short by roughly its height.
const HEADER_OFFSET = -110

/** Scroll smoothly to a target element or selector, clearing the fixed header. */
export function scrollToTarget(target) {
  if (!target) return
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.2, offset: HEADER_OFFSET })
    return
  }
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY + HEADER_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
}

/**
 * Click handler for a `<Link to="/path#hash">` that may point at the page
 * already on screen. React Router only re-runs the route-level scroll effect
 * when the location actually changes — if you're already on that path, a
 * second click leaves the hash unchanged, so nothing would scroll. This
 * catches that case and scrolls directly; a real cross-page click is left
 * alone so the normal route-change scroll (in App.jsx) handles it.
 */
export function scrollLinkClick(to, currentPathname) {
  const hashIndex = to.indexOf('#')
  if (hashIndex === -1) return undefined
  const path = to.slice(0, hashIndex) || '/'
  if (path !== currentPathname) return undefined
  const hash = to.slice(hashIndex)
  return (e) => {
    e.preventDefault()
    scrollToTarget(hash)
  }
}

