import React, { useState, cloneElement, useEffect, useMemo } from 'react'
import { Stack, Box, Paper, Container } from '@mui/material'
import { useQuery } from 'react-query'
import { Pagination } from 'react-bootstrap'
import { getListComments } from '~/apis'
import { ListSkeleton } from '../Skeleton'
import { ContactSupport } from '@mui/icons-material'
import { isArray } from 'lodash'

export const BoxWithPagination = ({ children, ...props }) => {
  const [pageIndex, setPageIndex] = useState(1)
  const [_params, setParams] = useState(props.paramsApi)

  const [paginationData, setPaginationData] = useState([])
  // useQuery to call api here: (with pageSize and pageIndex)
  const { data, isLoading, isError, refetch } = useQuery('pagination' + pageIndex, () =>
    props.api({ page: pageIndex, per_page: 20, ..._params })
  )
  //

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pageIndex])

  useEffect(() => {
    if (!isLoading) {
      refetch()
    }
  }, [props.refetchBoxComment])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClick = (e) => {
    let value = 0
    if (!e.target.text) return

    switch (e.target.text) {
      case '»Last':
        value = data?.meta?.pagination?.total_pages
        break
      case '«First':
        value = 1
        break
      case '›Next':
        value = data?.meta?.pagination?.total_pages > pageIndex ? pageIndex + 1 : pageIndex
        break
      case '<Previous':
        value = 0 > pageIndex ? pageIndex - 1 : 0
        break
      default:
        value = parseInt(e.target.text)
        break
    }
    setPageIndex(value)
  }

  useEffect(() => {
    refetch()
  }, [pageIndex])

  const paginationItems = useMemo(() => {
    let items = []
    const total_pages = data?.meta?.pagination?.total_pages
    if (total_pages !== 1) {
      for (let item = 0; item < total_pages; item++) {
        if (total_pages < 5) {
          items.push(
            <PaginationItem
              key={item}
              onClick={handleClick}
              active={item === pageIndex - 1}
              index={item + 1}
            />
          )
        } else {
          switch (true) {
            case item === 0 || item === total_pages - 1:
              items.push(
                <PaginationItem
                  key={item}
                  onClick={handleClick}
                  active={item === pageIndex - 1}
                  index={item + 1}
                />
              )
              break
            case item <= pageIndex + 1 && item >= pageIndex - 3:
              items.push(
                <PaginationItem
                  key={item}
                  onClick={handleClick}
                  active={item === pageIndex - 1}
                  index={item + 1}
                />
              )
              break
            case item === pageIndex + 2 || item === pageIndex - 4:
              items.push(
                <span key={item} className="dot">
                  ...
                </span>
              )
              break
            default:
              break
          }
        }
      }
    }

    return items
  }, [data?.meta?.pagination?.total_pages, handleClick, pageIndex])

  // useEffect(() => {
  //   console.log(paginationItems)
  // }, [paginationItems])

  return (
    <Paper elevation={4} sx={{ padding: props.removePadding ? '0px' : '16px' }}>
      {isLoading ? (
        <ListSkeleton />
      ) : isError ? (
        <h1>Error...</h1>
      ) : (
        cloneElement(children, { data: isArray(data) ? data : data.data, refetch })
      )}

      <Box
        sx={{
          marginTop: '16px',
          justifyContent: 'center',
          flex: 1,
          paddingBottom: '4px'
        }}
      >
        <Pagination className="d-flex justify-content-center align-items-end pagination-sm">
          {/* <Pagination.First onClick={(e) => handleClick(e)} />
          <Pagination.Prev onClick={(e) => handleClick(e)} /> */}
          {paginationItems}
          {/* <Pagination.Next onClick={(e) => handleClick(e)} />
          <Pagination.Last onClick={(e) => handleClick(e)} /> */}
        </Pagination>
      </Box>
    </Paper>
  )
}

const PaginationItem = ({ onClick, active, index }) => {
  return (
    <Pagination.Item className="" onClick={onClick} active={active}>
      {index}
    </Pagination.Item>
  )
}
