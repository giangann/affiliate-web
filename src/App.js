import { createTheme, ScopedCssBaseline, ThemeProvider } from '@mui/material'
import { Home } from '~/screens/Home'

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        iphone: 380,
        samsung: 450,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline sx={{ margin: 0 }}>
        <Home />
      </ScopedCssBaseline>
    </ThemeProvider>
  )
}

export default App
