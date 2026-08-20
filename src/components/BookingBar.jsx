import { useState } from 'react'
import { book } from '../lib/booking'

const labelCls = 'mb-2 block font-display text-base tracking-wide text-muted'
// No [color-scheme] here — :root sets it per theme, so the native date picker
// follows the sun toggle instead of always rendering dark.
const inputCls = 'w-full bg-transparent font-display text-lg text-white focus:outline-none'

const today = new Date().toISOString().slice(0, 10)
const tomorrow = new Date(Date.now() + 864e5).toISOString().slice(0, 10)

// The engine wants adults and children as separate numbers, so each option
// carries them rather than parsing them back out of the label.
const guestOptions = [
  { value: '1-0', label: '1 Adult, 0 Child' },
  { value: '2-0', label: '2 Adults, 0 Child' },
  { value: '2-1', label: '2 Adults, 1 Child' },
  { value: '2-2', label: '2 Adults, 2 Children' },
  { value: '4-2', label: '4 Adults, 2 Children' },
]

export default function BookingBar() {
  const [form, setForm] = useState({
    checkIn: today,
    checkOut: tomorrow,
    rooms: '1 Room',
    guests: '1-0',
  })

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const [adults, children] = form.guests.split('-')
    book({ checkIn: form.checkIn, checkOut: form.checkOut, adults, children })
  }

  return (
    <form
      onSubmit={submit}
      className="grid items-end gap-6 bg-ink-soft/95 px-6 py-7 backdrop-blur-md sm:grid-cols-2 sm:gap-8 sm:px-8 sm:py-8 lg:grid-cols-[repeat(4,1fr)_auto] lg:gap-10 lg:px-10"
    >
      <div>
        <label className={labelCls} htmlFor="checkIn">
          Check In
        </label>
        <input
          id="checkIn"
          type="date"
          value={form.checkIn}
          onChange={set('checkIn')}
          className={inputCls}
        />
      </div>

      <div>
        <label className={labelCls} htmlFor="checkOut">
          Check Out
        </label>
        <input
          id="checkOut"
          type="date"
          min={form.checkIn}
          value={form.checkOut}
          onChange={set('checkOut')}
          className={inputCls}
        />
      </div>

      <div>
        <label className={labelCls} htmlFor="rooms">
          Rooms
        </label>
        <select id="rooms" value={form.rooms} onChange={set('rooms')} className={inputCls}>
          {['1 Room', '2 Rooms', '3 Rooms', '4 Rooms'].map((o) => (
            <option key={o} className="bg-ink-soft">
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelCls} htmlFor="guests">
          Guests
        </label>
        <select id="guests" value={form.guests} onChange={set('guests')} className={inputCls}>
          {guestOptions.map((o) => (
            <option key={o.value} value={o.value} className="bg-ink-soft">
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-gold px-10 py-4 font-display text-lg tracking-wide text-on-gold transition-colors duration-300 hover:bg-gold-light sm:col-span-2 lg:col-span-1"
      >
        Checkout Now
      </button>
    </form>
  )
}
