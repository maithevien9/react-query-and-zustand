import { QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import queryClient from 'configs/queryClient'
import Loading from 'shared/components/common/Loading'
import { router } from 'shared/routers'
import './assets/styles/index.css'

const rootElement = document.getElementById('root')

if (rootElement instanceof HTMLElement) {
  createRoot(rootElement).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider fallbackElement={<Loading />} router={router} />
    </QueryClientProvider>
  )
} else {
  // eslint-disable-next-line no-console
  console.error('Could not find root element in the document!')
}
