import { ShoppingCartIcon } from '@/components/icons'

interface ShoppingCartButtonProps {
  items?: number
  onClick?: () => void
}

export default function ShoppingCartButton (
  { items = 0, onClick }: ShoppingCartButtonProps
) {
  return (
    <div className='relative '>
      <span className='absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-teal-500 text-xs text-white'>{items}</span>
      <button onClick={onClick} className='cursor-pointer text-slate-600'>
        <ShoppingCartIcon />
      </button>
    </div>
  )
}
