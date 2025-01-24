import { FC, useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { useScrollUp } from '@/stores/useScrollUp'

import Header from './_components/Header'

const Layout: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { setContainerRef, scrollDirection, setScrollDirection } = useScrollUp()

  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    setContainerRef(containerRef)
  }, [setContainerRef, containerRef])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const currentScrollTop = containerRef.current.scrollTop

      if (currentScrollTop > lastScrollTop) {
        if (scrollDirection !== 'down') {
          setScrollDirection('down')
        }
      } else if (currentScrollTop < lastScrollTop) {
        if (scrollDirection !== 'up') {
          setScrollDirection('up')
        }
      }
      setLastScrollTop(currentScrollTop)
    }
    const currentRef = containerRef.current
    currentRef?.addEventListener('scroll', handleScroll)

    return () => {
      currentRef?.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollTop, containerRef, scrollDirection])

  return (
    <div
      ref={containerRef}
      className="scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-black scrollbar-thumb-rounded h-screen w-screen overflow-y-auto scroll-smooth"
    >
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
