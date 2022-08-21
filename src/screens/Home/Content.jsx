import { Container, Grid, Stack } from '@mui/material'
import { Affiliate } from './Affiliate'
import Reels from './Reels'

function Content() {
  return (
    <Container>
      <Grid container gap={2}>
        <Grid item xs={7.5} sx={{ backgroundColor: 'yellow' }}>
          <Stack spacing={2}>
            <Reels />
            <Affiliate />
          </Stack>
        </Grid>

        <Grid item xs={4} sx={{ color: 'red', backgroundColor: 'green' }}>
          side bar
        </Grid>
      </Grid>
    </Container>
  )
}

export default Content
