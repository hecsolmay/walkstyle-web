import { AdminTable } from '@/components/admin/admin-table'
import { TD, TR } from '@/components/table'
import { type UserDetails } from '@/types/user'
import { getRelativeTime } from '@/utils/dates'
import { getRoleText } from '@/utils/get'

interface UsersTablesProps {
  users: UserDetails[]
}

export default function UsersTables (
  { users }: UsersTablesProps
) {
  return (
    <div className='rounded-sm bg-white px-4 py-5 shadow-lg'>
      <div className="flex flex-col gap-4">
        <h3>Ultimos Usuarios </h3>

        <AdminTable headers={['Imagen de perfil', 'Email', 'Rol', 'Creado']}>
          {users.map(user => (
            <TR key={user.userId}>
              <TD className='ml-4'>
                <img
                  className='h-10 w-10 rounded-full'
                  src={user.profileUrl ?? '/default-user.png'}
                  alt={`Imagen de perfil de ${user.fullname}`}
                />
              </TD>
              <TD>{user.email.toLowerCase()}</TD>
              <TD>{getRoleText(user.role)}</TD>
              <TD>{getRelativeTime(user.createdAt)}</TD>
            </TR>
          ))}

        </AdminTable>

      </div>
    </div>
  )
}
