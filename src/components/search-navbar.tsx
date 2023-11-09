'use client'

import { SearchIcon, XMarkIcon } from '@/components/icons'
import { useDebounce } from '@/hooks/useDebounce'
import UseInput from '@/hooks/useInput'
import useNextQuery from '@/hooks/useNextQuey'
import { useSearchStore } from '@/store/useSearchStore'
import { cn } from '@/utils/cn'
import { useEffect } from 'react'

export default function SearchBarInput () {
  const { clear, onChange, value: searchWord } = UseInput('')
  const debouncedValue = useDebounce(searchWord, 500)
  const setSearch = useSearchStore((state) => state.setSearch)
  const setIsSearching = useSearchStore((state) => state.setIsSearching)
  const { router } = useNextQuery()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (searchWord.length === 0) {
      router.push('/search')
      return
    }

    router.push(`/search?q=${searchWord}`)
    clear()
  }

  useEffect(() => {
    setSearch(debouncedValue.trim())
    setIsSearching(searchWord.trim().length > 0)
  }, [debouncedValue])

  return (
    <form onSubmit={handleSubmit} className='relative hidden w-full md:block'>
      <button className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1.5 text-teal-500">
        <SearchIcon/>
      </button>
      <input onChange={onChange} value={searchWord} type="text" name='search' className="block w-52 rounded-lg border border-gray-300 bg-gray-50 p-1.5 px-8 text-sm text-gray-900 focus:outline focus:outline-teal-500" placeholder='Buscar...' />

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
  const debouncedValue = useDebounce(searchWord, 500)
  const setSearch = useSearchStore((state) => state.setSearch)
  const setIsSearching = useSearchStore((state) => state.setIsSearching)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleClose()
    router.push(`/search?q=${searchWord}`)
  }

  const handleClose = () => {
    closeSearch()
    clear()
  }

  useEffect(() => {
    setSearch(debouncedValue.trim())
    setIsSearching(searchWord.trim().length > 0)
  }, [debouncedValue])

  return (
    <form onSubmit={handleSubmit} className={cn('w-full ml-4 mr-1 relative transition-all duration-200 ease-in-out ', !showSearch && 'hidden')}>
      <button className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1.5 text-teal-500">
        <SearchIcon/>
      </button>

      <button type='button' onClick={handleClose} className="absolute inset-y-0 right-2 flex items-center pl-1.5 text-slate-400">
        <XMarkIcon />
      </button>
      <input type="text" value={searchWord} onChange={onChange} className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-1.5 pl-8 text-sm text-gray-900 focus:outline focus:outline-teal-500" placeholder='Buscar...' />
    </form>
  )
}
