import { AdminTable } from '@/components/admin/admin-table'
import SizeCreateButton from '@/components/admin/sizes/modal-button'
import SizeRow from '@/components/admin/sizes/size-row'
import { getSizeByProduct } from '@/services/size'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function ProductSizePage (
  { params }: { params: { productId: string } }
) {
  const sizes = await getSizeByProduct(params.productId)

  if (sizes === undefined) {
    notFound()
  }

  return (
    <div className='flex flex-col gap-8'>
      <header className='flex flex-col gap-4 py-3'>
        <h1 className="text-3xl font-bold text-black">Tallas</h1>
        <SizeCreateButton />
      </header>
      <AdminTable headers={['Talla', 'Precio Extra', 'Stock', 'Status', 'Acciones']}>
        {sizes.map(size => (
          <SizeRow key={size.sizeId} size={size}/>
        ))}
      </AdminTable>
    </div>
  )
}
