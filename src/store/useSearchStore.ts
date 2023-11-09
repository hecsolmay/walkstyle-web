import { getProducts } from '@/services/products'
import { type Product } from '@/types/product'
import { create } from 'zustand'

interface State {
  search: string
  isSearching: boolean
  isLoading: boolean
  products: Product[]
}

interface Actions {
  setSearch: (search: string) => void
  setIsSearching: (isSearching: boolean) => void
  resetSearch: () => void
}

const INITIAL_STATE: State = {
  search: '',
  isLoading: false,
  isSearching: false,
  products: []
}

export const useSearchStore = create<State & Actions>((set, get) => ({
  ...INITIAL_STATE,
  setSearch: async (search) => {
    if (search.trim().length === 0) return
    set({ search })

    try {
      set({ isLoading: true })
      const { products } = await getProducts({ q: search })
      set({ products })
      console.log(products)
    } catch (error) {
      console.error(error)
    } finally {
      set({ isLoading: false })
    }
  },
  setIsSearching: (isSearching) => { set({ isSearching }) },
  resetSearch: () => { set(INITIAL_STATE) }
}))
