import { MutableRefObject } from 'react'
import { create } from 'zustand'

type ScrollUpStore = {
  scrollDirection: 'up' | 'down' | null
  setScrollDirection: (value: 'up' | 'down' | null) => void
  containerRef: MutableRefObject<HTMLDivElement | null> | null
  setContainerRef: (ref: MutableRefObject<HTMLDivElement | null>) => void
}

export const useScrollUp = create<ScrollUpStore>((set) => ({
  scrollDirection: null,
  setScrollDirection: (value) => set({ scrollDirection: value }),
  containerRef: null,
  setContainerRef: (ref) => set({ containerRef: ref }),
}))
