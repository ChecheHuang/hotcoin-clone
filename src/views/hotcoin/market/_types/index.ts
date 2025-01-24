export type CarouselData = {
  title: string
  data: {
    pair: string
    price?: string
    change?: string
    time?: number
  }[]
}

export enum MarketTypeEnum {
  自选 = '0',
  现货行情 = '1',
  合约行情 = '2',
}

export type SpotPriceDataType = {
  tradingPairs: string
  coin: string
  area: string
  latestPrice: string
  riseAndFall: string
  highestPrice: string
  lowestPrice: string
  tradingVolume: string
  isShowX?: boolean
}
