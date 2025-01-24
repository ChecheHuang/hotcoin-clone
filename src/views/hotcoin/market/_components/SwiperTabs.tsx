import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef, useState } from 'react'
//@ts-ignore
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const CONTENT_PER_PAGE = 10

type SwiperTabsProps = {
  tabs: string[]
  activeTab: string
  setActiveTab: (tab: string) => void
}

const SwiperTabs = ({ tabs, activeTab, setActiveTab }: SwiperTabsProps) => {
  const swiperRef = useRef<any>(null)
  const [isShowPrevButton, setIsShowPrevButton] = useState(false)
  const [isShowNextButton, setIsShowNextButton] = useState(true)

  const handleSlideChange = () => {
    if (!swiperRef.current) return

    setIsShowPrevButton(swiperRef.current.swiper.activeIndex !== 0)
    setIsShowNextButton(
      swiperRef.current.swiper.activeIndex !== tabs.length - CONTENT_PER_PAGE,
    )
  }
  const handlePrev = () => {
    if (!swiperRef.current) return

    swiperRef.current.swiper.slidePrev(300)
  }
  const handleNext = () => {
    if (!swiperRef.current) return
    swiperRef.current.swiper.slideNext(300)
  }

  return (
    <>
      {isShowPrevButton && (
        <Button
          variant="outline"
          className="absolute z-10 h-8 w-8 cursor-pointer"
          onClick={handlePrev}
        >
          <ArrowLeft size={20} />
        </Button>
      )}

      <div className="relative flex w-full items-center pr-14">
        <Swiper
          spaceBetween={4}
          slidesPerView={CONTENT_PER_PAGE}
          slidesPerGroup={4}
          navigation={false}
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          className="w-full overflow-hidden"
        >
          {tabs.map((tab, index) => (
            <SwiperSlide key={index} onClick={() => setActiveTab(tab)}>
              <div
                className={cn(
                  'w-auto cursor-pointer rounded-full py-1 text-center text-[14px] text-gray',
                  activeTab === tab &&
                    'bg-background-foreground bg-primary text-primary-foreground dark:text-primary-foreground',
                )}
              >
                {tab}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {isShowNextButton && (
        <Button
          variant="outline"
          className="absolute right-0 z-10 h-8 w-8 cursor-pointer"
          onClick={handleNext}
        >
          <ArrowRight size={20} />
        </Button>
      )}
    </>
  )
}

export default SwiperTabs
