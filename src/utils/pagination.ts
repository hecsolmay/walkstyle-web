import { MAX_PAGINATION_ITEMS } from '@/contants'

interface CreatePagination {
  currentPage?: number
  totalPages?: number
}

export function createPaginationArray ({ currentPage = 1, totalPages = 1 }: CreatePagination = {}) {
  if (totalPages <= MAX_PAGINATION_ITEMS) {
    // Si totalPages es menor o igual a 5, muestra todos los números del 1 al      totalPages.
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  // Calcula el rango inicial y final del array resultante
  const startPage = Math.min(
    Math.max(currentPage - Math.floor(MAX_PAGINATION_ITEMS / 2), 1),
    totalPages - MAX_PAGINATION_ITEMS + 1
  )

  // Crea un array con números en el rango calculado
  return Array.from({ length: MAX_PAGINATION_ITEMS }, (_, index) => startPage + index)
}
