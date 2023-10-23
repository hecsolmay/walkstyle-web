'use client'

import { SearchIcon, XMarkIcon } from '@/components/icons'
import { useDebounce } from '@/hooks/useDebounce'
import UseInput from '@/hooks/useInput'
import useNextQuery from '@/hooks/useNextQuey'
import { cn } from '@/utils/cn'
import { useEffect } from 'react'

interface SearchInputProps {
  className?: string
  placeholder?: string
}

export default function SearchInput ({ className, placeholder }: SearchInputProps) {
  const { clear, onChange, value: searchWord } = UseInput('')
  const debouncedValue = useDebounce(searchWord, 300)
  const { router, pathname } = useNextQuery()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (searchWord.length === 0) {
      router.push(pathname)
      return
    }

    router.push(`?q=${searchWord}`)
    clear()
  }

  useEffect(() => {
    if (debouncedValue.length === 0) {
      router.push(pathname)
      return
    }
    router.push(`?q=${debouncedValue}`)
  }, [debouncedValue])

  return (
    <form onSubmit={handleSubmit} className="relative flex">
      <input
        name='search'
        className={cn('block h-9 w-full rounded-lg border border-slate-300 bg-white p-1.5 pl-3 pr-10 text-sm text-gray-900 focus:outline focus:outline-slate-400', className)}
        placeholder={placeholder}
        onChange={onChange}
        value={searchWord}
      />
      <div className='absolute right-2 top-1.5 text-slate-400'>
        {
          searchWord.length === 0
            ? <SearchIcon />
            : <button onClick={clear} type='button' className="flex items-center pl-1.5 text-slate-400">
              <XMarkIcon />
            </button>
        }
      </div>
    </form>
  )
}
