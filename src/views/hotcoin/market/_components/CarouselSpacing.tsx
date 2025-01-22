import { ChevronRight } from 'lucide-react'

import { useQuery } from '@tanstack/react-query'

import PercentageDisplay from '@/components/PercentageDisplay'
import { Button } from '@/components/ui/button'
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

  console.table(data)

  return (
    <Carousel className="mt-3 w-full">
      <CarouselContent className="">
        {data!.map(({ title, data }, index) => (
          <CarouselItem key={index} className="basis-1/4">
            <div className="flex h-[263px] w-[289px] flex-col justify-around rounded-2xl border px-2 py-4">
              <div className="flex items-center justify-between">
                <div className="text-[24px]">{title}</div>
                <Button variant="ghost">
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow className="border-none">
                    <TableHead className="w-[100px] p-0 text-xs">
                      交易對
                    </TableHead>
                    <TableHead className="p-0 text-right text-xs">
                      最新價
                    </TableHead>
                    <TableHead className="w-[70px] p-0 text-right text-xs">
                      24H漲跌幅
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map(({ pair, price, change, time }) => (
                    <TableRow key={pair} className="border-none">
                      <TableCell className="flex items-center gap-2 px-0">
                        <img
                          className="h-[20px] w-[20px]"
                          alt=""
                          src={imgUrl[pair as keyof typeof imgUrl]}
                        />
                        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                          {pair}
                          <span className="text-[#d9d9d9]">/USDT</span>
                        </div>
                      </TableCell>
                      {time ? (
                        <TableCell colSpan={2} className="px-0 text-center">
                          {formatTimeDifference(time)}
                        </TableCell>
                      ) : (
                        <>
                          <TableCell className="px-0 text-right">
                            {price}
                          </TableCell>
                          <TableCell className="px-0 text-right">
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
