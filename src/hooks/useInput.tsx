'use client'

import { useState } from 'react'

export default function UseInput (initialValue: string = '') {
  const [value, setValue] = useState(initialValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const clearValue = () => {
    setValue('')
  }

  return {
    value,
    onChange: handleChange,
    clear: clearValue
  }
}
