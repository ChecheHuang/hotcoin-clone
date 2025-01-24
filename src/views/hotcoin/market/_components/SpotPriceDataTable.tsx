'use client'

import { ChevronUp } from 'lucide-react'
import { useState } from 'react'

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'

interface SpotPriceDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function SpotPriceDataTable<TData, TValue>({
  columns,
  data,
}: SpotPriceDataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])

  const [isUp, setIsUp] = useState(false)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <div className="rounded-md">
      <div className="no-scrollbar relative h-[calc(100vh-110px)] overflow-auto">
        <Table>
          <TableHeader className="sticky top-0 bg-background">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-none">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      style={{
                        minWidth: header.column.columnDef.size,
                        maxWidth: header.column.columnDef.size,
                        padding: 0,
                      }}
                      // @ts-ignore
                      {...header.column.columnDef?.headerProps}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            <TableRow></TableRow>
            <TableRow className="border-none">
              <TableCell colSpan={6} className="p-0">
                <div className="flex h-14 items-center justify-between">
                  <span className="ml-2 px-4 py-1">主区</span>
                  <Button
                    onClick={() => {
                      setIsUp(!isUp)
                    }}
                    variant="ghost"
                    className="p-0"
                  >
                    <ChevronUp
                      size={16}
                      className={cn(
                        'cursor-pointer transition-transform duration-200',
                        isUp && 'rotate-180',
                      )}
                    />
                  </Button>
                </div>
              </TableCell>
            </TableRow>

            {(() => {
              if (isUp) return null
              if (!table.getRowModel().rows?.length) {
                return (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      沒有資料
                    </TableCell>
                  </TableRow>
                )
              }
              return table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="h-[70px] cursor-pointer text-base"
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell
                        style={{
                          minWidth: cell.column.columnDef.size,
                          maxWidth: cell.column.columnDef.size,
                        }}
                        key={cell.id}
                        // @ts-ignore
                        {...cell.column.columnDef?.cellProps}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))
            })()}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
