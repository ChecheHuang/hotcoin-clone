import { Search } from 'lucide-react'
import React, { forwardRef, InputHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: React.ForwardedRef<HTMLInputElement>
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative inline-flex items-center">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
          <Search className="text-gray-400 h-4 w-4" />
        </div>
        <input
          type="text"
          className={cn(
            'border-gray-300 placeholder-gray-500 h-[34px] w-[200px] rounded-full border bg-transparent py-1 pl-8 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)

SearchInput.displayName = 'SearchInput'

export default SearchInput
