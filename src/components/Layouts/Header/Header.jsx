import { Box, Container, Divider, Grid, Stack } from '@mui/material'
import React from 'react'
import ReviewsIcon from '@mui/icons-material/Reviews'
import { AlibabaText } from '~/screens/Home'
import { Button } from 'bootstrap'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import StayCurrentPortraitOutlinedIcon from '@mui/icons-material/StayCurrentPortraitOutlined'
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined'

function Header() {
  const navBarItem = [
    {
      name: 'Reviews',
      icon: <ReviewsIcon />
    },
    {
      name: 'Reviews',
      icon: <ReviewsIcon />
    },
    {
      name: 'Reviews',
      icon: <ReviewsIcon />
    },
    {
      name: 'Reviews',
      icon: <ReviewsIcon />
    },
    {
      name: 'Reviews',
      icon: <ReviewsIcon />
    }
  ]

  const categoriesItem = [
    {
      name: 'eCommerce',
      icon: <ShoppingCartOutlinedIcon />,
      number: 254
    },
    {
      name: 'eCommerce',
      icon: <FlightTakeoffOutlinedIcon />,
      number: 22
    },
    {
      name: 'eCommerce',
      icon: <StayCurrentPortraitOutlinedIcon />,
      number: 7
    },
    {
      name: 'eCommerce',
      icon: <FavoriteBorderOutlinedIcon />,
      number: 389
    },
    {
      name: 'eCommerce',
      icon: <ShoppingCartOutlinedIcon />,
      number: 254
    },
    {
      name: 'eCommerce',
      icon: <FlightTakeoffOutlinedIcon />,
      number: 22
    },
    {
      name: 'eCommerce',
      icon: <StayCurrentPortraitOutlinedIcon />,
      number: 7
    },
    {
      name: 'eCommerce',
      icon: <FavoriteBorderOutlinedIcon />,
      number: 389
    },
    {
      name: 'eCommerce',
      icon: <ShoppingCartOutlinedIcon />,
      number: 254
    },
    {
      name: 'eCommerce',
      icon: <FlightTakeoffOutlinedIcon />,
      number: 22
    },
    {
      name: 'eCommerce',
      icon: <StayCurrentPortraitOutlinedIcon />,
      number: 7
    },
    {
      name: 'eCommerce',
      icon: <FavoriteBorderOutlinedIcon />,
      number: 389
    }
  ]
  return (
    <Container sx={{ position: 'relative' }}>
      <Grid container rowGap={2}>
        <Grid item xs={4}>
          <Box
            sx={{
              background: 'url(https://www.affpaying.com/img/logobg.png) no-repeat',
              width: '711px',
              height: '355px',
              position: 'absolute',
              left: '-240px',
              zIndex: -1
            }}
          />
          <img
            src="https://www.affpaying.com/img/logo.png"
            style={{
              width: '235px',
              height: '90px'
            }}
            alt="logo"
          />
        </Grid>

        <Grid item xs={8} pt={2}>
          <img
            src="https://apimg.net/2020/Animated%20Banner_728x90_1_1.gif"
            alt="ads"
            style={{ width: '100%', height: '90px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            mb={1}
            sx={{
              background: 'url(https://www.affpaying.com/img/navbg.png) ',
              height: '47px',
              color: 'white',
              fontFamily: 'alibaba-sans'
            }}
            alignItems="center"
            spacing={2}
            justifyContent="space-between"
          >
            <Stack
              direction="row"
              alignItems="flex-end"
              spacing={2}
              ml={2}
              justifyContent="space-around"
              sx={{
                background: 'url(https://www.affpaying.com/img/catebg.png)',
                padding: '5px 15px',
                borderRadius: '4px',
                position: 'relative',
                top: '-3px'
              }}
            >
              <MenuIcon sx={{ position: 'relative', top: '2px' }} />
              <AlibabaText>All categories</AlibabaText>
            </Stack>
            <Box position="relative">
              <input
                type="text"
                placeholder="Search affiliate network"
                style={{
                  width: '300px',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}
              />
              <SearchIcon
                sx={{
                  position: 'absolute',
                  right: '10px',
                  top: '4px',
                  color: '#3490DC',
                  padding: '2px',
                  '&:hover': {
                    cursor: 'pointer'
                  }
                }}
              />
            </Box>

            {navBarItem.map((item, index) => (
              <React.Fragment>
                <Stack direction="row" spacing={0.5} key={index} justifyContent="center">
                  {item.icon}
                  <AlibabaText>{item.name}</AlibabaText>
                </Stack>
                <Divider orientation="vertical" />
              </React.Fragment>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

export { Header }
