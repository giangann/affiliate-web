import { Container, Grid, Paper } from '@mui/material'
import React from 'react'
import { baseColor } from '~/styles'
import { ResponsiveContainer } from '..'
import { Navbar } from './Navbar'

function Header() {
  return (
    <ResponsiveContainer sx={{ position: 'relative' }}>
      <Grid container rowGap={2}>
        {/* navbar */}
        <Grid
          // component={Paper}
          // elevation={2}
          item
          xs={12}
          mb={2}
          sx={{
            color: 'white',
            borderRadius: '0px',
            display: 'flex',
            alignItem: 'center',
            position: 'sticky',
            top: 0
          }}
        >
          <Navbar />
        </Grid>
      </Grid>
    </ResponsiveContainer>
  )
}

export { Header }
