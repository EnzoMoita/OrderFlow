import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import './global.css'
import { router } from './routes'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { ThemeProvider } from './components/theme/theme-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="orderflow-theme" defaultTheme="dark">
      <Helmet titleTemplate="%s | OrderFlow" />
      <Toaster richColors/>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router ={router} />
      </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
    
  )
}

