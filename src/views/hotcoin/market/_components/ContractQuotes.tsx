import { ArrowUpDown, DollarSign, EqualApproximately } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { useInfiniteQuery } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'

import PercentageDisplay from '@/components/PercentageDisplay'
import { contractQuotesList } from '@/config/list'
import { cn } from '@/lib/utils'
import mockAxios from '@/mock/mock'

import { SpotPriceDataType } from '../_types'
import { ContractQuotesDataTable } from './ContractQuotesDataTable'
import LikeIcon from './LikeIcon'

type Column = ColumnDef<SpotPriceDataType> & {
  cellProps?: Record<string, any>
  headerProps?: Record<string, any>
}

const ContractQuotes = () => {
  const [activeTab, setActiveTab] = useState(contractQuotesList[0])

  const { data: infiniteData, fetchNextPage } = useInfiniteQuery({
    queryKey: ['contractQuotes'],
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
          limit: 10,
          length: 50,
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
    return infiniteData.pages.flatMap((page) => page.data)
  }, [infiniteData])

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
            品种
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
              <span className="text-gray">/USDT</span>
            </div>
            {row.isShowX && (
              <div className="border-grap/10 border p-[2px] text-xs text-gray">
                永续
              </div>
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
    <div className="mt-6 flex h-10 flex-col gap-4">
      <div className="flex h-10 items-center">
        {contractQuotesList.map((item) => {
          return (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={cn(
                'rounded-full bg-secondary/50 px-4 py-[2px] text-sm font-medium transition-colors',
                activeTab === item && 'border border-hotcoin bg-hotcoin/10',
                activeTab !== item && 'hover:bg-secondary',
              )}
            >
              {item}
            </button>
          )
        })}
      </div>
      <div className="mt-6">
        <ContractQuotesDataTable columns={columns} data={data!!} />
      </div>
      <div className="opacity-0" ref={ref}>
        _
      </div>
    </div>
  )
}

export default ContractQuotes
