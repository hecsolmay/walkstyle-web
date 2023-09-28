'use client'

import { SearchIcon, XMarkIcon } from '@/components/icons'
import UseInput from '@/hooks/useInput'
import useNextQuery from '@/hooks/useNextQuey'
import { cn } from '@/utils/cn'

export default function SearchBarInput () {
  const { clear, onChange, value: searchWord } = UseInput('')
  const { router } = useNextQuery()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    router.push(`/search?q=${searchWord}`)
  }

  return (
    <form onSubmit={handleSubmit} className='relative hidden md:block'>
      <button className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1.5 text-teal-500">
        <SearchIcon/>
      </button>
      <input onChange={onChange} value={searchWord} type="text" name='search' className="block w-52 rounded-lg border border-gray-300 bg-gray-50 p-1.5 px-8 text-sm text-gray-900 focus:outline focus:outline-teal-500" placeholder='Search...' />

      {searchWord.length > 0 && (
        <button onClick={clear} type='button' className="absolute inset-y-0 right-2 flex items-center pl-1.5 text-slate-400">
          <XMarkIcon />
        </button>
      )}

    </form>
  )
}

interface SearchMobileProps {
  showSearch: boolean
  closeSearch: () => void
}

export function SearchMobileInput ({ showSearch, closeSearch }: SearchMobileProps) {
  const { clear, onChange, value: searchWord } = UseInput('')
  const { router } = useNextQuery()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleClose()
    router.push(`/search?q=${searchWord}`)
  }

  const handleClose = () => {
    closeSearch()
    clear()
  }

  return (
    <form onSubmit={handleSubmit} className={cn('relative transition-all duration-200 ease-in-out ', !showSearch && 'hidden')}>
      <button className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1.5 text-teal-500">
        <SearchIcon/>
      </button>

      <button type='button' onClick={handleClose} className="absolute inset-y-0 right-2 flex items-center pl-1.5 text-slate-400">
        <XMarkIcon />
      </button>
      <input type="text" value={searchWord} onChange={onChange} className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-1.5 pl-8 text-sm text-gray-900 focus:outline focus:outline-teal-500" placeholder='Search...' />
    </form>
  )
}
