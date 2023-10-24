import { AdminHeader } from '@/components/admin/admin-header'
import { AdminTable } from '@/components/admin/admin-table'
import PaginationSection from '@/components/admin/pagination-section'
import SalesRow from '@/components/admin/sales-row'
import { DEFAULT_INFO } from '@/contants'
import { Role } from '@/types/enums'
import { type Sale } from '@/types/sale'

const sale: Sale = {
  saleId: '1',
  date: new Date(),
  total: 100,
  quantity: 1,
  user: {
    userId: '1',
    name: 'Juan',
    fullname: 'Juan Perez',
    email: 'Lrj7X@example.com',
    lastname: 'Perez',
    profileUrl: null,
    rememberToken: '',
    role: Role.USER
  }
}

const sales = Array(15).fill(0).map((_, index) => ({
  ...sale,
  saleId: crypto.randomUUID(),
  quantity: Math.floor(Math.random() * 50) + 1,
  total: Math.floor(Math.random() * 2000)
}))

export default function SalesPage () {
  return (
    <div className='flex flex-col gap-8'>
      <AdminHeader showButton={false} searchPlaceholder='Search...' title='All Sales'/>
      <AdminTable headers={['Usuario', 'Total Pagado', 'Cantidad', 'Fecha', 'Detalles']} >
        {sales.map(sale =>
          <SalesRow key={sale.saleId} sale={sale}/>
        )}
      </AdminTable>
      <PaginationSection info={DEFAULT_INFO}/>
    </div>
  )
}
