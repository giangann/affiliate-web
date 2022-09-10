import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getWebsitesByCategoryId } from '~/apis'
import { BoxWithPagination } from '~/components/Pagination'
import { List } from '~/components/List'
import { FlexBoxAlignCenterJustifyBetween, FlexBoxAlignCenter } from '~/styles'
import AlgoAffiliatesImg from '~/assets/images/algo-650x80-u.jpg'
import { AffiliateNetworkItem, Filter } from '~/screens/Home'
import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { Grid, Typography, Avatar, Stack } from '@mui/material'
import { baseColor } from '~/styles'
import { Button } from '~/components/Buttons'
import { ReactComponent as DiamondIcon } from '~/assets/images/diamond.svg'

export const Category = () => {
  const { category_id } = useParams()
  const [filterValue, setFilterValue] = useState()

  return (
    <>
      <BoxWithPagination api={getWebsitesByCategoryId} id={Number(category_id)}>
        <BoxWithHeader
          mainColor={baseColor.blue}
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
                    Affiliate Networks
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
                  <Button variant="contained" type="button-blue">
                    Top Rated
                  </Button>
                  <Button variant="contained" type="button-gray">
                    Newest
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
        >
          <AffiliateNetworkItem mainColor={baseColor.blue} />
        </BoxWithHeader>
      </BoxWithPagination>
    </>
  )
}
