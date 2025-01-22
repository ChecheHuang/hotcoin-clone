import { LazyLoadImage } from 'react-lazy-load-image-component'

import { imgUrl } from '@/resources/imgUrl'

import { CarouselSpacing } from './_components/CarouselSpacing'

const Market = () => {
  return (
    <>
      <div className="relative h-[100px] w-full">
        <LazyLoadImage
          className="h-[100px] w-full object-cover"
          alt=""
          effect="blur"
          src={imgUrl.marketHeader}
        />
        <div className="absolute left-1/2 top-1/2 w-[1200px] -translate-x-1/2 -translate-y-1/2 text-[34px] font-semibold text-primary-foreground">
          市场行情
        </div>
      </div>
      <div className="mx-auto w-[1200px]">
        <CarouselSpacing />
      </div>
    </>
  )
}

export default Market
