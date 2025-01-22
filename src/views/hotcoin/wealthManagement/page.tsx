import { ArrowUpDown } from 'lucide-react'
import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { useQuery } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'

import PercentageDisplay from '@/components/PercentageDisplay'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { createEnumList } from '@/lib/utils'
import mockAxios from '@/mock/mock'
import { imgUrl } from '@/resources/imgUrl'
import { wealthManagementImg } from '@/resources/wealthManagement/img'

import { DataTable } from './_components/DataTable'
import Footer from './_components/Footer'
import QA from './_components/QA'
import { DataType, ProductTypeEnum } from './_types'

const list = createEnumList(ProductTypeEnum)

const WealthManagement = () => {
  const [productType, setProductType] = useState<ProductTypeEnum>(
    ProductTypeEnum['全部'],
  )

  const { data } = useQuery({
    queryKey: ['wealthManagement', productType],
    queryFn: async () => {
      const result = await mockAxios.get<FetchData<DataType[]>>(
        'http://localhost:3000/wealthManagement',
        {
          params: { productType },
        },
      )
      return result.data.data
    },
    placeholderData: [] as DataType[],
  })

  const columns: ColumnDef<DataType>[] = [
    {
      accessorKey: 'productName',
      header: () => {
        return <div className="ml-2">币种</div>
      },
      cell: ({ row: { original: row } }) => {
        return (
          <div className="ml-2 flex items-center">
            <img
              className="h-[26px] w-[26px] rounded-full"
              alt=""
              src={imgUrl[row.productName as keyof typeof imgUrl]}
            />
            <span className="ml-2 text-[18px] font-semibold">
              {row.productName}
            </span>
          </div>
        )
      },
    },
    {
      accessorKey: 'profitRate',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            年化收益率
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row: { original: row } }) => {
        return (
          <PercentageDisplay
            className="text-[18px] font-semibold"
            value={row.profitRate}
          />
        )
      },
    },
    {
      accessorKey: 'lockPeriod',
      header: '期限(天)',
    },
    {
      accessorKey: 'operation',
      header: () => {
        return <div className="mr-2 text-right"> 操作</div>
      },
      cell: () => {
        return (
          <div className="mr-2 text-right">
            <Button
              className="border border-primary bg-background text-primary hover:border-primary-foreground hover:bg-primary hover:text-primary-foreground"
              size="md"
            >
              立即申购
            </Button>
          </div>
        )
      },
    },
  ]

  return (
    <>
      <div className="flex justify-center bg-black">
        <div className="flex h-[400px] w-[1200px] items-center justify-between">
          <div className="text-white">
            <h1 className="text-[46px] font-semibold">稳定生息，简单赚币</h1>
            <h2 className="mt-4 text-2xl">投资保本型产品，赚取稳定收益</h2>
          </div>
          <LazyLoadImage
            className="w-428 h-[310px]"
            alt=""
            effect="blur"
            src={wealthManagementImg.img1}
          />
        </div>
      </div>
      <div className="mx-auto w-[1200px]">
        <ToggleGroup
          defaultValue={productType}
          className="mt-12 space-x-6"
          type="single"
          onValueChange={(value: ProductTypeEnum) => setProductType(value)}
        >
          {list.map((item) => (
            <ToggleGroupItem key={item.value} value={item.value}>
              {item.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <div className="mt-12">
          <DataTable
            columns={columns.map((item) => ({
              size: 210,
              ...item,
            }))}
            data={data!!}
          />
        </div>
        <QA />
      </div>
      <Footer />
    </>
  )
}

export default WealthManagement
