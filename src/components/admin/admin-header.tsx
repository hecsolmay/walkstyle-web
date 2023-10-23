import ModalButton from '@/components/admin/modal-button'
import SearchInput from '@/components/admin/seach-input'
import { cn } from '@/utils/cn'

interface AdminHeaderProps {
  className?: string
  searchPlaceholder?: string
  buttonText?: string
  children?: React.ReactNode
  title: string
  showButton?: boolean
  modalClassName?: string
}

export function AdminHeader (
  { buttonText, children, className, searchPlaceholder, title, modalClassName, showButton = true }: AdminHeaderProps
) {
  return (
    <header className={cn('flex flex-col gap-8 py-3', className)}>
      <h1 className="text-3xl font-bold text-black">{title}</h1>
      <div className="flex flex-col-reverse justify-between gap-3 md:flex md:flex-row md:items-center">
        <SearchInput placeholder={searchPlaceholder} />

        {showButton &&
          (<ModalButton bgClassName={modalClassName} text={buttonText ?? ''} >
            {children}
          </ModalButton>)
        }
      </div>
    </header>
  )
}
