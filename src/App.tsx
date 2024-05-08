import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import './global.css'
import { router } from './routes'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="orderflow-theme" defaultTheme="dark">
      <Helmet titleTemplate="%s | OrderFlow" />
      <Toaster richColors/>
      <RouterProvider router ={router} />
      </ThemeProvider>
    </HelmetProvider>
    
  )
}

