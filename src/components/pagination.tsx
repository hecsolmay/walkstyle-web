import React from 'react'
import { ChevronDoubleLeftIcon, ChevronLeftIcon } from './icons'
import { cn } from '@/utils/cn'

export function Pagination () {
  return (
    <nav aria-label='Page navigation'>
      <ul className='mb-4 flex gap-1.5'>
        <li >
          {/* <a href='#' className={'block py-2 text-black hover:opacity-90'}>
            <ChevronDoubleLeftIcon />
          </a> */}
          <div className='cursor-default py-2 text-slate-400'>
            <ChevronDoubleLeftIcon />
          </div>
        </li>
        <li >
          {/* <a href='#' className={'block py-2 text-black hover:opacity-90'}>
            <ChevronLeftIcon />
          </a> */}
          <div className='cursor-default py-2 text-slate-400'>
            <ChevronLeftIcon />
          </div>
        </li>

        {Array(5).fill(0).map((_, index) => (
          <li key={index} >
            <a href='#' className={cn('block hover:bg-slate-200 p-2 text-black hover:opacity-90', index === 0 && 'text-white bg-black hover:bg-black')}>{index + 1}</a>
          </li>
        ))}

        <li >
          <a href='#' className={'block py-2 text-black hover:opacity-90'}>
            <div className='rotate-180'>
              <ChevronLeftIcon />
            </div>
          </a>
        </li>

        <li >
          <a href='#' className={'block py-2 text-black hover:opacity-90'}>
            <div className='rotate-180'>
              <ChevronDoubleLeftIcon />
            </div>
          </a>
        </li>

      </ul>
    </nav>
  )
}
