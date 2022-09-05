import React, { useEffect } from 'react'
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
import { getCategories } from '~/apis'
import { useUpdateAtom } from 'jotai/utils'
import { websitesAtom } from '~/libs/auth'
import { useNavigate } from 'react-router-dom'

function ButtonWithDropdown({ props }) {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const [categoriesItem, setCategoriesItem] = React.useState([])
  const setWebsites = useUpdateAtom(websitesAtom)

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleChoseCategories = (item) => {
    setAnchorEl(null)
    // setWebsites(item?.websites)
    navigate(`/affiliate-networks/category/${item?.id}`)
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  useEffect(() => {
    getCategories().then((res) => setCategoriesItem(res.data))
  }, [])

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
        {categoriesItem &&
          categoriesItem.map((item, index) =>
          <CategoryMenuItem
          key={index}
          onClick={() => {
            handleChoseCategories(item)
          }}
          alignItem="center"
          gap={2}
        >
          <ShoppingCartOutlinedIcon sx={{ fontSize: 16 }} />
          <AlibabaText fontWeight={600} ml={2}>
            {item.name} ({item.websites.length})
          </AlibabaText>
        </CategoryMenuItem>)}
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
  padding: '18px',
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
