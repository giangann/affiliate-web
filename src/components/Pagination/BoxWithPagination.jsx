import React, { useState } from 'react'
import { Stack, Box, Paper, Container } from '@mui/material'

import { Pagination } from 'react-bootstrap'

export const BoxWithPagination = ({ children, ...props }) => {
  const { pageSize } = props
  const [pageIndex, setPageIndex] = useState(0)

  const [paginationData, setPaginationData] = useState([])

  // useQuery to call api here: (with pageSize and pageIndex)

  //

  const handleClick = (e) => {
    console.log(e.target.text)
    let value = 0

    switch (e.target.text) {
      case '>>Last':
        console.log('match')
        break
      default:
        value = parseInt(e.target.text)
        break
    }
    setPageIndex(value)
  }

  let items = []
  for (let item = 0; item < 5; item++) {
    items.push(
      <Pagination.Item key={item} onClick={handleClick}>
        {item + 1}
      </Pagination.Item>
    )
  }
  return (
    <Paper elevation={4} sx={{ padding: '16px' }}>
      {children}

      <Box sx={{ marginTop: '16px' }}>
        <Pagination>
          <Pagination.First onClick={handleClick} />
          <Pagination.Prev onClick={handleClick} />
          {items}
          <Pagination.Next onClick={handleClick} />
          <Pagination.Last onClick={handleClick} />
        </Pagination>
      </Box>
    </Paper>
  )
}
