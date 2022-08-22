import React from 'react'
import { Box, Grid, Hidden, Container } from '@mui/material'
import { Header } from '~/components/Layouts/Header'
import { Footer } from '~/components/Layouts/Footer'
import { Router } from '~/routers/Router'
import { Sidebar } from '~/components/Layouts/Sidebar'

export const Layout = () => {
  return (
    <Box
      sx={{
        background: '#dfedfa url(https://www.affpaying.com/img/s_html.png) repeat-x ',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
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
      </Container>

      <Footer />
    </Box>
  )
}
