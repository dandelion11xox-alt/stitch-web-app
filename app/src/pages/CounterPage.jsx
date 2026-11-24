import { useState } from 'react'
import CounterCard from '../components/CounterCard.jsx'
import CounterControls from '../components/CounterControls.jsx'
import Header from '../components/Header.jsx'

function getHint(count) {
  if (count === 0) return 'Tap + to begin counting'
  if (count > 0 && count % 10 === 0) return `Milestone reached: ${count}`
  return count === 1 ? '1st tally recorded' : `${count} tallies recorded`
}

export default function CounterPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col relative w-full px-margin pt-16 pb-safe bg-surface">
        <div className="flex flex-col w-full items-center justify-center py-space-xl gap-space-lg">
          <div className="w-full max-w-sm flex flex-col items-center gap-space-lg">
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-secondary-fixed/60 text-on-secondary-fixed shadow-sm">
              <span
                className="material-symbols-outlined text-[16px] text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                ac_unit
              </span>
              <span className="font-label-md text-label-md uppercase tracking-wider">
                Alpine Tally
              </span>
            </div>

            <CounterCard count={count} hint={getHint(count)} />

            <CounterControls
              onIncrement={() => setCount((current) => current + 1)}
              onDecrement={() => setCount((current) => current - 1)}
              onReset={() => setCount(0)}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
