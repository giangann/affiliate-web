import { Container, Grid, Stack, Box } from '@mui/material'
import { Sidebar } from '~/components/Layouts/Sidebar'
import { Affiliate } from './Affiliate'
import Reels from './Reels'

function Content() {
  return (
    <Container>
      <Grid container gap={2}>
        <Grid item xs={7.5} sx={{ backgroundColor: 'white' }}>
          <Stack spacing={2}>
            <Reels />
            <Affiliate />
          </Stack>
        </Grid>

        <Grid item xs={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Content
