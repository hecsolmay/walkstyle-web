import { XMarkIcon } from '@/components/icons'
import ItemCard from '@/components/item-card'
import { LinkButton } from '@/components/link-button'
import { type ItemProduct } from '@/types/product'

interface ModalCartInfoProps {
  CloseSideBar: () => void
}

const products: ItemProduct[] = [
  {
    product: {
      name: 'Camisa de manga corta',
      price: 10495,
      gender: {
        genderId: 'M',
        name: 'Mujer'
      },
      brand: {
        brandId: '1',
        name: 'Nike'
      },
      imageUrl: 'https://tafmx.vtexassets.com/arquivos/ids/406372-192-auto',
      description: 'Camisa de manga corta',
      productId: '1',
      sizes: [24, 25, 25.5, 26, 26.5, 27, 32]
    },
    quantity: 1,
    size: 32
  }
]

export default function ModalCartInfo ({ CloseSideBar }: ModalCartInfoProps) {
  return (
    <aside className="fixed right-0 top-0 z-20 flex h-screen w-[90vw] flex-col justify-between bg-white transition-transform duration-500 ease-in-out md:w-[50vw] lg:w-[40vw]">

      {/* HEADER DEL CARRITO  */}

      <div className='over flex h-20 items-center justify-between border-b-2 border-teal-500 bg-slate-100 p-5 text-slate-400'>
        <h1 className='flex-1 text-center text-2xl font-bold text-black'>Mi carrito</h1>
        <button onClick={CloseSideBar}>
          <XMarkIcon className='h-7 w-7'/>
        </button>
      </div>

      <CartInfo products={products} onClickLink={CloseSideBar} />

    </aside>
  )
}

interface CartInfoProps {
  products: ItemProduct[]
  onClickLink?: () => void
}

export function CartInfo ({ products, onClickLink }: CartInfoProps) {
  if (products.length === 0) {
    return (
      <div className='grid flex-1 place-content-center text-center text-slate-500'>
        <p>Aun no has agregado productos</p>
      </div>
    )
  }

  const subtotal = products.reduce((acc, product) => {
    return acc + product.quantity * product.product.price
  }, 0)
  const discount = 0
  const total = subtotal - discount

  return (
    <>

      <div className='flex-1 overflow-y-scroll py-4 scrollbar-thin scrollbar-thumb-slate-400'>
        {products.map(product => (
          <ItemCard key={product.product.productId} product={product} />
        ))}

      </div>

      {/* FOOTER DEL CARRITO CON INFO DEL TOTAL */}
      <div className='flex h-60 w-full flex-col gap-2 bg-slate-200 p-5 text-lg font-semibold text-slate-600'>

        <div className='flex justify-between border-t border-black px-4 py-2'>
          <p>Subtotal</p>
          <p>{subtotal.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
        </div>

        <div className='flex justify-between border-t border-black px-4 py-2'>
          <p>Descuento</p>
          <p>{discount.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
        </div>

        <div className='flex justify-between border-t border-black px-4 py-2 font-bold text-black'>
          <p>Total</p>
          <p>{total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
        </div>

        <LinkButton onClick={onClickLink} href='/cart' className='h-11 bg-teal-500' text='VER CARRITO Y PAGAR'/>
      </div>
    </>

  )
}
