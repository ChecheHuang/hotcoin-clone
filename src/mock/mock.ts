import mockAxios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { coinList, swiperTabs, tradingPairs } from '@/config/list'
import { box, slice } from '@/lib/fp'
import getRandomBoolean, { fakeWrapper } from '@/lib/utils'
import { CarouselData } from '@/views/hotcoin/market/_types'

import { wealthManagement } from './wealthManagement'

export const mock = new MockAdapter(mockAxios)

mock.onGet('http://localhost:3000/wealthManagement').reply((config) => {
  const { productType } = config.params

  const result = wealthManagement.filter((item) => {
    if (!Number(productType)) return true
    return item.productType === Number(productType)
  })

  return [200, box(result).pipe(fakeWrapper).unwrap()]
})

const mockTimeStamp = getRandomTimestampWithinNextTwoDays()

mock.onGet('http://localhost:3000/market/carousel').reply((config) => {
  const fakeData = [
    {
      title: '热⻔榜',
      data: [
        {
          pair: 'BTC',
          price: '102387.26',
          change: '-2.61',
        },
        {
          pair: 'ETH',
          price: '3220.44',
          change: '-2.35',
        },
        {
          pair: 'TRUMP',
          price: '36.45',
          change: '-12.98',
        },
      ],
    },
    {
      title: '涨幅榜',
      data: [
        {
          pair: 'J',
          price: '0.4852',
          change: '61.73',
        },
        {
          pair: 'POND',
          price: '0.02377',
          change: '41.57',
        },
        {
          pair: 'SBL',
          price: '0.019000',
          change: '5.55',
        },
      ],
    },
    {
      title: '跌幅榜',
      data: [
        {
          pair: 'APEPE',
          price: '0.000002017',
          change: '-42.92',
        },
        {
          pair: 'ASAT',
          price: '0.0184695',
          change: '-37.61',
        },
        {
          pair: 'MELANIA',
          price: '2.899',
          change: '-25.59',
        },
      ],
    },
    {
      title: '新币榜',
      data: [
        {
          pair: 'ANIME',
          time: mockTimeStamp,
        },
        {
          pair: 'QUDE',
          price: '0.03025',
          change: '21.00',
        },
        {
          pair: 'J',
          price: '0.4852',
          change: '61.73',
        },
      ],
    },
    {
      title: '成交额榜',
      data: [
        {
          pair: 'BTC',
          price: '102378.24',
          change: '-2.58',
        },
        {
          pair: 'ETH',
          price: '3219.22',
          change: '-2.35',
        },
        {
          pair: 'SOL',
          price: '248.53',
          change: '-2.64',
        },
      ],
    },
  ]

  const result = box(fakeData).pipe(adjustDataGroups).pipe(fakeWrapper).unwrap()

  return [200, result]
})

mock.onGet('http://localhost:3000/market/spotPrice').reply((config) => {
  const { pageParam, limit = 500, length = 50000 } = config.params

  const items = Array.from({ length }, () => {
    return {
      tradingPairs: getRandomElementFromArray(tradingPairs),
      coin: getRandomElementFromArray(coinList),
      area: getRandomElementFromArray(swiperTabs),
      riseAndFall: getRandomNumberString(),
      ...generateMockMarketData(),
      isShowX: getRandomBoolean(30),
    }
  })

  const result = {
    data: box(items)
      .pipe(slice(pageParam)(pageParam + limit))
      .unwrap(),
    currentPage: pageParam,
    nextPage: pageParam + limit < items.length ? pageParam + limit : null,
  }

  return [200, box(result).pipe(fakeWrapper).unwrap()]
})

export default mockAxios

function generateMockMarketData() {
  const highestPrice = Math.floor(Math.random() * 999999) + 1
  const lowestPrice = Math.floor(Math.random() * highestPrice)
  const latestPrice = Math.floor(
    Math.random() * (highestPrice - lowestPrice) + lowestPrice,
  )
  const tradingVolume = Math.floor(Math.random() * (highestPrice * 10))

  const decimalPlaces = Math.floor(Math.random() * 3) + 2 // 產生 2 到 4 的隨機小數位數

  const formatNumber = (num: number) => {
    const numStr = num.toFixed(decimalPlaces).toString()
    const [integerPart, decimalPart] = numStr.split('.')
    const formattedIntegerPart = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ',',
    )

    if (!decimalPart) return formattedIntegerPart // 如果沒有小數部分直接返回

    const hasNonZeroDecimal = /[1-9]/.test(decimalPart)
    if (hasNonZeroDecimal) {
      return `${formattedIntegerPart}.${decimalPart}`
    } else {
      // 如果小數部分都是0, 就隨機生成新的小數部分
      const newDecimal = Math.random().toFixed(decimalPlaces).slice(2)
      return `${formattedIntegerPart}.${newDecimal}`
    }
  }

  return {
    latestPrice: formatNumber(latestPrice),
    highestPrice: formatNumber(highestPrice),
    lowestPrice: formatNumber(lowestPrice),
    tradingVolume,
  }
}
function getRandomNumberString(): string {
  const randomNumber = Math.random() * 200 - 100 // 生成 -100 到 100 之間的隨機數
  const formattedNumber = randomNumber.toFixed(2) // 四捨五入到小數點後兩位
  return formattedNumber
}

function getRandomElementFromArray<T>(arr: T[]): T | undefined {
  if (!arr || arr.length === 0) {
    return undefined // 如果輸入的陣列為空，則返回 undefined
  }

  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

function getRandomTimestampWithinNextTwoDays() {
  const now = Date.now() // 取得目前的時間戳記
  const twoDaysInMillis = 2 * 24 * 60 * 60 * 1000 // 兩天的毫秒數
  const randomTime = now + Math.random() * twoDaysInMillis // 在未來兩天內產生隨機時間戳記
  return Math.floor(randomTime) // 返回整數形式的時間戳記
}

function adjustLastDigit(value: string): string {
  // 將字串轉換為數字
  const num = parseFloat(value)
  if (isNaN(num)) return value // 如果轉換失敗，返回原始值

  // 產生隨機的調整值，範圍為 -3 到 3（不包括 0）
  const adjustment = Math.floor(Math.random() * 6) - 3
  if (adjustment === 0) return value // 如果調整值為 0，返回原始值

  // 計算新的數值
  const newNum = num + adjustment * Math.pow(10, -getDecimalPlaces(value))
  return newNum.toFixed(getDecimalPlaces(value))
}

function getDecimalPlaces(value: string): number {
  const decimalIndex = value.indexOf('.')
  return decimalIndex === -1 ? 0 : value.length - decimalIndex - 1
}

function adjustDataGroups(dataGroups: CarouselData[]): CarouselData[] {
  return dataGroups.map((group) => ({
    ...group,
    data: group.data.map((item) => ({
      ...item,
      price: item.price ? adjustLastDigit(item.price) : undefined,
      change: item.change ? adjustLastDigit(item.change) : undefined,
    })),
  }))
}
