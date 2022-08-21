import { Container, Grid, Stack, Box } from '@mui/material'
import { Sidebar } from '~/components/Layouts/Sidebar'
import { Affiliate } from './Affiliate'
import Reels from './Reels'

function Content() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={8} sx={{ backgroundColor: 'white' }}>
        <Stack spacing={2}>
          <Reels />
          <Affiliate />
        </Stack>
      </Grid>

      <Grid item xs={4} >
        <Sidebar />
      </Grid>
    </Grid>
  )
}

export default Content
