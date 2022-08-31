import { createTheme, ScopedCssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from '~/components/Layouts'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { useEffect } from 'react'
import { getMe } from './apis'
import { useUpdateAtom } from 'jotai/utils'
import { userAtom } from './libs/auth'

const queryClient = new QueryClient()

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
  const setUser = useUpdateAtom(userAtom)

  useEffect(() => {
    getMe().then((res) => setUser(res.data.data))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ScopedCssBaseline sx={{ margin: 0 }}>
          <Router>
            <Layout />
          </Router>
        </ScopedCssBaseline>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
