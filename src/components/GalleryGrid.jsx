import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

/**
 * Thumbnail grid that opens a full-screen lightbox on click. Arrow keys and the
 * on-screen chevrons step through; Escape or a backdrop click closes.
 */
export default function GalleryGrid({ images, className = '' }) {
  const [index, setIndex] = useState(null)
  const isOpen = index !== null

  const close = useCallback(() => setIndex(null), [])
  const step = useCallback(
    (delta) => setIndex((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length],
  )

  // Keyboard controls + lock background scroll while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, close, step])

  return (
    <>
      <div className={`grid grid-cols-3 gap-2 ${className}`}>
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Open image ${i + 1}`}
            className="group relative aspect-square overflow-hidden"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="size-full object-cover opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 grid size-11 place-items-center text-white/80 transition-colors hover:text-gold"
          >
            <X className="size-7" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Previous image"
            className="absolute left-3 grid size-12 place-items-center text-white/80 transition-colors hover:text-gold sm:left-6"
          >
            <ChevronLeft className="size-8" />
          </button>

          <img
            src={images[index]}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[92vw] object-contain shadow-2xl"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Next image"
            className="absolute right-3 grid size-12 place-items-center text-white/80 transition-colors hover:text-gold sm:right-6"
          >
            <ChevronRight className="size-8" />
          </button>

          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm tracking-[0.2em] text-white/60">
            {index + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  )
}
