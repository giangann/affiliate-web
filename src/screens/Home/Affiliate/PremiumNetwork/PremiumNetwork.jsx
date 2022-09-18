import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getAllFilter } from '~/apis'

import { Avatar, Grid, Stack, Typography } from '@mui/material'
import { Button } from '~/components/Buttons'

import { getAllWebsites } from '~/apis'
import { AffiliateNetworkItem } from '~/screens/Home'
import { ListSkeleton } from '~/components/Skeleton'

import { baseColor } from '~/styles'

import AlgoAffiliatesImg from '~/assets/images/algo-650x80-u.jpg'
import { ReactComponent as DiamondIcon } from '~/assets/images/diamond.svg'

import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NETWORK_TYPE } from '~/constants'

export const PremiumNetwork = () => {
  const navigate = useNavigate()
  const [allFilter, setAllFilter] = useState([])
  const [filterValue, setFilterValue] = useState({ type: NETWORK_TYPE['AFFILIATE'] })
  const {
    isLoading,
    error,
    data: allWebsites
  } = useQuery(['allWebsites', filterValue], getAllWebsites)

  useEffect(() => {
    getAllFilter().then((res) => {
      setAllFilter(res)
    })
  }, [])

  return (
    <>
      {isLoading ? (
        <ListSkeleton />
      ) : (
        <BoxWithHeader
          mainColor={baseColor.blue}
          data={allWebsites?.slice(0, 10)}
          allFilter={allFilter}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          title={() => (
            <Grid container>
              <Grid item xs={6} sx={{ justifyContent: 'center' }}>
                <Stack direction="row" alignItems="center" gap={1} paddingY={3}>
                  <Avatar sx={{ bgcolor: 'unset', width: '1.25rem', height: '1.25rem' }}>
                    <DiamondIcon />
                  </Avatar>
                  <Typography
                    variant="h1"
                    sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}
                  >
                    Premium Networks
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-end"
                  className="h-100"
                >
                  {/* <Button variant="contained" type="button-blue">
                      Top Rated
                    </Button> */}
                  <Button
                    variant="contained"
                    type="button-gray"
                    onClick={() => {
                      setFilterValue({})
                    }}
                  >
                    Reset filter
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          )}
          restOfHeader={() => (
            <>
              <img
                className="block"
                style={{ width: '100%' }}
                src={AlgoAffiliatesImg}
                alt="Algo Affiliates"
              ></img>
            </>
          )}
          footer={() => (
            <div className="d-flex justify-content-center pt-3">
              <Button
                sx={{
                  color: '#f60',
                  border: '1px solid #f60',
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}
                className="scale-sm ml-3 rounded px-1"
                onClick={() => navigate('/affiliate-networks')}
              >
                See more affiliate networks
              </Button>
            </div>
          )}
        >
          <AffiliateNetworkItem mainColor={baseColor.blue} />
        </BoxWithHeader>
      )}
    </>
  )
}
