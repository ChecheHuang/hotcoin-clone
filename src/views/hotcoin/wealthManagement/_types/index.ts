export type DataType = {
  productId: number
  productName: string
  productType: number
  coinId: number
  profitRate: string
  issueAmount: string
  soldAmount: string
  lockPeriod: number
  storageStatus: number
  sellStatus: number
  purchaseLimit: string
}

export enum ProductTypeEnum {
  全部 = '0',
  活期 = '1',
  定期 = '2',
}
