'use client'

import { ChevronDoubleLeftIcon, ChevronLeftIcon } from '@/components/icons'
import { MAX_PAGINATION_ITEMS } from '@/contants'
import useNextQuery from '@/hooks/useNextQuey'
import { type Info } from '@/types/response'
import { cn } from '@/utils/cn'
import { createPaginationArray } from '@/utils/pagination'
import Link from 'next/link'

interface PaginationProps {
  className?: string
  info: Info
}

export function Pagination ({ className, info }: PaginationProps) {
  const { createQueryString, searchParams } = useNextQuery()

  const page = searchParams.get('page') ?? '1'
  const pageNumber = isNaN(parseInt(page)) ? 1 : parseInt(page)

  const { currentPage, pages, hasPrev, hasNext } = info

  const nextSkipNumber = MAX_PAGINATION_ITEMS + currentPage
  const hasSkipPage = nextSkipNumber <= pages

  const prevSkipNumber = currentPage - MAX_PAGINATION_ITEMS
  const hasPrevSkipPage = prevSkipNumber > 0

  const nextPageNumber = currentPage + 1
  const prevPageNumber = currentPage - 1

  const pageNumbers = createPaginationArray({ currentPage, totalPages: pages })

  return (
    <nav aria-label='Page navigation'>
      <ul className={cn('mb-4 flex gap-1.5', className)}>

        <li >
          <PrevLinkPage doubleIcon prevPage={prevSkipNumber} hasPrev={hasPrevSkipPage} />
        </li>

        <li >
          <PrevLinkPage prevPage={prevPageNumber} hasPrev={hasPrev} />
        </li>

        {pageNumbers.map((page) => (
          <li key={page} >
            <Link href={`?${createQueryString('page', page.toString())}`} className={cn('block hover:bg-slate-200 p-2 text-black hover:opacity-90', page === pageNumber && 'text-white bg-black hover:bg-black')}>{page}</Link>
          </li>
        ))}

        <li >
          <NextLinkPage nextPage={nextPageNumber} hasNext={hasNext}/>
        </li>

        <li >
          <NextLinkPage nextPage={nextSkipNumber} hasNext={hasSkipPage} doubleIcon/>
        </li>

      </ul>
    </nav>
  )
}

interface PrevLinkPageProps {
  hasPrev?: boolean
  prevPage: number
  doubleIcon?: boolean
}

function PrevLinkPage ({ prevPage, doubleIcon = false, hasPrev = false }: PrevLinkPageProps) {
  if (!hasPrev) {
    return (
      <div className='cursor-default py-2 text-slate-400'>
        {doubleIcon ? <ChevronDoubleLeftIcon /> : <ChevronLeftIcon />}
      </div>
    )
  }

  const { createQueryString } = useNextQuery()

  return (
    <Link href={`?${createQueryString('page', prevPage.toString())}`} className={'block py-2 text-black hover:opacity-90'}>
      {doubleIcon ? <ChevronDoubleLeftIcon /> : <ChevronLeftIcon />}
    </Link>

  )
}

interface NextLinkPageProps {
  hasNext?: boolean
  nextPage: number
  doubleIcon?: boolean
}

function NextLinkPage ({ nextPage, doubleIcon = false, hasNext = false }: NextLinkPageProps) {
  if (!hasNext) {
    return (
      <div className='cursor-default py-2 text-slate-400'>
        <div className='rotate-180'>
          {doubleIcon ? <ChevronDoubleLeftIcon /> : <ChevronLeftIcon />}
        </div>
      </div>
    )
  }

  const { createQueryString } = useNextQuery()

  return (
    <Link href={`?${createQueryString('page', nextPage.toString())}`} className={'block py-2 text-black hover:opacity-90'}>
      <div className='rotate-180'>
        {doubleIcon ? <ChevronDoubleLeftIcon /> : <ChevronLeftIcon />}
      </div>
    </Link>

  )
}
