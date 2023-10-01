import { cn } from '@/utils/cn'

interface Props {
  children?: React.ReactNode
  className?: string
}

interface TableProps extends Props {
  containerClassName?: string
}

export function TH ({ children, className }: Props) {
  return (
    <th className={cn('px-6 py-3', className)}>
      {children}
    </th>
  )
}

export function TR ({ children, className }: Props) {
  return (
    <tr className={cn('border-b bg-white', className)}>
      {children}
    </tr>
  )
}

export function TD ({ children, className }: Props) {
  return (
    <td className={cn('px-6 py-4', className)}>
      {children}
    </td>
  )
}

export function THead ({ children, className }: Props) {
  return (
    <thead className={cn('text-xs text-gray-700 uppercase bg-gray-200', className)}>
      {children}
    </thead>
  )
}

export function TBody ({ children, className }: Props) {
  return (
    <tbody className={cn('bg-white', className)}>
      {children}
    </tbody>
  )
}

export function Table ({ children, className, containerClassName }: TableProps) {
  return (
    <div className={cn('relative overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 shadow-md sm:rounded-lg', containerClassName)}>
      <table className={cn('w-full text-left text-sm text-gray-500', className)}>
        {children}
      </table>
    </div>

  )
}
