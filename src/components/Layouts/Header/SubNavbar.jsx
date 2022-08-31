import ReviewsIcon from '@mui/icons-material/Reviews'
import StorageIcon from '@mui/icons-material/Storage'
import FeedIcon from '@mui/icons-material/Feed'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion'
import ForumIcon from '@mui/icons-material/Forum'
import { Button, Grid, MenuItem, styled } from '@mui/material'
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

export const SubNavbar = () => {
  const { user } = useAuth()

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

  const navigate = useNavigate()

  return (
    <AppBar sx={{ backgroundColor: baseColor.blue, marginBottom: '16px' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'flex-start' }}>
          <ButtonWithDropdown />
          <Search />
        </Toolbar>
      </Container>
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
