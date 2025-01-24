type FetchData<T = any> = {
  data: T
  msg: string
  pageNum: number
  code: number
  totalCount: number
  totalPages: number
  time: string
}
