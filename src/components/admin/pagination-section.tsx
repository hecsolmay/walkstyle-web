import { Pagination } from '@/components/pagination'
import { cn } from '@/utils/cn'

interface PaginationSectionProps {
  className?: string
}

export default function PaginationSection ({ className }: PaginationSectionProps) {
  return (
    <div className={cn('mb-3 flex flex-col gap-5 px-3 md:flex-row md:justify-between md:gap-0', className)}>
      <p className='text-slate-500'>Showing <span className='text-slate-800'>1-15</span> of <span className='text-slate-800'>75</span></p>

      <div className='grid place-items-center'>
        <Pagination />
      </div>
    </div>
  )
}
