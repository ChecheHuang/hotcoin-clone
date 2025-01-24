import clsx from 'clsx'
import React, { Suspense } from 'react'

import styles from './loader.module.css'

export default function LazyLoad(
  ComponentPromise: Promise<{ default: React.ComponentType<object> }>,
) {
  const LazyComponent = React.lazy(() => ComponentPromise)

  return (
    <Suspense fallback={<Loader />}>
      <LazyComponent />
    </Suspense>
  )
}

function Loader() {
  return (
    <div className="bg-gray-400 fixed left-0 top-0 h-1 w-full">
      <div
        className={clsx(
          'h-full bg-gradient-to-r from-green-500 to-blue-500',
          styles.animateLoader,
        )}
      ></div>
    </div>
  )
}
