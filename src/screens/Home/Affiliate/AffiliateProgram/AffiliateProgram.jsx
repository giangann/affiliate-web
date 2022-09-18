import React from 'react'
import { useQuery } from 'react-query'
import { Grid, Stack, Typography } from '@mui/material'
import { Button } from '~/components/Buttons'
import { getAllWebsites } from '~/apis'
import { AffiliateProgramItem } from '~/screens/Home'
import { ListSkeleton } from '~/components/Skeleton'
import { baseColor } from '~/styles'
import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { useNavigate } from 'react-router-dom'
import { NETWORK_TYPE } from '~/libs/utils'

const AffiliateProgram = () => {
  const navigate = useNavigate()

  const {
    isLoading,
    error,
    data: allWebsites
  } = useQuery(['allWebsites', { type: NETWORK_TYPE['PROGRAMS'] }], getAllWebsites)

  return (
    <React.Fragment>
      {isLoading ? (
        <ListSkeleton />
      ) : (
        <>
          <BoxWithHeader
            mainColor={baseColor.yellow}
            data={allWebsites?.slice(0, 5)}
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
            footer={() => (
              <div className="d-flex justify-content-center pt-3">
                <Button
                  sx={{
                    color: '#2779bd',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}
                  className="ml-3 rounded px-1"
                  onClick={() => navigate('/affiliate-programs')}
                >
                  See more offers on affplus
                </Button>
              </div>
            )}
          >
            <AffiliateProgramItem />
          </BoxWithHeader>
        </>
      )}
    </React.Fragment>
  )
}

export { AffiliateProgram }
