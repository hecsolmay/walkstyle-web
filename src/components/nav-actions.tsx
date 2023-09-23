import { ShoppingCartIcon, UserIcon } from '@/components/icons'

export default function NavActions () {
  return (
    <div className='flex items-center gap-2 md:gap-5'>

      {/* USER PROFILE */}

      <div className='cursor-pointer text-slate-600'>
        <UserIcon />
      </div>

      {/* CART */}

      <div className='cursor-pointer text-slate-600'>
        <ShoppingCartIcon />
      </div>

    </div>
  )
}
