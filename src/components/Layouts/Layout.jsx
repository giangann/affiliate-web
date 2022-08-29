import React from 'react'
import { Box, Grid, Hidden, Container, styled } from '@mui/material'
import { Header } from '~/components/Layouts/Header'
import { Footer } from '~/components/Layouts/Footer'
import { Router } from '~/routers/Router'
import { Sidebar } from '~/components/Layouts/Sidebar'

export const Layout = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#EEEEEE'
      }}
    >
      <Header />

      <ResponsiveContainer sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Router />
          </Grid>

          <Hidden mdDown>
            <Grid item xs={4}>
              <Sidebar />
            </Grid>
          </Hidden>
        </Grid>
      </ResponsiveContainer>

      <Footer />
    </Box>
  )
}

export const ResponsiveContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '0',
    paddingRight: '0'
  }
}))
