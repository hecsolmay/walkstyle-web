import ModalButton from '@/components/admin/modal-button'
import { SearchIcon } from '@/components/icons'
import { cn } from '@/utils/cn'

interface AdminHeaderProps {
  className?: string
  searchPlaceholder?: string
  buttonText: string
  children?: React.ReactNode
  title: string
}

export function AdminHeader (
  { buttonText, children, className, searchPlaceholder, title }: AdminHeaderProps
) {
  return (
    <header className={cn('flex flex-col gap-8 py-3', className)}>
      <h1 className="text-3xl font-bold text-black">{title}</h1>
      <div className="flex flex-col-reverse justify-between gap-3 md:flex md:flex-row md:items-center">
        <div className="relative flex">
          <input
            name='search'
            className={cn('block w-full rounded-lg border border-slate-300 bg-white p-1.5 h-9 text-sm text-gray-900 focus:outline focus:outline-slate-400 pr-10 pl-3')}
            placeholder={searchPlaceholder}
          />
          <div className='absolute right-2 top-1.5 text-slate-400'>
            <SearchIcon />
          </div>
        </div>

        <ModalButton text={buttonText} >
          {children}
        </ModalButton>
      </div>
    </header>
  )
}
