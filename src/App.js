import { createTheme, ScopedCssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from '~/components/Layouts'

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
        <Router>
          <Layout />
        </Router>
      </ScopedCssBaseline>
    </ThemeProvider>
  )
}

export default App
