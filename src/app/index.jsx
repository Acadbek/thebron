import { ThemeProvider } from '@/components/shared/theme-provider'
import i18n from '@/lib/i18n'
import Router from '@/router'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider defaultTheme='light' storageKey="the-bron-theme">
          <Router />
        </ThemeProvider>
      </I18nextProvider>
    </BrowserRouter>
  )
}

export default App
