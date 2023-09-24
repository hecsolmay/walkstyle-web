import { cn } from '@/utils/cn'

interface InputProps {
  label: string
  name?: string
  placeholder?: string
  className?: string
  required?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input ({
  label,
  name,
  placeholder,
  className,
  required,
  onChange
}: InputProps) {
  return (
    <>
      <label
        htmlFor={name}
        className='mb-2 block text-sm font-medium text-slate-600 '
      >
        {label}
      </label>
      <input
        type='text'
        name={name}
        className={cn('block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-gray-900 focus:outline focus:outline-blue-500 ', className)}
        placeholder={placeholder}
        required={required}
      />
    </>
  )
}
