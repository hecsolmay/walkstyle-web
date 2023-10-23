export interface Info {
  currentPage: number
  limit: number
  items: number
  pages: number
  hasNext: boolean
  hasPrev: boolean
  nextPage: string | null
  prevPage: string | null
}
