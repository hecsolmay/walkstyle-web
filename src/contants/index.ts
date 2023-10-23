export const VALID_IMAGE_EXTENSION = ['jpg', 'jpeg', 'png']
export const VALID_IMAGE_TYPES = VALID_IMAGE_EXTENSION.map((type) => `image/${type}`)
export const FILE_SIZE_NUMBER = 5
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
