import {
  ChevronDown,
  Moon,
  SunMedium,
  Globe,
  Search,
  Download,
} from 'lucide-react'
import { FileText, Clock, Timer, LineChart } from 'lucide-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import logo from '@/assets/images/logo.png'
import { useTheme } from '@/components/ThemeProvider'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

const menu = [
  { title: '买币' },
  { title: '行情' },
  { title: '交易' },
  { title: '合约' },
  { title: '跟单', isShowHoverCardContent: false },
  { title: '理财' },
  { title: '更多' },
]
const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <header className="flex min-h-[50px] w-full items-center justify-between">
        <div className="flex">
          <div className="flex w-[183px] items-center">
            <LazyLoadImage
              className="cursor-pointer"
              alt=""
              effect="blur"
              src={logo}
            />
          </div>
          <div className="flex justify-center gap-2.5">
            {menu.map(({ title, isShowHoverCardContent = true }, index) => (
              <HoverCard openDelay={200} key={index}>
                <HoverCardTrigger className="group flex cursor-pointer items-center text-sm hover:text-hotcoin">
                  {title}
                  {isShowHoverCardContent && (
                    <ChevronDown className="ml-[7px] h-4 w-4 shrink-0 transform text-muted-foreground transition-transform duration-200 group-hover:rotate-180 group-hover:text-hotcoin" />
                  )}
                </HoverCardTrigger>
                {isShowHoverCardContent && (
                  <HoverCardContent>
                    <ContractMenu />
                  </HoverCardContent>
                )}
              </HoverCard>
            ))}
          </div>
        </div>
        <div>
          <div className="mr-8 flex items-center">
            <div className="relative inline-flex items-center">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="搜索币对"
                className="h-[34px] w-[200px] rounded-full border border-gray-300 bg-transparent py-1 pl-8 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <button className="mx-2.5 text-sm">登录</button>
            <Button className="mx-2.5" size="sm">
              注册
            </Button>
            <button className="mx-2.5 flex w-5 justify-center">
              <Download className="h-5 w-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="mx-2.5 flex w-5 justify-center"
            >
              {theme === 'light' && <Moon className="h-5 w-5" />}
              {theme === 'dark' && <SunMedium className="h-5 w-5" />}
            </button>
            <button className="mx-2.5 flex w-5 justify-center">
              <Globe className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

function ContractMenu() {
  return (
    <div className="max-w-xs rounded-lg bg-white shadow-sm">
      <nav className="flex flex-col space-y-4">
        <a
          href="#"
          className="flex items-center space-x-3 rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-50"
        >
          <FileText className="h-5 w-5 text-gray-600" />
          <span className="text-sm">永续合约</span>
        </a>

        <a
          href="#"
          className="flex items-center space-x-3 rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-50"
        >
          <div className="relative">
            <FileText className="h-5 w-5 text-gray-600" />
            <Clock className="absolute -bottom-1 -right-1 h-3 w-3 text-blue-500" />
          </div>
          <span className="text-sm">交割合约</span>
        </a>

        <a
          href="#"
          className="flex items-center space-x-3 rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-50"
        >
          <Timer className="h-5 w-5 text-gray-600" />
          <span className="text-sm">合约模拟交易</span>
        </a>

        <a
          href="#"
          className="flex items-center space-x-3 rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-50"
        >
          <LineChart className="h-5 w-5 text-gray-600" />
          <span className="text-sm">合约跟单</span>
        </a>
      </nav>
    </div>
  )
}
