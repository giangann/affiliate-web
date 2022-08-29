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
import { Box, Button, Divider, Grid, Hidden, Menu, MenuItem, Stack, styled } from '@mui/material'
import React from 'react'
import { AlibabaText } from '~/screens/Home'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import AdbIcon from '@mui/icons-material/Adb'

import { orange } from '@mui/material/colors'
import { baseColor } from '~/styles'

export const Navbar = () => {
  const pages = ['Products', 'Pricing', 'Blog']
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout']
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
  // const [anchorEl, setAnchorEl] = React.useState(null)
  // const [anchorElNav, setAnchorElNav] = React.useState(null)

  // const open = Boolean(anchorEl)
  // const openNav = Boolean(anchorElNav)

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget)
  // }

  // const handleClickNav = (event) => {
  //   setAnchorElNav(event.currentTarget)
  // }
  // const handleClose = () => {
  //   setAnchorEl(null)
  //   setAnchorElNav(null)
  // }

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    // <Grid container alignItem="center">
    //   <AlignItemGrid item xs={5} sm={3} md={2}>
    //     <BootstrapButton
    //       startIcon={<MenuIcon />}
    //       aria-controls={open ? 'basic-menu' : undefined}
    //       onClick={handleClick}
    //     >
    //       <AlibabaText
    //         sx={{
    //           fontSize: { xs: '12px', sm: '16px' },
    //           whiteSpace: 'nowrap',
    //           fontFamily: 'Open Sans !important'
    //         }}
    //       >
    //         All categories
    //       </AlibabaText>
    //     </BootstrapButton>
    //     <Menu
    //       id="basic-menu"
    //       anchorEl={anchorEl}
    //       open={open}
    //       onClose={handleClose}
    //       MenuListProps={{
    //         'aria-labelledby': 'basic-button'
    //       }}
    //       sx={{
    //         '& .css-6hp17o-MuiList-root-MuiMenu-list': {
    //           padding: 0
    //         }
    //       }}
    //     >
    //       {categoriesItem.map((item, index) => (
    //         <CategoryMenuItem key={index} onClick={handleClose} alignItem="center" gap={2}>
    //           {item.icon}
    //           <AlibabaText fontWeight={600} ml={2}>
    //             {item.name} ({item.amount})
    //           </AlibabaText>
    //         </CategoryMenuItem>
    //       ))}
    //     </Menu>
    //   </AlignItemGrid>

    //   <AlignItemGrid item xs={6} sm={8} md={3.5} sx={{ justifyContent: 'center' }}>
    //     <Box position="relative" width={{ xs: '100%', sm: '90%' }} alignSelf="center">
    //       <input
    //         type="text"
    //         placeholder="Search affiliate network"
    //         style={{
    //           width: '100%',
    //           padding: '4px 10px',
    //           borderRadius: '4px',
    //           fontSize: '12px',
    //           minWidth: '150px'
    //         }}
    //       />
    //       <SearchIcon
    //         sx={{
    //           position: 'absolute',
    //           right: '4px',
    //           top: '4px',
    //           color: '#3490DC',
    //           padding: '2px',
    //           '&:hover': {
    //             cursor: 'pointer'
    //           }
    //         }}
    //       />
    //     </Box>
    //   </AlignItemGrid>

    // <AlignItemGrid item xs={1} md={6.5} justifyContent="space-around">
    //   <Hidden mdDown>
    //     {navBarItem.map((item, index) => (
    //       <React.Fragment key={index}>
    //         <Stack direction="row" spacing={0.5} justifyContent="center">
    //           {item.icon}
    //           <AlibabaText>{item.name}</AlibabaText>
    //         </Stack>
    //         <Divider orientation="vertical" />
    //       </React.Fragment>
    //     ))}
    //   </Hidden>
    //   <Hidden mdUp>
    //     <MenuIcon
    //       anchorEl={anchorElNav}
    //       onClose={handleClose}
    //       onClick={handleClickNav}
    //       aria-controls={open ? 'basic-menu-2' : undefined}
    //     />
    //     <Menu
    //       id="basic-menu-2"
    //       anchorEl={anchorElNav}
    //       open={openNav}
    //       onClose={handleClose}
    //       MenuListProps={{
    //         'aria-labelledby': 'basic-button'
    //       }}
    //       sx={{
    //         '& .css-6hp17o-MuiList-root-MuiMenu-list': {
    //           padding: 0
    //         }
    //       }}
    //     >
    //       {navBarItem.map((item, index) => (
    //         <CategoryMenuItem key={index} onClick={handleClose} alignItem="center" gap={2}>
    //           {item.icon}
    //           <AlibabaText fontWeight={600} ml={2}>
    //             {item.name}
    //           </AlibabaText>
    //         </CategoryMenuItem>
    //       ))}
    //     </Menu>
    //   </Hidden>
    // </AlignItemGrid>
    // </Grid>

    <AppBar sx={{ backgroundColor: baseColor.blue }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navBarItem.map((item) => (
              <Button
                key={item}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
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
  backgroundColor: baseColor.orangeBtn,
  maxHeight: '28px',
  borderRadius: '2px',
  borderColor: baseColor.orangeBtn,
  '&:hover': {
    backgroundColor: baseColor.lightOrangeBtn,
    borderColor: baseColor.lightOrangeBtn,
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: baseColor.orangeBtn,
    borderColor: baseColor.orangeBtn
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
