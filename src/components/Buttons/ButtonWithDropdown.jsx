import React from 'react'
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
import { AlibabaText } from '~/screens/Home'
import { Navbar } from 'react-bootstrap'

import { orange } from '@mui/material/colors'
import { AlignItemGrid } from '../Layouts/Header/Navbar'

function ButtonWithDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

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

  return (
    <AlignItemGrid>
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
  )
}

export default ButtonWithDropdown
const primaryBlueColor = '#0560AF'
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
  backgroundColor: primaryBlueColor,
  maxHeight: '28px',
  borderColor: primaryBlueColor,
  '&:hover': {
    backgroundColor: primaryBlueColor,
    borderColor: primaryBlueColor,
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: primaryBlueColor,
    borderColor: primaryBlueColor
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem #0560AF'
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
