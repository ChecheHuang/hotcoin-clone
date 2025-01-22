import React from 'react'

import { cn } from '@/lib/utils'

interface PercentageDisplayProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: string | null | undefined
}

const PercentageDisplay: React.FC<PercentageDisplayProps> = ({
  value,
  className,
  ...divProps
}) => {
  if (value === null || value === undefined) {
    return <span {...divProps}>-</span>
  }
  const numberValue = parseFloat(value)
  let colorClass = ''

  if (isNaN(numberValue)) {
    return <span {...divProps}>{value}</span>
  } else if (numberValue > 0) {
    colorClass = 'text-green-500'
  } else if (numberValue < 0) {
    colorClass = 'text-red-500'
  }

  return (
    <span className={cn(colorClass, className)} {...divProps}>
      {numberValue.toFixed(2)}%
    </span>
  )
}

export default PercentageDisplay
