'use client'

import { EyeClosedIcon, EyeOpenIcon } from '@/components/icons'
import { cn } from '@/utils/cn'
import React, { useState } from 'react'

interface InputProps {
  label: string
  name?: string
  placeholder?: string
  className?: string
  required?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}

export default function Input ({
  label,
  name,
  placeholder,
  className,
  required,
  onChange,
  type = 'text'
}: InputProps) {
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
          type={showPassword ? 'text' : type}
          name={name}
          className={cn('block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-gray-900 focus:outline focus:outline-blue-500', className)}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
        {type === 'password' && (
          <button
            type='button'
            onClick={togglePasswordVisibility}
            className='absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 focus:outline-none'
          >
            {showPassword ? <EyeClosedIcon className='h-5 w-5'/> : <EyeOpenIcon className='h-5 w-5'/> }
          </button>
        )}
      </div>
    </>
  )
}
