import LazyLoad from './LazyLoad/LazyLoad'

const router: Route[] = [
  {
    path: '/*',
    element: LazyLoad(import('@/views/home/page')),
    name: 'Home',
  },
  {
    path: '/hotcoin',
    element: LazyLoad(import('@/views/hotcoin/layout')),
    name: '/hotcoin',
    children: [
      {
        path: '/hotcoin/market',
        element: LazyLoad(import('@/views/hotcoin/market/page')),
        name: '/hotcoin/market',
      },
      {
        path: '/hotcoin/wealthManagement',
        element: LazyLoad(import('@/views/hotcoin/wealthManagement/page')),
        name: '/hotcoin/wealthManagement',
      },
    ],
  },
  {
    path: '/*',
    element: LazyLoad(import('@/views/404/page')),
    name: 'Not Found',
  },
]
export default router
export interface Route {
  path: string
  element: JSX.Element
  name: string
  children?: Route[]
  label?: string
}
