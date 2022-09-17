import React, { useState } from 'react'
import { Box, Grid, Hidden, Container, styled } from '@mui/material'
import { Header } from '~/components/Layouts/Header'
import { Footer } from '~/components/Layouts/Footer'
import { Router } from '~/routers/Router'
import { Sidebar } from '~/components/Layouts/Sidebar'
import { useEffect } from 'react'
import { getBanners } from '~/apis'
import { BANNER } from '~/constants/name'

export const Layout = () => {
  const [listImages, setListImages] = useState([])

  useEffect(() => {
    getBanners().then((res) => {
      setListImages(res)
    })
  }, [])

  return (
    <Box
      sx={{
        backgroundColor: '#EEEEEE'
      }}
    >
      <Header listImages={listImages} />

      <ResponsiveContainer sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Router listBanner={listImages} />
          </Grid>

          <Hidden mdDown>
            <Grid item xs={4}>
              <Sidebar listBanner={listImages} />
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
