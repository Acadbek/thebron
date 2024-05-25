import { ThemeProvider } from '@/components/shared/theme-provider'
import Router from '@/router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme='light' storageKey="the-bron-theme">
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
