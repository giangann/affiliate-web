import React, { useState, cloneElement, useEffect } from 'react'
import { Stack, Box, Paper, Container } from '@mui/material'
import { useQuery } from 'react-query'
import { Pagination } from 'react-bootstrap'
import { getListComments } from '~/apis'
import { ListSkeleton } from '../Skeleton'
import { ContactSupport } from '@mui/icons-material'

export const BoxWithPagination = ({ children, ...props }) => {
  const { pageSize } = props
  const [pageIndex, setPageIndex] = useState(1)

  const [paginationData, setPaginationData] = useState([])
  // useQuery to call api here: (with pageSize and pageIndex)
  const { data, isLoading, isError, refetch } = useQuery('pagination', () =>
    props.api(Number(props?.id), pageIndex)
  )
  //

  useEffect(() => {
    if (!isLoading) {
      refetch()
    }
  }, [props.refetchBoxComment])

  const handleClick = (e) => {
    let value = 0

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

  let items = []

  const total_pages = data?.meta?.pagination?.total_pages
  if (total_pages !== 1) {
    for (let item = 0; item < total_pages; item++) {
      items.push(
        <Pagination.Item key={item} onClick={(e) => handleClick(e)} active={item === pageIndex - 1}>
          {item + 1}
        </Pagination.Item>
      )
    }
  }
  return (
    <Paper elevation={4} sx={{ padding: '16px' }}>
      {isLoading ? (
        <ListSkeleton />
      ) : isError ? (
        <h1>Error...</h1>
      ) : (
        cloneElement(children, { data: data.data, refetch })
      )}

      <Box
        sx={{
          marginTop: '16px',
          justifyContent: 'center',
          flex: 1
        }}
      >
        <Pagination className="d-flex justify-content-center">
          {/* <Pagination.First onClick={(e) => handleClick(e)} />
          <Pagination.Prev onClick={(e) => handleClick(e)} /> */}
          {items}
          {/* <Pagination.Next onClick={(e) => handleClick(e)} />
          <Pagination.Last onClick={(e) => handleClick(e)} /> */}
        </Pagination>
      </Box>
    </Paper>
  )
}
