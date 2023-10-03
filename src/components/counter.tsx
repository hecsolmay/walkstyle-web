import { cn } from '@/utils/cn'
import React, { useState } from 'react'

export function Counter () {
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div className="flex w-20 items-center justify-between rounded-2xl border border-slate-300 bg-slate-100 px-2 text-slate-800 shadow-sm md:w-24">
      <button
        className={cn('px-2 py-1 text-slate-950', count <= 1 && 'opacity-50')}
        disabled={count <= 1}
        onClick={decrement}
      >
          -
      </button>
      <span>{count}</span>
      <button
        className="px-2 py-1  text-slate-950"
        onClick={increment}
      >
          +
      </button>
    </div>
  )
}
