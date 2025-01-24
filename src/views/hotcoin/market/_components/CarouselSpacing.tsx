import { ChevronRight } from 'lucide-react'

import { useQuery } from '@tanstack/react-query'

import PercentageDisplay from '@/components/PercentageDisplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatTimeDifference } from '@/lib/utils'
import mockAxios from '@/mock/mock'
import { imgUrl } from '@/resources/imgUrl'

import { CarouselData } from '../_types'

export function CarouselSpacing() {
  const { data } = useQuery({
    queryKey: ['market/carousel'],
    queryFn: async () => {
      const result = await mockAxios.get<FetchData<CarouselData[]>>(
        'http://localhost:3000/market/carousel',
      )
      return result.data.data
    },
    placeholderData: [],
    refetchInterval: 5000,
  })

  return (
    <Carousel className="mt-5 w-full">
      <CarouselContent className="cursor-pointer">
        {data!.map(({ title, data }, index) => (
          <CarouselItem key={index} className="basis-1/4">
            <div className="flex h-[263px] w-[289px] flex-col rounded-2xl border px-3">
              <div className="flex items-center justify-between py-6">
                <div className="text-[22px]">{title}</div>
                <ChevronRight className="h-4 w-4 text-gray" />
              </div>
              <Table>
                <TableHeader>
                  <TableRow className="border-none">
                    <TableHead className="h-[23px] w-[100px] p-0 text-xs">
                      交易对
                    </TableHead>
                    <TableHead className="h-[23px] p-0 text-right text-xs">
                      最新价
                    </TableHead>
                    <TableHead className="h-[23px] w-[70px] p-0 text-right text-xs">
                      24H涨跌幅
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map(({ pair, price, change, time }) => (
                    <TableRow key={pair} className="border-none">
                      <TableCell className="flex h-[46px] items-center gap-2 px-0">
                        <img
                          className="h-[22px] w-[22px]"
                          alt=""
                          src={imgUrl[pair as keyof typeof imgUrl]}
                        />
                        <div className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                          {pair}
                          <span className="ml-1 text-xs text-gray">/USDT</span>
                        </div>
                      </TableCell>
                      {time ? (
                        <TableCell
                          colSpan={2}
                          className="h-[46px] px-0 text-center"
                        >
                          {formatTimeDifference(time)}
                        </TableCell>
                      ) : (
                        <>
                          <TableCell className="h-[46px] px-0 text-right">
                            {price}
                          </TableCell>
                          <TableCell className="h-[46px] px-0 text-right">
                            <PercentageDisplay value={change} />
                          </TableCell>
                        </>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
