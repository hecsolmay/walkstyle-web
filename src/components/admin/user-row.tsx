import StatusBadge from '@/components/admin/status-badge'
import { ConfigIcon, TrashCanIcon } from '@/components/icons'
import { TD, TR } from '@/components/table'
import { Role } from '@/types/enums'
import { type UserDetails } from '@/types/user'

interface UserRowProps {
  user: UserDetails
}

const roleText: Record<Role, string> = {
  [Role.USER]: 'Usuario',
  [Role.ADMIN]: 'Administrador'
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
        <div className='flex items-center gap-6'>
          <button>
            <ConfigIcon />
          </button>
          <button>
            <TrashCanIcon />
          </button>
        </div>
      </TD>
    </TR>
  )
}
