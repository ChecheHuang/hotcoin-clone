import {
  ChevronDown,
  Clock,
  Download,
  FileText,
  Globe,
  LineChart,
  Moon,
  SunMedium,
  Timer,
} from 'lucide-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import logo from '@/assets/images/logo.png'
import { useLauguageModel } from '@/components/model/LauguageModal'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { menu } from '@/config/list'
import { useTheme } from '@/providers/ThemeProvider'

import SearchInput from '../../../components/SearchInput'

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  const { onOpen } = useLauguageModel()

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
          <div className="flex justify-center gap-5">
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
            <SearchInput placeholder="搜索币对" />

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
            <button onClick={onOpen} className="mx-2.5 flex w-5 justify-center">
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
    <div className="max-w-xs rounded-lg shadow-sm">
      <nav className="flex flex-col space-y-4">
        <a
          href="#"
          className="text-gray-700 flex items-center space-x-3 rounded-md p-2 transition-colors hover:bg-gray"
        >
          <FileText className="h-5 w-5" />
          <span className="text-sm">永续合约</span>
        </a>

        <a
          href="#"
          className="text-gray-700 flex items-center space-x-3 rounded-md p-2 transition-colors hover:bg-gray"
        >
          <div className="relative">
            <FileText className="h-5 w-5" />
            <Clock className="absolute -bottom-1 -right-1 h-3 w-3 text-blue-500" />
          </div>
          <span className="text-sm">交割合约</span>
        </a>

        <a
          href="#"
          className="text-gray-700 flex items-center space-x-3 rounded-md p-2 transition-colors hover:bg-gray"
        >
          <Timer className="h-5 w-5" />
          <span className="text-sm">合约模拟交易</span>
        </a>

        <a
          href="#"
          className="text-gray-700 flex items-center space-x-3 rounded-md p-2 transition-colors hover:bg-gray"
        >
          <LineChart className="h-5 w-5" />
          <span className="text-sm">合约跟单</span>
        </a>
      </nav>
    </div>
  )
}
