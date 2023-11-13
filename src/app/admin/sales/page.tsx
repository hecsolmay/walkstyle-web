import { AdminHeader } from '@/components/admin/admin-header'
import { AdminTable } from '@/components/admin/admin-table'
import PaginationSection from '@/components/admin/pagination-section'
import SalesRow from '@/components/admin/sales-row'
import { getAllSales } from '@/services/sales'
import { type ServerProps } from '@/types'

export const dynamic = 'force-dynamic'

export default async function SalesPage (
  { searchParams }: ServerProps
) {
  const response = await getAllSales(searchParams)
  const { sales, info } = response

  return (
    <div className='flex flex-col gap-8'>
      <AdminHeader showButton={false} searchPlaceholder='Buscar...' title='Ventas'/>
      <AdminTable headers={['Usuario', 'Total Pagado', 'Productos Comprados', 'Total Comprado', 'Fecha', 'Detalles']} >
        {sales.map(sale =>
          <SalesRow key={sale.saleId} sale={sale}/>
        )}
      </AdminTable>
      <PaginationSection info={info}/>
    </div>
  )
}
