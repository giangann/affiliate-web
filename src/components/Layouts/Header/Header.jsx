import { Container, Grid, Paper } from '@mui/material'
import React from 'react'
import { Navbar } from './Navbar'

function Header() {
  return (
    <Container sx={{ position: 'relative' }}>
      <Grid container rowGap={2}>
        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            alignItem: 'center',
            justifyContent: { xs: 'center', md: 'flex-start' }
          }}
        >
          <img
            src="https://www.affpaying.com/img/logo.png"
            style={{
              width: '90%',
              height: 'auto'
            }}
            alt="logo"
          />
        </Grid>

        <Grid item xs={8} pt={2}>
          <img
            src="https://apimg.net/2020/Animated%20Banner_728x90_1_1.gif"
            alt="ads"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>

        {/* navbar */}
        <Grid
          component={Paper}
          elevation={2}
          item
          xs={12}
          height="47px"
          mb={2}
          sx={{
            backgroundColor: '#12283A',
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
    </Container>
  )
}

export { Header }
