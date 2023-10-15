'use client'

import { EyeClosedIcon, EyeOpenIcon } from '@/components/icons'
import { cn } from '@/utils/cn'
import React, { useState } from 'react'

type InputType = 'text' | 'number' | 'email' | 'tel'

interface InputProps {
  label: string
  name?: string
  placeholder?: string
  className?: string
  required?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  type?: InputType
}

export default function Input ({
  label,
  name,
  placeholder,
  className,
  required,
  onChange,
  type,
  error
}: InputProps) {
  return (
    <>
      <label
        htmlFor={name}
        className='mb-2 block text-sm font-medium text-slate-600 '
      >
        {label}
      </label>
      <div className='relative'>
        <input
          type={type}
          name={name}
          className={cn('block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-gray-900 focus:outline focus:outline-blue-500', className, error !== undefined && 'border-red-500')}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
      </div>
      <p className={cn('mt-2 text-sm text-red-500', error === undefined ? 'hidden' : '')}>{error}</p>
    </>
  )
}

interface InputPasswordProps extends Omit<InputProps, 'type'> {
  showChangeType?: boolean
}

export function InputPassword ({ label, className, error, name, onChange, placeholder, required, showChangeType = true }: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <label
        htmlFor={name}
        className='mb-2 block text-sm font-medium text-slate-600 '
      >
        {label}
      </label>
      <div className='relative'>
        <input
          type={showPassword ? 'text' : 'password'}
          name={name}
          className={cn('block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-gray-900 focus:outline focus:outline-blue-500', className, error !== undefined && 'border-red-500')}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
        {showChangeType && (
          <button
            type='button'
            onClick={togglePasswordVisibility}
            className='absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 focus:outline-none'
          >
            {showPassword ? <EyeClosedIcon className='h-5 w-5'/> : <EyeOpenIcon className='h-5 w-5'/> }
          </button>
        )}
      </div>
      <p className={cn('mt-2 text-sm text-red-500', error === undefined ? 'hidden' : '')}>{error}</p>
    </>
  )
}

interface InputFileProps extends Omit<InputProps, 'type' | 'onChange' | 'placeholder'> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  accept?: string
}

export function InputFile (
  { label, name, error, required, accept }: InputFileProps
) {
  return (
    <>
      <label
        htmlFor={name}
        className='mb-2 block text-sm font-medium text-slate-600 '
      >
        {label}
      </label>
      <input
        type="file"
        accept={accept}
        required={required}
        className={cn(`block w-full cursor-pointer rounded-lg border border-slate-300 text-sm text-slate-500 file:mr-4
        file:cursor-pointer file:rounded-md file:border-0 file:bg-blue-50
        file:px-4 file:py-2 file:text-sm
        file:font-semibold file:text-blue-700
        hover:file:bg-blue-100`, error !== undefined && 'border-red-500')}
      />
      <p className={cn('mt-2 text-sm text-red-500', error === undefined ? 'hidden' : '')}>{error}</p>
    </>
  )
}
