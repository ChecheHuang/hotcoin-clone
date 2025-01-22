import {
  BsWechat,
  BsFacebook,
  BsTwitterX,
  BsTelegram,
  BsMedium,
} from 'react-icons/bs'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { imgUrl } from '@/resources/imgUrl'

const navigationData = [
  {
    title: '关于我们',
    items: [
      '平台介绍',
      '公告中心',
      '加入我们',
      '系统状态',
      '用户协议',
      '隐私条款',
      '法律说明',
    ],
  },
  {
    title: '产品',
    items: [
      'NFT',
      'Startup',
      '理财赚币',
      '质押借币',
      '合约交易',
      '现货交易',
      '杠杆交易',
    ],
  },
  {
    title: '服务',
    items: [
      '一键买币',
      '信用卡买币',
      '申请C2C商家',
      '好友邀请',
      '直播',
      'VIP权益',
      '下载',
      '桌面客户端',
    ],
  },
  {
    title: '支持',
    items: [
      'Hotcoin学院',
      '帮助中心',
      '在线客服',
      '用户反馈',
      '上市申请',
      'API文档',
      '费率标准',
      '币种信息',
      'NFT项目申请',
      '官方验证',
    ],
  },
  {
    title: '联系我们',
    items: [
      '客服邮箱：Service@hotcoin.com',
      '产品反馈：Product@hotcoin.com',
      '商务合作：Business@hotcoin.com',
      '司法邮箱：Casecn@hotcoin.com',
    ],
  },
]

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
                  className="text-nowrap text-sm text-gray-500 hover:underline"
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
