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

/** Scroll smoothly to a target element or selector. */
export function scrollToTarget(target) {
  if (!target) return
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.2 })
  } else {
    const el = typeof target === 'string' ? document.querySelector(target) : target
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

