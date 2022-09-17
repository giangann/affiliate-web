import React, { useEffect } from 'react'
import { getWebsiteByType } from '~/apis'
import { BoxWithPagination } from '~/components/Pagination'
import AlgoAffiliatesImg from '~/assets/images/algo-650x80-u.jpg'
import { AffiliateProgramItem } from '~/screens/Home'
import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { Grid, Typography, Stack } from '@mui/material'
import { baseColor } from '~/styles'
import { NETWORK_TYPE } from '~/libs/utils'

export const AffiliatePrograms = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <BoxWithPagination
        api={getWebsiteByType}
        paramsApi={{ type: NETWORK_TYPE['PROGRAMS'] }}
        removePadding={true}
      >
        <BoxWithHeader
          mainColor={baseColor.yellow}
          title={() => (
            <Grid container sx={{ borderBottom: '1px solid #ccc' }}>
              <Stack direction="row" alignItems="center" gap={1} paddingY={3}>
                <Typography
                  variant="h1"
                  sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}
                >
                  Affiliate Programs
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
          <AffiliateProgramItem mainColor={baseColor.yellow} />
        </BoxWithHeader>
      </BoxWithPagination>
    </>
  )
}
