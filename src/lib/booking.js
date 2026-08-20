/**
 * Thin wrapper over KeyIO's integration script (pasted verbatim in index.html,
 * which defines window.KeyIOBooking). Calling through the vendor global keeps
 * index.html the single place to update when KeyIO sends a new snippet; the
 * constants below are only a fallback for when the script hasn't loaded.
 *
 * ⚠️ NEEDS THE REAL PROPERTY URL FROM KEYIO.
 * The supplied host always resolves to KeyIO's demo property (Polo Hotel,
 * Agartala) and accepts no property identifier: ?propertyId, ?hotelId,
 * ?propertyCode and ?property are all silently ignored, and /<id> paths 404 —
 * tested with both the widget id (13) and the property id (35600020). So the
 * fix is a different host, not an extra parameter.
 */
const FALLBACK_URL = 'https://internal-be.keyio.ai'

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
