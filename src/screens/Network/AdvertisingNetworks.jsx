import React, { useEffect } from 'react'
import { getWebsiteByType } from '~/apis'
import { BoxWithPagination } from '~/components/Pagination'
import AlgoAffiliatesImg from '~/assets/images/algo-650x80-u.jpg'
import { AdvertisingNetworkItem } from '~/screens/Home'
import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { Grid, Typography, Stack } from '@mui/material'
import { baseColor } from '~/styles'
import { NETWORK_TYPE } from '~/libs/utils'

export const AdvertisingNetworks = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <BoxWithPagination
        api={getWebsiteByType}
        paramsApi={{ type: NETWORK_TYPE['ADVERTISER'] }}
        removePadding={true}
      >
        <BoxWithHeader
          mainColor={baseColor.orange}
          title={() => (
            <Grid container>
              <Stack direction="row" alignItems="center" gap={1} paddingY={3}>
                <Typography
                  variant="h1"
                  sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}
                >
                  Advertising Networks
                </Typography>
              </Stack>
            </Grid>
          )}
          restOfHeader={() => (
            <img
              className="block"
              style={{ width: '100%', marginTop: '1rem' }}
              src={AlgoAffiliatesImg}
              alt="Algo Affiliates"
            />
          )}
        >
          <AdvertisingNetworkItem mainColor={baseColor.lightRed} />
        </BoxWithHeader>
      </BoxWithPagination>
    </>
  )
}
