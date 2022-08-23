import { Box, Grid, Typography } from '@mui/material'
import { silver } from '~/constants/color'
import { ResourceList } from './ResourceList'

const resourceList = [
  {
    id: new Date().getTime(),
    name: 'Go2mobi'
  },
  {
    id: new Date().getTime(),
    name: 'Go2mobi'
  },
  {
    id: new Date().getTime(),
    name: 'Go2mobi'
  },
  {
    id: new Date().getTime(),
    name: 'Go2mobi'
  },
  {
    id: new Date().getTime(),
    name: 'Go2mobi'
  },
  {
    id: new Date().getTime(),
    name: 'Go2mobi'
  },
  {
    id: new Date().getTime(),
    name: 'Go2mobi'
  }
]

const Title = (props) => {
  const { title } = props
  return (
    <Typography
      variant="h2"
      sx={{ fontSize: '1.125rem', fontWeight: 700, py: 1, borderBottom: '2px solid black' }}
    >
      {title}
    </Typography>
  )
}

const ResourceBlock = (props) => {
  const { withLabel = false } = props
  return (
    <Box sx={{ mb: 2 }}>
      <Title title="Traffice Sources" />
      {withLabel ? (
        <Grid container sx={{ borderBottom: `1px dashed ${silver[100]}` }}>
          <Grid item xs={4}>
            <Typography
              sx={{
                color: silver[100],
                fontSize: '0.825rem',
                lineHeight: 1.5,
                fontWeight: 'bold',
                padding: 1
              }}
            >
              Hello
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <ResourceList resourceList={resourceList} />
          </Grid>
        </Grid>
      ) : (
        <ResourceList column={4} resourceList={resourceList} />
      )}
    </Box>
  )
}

export { ResourceBlock }
