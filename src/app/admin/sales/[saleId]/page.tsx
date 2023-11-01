import { AdminTable } from '@/components/admin/admin-table'
import SaleRow from '@/components/admin/sales/sale-row'
import { getSaleById } from '@/services/sales'
import { getFormatedDate } from '@/utils/dates'
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

  const date = getFormatedDate(sale.createdAt)

  return (
    <div className='flex flex-col gap-8'>
      <header className='flex flex-col gap-8 py-3'>
        <h1 className="text-3xl font-bold text-black">Venta {date}</h1>
      </header>
      <AdminTable headers={['Imagen', 'Nombre', 'Talla', 'Cantidad', 'Precio unitario', 'Precio total']} >
        {sale.products.map(product => (
          <SaleRow
            key={product.saleProductId}
            productSale={product} />
        ))}
      </AdminTable>
    </div>
  )
}
