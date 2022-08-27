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
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Hidden,
  Menu,
  MenuItem,
  Paper,
  Stack,
  styled
} from '@mui/material'
import React from 'react'
import { AlibabaText } from '~/screens/Home'
import { Navbar } from 'react-bootstrap'

import { orange } from '@mui/material/colors'

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
      icon: <ShoppingCartOutlinedIcon sx={{ fontSize: 16 }} />,
      amount: 254
    },
    {
      name: 'eCommerce',
      icon: <FlightTakeoffOutlinedIcon sx={{ fontSize: 16 }} />,
      amount: 22
    },
    {
      name: 'eCommerce',
      icon: <StayCurrentPortraitOutlinedIcon sx={{ fontSize: 16 }} />,
      amount: 7
    },
    {
      name: 'eCommerce',
      icon: <FavoriteBorderOutlinedIcon sx={{ fontSize: 16 }} />,
      amount: 389
    },
    {
      name: 'eCommerce',
      icon: <ShoppingCartOutlinedIcon sx={{ fontSize: 16 }} />,
      amount: 254
    },
    {
      name: 'eCommerce',
      icon: <FlightTakeoffOutlinedIcon sx={{ fontSize: 16 }} />,
      amount: 22
    },
    {
      name: 'eCommerce',
      icon: <StayCurrentPortraitOutlinedIcon sx={{ fontSize: 16 }} />,
      amount: 7
    },
    {
      name: 'eCommerce',
      icon: <FavoriteBorderOutlinedIcon sx={{ fontSize: 16 }} />,
      amount: 389
    },
    {
      name: 'eCommerce',
      icon: <ShoppingCartOutlinedIcon sx={{ fontSize: 16 }} />,
      amount: 254
    },
    {
      name: 'eCommerce',
      icon: <FavoriteBorderOutlinedIcon sx={{ fontSize: 16 }} />,
      amount: 389
    },
    {
      name: 'eCommerce',
      icon: <ShoppingCartOutlinedIcon sx={{ fontSize: 16 }} />,
      amount: 254
    },
    {
      name: 'eCommerce',
      icon: <FavoriteBorderOutlinedIcon sx={{ fontSize: 16 }} />,
      amount: 389
    },
    {
      name: 'eCommerce',
      icon: <ShoppingCartOutlinedIcon sx={{ fontSize: 16 }} />,
      amount: 254
    },
    {
      name: 'eCommerce',
      icon: <FlightTakeoffOutlinedIcon sx={{ fontSize: 16 }} />,
      amount: 22
    },
    {
      name: 'eCommerce',
      icon: <StayCurrentPortraitOutlinedIcon sx={{ fontSize: 16 }} />,
      amount: 7
    },
    {
      name: 'eCommerce',
      icon: <FavoriteBorderOutlinedIcon sx={{ fontSize: 16 }} />,
      amount: 389
    }
  ]

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const open = Boolean(anchorEl)
  const openNav = Boolean(anchorElNav)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClickNav = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setAnchorElNav(null)
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

        {/* navbar */}
        <Grid
          component={Paper}
          elevation={2}
          item
          xs={12}
          height="47px"
          mb={2}
          sx={{
            backgroundColor: '#3779B0',
            color: 'white',
            borderRadius: '0px',
            position: 'relative'
          }}
        >
          <Navbar bg="green">
            <Grid container>
              <AlignItemGrid item xs={5} sm={3} md={2}>
                <BootstrapButton
                  startIcon={<MenuIcon />}
                  aria-controls={open ? 'basic-menu' : undefined}
                  onClick={handleClick}
                >
                  <AlibabaText
                    sx={{
                      fontSize: { xs: '12px', sm: '16px' },
                      whiteSpace: 'nowrap',
                      fontFamily: 'Open Sans !important'
                    }}
                  >
                    All categories
                  </AlibabaText>
                </BootstrapButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button'
                  }}
                  sx={{
                    '& .css-6hp17o-MuiList-root-MuiMenu-list': {
                      padding: 0
                    }
                  }}
                >
                  {categoriesItem.map((item, index) => (
                    <CategoryMenuItem key={index} onClick={handleClose} alignItem="center" gap={2}>
                      {item.icon}
                      <AlibabaText fontWeight={600} ml={2}>
                        {item.name} ({item.amount})
                      </AlibabaText>
                    </CategoryMenuItem>
                  ))}
                </Menu>
              </AlignItemGrid>

              <AlignItemGrid item xs={6} sm={8} md={3.5} sx={{ justifyContent: 'center' }}>
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

              <AlignItemGrid item xs={1} md={6.5} justifyContent="space-around">
                <Hidden mdDown>
                  {navBarItem.map((item, index) => (
                    <React.Fragment key={index}>
                      <Stack direction="row" spacing={0.5} justifyContent="center">
                        {item.icon}
                        <AlibabaText>{item.name}</AlibabaText>
                      </Stack>
                      <Divider orientation="vertical" />
                    </React.Fragment>
                  ))}
                </Hidden>
                <Hidden mdUp>
                  <MenuIcon
                    anchorEl={anchorElNav}
                    onClose={handleClose}
                    onClick={handleClickNav}
                    aria-controls={open ? 'basic-menu-2' : undefined}
                  />
                  <Menu
                    id="basic-menu-2"
                    anchorEl={anchorElNav}
                    open={openNav}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button'
                    }}
                    sx={{
                      '& .css-6hp17o-MuiList-root-MuiMenu-list': {
                        padding: 0
                      }
                    }}
                  >
                    {navBarItem.map((item, index) => (
                      <CategoryMenuItem
                        key={index}
                        onClick={handleClose}
                        alignItem="center"
                        gap={2}
                      >
                        {item.icon}
                        <AlibabaText fontWeight={600} ml={2}>
                          {item.name}
                        </AlibabaText>
                      </CategoryMenuItem>
                    ))}
                  </Menu>
                </Hidden>
              </AlignItemGrid>
            </Grid>
          </Navbar>
        </Grid>
      </Grid>
    </Container>
  )
}

const AlignItemGrid = styled(Grid)({
  display: 'flex',
  alignItems: 'center'
})

const BootstrapButton = styled(Button)(({ theme }) => ({
  width: '90%',
  marginLeft: '16px',
  color: 'white',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: { xs: '2px 4px', md: '6px 12px' },
  border: '1px solid',
  lineHeight: 0.5,
  backgroundColor: '#FE6330',
  maxHeight: '28px',
  borderColor: orange['A400'],
  '&:hover': {
    backgroundColor: orange[700],
    borderColor: orange[700],
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: orange[700],
    borderColor: orange['A700']
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(239,108,0,.5)'
  },

  [theme.breakpoints.down('sm')]: {
    marginLeft: '8px'
  }
}))

const CategoryMenuItem = styled(MenuItem)(({ theme }) => ({
  borderBottom: 'dashed 1px grey',
  opacity: 0.5,
  '&:hover': {
    opacity: 1
  },

  padding: '12px 16px',
  [theme.breakpoints.down('sm')]: {
    padding: '8px 16px'
  }
}))

export { Header }
