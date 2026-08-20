/**
 * KeyIO Booking Engine (property 13).
 *
 * The vendor ships this as a global <script>; implemented here as a module
 * instead so it can't race the React tree and so every caller shares one URL
 * builder. The query string matches their documented format exactly.
 */
/**
 * ⚠️ This URL currently resolves to KeyIO's demo property (Polo Hotel,
 * Agartala), not Regaal — the snippet KeyIO supplied carries the property id
 * only in the widget's element id ("kbe-widget-13"), never in the link itself.
 * Verified that `?propertyId=13` is ignored and `/13` 404s, so the correct
 * property URL has to come from KeyIO. Swap this one constant when they send
 * it; every button on the site reads from here.
 */
const BOOKING_URL = 'https://internal-be.keyio.ai'

/** Set true to open the engine in a new tab instead of navigating away. */
const OPEN_NEW_TAB = false

/** Builds the engine URL. Without dates it returns the plain landing URL. */
export function bookingUrl({ checkIn, checkOut, adults = 1, children = 0, infants = 0 } = {}) {
  if (!checkIn || !checkOut) return BOOKING_URL

  const qs = new URLSearchParams({
    checkIn,
    checkOut,
    adults: String(parseInt(adults, 10) || 1),
    children: String(parseInt(children, 10) || 0),
    infants: String(parseInt(infants, 10) || 0),
  })
  return `${BOOKING_URL}?${qs}`
}

/** Sends the guest to the booking engine with their dates and occupancy. */
export function book(params) {
  const target = bookingUrl(params)
  if (OPEN_NEW_TAB) window.open(target, '_blank', 'noopener')
  else window.location.href = target
}
