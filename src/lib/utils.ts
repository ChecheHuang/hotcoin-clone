import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fakeWrapper = <T>(data: T) => {
  return {
    data,
    msg: 'ok',
    pageNum: 0,
    code: 200,
    totalCount: 0,
    totalPages: 0,
    time: Date.now(),
  }
}

function getRandomBoolean(probability = 50): boolean {
  if (probability < 0 || probability > 100) {
    throw new Error('Probability must be between 0 and 100.')
  }

  const randomNumber = Math.random() * 100 // Generate random number between 0 and 100
  return randomNumber < probability // Return true if randomNumber is less than probability
}

export default getRandomBoolean

export function formatTimeDifference(timestamp: number): string {
  const now = Date.now() // 取得目前的時間戳記
  const diffInMillis = Math.abs(now - timestamp) // 計算時間差的毫秒數

  const millisInMinute = 60 * 1000
  const millisInHour = 60 * millisInMinute
  const millisInDay = 24 * millisInHour

  const days = Math.floor(diffInMillis / millisInDay) // 計算相差的天數
  const hours = Math.floor((diffInMillis % millisInDay) / millisInHour) // 計算剩餘小時數
  const minutes = Math.floor((diffInMillis % millisInHour) / millisInMinute) // 計算剩餘分鐘數

  return `${days}天${hours}小時${minutes}分`
}

export function createEnumList<T extends { [key: string]: string | number }>(
  enumObj: T,
): { label: string; value: T[keyof T] }[] {
  return Object.keys(enumObj)
    .filter((key) => Number.isNaN(Number(key)))
    .map((key) => ({
      label: key,
      value: enumObj[key as keyof T],
    }))
}

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
): T {
  let timer: NodeJS.Timeout
  return ((...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => func(...args), delay)
  }) as T
}

export function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number,
): T {
  let lastCall = 0
  return ((...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastCall >= limit) {
      lastCall = now
      func(...args)
    }
  }) as T
}
