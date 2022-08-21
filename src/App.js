import { ScopedCssBaseline } from '@mui/material'
import { Home } from '~/screens/Home'

function App() {
  return (
    <ScopedCssBaseline sx={{ margin: 0}}>
      <Home />
    </ScopedCssBaseline>
  )
}

export default App
