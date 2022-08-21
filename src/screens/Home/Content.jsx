import { Container, Grid, Stack,Box } from '@mui/material'
import { Sidebar } from '~/components/Layouts/Sidebar'
import { Affiliate } from './Affiliate'
import Reels from './Reels'

function Content() {
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={7.5} sx={{ backgroundColor: 'yellow' }}>
          <Stack spacing={2}>
            <Reels />
            <Affiliate />
          </Stack>
        </Grid>

        <Grid item xs={4} sx={{ backgroundColor: 'green' }}>
          <Sidebar />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Content
