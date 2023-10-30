import { getSaleById } from '@/services/sales'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function SaleDetailsPage (
  { params }: { params: { saleId: string } }
) {
  const { saleId } = params
  const sale = await getSaleById(saleId ?? '')

  if (sale === null) {
    notFound()
  }

  return (
    <div>{JSON.stringify(sale, null, 2)}</div>
  )
}
