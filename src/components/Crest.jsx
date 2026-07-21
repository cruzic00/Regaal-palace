/**
 * The Royella mark on its own — double ring, eight flourishes, monogram. Drawn
 * entirely in currentColor so callers set the colour and opacity: gold in the
 * header logo, a faint wash behind section headings.
 */
export default function Crest({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle
        cx="32"
        cy="32"
        r="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.6"
      />
      {Array.from({ length: 8 }).map((_, i) => (
        <path
          key={i}
          d="M32 12 q3 4 0 8 q-3-4 0-8"
          fill="currentColor"
          transform={`rotate(${i * 45} 32 32)`}
        />
      ))}
      <text
        x="32"
        y="39"
        textAnchor="middle"
        fill="currentColor"
        className="font-display"
        fontSize="19"
        fontWeight="600"
      >
        R
      </text>
    </svg>
  )
}
