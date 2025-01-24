import {
  BsFacebook,
  BsMedium,
  BsTelegram,
  BsTwitterX,
  BsWechat,
} from 'react-icons/bs'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { navigationData } from '@/config/list'
import { imgUrl } from '@/resources/imgUrl'

const Footer = () => {
  return (
    <footer className="mx-auto my-[100px] flex max-w-[1400px] justify-between gap-20">
      <div className="space-y-1">
        <LazyLoadImage
          className="h-[20px] w-[95px]"
          alt=""
          effect="blur"
          src={imgUrl.logo2}
        />
        <div>©2017-2024 www.hotcoin.com</div>
        <div className="flex gap-2">
          <BsFacebook className="h-7 w-7 cursor-pointer" />
          <BsTwitterX className="h-7 w-7 cursor-pointer" />
          <BsWechat className="h-7 w-7 cursor-pointer" />
          <BsTelegram className="h-7 w-7 cursor-pointer" />
          <BsMedium className="h-7 w-7 cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-28">
        {navigationData.map(({ title, items }) => {
          return (
            <div key={title} className="flex flex-col gap-2">
              <div className="text-nowrap font-semibold">{title}</div>
              {items.map((item, index) => (
                <a
                  key={index}
                  href=""
                  className="text-gray-500 text-nowrap text-sm hover:underline"
                >
                  {item}
                </a>
              ))}
            </div>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
