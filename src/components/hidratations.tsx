'use client'

import { useEffect } from 'react'

import useCartStore from '@/store/useCartStore'

export default function Hydrations () {
  useEffect(() => {
    useCartStore.persist.rehydrate()
  }, [])

  return null
}
