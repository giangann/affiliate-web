import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import ReviewsIcon from '@mui/icons-material/Reviews'
import StorageIcon from '@mui/icons-material/Storage'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import StayCurrentPortraitOutlinedIcon from '@mui/icons-material/StayCurrentPortraitOutlined'
import FeedIcon from '@mui/icons-material/Feed'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion'
import ForumIcon from '@mui/icons-material/Forum'
import { Box, Container, Divider, Grid, Hidden, Stack, styled } from '@mui/material'
import React from 'react'
import { AlibabaText } from '~/screens/Home'

function Header() {
  const navBarItem = [
    {
      name: 'Reviews',
      icon: <ReviewsIcon />
    },
    {
      name: 'Offers',
      icon: <StorageIcon />
    },
    {
      name: 'News',
      icon: <FeedIcon />
    },
    {
      name: 'Resources',
      path: '/resources',
      icon: <AutoAwesomeMotionIcon />
    },
    {
      name: 'Blog',
      icon: <ForumIcon />
    }
  ]

  // {name, icon, amount }
  const categoriesItem = [
    {
      name: 'eCommerce',
      icon: <ShoppingCartOutlinedIcon />,
      amount: 254
    },
    {
      name: 'eCommerce',
      icon: <FlightTakeoffOutlinedIcon />,
      amount: 22
    },
    {
      name: 'eCommerce',
      icon: <StayCurrentPortraitOutlinedIcon />,
      amount: 7
    },
    {
      name: 'eCommerce',
      icon: <FavoriteBorderOutlinedIcon />,
      amount: 389
    },
    {
      name: 'eCommerce',
      icon: <ShoppingCartOutlinedIcon />,
      amount: 254
    },
    {
      name: 'eCommerce',
      icon: <FlightTakeoffOutlinedIcon />,
      amount: 22
    },
    {
      name: 'eCommerce',
      icon: <StayCurrentPortraitOutlinedIcon />,
      amount: 7
    },
    {
      name: 'eCommerce',
      icon: <FavoriteBorderOutlinedIcon />,
      amount: 389
    },
    {
      name: 'eCommerce',
      icon: <ShoppingCartOutlinedIcon />,
      amount: 254
    },
    {
      name: 'eCommerce',
      icon: <FlightTakeoffOutlinedIcon />,
      amount: 22
    },
    {
      name: 'eCommerce',
      icon: <StayCurrentPortraitOutlinedIcon />,
      amount: 7
    },
    {
      name: 'eCommerce',
      icon: <FavoriteBorderOutlinedIcon />,
      amount: 389
    }
  ]

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
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
        <Grid item xs={12} height="47px" mb={1}>
          <Grid
            container
            sx={{
              background: 'url(https://www.affpaying.com/img/navbg.png) ',
              color: 'white',
              fontFamily: 'alibaba-sans',
              height: '100%'
            }}

            // alignItems="center"
            // spacing={0}
            // justifyContent="space-between"
          >
            <AlignItemGrid item xs={5} iphone={4.5} samsung={4} sm={3} md={2}>
              <Stack
                direction="row"
                alignItems="flex-end"
                spacing={1}
                ml={{ xs: 1, md: 2 }}
                justifyContent="space-around"
                sx={{
                  background: 'url(https://www.affpaying.com/img/catebg.png)',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  position: 'relative',
                  top: '-3px',
                  maxWidth: '175px'
                }}
              >
                <MenuIcon
                  sx={{
                    position: 'relative',
                    top: { md: '2px' },
                    fontSize: { xs: 'small', md: 'medium' }
                  }}
                />
                <AlibabaText
                  sx={{
                    position: 'relative',
                    top: { xs: '2px', md: '2px' },
                    fontSize: { xs: '12px', md: '14px' }
                  }}
                >
                  All categories
                </AlibabaText>
              </Stack>
            </AlignItemGrid>
            <AlignItemGrid
              item
              xs={6}
              iphone={6.5}
              samsung={7}
              sm={8}
              md={3.5}
              sx={{ justifyContent: 'center' }}
            >
              <Box position="relative" width={{ xs: '100%', sm: '90%' }} alignSelf="center">
                <input
                  type="text"
                  placeholder="Search affiliate network"
                  style={{
                    width: '100%',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    minWidth: '150px'
                  }}
                />
                <SearchIcon
                  sx={{
                    position: 'absolute',
                    right: '4px',
                    top: '4px',
                    color: '#3490DC',
                    padding: '2px',
                    '&:hover': {
                      cursor: 'pointer'
                    }
                  }}
                />
              </Box>
            </AlignItemGrid>

            <AlignItemGrid item xs={1} md={6.5}>
              <Hidden mdDown>
                <Stack
                  direction="row"
                  height="100%"
                  alignItems="center"
                  spacing={{ md: 2, lg: 2.5 }}
                >
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
              </Hidden>
              <Hidden mdUp>
                <MenuIcon />
              </Hidden>
            </AlignItemGrid>
          </Grid>
          {/* <Stack
            direction="row"
            mb={1}
            sx={{
              background: 'url(https://www.affpaying.com/img/navbg.png) ',
              height: '47px',
              color: 'white',
              fontFamily: 'alibaba-sans'
            }}
            alignItems="center"
            spacing={0}
            justifyContent="space-between"
          >
            <Stack
              direction="row"
              alignItems="flex-end"
              spacing={1}
              ml={2}
              justifyContent="space-around"
              sx={{
                background: 'url(https://www.affpaying.com/img/catebg.png)',
                padding: '5px 10px',
                borderRadius: '4px',
                position: 'relative',
                top: '-3px',
                maxWidth: '175px'
              }}
            >
              <MenuIcon
                sx={{
                  position: 'relative',
                  top: { md: '2px' },
                  fontSize: { xs: 'small', md: 'medium' }
                }}
              />
              <AlibabaText
                sx={{
                  position: 'relative',
                  top: { xs: '2px', md: '2px' },
                  fontSize: { xs: '12px', md: '14px' }
                }}
              >
                All categories
              </AlibabaText>
            </Stack>

            <Box position="relative">
              <input
                type="text"
                placeholder="Search affiliate network"
                style={{
                  width: '10vw',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  minWidth: '150px'
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

            <Hidden mdDown>
              {navBarItem.map((item, index) => (
                <React.Fragment>
                  <Stack direction="row" spacing={0.5} key={index} justifyContent="center">
                    {item.icon}
                    <AlibabaText>{item.name}</AlibabaText>
                  </Stack>
                  <Divider orientation="vertical" />
                </React.Fragment>
              ))}
            </Hidden>
            <Hidden mdUp>
              <MenuIcon />
            </Hidden>
          </Stack> */}
        </Grid>
      </Grid>
    </Container>
  )
}

const AlignItemGrid = styled(Grid)({
  display: 'flex',
  alignItems: 'center'
})

export { Header }
