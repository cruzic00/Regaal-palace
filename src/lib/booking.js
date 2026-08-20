/**
 * KeyIO Booking Engine (property 13).
 *
 * The vendor ships this as a global <script>; implemented here as a module
 * instead so it can't race the React tree and so every caller shares one URL
 * builder. The query string matches their documented format exactly.
 */
/**
 * ⚠️ NEEDS THE REAL PROPERTY URL FROM KEYIO.
 *
 * This host always resolves to KeyIO's demo property (Polo Hotel, Agartala).
 * It accepts no property identifier: ?propertyId, ?hotelId, ?propertyCode and
 * ?property are all silently ignored, and /<id> paths 404 — tested with both
 * the widget id (13) and the property id (35600020).
 *
 * So the fix is a different host/path, not an extra parameter. Swap this one
 * constant once KeyIO supplies it; every booking button reads from here and the
 * date/occupancy query string below is already in their documented format.
 */
const PROPERTY_ID = '35600020'
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
