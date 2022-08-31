import React, { useState, useRef, useEffect } from 'react'
import { styled, alpha } from '@mui/material/styles'
import { InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useQuery } from 'react-query'
import { searchNetworks } from '~/apis'
import { Link } from 'react-router-dom'
import { Spin } from 'antd'
import { Menu, Dropdown } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import _ from 'lodash'
import { TextGrey } from '~/styles'
import AsyncSelect from 'react-select/async'
import './style.css'

const SearchContainer = styled('div')(({ theme }) => ({
  zIndex: 10,
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}))

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

export const Search = () => {
  const [searchText, setSearchText] = useState('')
  const [resultsSearch, setResultsSearch] = useState([])

  const [visibleDropDown, setVisibleDropDown] = useState(false)
  const [visibleIconLoading, setVisibleIconLoading] = useState(false)

  const { data, isLoading, refetch } = useQuery('search', () => searchNetworks(searchText))
  const [menu, setMenu] = useState(null)
  const inputRef = useRef(null)

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
    debounceSearch(e.target.value)

    setVisibleIconLoading(true)
  }

  const debounceSearch = useRef(
    _.debounce((nextValue) => {
      if (nextValue) {
        refetch()
        setVisibleDropDown(true)
        setVisibleIconLoading(false)
      } else {
        setVisibleIconLoading(false)
        setVisibleDropDown(false)
      }
    }, 1000)
  ).current

  useEffect(() => {
    if (data) {
      setResultsSearch(data)
    }
  }, [isLoading, data])

  useEffect(() => {
    setMenu(
      <Menu
        className={`menu-search ${!visibleDropDown ? 'hide' : ''}`}
        // className={`menu-search`}
        items={resultsSearch.map((item) => {
          return {
            label: (
              <Link
                to={`/websites/show/${item.id}`}
                onClick={handleOnClickMenuItem}
                className="menu-search-item"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  listStyle: 'none',
                  textDecoration: 'none',
                  background: 'white',
                  padding: '4px 8px',
                  '&:hover': {
                    background: '#f5f5f5'
                  }
                }}
              >
                <TextGrey>{item.name}</TextGrey>
              </Link>
            ),
            key: item.id
          }
        })}
      />
    )
  }, [resultsSearch, visibleDropDown])

  const handleOnClickMenuItem = () => {
    console.log('handleOnClickMenuItem')

    setVisibleDropDown(false)
    setSearchText('')
  }

  return (
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <Dropdown
        overlay={menu}
        // destroyPopupOnHide={true}
        visible={visibleDropDown}
        className="header__search__dropdown"
        overlayStyle={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}
        trigger={['click']}
      >
        <div
          className="header__search__inner"
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between',
            position: 'relative'
          }}
        >
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            ref={inputRef}
            value={searchText}
            onChange={handleSearchTextChange}
            onFocus={() => setVisibleDropDown(true)}
          />

          {visibleIconLoading ? <Spin indicator={antIcon} /> : null}
        </div>
      </Dropdown>
      {visibleDropDown ? (
        <div className="header__search__overlay" onClick={() => setVisibleDropDown(false)}></div>
      ) : null}
      {/* <AsyncSelect
        cacheOptions
        defaultOptions
        value={selectedValue}
        getOptionLabel={(e) => e.title}
        getOptionValue={(e) => e.id}
        loadOptions={resultsSearch}
        onInputChange={handleInputChange}
        onChange={handleChange}
      /> */}
    </SearchContainer>
  )
}
