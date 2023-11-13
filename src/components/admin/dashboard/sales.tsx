import { AdminTable } from '@/components/admin/admin-table'
import { EyeOpenIcon } from '@/components/icons'
import { TD, TR } from '@/components/table'
import { type SaleDetails } from '@/types/sale'
import { getRelativeTime } from '@/utils/dates'
import Link from 'next/link'

interface SalesTableProps {
  sales: SaleDetails[]
}

export default function SalesTable (
  { sales }: SalesTableProps
) {
  return (
    <div className='rounded-sm bg-white px-4 py-5 shadow-lg'>
      <div className="flex flex-col gap-4">
        <h3>Ultimas ganancias</h3>

        <AdminTable headers={['total', 'productos', 'unidades compradas', 'usuario', 'creada', 'detalles']}>
          {sales.map(sale => (
            <TR key={sale.saleId}>
              <TD>{sale.totalPaid.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</TD>
              <TD>{sale.products.length}</TD>
              <TD>{sale.products.reduce((acc, product) => acc + product.quantity, 0)}</TD>
              <TD>{sale.user.fullname}</TD>
              <TD>{getRelativeTime(sale.createdAt)}</TD>
              <TD className='grid w-full place-content-center'>
                <Link href={`/admin/sales/${sale.saleId}`}><EyeOpenIcon />
                </Link>
              </TD>
            </TR>
          ))}
        </AdminTable>
      </div>
    </div>
  )
}
