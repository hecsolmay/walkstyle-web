export interface SearchParams {
  q?: string
  page?: number
  sort?: string
  limit?: number
}

export interface ServerProps {
  searchParams?: SearchParams
}

export interface CarruselItem {
  title: string
  subtitle: string
  description: string
  href?: string
  linkText?: string
  direction: 'left' | 'right'
  src: string
}
