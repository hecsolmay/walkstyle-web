export interface SearchParams {
  q?: string
  page?: number
  sort?: string
  limit?: number
}

export interface ServerProps {
  searchParams?: SearchParams
}
