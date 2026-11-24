import { useEffect, useRef, useState } from 'react'

export default function CounterCard({ count, hint }) {
  const [popping, setPopping] = useState(false)
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    setPopping(true)
    const timer = setTimeout(() => setPopping(false), 140)
    return () => clearTimeout(timer)
  }, [count])

  return (
    <div className="relative w-full rounded-xl bg-surface-container-lowest/90 backdrop-blur-xl shadow-xl p-space-xl flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary-fixed/40 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-secondary-fixed/40 blur-2xl pointer-events-none" />

      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-space-sm">
        Current Count
      </span>

      <div
        aria-live="polite"
        className={`font-display-xl-mobile text-display-xl-mobile text-on-surface tabular-nums select-none transition-transform duration-150 ease-out ${
          popping ? 'scale-110' : ''
        }`}
      >
        {count}
      </div>

      <p className="font-body-sm text-body-sm text-tertiary mt-space-sm transition-opacity duration-200">
        {hint}
      </p>
    </div>
  )
}
