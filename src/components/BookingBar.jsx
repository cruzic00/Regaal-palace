import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const labelCls = 'mb-2 block font-display text-base tracking-wide text-white/55'
const inputCls =
  'w-full bg-transparent font-display text-lg text-white [color-scheme:dark] focus:outline-none'

const today = new Date().toISOString().slice(0, 10)
const tomorrow = new Date(Date.now() + 864e5).toISOString().slice(0, 10)

export default function BookingBar() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    checkIn: today,
    checkOut: tomorrow,
    rooms: '1 Room',
    guests: '1 Adult, 0 Child',
  })

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    navigate(`/rooms?${new URLSearchParams(form)}`)
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
          {[
            '1 Adult, 0 Child',
            '2 Adults, 0 Child',
            '2 Adults, 1 Child',
            '2 Adults, 2 Children',
            '4 Adults, 2 Children',
          ].map((o) => (
            <option key={o} className="bg-ink-soft">
              {o}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-gold px-10 py-4 font-display text-lg tracking-wide text-scrim transition-colors duration-300 hover:bg-gold-light sm:col-span-2 lg:col-span-1"
      >
        Checkout Now
      </button>
    </form>
  )
}
