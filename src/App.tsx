import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { StoreContextProvider } from './contexts/StoreContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StoreContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyle />
      </StoreContextProvider>
    </ThemeProvider>
  )
}
