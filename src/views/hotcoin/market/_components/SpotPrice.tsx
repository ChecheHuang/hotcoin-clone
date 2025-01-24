import { ArrowUpDown, DollarSign, EqualApproximately } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { useInfiniteQuery } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'

import PercentageDisplay from '@/components/PercentageDisplay'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { coinList, swiperTabs } from '@/config/list'
import { box, filter, flatMap } from '@/lib/fp'
import mockAxios from '@/mock/mock'

import { SpotPriceDataType } from '../_types'
import LikeIcon from './LikeIcon'
import { SpotPriceDataTable } from './SpotPriceDataTable'
import SwiperTabs from './SwiperTabs'

type Column = ColumnDef<SpotPriceDataType> & {
  cellProps?: Record<string, any>
  headerProps?: Record<string, any>
}

const SpotPrice = () => {
  const [coin, setCoin] = useState(coinList[0])
  const [activeTab, setActiveTab] = useState(swiperTabs[0])

  const { data: infiniteData, fetchNextPage } = useInfiniteQuery({
    queryKey: ['spotPrice'],
    queryFn: async ({ pageParam }) => {
      const result = await mockAxios.get<
        FetchData<{
          data: SpotPriceDataType[]
          currentPage: number
          nextPage: number | null
        }>
      >('http://localhost:3000/market/spotPrice', {
        params: {
          pageParam,
          // limit: 20,
          // length: 100,
        },
      })

      return result.data.data
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  })

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  const data = useMemo(() => {
    if (!infiniteData) return []

    const result = box(infiniteData.pages)
      .pipe(flatMap((page) => page.data))
      .pipe(filter((item) => item.coin === coin))
      .pipe(
        filter((item) => {
          if (activeTab === swiperTabs[0]) return true
          return item.area === activeTab
        }),
      )
      .unwrap()

    return result
  }, [infiniteData, coin, activeTab])

  const columns: Column[] = [
    {
      accessorKey: 'tradingPairs',
      size: 400,

      header: ({ column }) => {
        return (
          <div
            className="flex cursor-pointer items-center text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            交易对
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </div>
        )
      },
      cell: ({ row: { original: row } }) => {
        return (
          <div className="flex items-center gap-2">
            <LikeIcon />
            <div>
              {row.tradingPairs}
              <span className="ml-1 text-gray">/{row.coin}</span>
            </div>
            {row.isShowX && (
              <div className="bg-hotcoin/10 text-xs text-hotcoin">10X</div>
            )}
          </div>
        )
      },
    },
    {
      accessorKey: 'latestPrice',
      cellProps: {
        className: 'text-right',
      },
      headerProps: {
        className: 'text-right',
      },
      header: ({ column }) => {
        return (
          <div
            className="flex cursor-pointer items-center justify-end text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            最新价
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </div>
        )
      },
      cell: ({ row: { original: row } }) => {
        return (
          <div className="">
            {row.latestPrice}
            <br />
            <div className="flex items-center justify-end text-sm text-gray">
              <EqualApproximately className="mr-1 h-4 w-4" />
              <DollarSign className="h-4 w-4" />
              {(parseFloat(row.latestPrice) * 0.8).toFixed(2)}
            </div>
          </div>
        )
      },
    },
    {
      accessorKey: 'riseAndFall',
      cellProps: {
        className: 'text-right',
      },
      headerProps: {
        className: 'text-right',
      },
      header: ({ column }) => {
        return (
          <div
            className="flex cursor-pointer items-center justify-end text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            24H涨跌幅
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </div>
        )
      },
      cell: ({ row: { original: row } }) => {
        return (
          <PercentageDisplay
            className="text-[18px] font-semibold"
            value={row.riseAndFall}
          />
        )
      },
    },
    {
      accessorKey: 'highestPrice',
      cellProps: {
        className: 'text-right',
      },
      headerProps: {
        className: 'text-right',
      },
      header: ({ column }) => {
        return (
          <div
            className="flex cursor-pointer items-center justify-end text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            24H最高价
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </div>
        )
      },
    },
    {
      accessorKey: 'lowestPrice',
      cellProps: {
        className: 'text-right',
      },
      headerProps: {
        className: 'text-right',
      },
      header: ({ column }) => {
        return (
          <div
            className="flex cursor-pointer items-center justify-end text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            24H最低价
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </div>
        )
      },
    },
    {
      accessorKey: 'tradingVolume',
      cellProps: {
        className: 'text-right',
      },
      headerProps: {
        className: 'text-right',
      },
      header: ({ column }) => {
        return (
          <div
            className="flex cursor-pointer items-center justify-end text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            24H交易量
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </div>
        )
      },
      cell: ({ row: { original: row } }) => {
        return <div>{row.tradingVolume}张</div>
      },
    },
  ]

  return (
    <>
      <div className="sticky top-[58px] z-50 mt-6 flex h-8 items-center gap-4 bg-background">
        <Select onValueChange={setCoin} defaultValue={coin}>
          <SelectTrigger className="ml-1 h-8 w-[88px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {coinList.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Separator orientation="vertical" />
        <div className="relative flex w-full flex-1 items-center overflow-hidden rounded-md py-1">
          <SwiperTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={swiperTabs}
          />
        </div>
      </div>
      <div className="mt-6">
        <SpotPriceDataTable columns={columns} data={data!!} />
      </div>
      <div ref={ref}></div>
    </>
  )
}

export default SpotPrice
