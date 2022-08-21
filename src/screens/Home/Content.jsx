import { Box, Container, Grid, Stack } from '@mui/material'
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

        <Grid item xs={4.5} sx={{ color: 'red', backgroundColor: 'green' }}>
          side bar
        </Grid>
      </Grid>
    </Box>
  )
}

export default Content
