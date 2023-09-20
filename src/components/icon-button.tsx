'use client'

type Direction = 'left' | 'right'

interface IconButtonProps {
  direction?: Direction
  children: React.ReactNode
  text: string
  className?: string
  onclick?: () => void
}

export function IconButton ({
  text,
  onclick,
  direction = 'left',
  children

}: IconButtonProps) {
  return (
    <button
      className='  mb-2 mr-2 inline-flex scale-90 cursor-pointer flex-row items-center justify-center gap-x-2 rounded-lg bg-red-500 px-5 py-2.5 text-center font-medium text-white transition-all duration-200 ease-in-out hover:opacity-100 hover:shadow-lg'
      onClick={onclick}
      style={{ width: '100%', height: '50%' }}>
      {children}
      {text}
    </button>
  )
}
