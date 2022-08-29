import {
  Divider,
  Grid,
  Typography,
  Stack,
  Box,
  Paper,
  Menu,
  MenuItem,
  List,
  ListItem
} from '@mui/material'
import { useState } from 'react'
import { AlibabaText } from '.'
import { red } from '~/styles/colors'
import Circel from '~/assets/svgs/circle.svg'

import { Button } from '~/components/Buttons'
import { grey } from '@mui/material/colors'

function Reels() {
  const topWebsite = [
    {
      name: 'MyBid',
      avatar: 'https://apimg.net/sponsors/circle/c78a6d37510f1083975e7bfe0c89bb9d.jpg',
      num_of_review: 14,
      rate: 5
    },
    {
      name: 'EvaDav',
      avatar: 'https://apimg.net/sponsors/circle/ed3d74a40fa6819feeb63777b5e7886a.jpg',
      num_of_review: 14,
      rate: 5
    },
    {
      name: 'LosPollos',
      avatar: 'https://apimg.net/sponsors/circle/8bd51c64d0efddbff360c1e899c2b3a8.jpg',
      num_of_review: 14,
      rate: 5
    },
    {
      name: 'Adverten',
      avatar: 'https://apimg.net/sponsors/circle/277bd70928b8ba5f7a44c0ac6d70e8dd.jpg',
      num_of_review: 14,
      rate: 5
    },
    {
      name: 'Neogara',
      avatar: 'https://apimg.net/sponsors/circle/9c16011d506ba267fea74ae8b3bcfa53.jpg',
      num_of_review: 14,
      rate: 5
    }
  ]

  const [open, setOpen] = useState(true)

  const [focusWebsite, setFocusWebsite] = useState(1)
  return (
    <Grid container component={Paper} elevation={4}>
      <Grid item xs={12} sm={4} sx={{ backgroundColor: 'white' }}>
        <Grid container sx={{ height: '100%' }}>
          <Grid item xs={6} sx={{ height: '100%' }}>
            <List disablePadding sx={{ borderRight: `1px solid ${grey[200]}`, height: '100%' }}>
              {topWebsite.map((item, index) => (
                <ListItem
                  divider={index !== topWebsite.length - 1}
                  key={index}
                  sx={{
                    height: `${100 / topWebsite.length}%`,
                    borderBottom: index !== topWebsite.length - 1 ? `1px solid ${grey[100]}` : '',
                    alignItem: 'center',
                    backgroundColor: index === focusWebsite ? grey[100] : '',

                    '&:hover': {
                      backgroundColor: grey[100],
                      cursor: 'pointer'
                    }
                  }}
                  onClick={() => setFocusWebsite(index)}
                >
                  <Box component={Stack} direction="row" ml={{ xs: 2, sm: 0 }}>
                    <img
                      style={{ width: '18px', height: '18px' }}
                      src={item.avatar}
                      alt="website"
                    />
                    <AlibabaText
                      sx={{
                        marginLeft: { xs: '16px', md: '8px' },
                        opacity: index === focusWebsite ? 1 : 0.4,
                        '&:hover': {
                          opacity: 1
                        }
                      }}
                    >
                      {item.name}
                    </AlibabaText>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={6}>
            <Stack py={2}>
              <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                <img
                  style={{ width: '28px', height: '28px' }}
                  src={topWebsite[focusWebsite].avatar}
                  alt="website"
                />
                <Typography
                  sx={{
                    fontWeight: 600,
                    opacity: 0.4,
                    fontSize: '14px',
                    fontFamily: 'alibaba-sans, sans-serif'
                  }}
                >
                  {topWebsite[focusWebsite].name}
                </Typography>
              </Stack>
              <Box sx={{ width: '100%', textAlign: 'center', py: '0.75rem', position: 'relative' }}>
                <Box component="img" src={Circel} sx={{ width: '50px', height: '50px' }} />
                <Typography
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '0.6rem'
                  }}
                >
                  5
                </Typography>
              </Box>
              <Box sx={{ fontSize: '12px', textAlign: 'center', fontWeight: '600', py: '0.75rem' }}>
                <span style={{ fontWeight: '600' }}>4 Reviews</span>
                <span> / </span>
                <span style={{ color: red['orange'] }}>5</span>
              </Box>
              <Button>Details</Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={8}>
        <img
          style={{ width: '100%', height: 'auto' }}
          src="https://apimg.net/slider/howto-setup-tracker-mylead-546x234.jpg"
          alt="website"
        />
      </Grid>
    </Grid>
  )
}

export default Reels
