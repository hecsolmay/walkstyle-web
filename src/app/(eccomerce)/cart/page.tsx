import CartLoader from '@/components/cart-loader'
import dynamic from 'next/dynamic'

const CartContent = dynamic(async () => await import('@/components/cart-content'), {
  ssr: false,
  loading: () => <CartLoader />
})

export default function CartPage () {
  return (
    <CartContent />
  )
}
