import StatusBadge from '@/components/admin/status-badge'
import { ConfigIcon, TrashCanIcon } from '@/components/icons'
import { TD, TR } from '@/components/table'
import { Role } from '@/types/enums'
import { type User } from '@/types/user'

interface UserRowProps {
  user: User
}

const roleText: Record<Role, string> = {
  [Role.USER]: 'Usuario',
  [Role.ADMIN]: 'Administrador'
}

export default function UserRow ({ user }: UserRowProps) {
  const { email, fullname, imgUrl, role, status } = user

  return (
    <TR className='text-slate-500'>
      <TD>
        <div className='flex items-center gap-3'>
          <div className='h-12 w-12'>
            <img className='rounded-full object-cover' src={imgUrl ?? '/default-user.png'} alt={`${fullname} profile`} />
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
