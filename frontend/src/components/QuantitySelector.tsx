type Props = {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

export default function QuantitySelector({ value, onChange, min = 1, max = 99 }: Props) {
  return (
    <div className="inline-flex items-center rounded-md border bg-white">
      <button
        type="button"
        className="h-9 w-9 text-lg leading-none disabled:opacity-40"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
      >
        −
      </button>
      <input
        className="h-9 w-12 text-center outline-none"
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <button
        type="button"
        className="h-9 w-9 text-lg leading-none disabled:opacity-40"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  )
}
