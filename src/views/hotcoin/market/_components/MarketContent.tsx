import { useState } from 'react'

import SearchInput from '@/components/SearchInput'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { cn, createEnumList } from '@/lib/utils'

import { MarketTypeEnum } from '../_types'
import ContractQuotes from './ContractQuotes'
import SpotPrice from './SpotPrice'

const list = createEnumList(MarketTypeEnum)

const MarketContent = () => {
  const [marketType, setMarketType] = useState<MarketTypeEnum>(
    MarketTypeEnum['现货行情'],
  )

  return (
    <div
      className={cn(
        marketType === MarketTypeEnum['现货行情'] &&
          'no-scrollbar max-h-screen overflow-auto',
      )}
    >
      <div className={cn('flex items-center justify-between bg-background')}>
        <div className="">
          <ToggleGroup
            defaultValue={marketType}
            className="space-x-6"
            type="single"
            onValueChange={(value: MarketTypeEnum) => setMarketType(value)}
          >
            {list.map((item) => (
              <ToggleGroupItem
                className="font-medium"
                key={item.value}
                value={item.value}
              >
                {item.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <SearchInput placeholder="搜索" />
      </div>
      {marketType === MarketTypeEnum['现货行情'] && <SpotPrice />}
      {(marketType === MarketTypeEnum['合约行情'] ||
        marketType === MarketTypeEnum['自选']) && <ContractQuotes />}
    </div>
  )
}

export default MarketContent
