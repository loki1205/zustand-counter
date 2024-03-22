import { StateCreator, create } from "zustand";
import { PersistOptions, persist } from "zustand/middleware";
type StoreType = {
    count: number
    incrementCount: () => void,
    decrementCount: () => void
}

type MyPersist = (
    config: StateCreator<StoreType>,
    options: PersistOptions<StoreType>
  ) => StateCreator<StoreType>

export const useStore = create<StoreType>((persist as MyPersist)(set => ({
    count:0,
    incrementCount() {
        set(state => ({count: state.count + 1}))
    },
    decrementCount() {
        set(state => ({count: state.count - 1}))
    },
}),{
    name: 'auth',
  },))