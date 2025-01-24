import { RiArrowUpDoubleFill } from 'react-icons/ri'

import { cn } from '@/lib/utils'
import { useScrollUp } from '@/stores/useScrollUp'

const ScrollUpButton = () => {
  const { containerRef, scrollDirection } = useScrollUp()

  const scrollToTop = () => {
    if (containerRef === null) return
    if (!containerRef.current) return

    containerRef.current.scrollTo(0, 0)
  }

  return (
    <div
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-20 right-[10%] z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-background bg-white p-2 text-hotcoin shadow-2xl transition-opacity duration-300 ease-in-out',
        scrollDirection === 'down' ? 'opacity-100' : 'opacity-0',
      )}
    >
      <RiArrowUpDoubleFill className="h-6 w-6" />
    </div>
  )
}

export default ScrollUpButton
