/**
 * Thin wrapper over KeyIO's integration script (pasted verbatim in index.html,
 * which defines window.KeyIOBooking). Calling through the vendor global keeps
 * index.html the single place to update when KeyIO sends a new snippet; the
 * constant below is only a fallback for when the script hasn't loaded.
 */
const FALLBACK_URL = 'https://booking.regaalpalace.in'

/** The engine's base URL — the vendor script's value wins if it has loaded. */
export function engineUrl() {
  return window.KeyIOBooking?.url ?? FALLBACK_URL
}

/** Builds the engine URL. Without dates it returns the plain landing URL. */
export function bookingUrl({ checkIn, checkOut, adults = 1, children = 0, infants = 0 } = {}) {
  const base = engineUrl()
  if (!checkIn || !checkOut) return base

  const qs = new URLSearchParams({
    checkIn,
    checkOut,
    adults: String(parseInt(adults, 10) || 1),
    children: String(parseInt(children, 10) || 0),
    infants: String(parseInt(infants, 10) || 0),
  })
  return `${base}?${qs}`
}

/** Sends the guest to the booking engine with their dates and occupancy. */
export function book(params) {
  if (window.KeyIOBooking) {
    window.KeyIOBooking.book(params)
    return
  }
  window.location.href = bookingUrl(params)
}
