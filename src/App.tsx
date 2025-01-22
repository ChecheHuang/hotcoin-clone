import { I18nextProvider } from 'react-i18next'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { HashRouter as BrowserRouter, useRoutes } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import ErrorBoundary from '@/components/ErrorBoundary'
import setting from '@/i18n'
import '@/lib/cuslog'
import router from '@/router/router'

import { ThemeProvider } from './components/ThemeProvider'

const Routes = () => {
  const routes = useRoutes(router)

  return (
    <div className="scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-black scrollbar-thumb-rounded h-screen w-screen overflow-y-auto scroll-smooth">
      {routes}
    </div>
  )
}

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
  })
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={setting}>
              <BrowserRouter>
                <Routes />
              </BrowserRouter>
            </I18nextProvider>
          </QueryClientProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  )
}

export default App
