import { AdminHeader } from '@/components/admin/admin-header'
import { AdminTable } from '@/components/admin/admin-table'
import PaginationSection from '@/components/admin/pagination-section'
import UserRow from '@/components/admin/user-row'
import { DEFAULT_INFO } from '@/contants'
import { ROLE, STATUS } from '@/types/enums'
import { type UserDetails } from '@/types/user'

const user: UserDetails = {
  userId: '1',
  name: 'Juan',
  lastname: 'Perez',
  fullname: 'Juan Perez',
  email: 'Lrj7X@example.com',
  role: ROLE.USER,
  status: STATUS.ACTIVE,
  createdAt: new Date(),
  updatedAt: new Date(),
  profileUrl: null,
  rememberToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5ZDljODA2My1jZjJlLTQ1M2UtODcxOS1kZmM5N2QwNjQ2YTciLCJpYXQiOjE2OTY5NTc4MTAsImV4cCI6MTcyODQ5MzgxMH0.F0zQMX26ADiVe0ocB4FimwMwzmCjyrUX_Wlk_B_0y8g'
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
      <PaginationSection info={DEFAULT_INFO}/>
    </div>

  )
}
