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
  Divider,
  Grid,
  Hidden,
  Link,
  Menu,
  MenuItem,
  Stack,
  styled,
  useRadioGroup
} from '@mui/material'
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
import logo from '~/assets/images/affiliate/logo.png'
import logo2 from '~/assets/images/affiliate/logo2.png'
import logo4 from '~/assets/images/affiliate/logo4.svg'
import { LoginDialog } from '~/components/Dialogs/LoginDialog'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '~/libs/hooks/useAuth'
import { Search } from './Search'
import ButtonWithDropdown from '~/components/Buttons/ButtonWithDropdown'

export const Navbar = () => {
  const { user } = useAuth()

  console.log('user by useAuth', user)
  const pages = ['Products', 'Pricing', 'Blog']
  const settings = ['Profile', 'Account', 'Dashboard', 'Login']
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
  const [openDialog, setOpenDialog] = React.useState(null)

  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleClickUserMenu = (index) => {
    if (index === settings.indexOf('Login')) {
      setOpenDialog(true)
    }
    if (index === settings.indexOf('Dashboard')) {
      navigate('/dashboard')
    }
    console.log('index', index)
    setAnchorElUser(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <AppBar sx={{ backgroundColor: baseColor.blue, marginBottom: '16px' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Hidden mdDown>
            <Link href="/">
              <Box
                component="img"
                src={logo4}
                sx={{
                  color: 'white',
                  height: '80px',
                  width: 'auto',
                  display: { xs: 'none', md: 'flex' }
                }}
              />
            </Link>
          </Hidden>
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
          <ButtonWithDropdown />
          <Box
            component="img"
            src={logo4}
            sx={{
              color: 'white',
              height: '80px',
              width: 'auto',
              display: { xs: 'flex', md: 'none' }
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {navBarItem.map((item) => (
              <Button
                key={item}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: 900 }}
              >
                {item.name}
              </Button>
            ))}
            {/* <Select /> */}
          </Box>
          <Box mr={1}>
            <Search />
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
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={() => handleClickUserMenu(index)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      {/* login dialog */}
      <LoginDialog open={openDialog} title="Login" handleClose={handleCloseDialog} />
    </AppBar>
  )
}
export const AlignItemGrid = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const BootstrapButton = styled(Button)(({ theme }) => ({
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
