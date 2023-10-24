import StatusBadge from '@/components/admin/status-badge'
import { TD, TR } from '@/components/table'
import { ROLE } from '@/types/enums'
import { type UserDetails } from '@/types/user'
import UserActions from './actions'

interface UserRowProps {
  user: UserDetails
}

const roleText: Record<ROLE, string> = {
  [ROLE.USER]: 'Usuario',
  [ROLE.ADMIN]: 'Administrador'
}

export default function UserRow ({ user }: UserRowProps) {
  const { email, fullname, profileUrl, role, status } = user

  return (
    <TR className='text-slate-500'>
      <TD>
        <div className='flex items-center gap-3'>
          <div className='h-12 w-12'>
            <img className='rounded-full object-cover' src={profileUrl ?? '/default-user.png'} alt={`imagen de perfil de ${fullname} `} />
          </div>
          {fullname}
        </div>
      </TD>
      <TD>
        {email}
      </TD>

      <TD>
        {roleText[role]}
      </TD>
      <TD>
        <StatusBadge status={status}/>
      </TD>

      <TD className=' text-black'>
        <UserActions user={user} />
      </TD>
    </TR>
  )
}
