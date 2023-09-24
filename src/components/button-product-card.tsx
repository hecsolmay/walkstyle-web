'use client'

interface ButtonProps {
  onClick?: () => void
}

export default function Button ({ onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className='rounded-lg border border-slate-400 px-2 py-1 font-semibold text-teal-400'>Add to cart</button>
  )
}
