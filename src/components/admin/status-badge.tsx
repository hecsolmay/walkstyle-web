import { STATUS } from '@/types/enums'
import { cn } from '@/utils/cn'

interface StatusBadgeProps {
  className?: string
  status: STATUS
}

export default function StatusBadge ({ status, className }: StatusBadgeProps) {
  const defaultStyles = 'rounded-full bg-slate-100 px-3 py-1 text-xs font-medium'

  if (status === STATUS.INACTIVE) {
    return (
      <span className={cn(defaultStyles, 'bg-red-200 text-red-800 ', className)}>
        Eliminado
      </span>
    )
  }

  return (
    <span className={cn(defaultStyles, 'bg-green-200 text-green-800 ', className)}>
      Activo
    </span>
  )
}
