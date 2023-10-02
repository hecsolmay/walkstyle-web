'use client'

import { ChevronDoubleLeftIcon, ChevronLeftIcon } from '@/components/icons'
import useNextQuery from '@/hooks/useNextQuey'
import { cn } from '@/utils/cn'
import Link from 'next/link'

interface PaginationProps {
  className?: string
}

export function Pagination ({ className }: PaginationProps) {
  const { createQueryString, searchParams } = useNextQuery()
  const page = searchParams.get('page') ?? '1'
  const pageNumber = isNaN(parseInt(page)) ? 1 : parseInt(page)

  return (
    <nav aria-label='Page navigation'>
      <ul className={cn('mb-4 flex gap-1.5', className)}>
        <li >
          {/* <Link href='#' className={'block py-2 text-black hover:opacity-90'}>
            <ChevronDoubleLeftIcon />
          </Link> */}
          <div className='cursor-default py-2 text-slate-400'>
            <ChevronDoubleLeftIcon />
          </div>
        </li>
        <li >
          {/* <Link href='#' className={'block py-2 text-black hover:opacity-90'}>
            <ChevronLeftIcon />
          </Link> */}
          <div className='cursor-default py-2 text-slate-400'>
            <ChevronLeftIcon />
          </div>
        </li>

        {Array(5).fill(0).map((_, index) => (
          <li key={index} >
            <Link href={`?${createQueryString('page', (index + 1).toString())}`} className={cn('block hover:bg-slate-200 p-2 text-black hover:opacity-90', index + 1 === pageNumber && 'text-white bg-black hover:bg-black')}>{index + 1}</Link>
          </li>
        ))}

        <li >
          <Link href='#' className={'block py-2 text-black hover:opacity-90'}>
            <div className='rotate-180'>
              <ChevronLeftIcon />
            </div>
          </Link>
        </li>

        <li >
          <Link href='#' className={'block py-2 text-black hover:opacity-90'}>
            <div className='rotate-180'>
              <ChevronDoubleLeftIcon />
            </div>
          </Link>
        </li>

      </ul>
    </nav>
  )
}
