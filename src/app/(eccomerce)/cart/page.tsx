import { TotalProducts } from '@/components/total-products'
import { TotalToPay } from '@/components/total-to-pay'

export default function CartPage () {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
      <div className='col-span-2 mx-3 my-6 grid place-items-center'>
        <TotalProducts/>
      </div>
      <div className='col-span-1 flex justify-center'>
        <TotalToPay/>
      </div>
    </div>
  )
}
