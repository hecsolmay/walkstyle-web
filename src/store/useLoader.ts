import { create } from 'zustand'

interface State {
  show: boolean
}

interface Actions {
  showLoader: () => void
  hideLoader: () => void
}

const useLoaderStore = create<State & Actions>((set) => ({
  show: false,
  showLoader: () => { set((state) => ({ show: true })) },
  hideLoader: () => { set((state) => ({ show: false })) }
}))

export default useLoaderStore
