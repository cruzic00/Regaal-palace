/**
 * A photo pinned to the viewport instead of to its own section, so the section
 * scrolls over a stationary image — the parallax effect, via CSS
 * `background-attachment: fixed`.
 *
 * iOS Safari ignores fixed attachment and stretches the image badly, so it only
 * engages from md up; below that the photo scrolls normally.
 */
export default function FixedBackdrop({ image, scrim = 'bg-scrim/75', position = 'center' }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-scroll bg-cover md:bg-fixed"
        style={{ backgroundImage: `url("${image}")`, backgroundPosition: position }}
      />
      <div aria-hidden="true" className={`absolute inset-0 ${scrim}`} />
    </>
  )
}
