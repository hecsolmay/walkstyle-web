'use client'

import { PencilSquareIcon, RestoreIcon, TagIcon, TrashCanIcon } from '@/components/icons'
import { Background } from '@/components/modal-background'
import useNextQuery from '@/hooks/useNextQuey'
import { deleteProduct, restoreProduct } from '@/services/products'
import { STATUS } from '@/types/enums'
import { type ProductDetails } from '@/types/product'
import { WarningAlert } from '@/utils/alerts'
import Link from 'next/link'
import { useState } from 'react'
import { FormProductUpdate } from './form'

interface ProductActionsProps {
  product: ProductDetails
}

export default function ProductActions ({ product }: ProductActionsProps) {
  const { router } = useNextQuery()
  const [show, setShow] = useState(false)

  const handleRestore = async () => {
    const isConfirm = await WarningAlert({
      title: `¿Restaurar ${product.name}?`,
      text: 'Al restaurarla sera visible para todos los usuarios',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Restaurar'
    })

    if (!isConfirm) return

    await restoreProduct(product.productId)
    router.refresh()
  }

  if (product.status === STATUS.INACTIVE) {
    return (
      <button className='ml-5' title='Restaurar' onClick={handleRestore}>
        <RestoreIcon />
      </button>
    )
  }

  const handleDelete = async () => {
    const isConfirm = await WarningAlert({
      title: `¿Eliminar ${product.name}?`,
      text: 'Al eliminarla solo sera visible para administradores',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar'
    })

    if (!isConfirm) return

    await deleteProduct(product.productId)
    router.refresh()
  }

  const handleUpdate = () => {
    setShow(true)
  }

  return (
    <>
      {show && (
        <Background className='grid place-content-center' close={() => { setShow(false) }} show={show}>
          <FormProductUpdate closeForm={() => { setShow(false) }} product={product} />
        </Background>
      )}
      <div className='flex items-center gap-6'>
        <Link href={`/admin/products/${product.productId}/sizes`} title='Ver Tallas'>
          <TagIcon />
        </Link>
        <button onClick={handleUpdate}>
          <PencilSquareIcon />
        </button>
        <button onClick={handleDelete}>
          <TrashCanIcon />
        </button>
      </div>
    </>
  )
}
