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
  error?: string
  type?: InputType
  min?: number | string
  register?: any
  defaultValue?: string
}

export default function Input ({
  label,
  name,
  placeholder,
  className,
  required,
  type,
  defaultValue,
  error,
  min,
  register
}: InputProps) {
  return (
    <>
      <label
        htmlFor={name}
        className='mb-2 block text-sm font-medium text-slate-600 '
      >
        {label} {Boolean(required) && <span className='text-red-500'>*</span>}
      </label>
      <div className='relative'>
        <input
          {...register}
          type={type}
          min={min}
          className={cn('block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-gray-900 focus:outline focus:outline-blue-500', className, error !== undefined && 'border-red-500')}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
        />
      </div>
      <p className={cn('mt-2 text-sm text-red-500', error === undefined ? 'hidden' : '')}>{error}</p>
    </>
  )
}

interface InputPasswordProps extends Omit<InputProps, 'type'> {
  showChangeType?: boolean
}

export function InputPassword (
  { label, className, error, name, register, placeholder, required, showChangeType = true }: InputPasswordProps) {
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
        {label} {Boolean(required) && <span className='text-red-500'>*</span>}
      </label>
      <div className='relative'>
        <input
          type={showPassword ? 'text' : 'password'}
          {...register}
          className={cn('block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-gray-900 focus:outline focus:outline-blue-500', className, error !== undefined && 'border-red-500')}
          placeholder={placeholder}
          required={required}
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
  multiple?: boolean
}

export function InputFile (
  { label, name, error, required, className, accept, register, multiple = false }: InputFileProps
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
        {...register}
        accept={accept}
        required={required}
        multiple={multiple}
        className={cn(`block w-full cursor-pointer rounded-lg border border-slate-300 text-sm text-slate-500 file:mr-4
        file:cursor-pointer file:rounded-md file:border-0 file:bg-blue-50
        file:px-4 file:py-2 file:text-sm
        file:font-semibold file:text-blue-700
        hover:file:bg-blue-100`, error !== undefined && 'border-red-500', className)}
      />
      <p className={cn('mt-2 text-sm text-red-500', error === undefined ? 'hidden' : '')}>{error}</p>
    </>
  )
}

interface InputTextTareaProps extends Omit <InputProps, 'type'> {
  rows?: number
  resize?: boolean
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export function InputTextarea ({
  label,
  name,
  placeholder,
  required,
  register,
  rows = 3,
  onChange,
  resize = false,
  error
}: InputTextTareaProps) {
  return (
    <>
      <label
        htmlFor={name}
        className='mb-2 block text-sm font-medium text-slate-600 '
      >
        {label}
      </label>
      <textarea
        {...register}
        rows={rows}
        onChange={onChange}
        className={cn('block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-gray-900 focus:outline focus:outline-blue-500', !resize && 'resize-none', error !== undefined && 'border-red-500')}
        placeholder={placeholder}
        required={required}
      />
      <p className={cn('mt-2 text-sm text-red-500', error === undefined ? 'hidden' : '')}>{error}</p>

    </>
  )
}
