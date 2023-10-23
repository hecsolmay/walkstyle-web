import { Pagination } from '@/components/pagination'
import { type Info } from '@/types/response'
import { cn } from '@/utils/cn'

interface PaginationSectionProps {
  className?: string
  info: Info
}

export default function PaginationSection ({ className, info }: PaginationSectionProps) {
  const { currentPage, limit, items } = info

  const starts = (currentPage - 1) * limit + 1
  const end = Math.min(currentPage * limit, items)

  return (
    <div className={cn('mb-3 flex md:items-center flex-col gap-5 px-3 md:flex-row md:justify-between md:gap-0', className)}>
      <p className='text-slate-500'>Mostrando <span className='text-slate-800'>{starts}-{end}</span> de <span className='text-slate-800'>{items}</span></p>

      <div className='grid place-items-center'>
        <Pagination info={info} className='m-0'/>
      </div>
    </div>
  )
}
