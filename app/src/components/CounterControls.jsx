export default function CounterControls({ onIncrement, onDecrement, onReset }) {
  return (
    <>
      <div className="w-full grid grid-cols-2 gap-gutter">
        <button
          aria-label="Decrement count"
          className="h-16 rounded-full bg-secondary-fixed text-on-secondary-fixed shadow-md flex items-center justify-center active:scale-95 transition-all duration-150 hover:bg-secondary-fixed-dim"
          onClick={onDecrement}
          type="button"
        >
          <span className="material-symbols-outlined text-[28px]">remove</span>
        </button>
        <button
          aria-label="Increment count"
          className="h-16 rounded-full bg-primary text-on-primary shadow-lg flex items-center justify-center active:scale-95 transition-all duration-150 hover:bg-primary-container"
          onClick={onIncrement}
          type="button"
        >
          <span className="material-symbols-outlined text-[28px]">add</span>
        </button>
      </div>

      <button
        className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface-container-low text-on-surface-variant font-label-lg text-label-lg shadow-sm active:scale-95 transition-all duration-150 hover:bg-surface-container"
        onClick={onReset}
        type="button"
      >
        <span className="material-symbols-outlined text-[18px]">refresh</span>
        <span>Reset</span>
      </button>
    </>
  )
}
