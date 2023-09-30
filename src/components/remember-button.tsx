'use client'

import { useState } from 'react'

interface RememberButtonProps {
  label: string
  classname?: string
  onChange?: (isChecked: boolean) => void
}

export default function RememberButton ({
  label,
  onChange
}: RememberButtonProps) {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    const newCheckedValue = !isChecked
    setIsChecked(newCheckedValue)

    if (onChange != null) {
      onChange(newCheckedValue)
    }
  }

  return (
    <div>
      <label
        className='mb-2 block text-sm font-medium text-slate-600'
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='mr-2'
        />
        {label}
      </label>
    </div>
  )
}
