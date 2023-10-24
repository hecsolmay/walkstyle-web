import { getSizeByProduct } from '@/services/size'
import { notFound } from 'next/navigation'

export default async function ProductSizePage (
  { params }: { params: { productId: string } }
) {
  const sizes = await getSizeByProduct(params.productId)

  if (sizes === undefined) {
    notFound()
  }

  console.log(`size of product ${params.productId}`)
  console.log({ sizes })
  return (
    <div>
      Aqui van todas las tallas
    </div>
  )
}
