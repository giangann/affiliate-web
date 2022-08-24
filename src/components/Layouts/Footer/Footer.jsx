import { Button as MyButton } from '~/components/Buttons'
import { Box, Container, Divider, Grid, Hidden, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { silver } from '~/constants/color'
import { AlibabaText } from '~/screens/Home'

function Footer() {
  const siteLinks = [
    {
      name: 'Reviews',
      path: ''
    },
    {
      name: 'Affiliate Offers',
      path: ''
    },
    {
      name: 'Market News',
      path: ''
    },
    {
      name: 'Resources',
      path: ''
    },
    {
      name: 'Blog',
      path: ''
    },
    {
      name: 'Affiliate Networks',
      path: ''
    },
    {
      name: 'Advertising Networks',
      path: ''
    },
    {
      name: 'Affiliate Programs',
      path: ''
    },
    {
      name: 'Add Network/Program',
      path: ''
    },
    {
      name: 'Contact',
      path: ''
    }
  ]

  const industryFriends = [
    {
      name: 'Alpha Affiliates',
      path: ''
    },
    {
      name: 'PrivateCPA',
      path: ''
    },
    {
      name: 'Leadbit',
      path: ''
    },
    {
      name: 'Algo-Affiliates',
      path: ''
    },
    {
      name: 'MyLead',
      path: ''
    },
    {
      name: 'Olavivo',
      path: ''
    },
    {
      name: 'CPAFULL',
      path: ''
    },
    {
      name: 'Profit Pixels',
      path: ''
    },
    {
      name: 'Mostbet Partners',
      path: ''
    },
    {
      name: 'LosPollos',
      path: ''
    },
    {
      name: 'Dynu In Media',
      path: ''
    },
    {
      name: 'AdsEmpire',
      path: ''
    }
  ]

  const footerLinks = [
    {
      name: 'Home',
      path: ''
    },
    {
      name: 'About',
      path: ''
    },
    {
      name: 'Advertise',
      path: ''
    },
    {
      name: 'Add Network',
      path: ''
    },
    {
      name: 'Privacy Policy',
      path: ''
    },
    {
      name: 'Contact',
      path: ''
    }
  ]
  return (
    <Box sx={{ backgroundColor: '#12283A' }} py={2}>
      <Container>
        <Grid container spacing={{ xs: 4, md: 2 }} justifyContent="space-between">
          <Grid item xs={12} md={3.5}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <AlibabaTitleText variant="h6">SITE LINKS</AlibabaTitleText>
                <Box sx={{ width: '30px', height: '4px', backgroundColor: '#FF6600' }} />
              </Grid>

              <Grid item xs={6}>
                <Stack spacing={1}>
                  {siteLinks.map((item, index) =>
                    index % 2 === 0 ? (
                      <AlibabaFooterNormalText key={index}>{item.name}</AlibabaFooterNormalText>
                    ) : null
                  )}
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack spacing={1}>
                  {siteLinks.map((item, index) =>
                    index % 2 !== 0 ? (
                      <AlibabaFooterNormalText key={index}>{item.name}</AlibabaFooterNormalText>
                    ) : null
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Divider
              style={{ width: '2px', height: '230px', backgroundColor: 'white' }}
              orientation="vertical"
              flexItem
              variant="middle"
            />
          </Hidden>

          <Grid item xs={12} md={3.5}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <AlibabaTitleText variant="h6">INDUSTRY FRIENDS</AlibabaTitleText>
                <Box sx={{ width: '30px', height: '4px', backgroundColor: '#FF6600' }} />
              </Grid>
              <Grid item xs={6}>
                <Stack spacing={1}>
                  {industryFriends.map((item, index) =>
                    index % 2 === 0 ? (
                      <AlibabaFooterNormalText key={index}>{item.name}</AlibabaFooterNormalText>
                    ) : null
                  )}
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack spacing={1}>
                  {industryFriends.map((item, index) =>
                    index % 2 !== 0 ? (
                      <AlibabaFooterNormalText key={index}>{item.name}</AlibabaFooterNormalText>
                    ) : null
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Divider
              style={{ width: '2px', height: '230px', backgroundColor: 'white' }}
              orientation="vertical"
              flexItem
              variant="middle"
            />
          </Hidden>

          <Grid item xs={12} md={3.5}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <AlibabaTitleText variant="h6">CONNECT WITH US</AlibabaTitleText>
                <Box sx={{ width: '30px', height: '4px', backgroundColor: '#FF6600' }} />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex' }}>
                  <input
                    style={{
                      flex: 1,
                      outline: 'none',
                      border: 'none',
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.75rem'
                    }}
                    placeholder="Enter your email address"
                  />
                  <MyButton variant="contained" type="button-red">
                    Subcribe
                  </MyButton>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <AlibabaFooterNormalText sx={{ opacity: 0.4 }}>
              Copyright © 2010-2022 Affpaying.com All rights reserved.
            </AlibabaFooterNormalText>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={2} flexWrap={{ xs: 'wrap', md: 'unset' }}>
              {footerLinks.map((item, index) => (
                <AlibabaFooterNormalText key={index} sx={{ opacity: 0.4 }}>
                  {item.name}
                </AlibabaFooterNormalText>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

const AlibabaTitleText = styled(Typography)({
  color: silver[100],
  fontFamily: 'alibaba-sans',
  fontWeight: 600,
  fontSize: '20px',
  // borderBottom:'2px solid #FF6600',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: -16,
    top: 6,
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#FF6600',
    lineHeight: '2px'
  }
})
const AlibabaFooterNormalText = styled(Typography)({
  color: silver[500],
  fontSize: '14px',
  fontFamily: 'alibaba-sans',
  fontWeight: 600
})

export { Footer }
