import React from 'react'

export function Pagination ({
  currentPage,
  totalPages,
  onPageChange
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handleFirstPage = () => {
    onPageChange(1)
  }

  const handleLastPage = () => {
    onPageChange(totalPages)
  }

  // Calcular los números de página a mostrar
  const maxPagesToShow = 5
  const pagesToShow = []

  // Determinar la primera página a mostrar
  let startPage = currentPage - Math.floor(maxPagesToShow / 2)
  if (startPage < 1) {
    startPage = 1
  }

  // Determinar la última página a mostrar
  let endPage = startPage + maxPagesToShow - 1
  if (endPage > totalPages) {
    endPage = totalPages
  }

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = endPage - maxPagesToShow + 1
  }

  for (let i = startPage; i <= endPage; i++) {
    pagesToShow.push(i)
  }

  return (
    <div className='p-7'>
      <nav aria-label='Page navigation'>
        <ul className='mb-4 flex items-center justify-center space-x-2 md:justify-end'>
          <li>
            <button
              className={`h-8 w-8 rounded-full bg-transparent p-2 text-center ${
                currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
              }`}
              onClick={handleFirstPage}
              disabled={currentPage === 1}
            >
              {'<<'} {/* Botón para ir a la primera página */}
            </button>
          </li>
          <li>
            <button
              className={`h-8 w-8 rounded-full bg-transparent p-2 text-center ${
                currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
              }`}
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              {'<'} {/* Botón Previous */}
            </button>
          </li>
          {pagesToShow.map((page) => (
            <li key={page}>
              <button
                className={`h-8 w-8 rounded p-2 text-center ${
                  currentPage === page
                    ? 'bg-black text-white'
                    : 'bg-transparent'
                }`}
                onClick={() => {
                  onPageChange(page)
                }}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button
              className={`h-8 w-8 rounded-full bg-transparent p-2 text-center ${
                currentPage === totalPages
                  ? 'cursor-not-allowed opacity-50'
                  : ''
              }`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              {'>'} {/* Botón Next */}
            </button>
          </li>
          <li>
            <button
              className={`h-8 w-8 rounded-full bg-transparent p-2 text-center ${
                currentPage === totalPages
                  ? 'cursor-not-allowed opacity-50'
                  : ''
              }`}
              onClick={handleLastPage}
              disabled={currentPage === totalPages}
            >
              {'>>'} {/* Botón para ir a la última página */}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
