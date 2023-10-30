import { AdminHeader } from '@/components/admin/admin-header'
import { AdminTable } from '@/components/admin/admin-table'
import PaginationSection from '@/components/admin/pagination-section'
import UserRow from '@/components/admin/users/user-row'
import { getAdminUsers } from '@/services/users'
import { type ServerProps } from '@/types'

export const dynamic = 'force-dynamic'

export default async function UsersPage ({ searchParams }: ServerProps) {
  const { info, users } = await getAdminUsers(searchParams)

  return (
    <div className='flex flex-col gap-8'>
      <AdminHeader showButton={false} searchPlaceholder='Buscar...' title='Usuarios'/>
      <AdminTable headers={['Name', 'Email', 'Role', 'Status', 'Actions']} >
        {users.map(user =>
          <UserRow key={user.userId} user={user}/>
        )}
      </AdminTable>
      <PaginationSection info={info}/>
    </div>

  )
}
