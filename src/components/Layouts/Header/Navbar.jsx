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
import { useNavigate } from 'react-router-dom'
import { useAuth } from '~/libs/hooks/useAuth'
import { Search } from './Search'
import ButtonWithDropdown from '~/components/Buttons/ButtonWithDropdown'
import { clearUserLocalStorage, getUserLocalStorage } from '~/libs/function/user'
import { ADMIN_EMAIL } from '~/constants/name'
import { validURL, validUrlRegex } from '~/libs/regex'

export const Navbar = () => {
  const userInfo = getUserLocalStorage()
  const isAdmin = userInfo?.email === ADMIN_EMAIL
  const isLoginned = userInfo

  const settings = isLoginned ? (isAdmin ? ['Dashboard', 'Logout'] : ['Logout']) : ['Login']
  const navBarItem = [
    {
      name: 'Reviews',
      icon: <ReviewsIcon />,
      path: 'https://www.affdaily.com/'
    },
    {
      name: 'Offers',
      icon: <StorageIcon />,
      path: 'https://www.affdaily.com/'
    },
    {
      name: 'News',
      icon: <FeedIcon />,
      path: 'https://www.affdaily.com/'
    },
    {
      name: 'Resources',
      path: '/resources',
      icon: <AutoAwesomeMotionIcon />
    },
    {
      name: 'Blog',
      icon: <ForumIcon />,
      path: 'https://www.affdaily.com/'
    }
  ]

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
    if (index === settings.indexOf('Logout')) {
      clearUserLocalStorage()
      localStorage.removeItem('user-token')
      navigate('/')
      window.location.reload()
    }
    setAnchorElUser(null)
  }
  const hanldeChooseElNav = (item) => {
    setAnchorElNav(null)
    // setWebsites(item?.websites)

    if (item.path.match(validUrlRegex)) {
      window.open(item.path)
    } else {
      navigate(`${item?.path}`)
    }
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <AppBar sx={{ backgroundColor: baseColor.blue, marginBottom: '16px' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Hidden mdDown>
            <Link href="/">
              <Box
                component="img"
                src={logo4}
                sx={{
                  color: 'white',
                  height: '80px',
                  width: 'auto',
                  display: 'flex'
                }}
              />
            </Link>
          </Hidden>
          <Hidden mdUp>
            <Box sx={{ display: 'flex' }}>
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
                {navBarItem.map((item) => (
                  <MenuItem key={item.name} onClick={() => hanldeChooseElNav(item)}>
                    <Typography textAlign="center">{item.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Hidden>

          <Hidden mdUp>
            <Link href="/">
              <Box
                component="img"
                src={logo4}
                sx={{
                  color: 'white',
                  height: '80px',
                  width: 'auto',
                  display: 'flex'
                }}
              />
            </Link>
          </Hidden>

          <Hidden mdDown>
            <Box sx={{ display: 'flex' }}>
              {navBarItem.map((item) => (
                <Button
                  key={item}
                  onClick={() => hanldeChooseElNav(item)}
                  sx={{ my: 2, color: 'white', display: 'block', fontWeight: 900 }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Hidden>

          <Hidden lgDown>
            <ButtonWithDropdown sxCustom={{ padding: '18px' }} />
          </Hidden>

          <Hidden lgDown>
            <Box mr={1}>
              <Search />
            </Box>
          </Hidden>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={userInfo?.imageUrl ?? '/static/images/avatar/2.jpg'}
                />
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
