import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { IssuesProvider } from "./context/IssuesContext";
import { Router } from "./Routes";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IssuesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </IssuesProvider>

      <GlobalStyles />
    </ThemeProvider>
  )
}
