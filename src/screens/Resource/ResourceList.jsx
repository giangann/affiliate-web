import { Grid, Link } from '@mui/material'

const ResourceList = (props) => {
  const { column = 3, resourceList } = props
  return (
    <Grid container>
      {resourceList.map((item, index) => (
        <Grid item xs={12 / column} key={index} sx={{ padding: 1 }}>
          <Link
            underline="none"
            sx={{ color: '#2779bd', fontSize: '0.825rem', lineHeight: 1.5, fontWeight: 'bold' }}
          >
            {item.name}
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export { ResourceList }
