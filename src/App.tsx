import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GithubAccountProvider } from './context/githubAccount'
import { IssuesProvider } from './context/IssuesContext'
import { Router } from './Routes'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IssuesProvider>
        <GithubAccountProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </GithubAccountProvider>
      </IssuesProvider>

      <GlobalStyles />
    </ThemeProvider>
  )
}
