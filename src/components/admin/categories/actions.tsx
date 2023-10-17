'use client'

import { PencilSquareIcon, TrashCanIcon } from "@/components/icons";
import useNextQuery from "@/hooks/useNextQuey";
import { deleteCategory } from "@/services/categories";
import { type CategoryDetails } from "@/types/category";
import { WarningAlert } from "@/utils/alerts";

interface CategoryActionsProps {
  category: CategoryDetails
}

export default function CategoryActions ({ category }:CategoryActionsProps) {
  const {router} = useNextQuery()
  
  const handleDelete = async () => {
    const isConfirmed = await WarningAlert()
    console.log(isConfirmed)
    if (!isConfirmed) return 

    await deleteCategory(category.categoryId)
    router.refresh()
  }
  
  return (
    <>
    <button>
      <PencilSquareIcon />
    </button>
    <button onClick={handleDelete}>
      <TrashCanIcon />
    </button>
  </>
  )
}