import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { slides } from '../data/site'
import { Button } from './ui'

const SLIDE_MS = 6000

const SLIDE_MS_TRANSITION = 1100

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [sliding, setSliding] = useState(false)

  const go = (next) => setIndex((next + slides.length) % slides.length)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS)
    return () => clearInterval(id)
  }, [index])

  // Blur the photography while the track is travelling — reads as motion blur.
  useEffect(() => {
    setSliding(true)
    const id = setTimeout(() => setSliding(false), SLIDE_MS_TRANSITION)
    return () => clearTimeout(id)
  }, [index])

  return (
    <section className="on-photo relative h-[100svh] overflow-hidden">
      {/* One wide track that rolls sideways. The track's own box is the section
          width, so each step is exactly -100%. */}
      <div
        className="absolute inset-0 flex will-change-transform transition-transform duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          // overflow-hidden is load-bearing: a blurred child fades out over its
          // own edge and bleeds past it, which showed up as a seam between
          // slides mid-roll. Clipping it, with the image scaled past the clip,
          // keeps every visible pixel fully covered.
          <div key={slide.image} className="relative h-full w-full shrink-0 overflow-hidden">
            <img
              src={slide.image}
              alt=""
              className={`size-full scale-110 object-cover transition-[filter] duration-700 ${
                sliding ? 'blur-[6px]' : 'blur-0'
              } ${i === index && !sliding ? 'animate-ken-burns' : ''}`}
            />
            <div className="absolute inset-0 bg-scrim/55" />

            <div
              className={`absolute inset-0 flex items-center transition-[opacity,filter] duration-700 ${
                i === index && !sliding ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
              }`}
            >
              <div className="container-x pt-20 text-center">
                <div className="mb-6 flex justify-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-display text-xs tracking-[0.25em] text-white uppercase sm:text-sm sm:tracking-[0.3em]">
                  
                </p>
                <h1 className="mx-auto mt-5 max-w-4xl font-display text-[1.4rem] leading-[1.25] font-bold tracking-wide text-white sm:text-5xl md:text-[52px] lg:text-6xl">
                  {slide.headline.includes('Jalgaon') ? (
                    <>
                      Your Business Address in<br className="sm:hidden" /> Jalgaon.
                    </>
                  ) : (
                    slide.headline
                  )}
                </h1>
                <p className="mx-auto mt-5 max-w-2xl font-display text-lg font-semibold tracking-wide text-gold sm:text-xl lg:text-2xl">
                  {slide.subline}
                </p>
                <Button to="/rooms" className="mt-9">
                  Discover More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sits outside the sliding track so it stays put while slides roll past,
          dissolving the hard bottom edge into the section below. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-ink lg:h-72"
      />

      {/* Prev / next, bottom-right like the template */}
      <div className="absolute right-4 bottom-6 z-10 flex sm:right-6 sm:bottom-8 lg:right-10">
        {[
          { icon: ChevronLeft, step: index - 1, label: 'Previous slide' },
          { icon: ChevronRight, step: index + 1, label: 'Next slide' },
        ].map(({ icon: Icon, step, label }) => (
          <button
            key={label}
            type="button"
            onClick={() => go(step)}
            aria-label={label}
            className="grid size-11 place-items-center border border-gold text-gold transition-colors duration-300 hover:bg-gold hover:text-on-gold sm:size-14"
          >
            <Icon className="size-5" />
          </button>
        ))}
      </div>

      <div className="absolute bottom-6 left-4 z-10 flex gap-2 sm:bottom-8 sm:left-6 sm:gap-3 lg:left-10">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-0.5 transition-all duration-500 ${
              i === index ? 'w-12 bg-gold' : 'w-6 bg-white/40 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
