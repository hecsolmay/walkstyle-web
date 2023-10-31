export interface SearchParams {
  q?: string
  page?: number
  sort?: string
}

export interface ServerProps {
  searchParams?: SearchParams
}
