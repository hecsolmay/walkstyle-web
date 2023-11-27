import { type CarruselItem } from '@/types'
import { GENDER } from '@/types/enums'

export const VALID_IMAGE_EXTENSION = ['jpg', 'jpeg', 'png']
export const VALID_IMAGE_TYPES = VALID_IMAGE_EXTENSION.map((type) => `image/${type}`)
export const FILE_SIZE_NUMBER = 5
export const MAX_FILES_QUANTITY = 4
export const MAX_FILE_SIZE = FILE_SIZE_NUMBER * 1024 * 1024
export const MAX_PAGINATION_ITEMS = 5
export const DEFAULT_INFO = {
  currentPage: 1,
  hasNext: false,
  hasPrev: false,
  items: 0,
  limit: 10,
  nextPage: null,
  prevPage: null,
  pages: 1
}

type GenderLabel = Record <string, string>

export const GENDER_LABELS: GenderLabel = {
  [GENDER.MALE]: 'Hombre',
  [GENDER.FEMALE]: 'Mujer',
  [GENDER.KID]: 'Niño'
}

export const homeSliderItems: CarruselItem[] = [
  {
    title: 'Kids',
    subtitle: 'Hasta 50% de descuento',
    description: 'En productos para los mas pequenos',
    href: '/search',
    linkText: 'Explorar mas',
    direction: 'left',
    src: 'https://tafmx.vtexassets.com/assets/vtex.file-manager-graphql/images/e4e28d41-a7f4-41ef-b02a-848495982c08___0585f82118a943b317747e509853c4ff.jpg'
  },
  {
    title: 'Deportes',
    subtitle: 'Hasta 50% de descuento',
    description: 'En productos para deportistas',
    href: '/search',
    linkText: 'Ver Productos',
    direction: 'right',
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80'

  }
]
