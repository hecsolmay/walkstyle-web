import { type ItemProduct } from '@/types/product'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

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
  changeQuantity: (sizeId: string, quantity: number) => void
}

const useCartStore = create(persist<State & Actions>((set, get) => ({
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
  },
  changeQuantity: (sizeId, quantity) => {
    const prevItems = get().items

    const foundItemIndex = prevItems.findIndex((item) => item.sizeId === sizeId)

    if (foundItemIndex === -1) {
      return
    }

    const foundItem = prevItems[foundItemIndex]

    const foundSize = foundItem.product.sizes.find((size) => size.sizeId === sizeId)

    if (foundSize === undefined) {
      return
    }

    if (quantity > foundSize.stock || quantity < 1) {
      return
    }

    let prevItemTotal = 0
    let newItemTotal = 0

    const newItems = prevItems.map((item) => {
      if (item.sizeId !== sizeId) {
        return item
      }

      prevItemTotal = item.total
      item.total = quantity * item.product.price
      item.quantity = quantity
      newItemTotal = item.total

      return item
    })

    const prevTotal = get().total

    const newTotal = prevTotal - prevItemTotal + newItemTotal

    set({ items: newItems, total: newTotal })
  }

}), {
  name: 'cart',
  storage: createJSONStorage(() => localStorage),
  skipHydration: true
}))

export default useCartStore
