import { type ItemProduct } from '@/types/product'
import { create } from 'zustand'

interface State {
  items: ItemProduct[]
  total: number
}

const INITIAL_STATE: State = {
  items: [],
  total: 0
}

type AddProductType = Omit<ItemProduct, 'total'>

interface Actions {
  addProduct: (itemProduct: AddProductType) => void
  removeProduct: (sizeId: string) => void
  removeAll: () => void
}

const useCartStore = create<State & Actions>((set, get) => ({
  ...INITIAL_STATE,
  addProduct: (itemProduct: AddProductType) => {
    const total = itemProduct.product.price * itemProduct.quantity
    const newProduct = { ...itemProduct, total }
    const prevItems = get().items
    set({ items: [...prevItems, newProduct], total: get().total + total })
  },
  removeProduct: (sizeId: string) => {
    const prevItems = get().items
    const removeItemIndex = prevItems.findIndex((item) => item.sizeId === sizeId)

    if (removeItemIndex === -1) {
      return
    }

    const removeItem = prevItems[removeItemIndex]
    const newItems = prevItems.filter((item) => item.sizeId !== sizeId)
    set({ items: newItems, total: get().total - removeItem.total })
  },
  removeAll: () => {
    set(INITIAL_STATE)
  }
}))

export default useCartStore
