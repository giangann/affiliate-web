import { Container, Grid, Stack, Box, Hidden } from '@mui/material'
import { Sidebar } from '~/components/Layouts/Sidebar'
import { Affiliate } from './Affiliate'
import Reels from './Reels'

function Content() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8} >
        <Stack spacing={3}>
          <Reels />
          <Affiliate />
        </Stack>
      </Grid>

      <Hidden mdDown>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default Content
