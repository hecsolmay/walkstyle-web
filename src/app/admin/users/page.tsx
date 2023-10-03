import { AdminHeader } from '@/components/admin/admin-header'
import { AdminTable } from '@/components/admin/admin-table'
import PaginationSection from '@/components/admin/pagination-section'
import UserRow from '@/components/admin/user-row'
import { Role, Status } from '@/types/enums'
import { type User } from '@/types/user'

const user: User = {
  userId: '1',
  name: 'Juan',
  lastname: 'Perez',
  fullname: 'Juan Perez',
  email: 'Lrj7X@example.com',
  role: Role.USER,
  status: Status.ACTIVE,
  createdAt: new Date(),
  imgUrl: null
}

const users = Array(15).fill(0).map((_, index) => ({
  ...user,
  userId: crypto.randomUUID(),
  imgUrl: index % 2 === 0 ? null : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
}))

export default function UsersPage () {
  return (
    <div className='flex flex-col gap-8'>
      <AdminHeader buttonText='Add User' searchPlaceholder='Search...' title='All Users'/>
      <AdminTable headers={['Name', 'Email', 'Role', 'Status', 'Actions']} >
        {users.map(user =>
          <UserRow key={user.userId} user={user}/>
        )}
      </AdminTable>
      <PaginationSection />
    </div>

  )
}
