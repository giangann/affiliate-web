import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography
} from '@mui/material'
import PropTypes from 'prop-types'
import * as React from 'react'
import { Button } from '~/components/Buttons'
import { Stars } from '~/components/Star'
import { gray, silver } from '~/constants/color'
import { orange } from '~/styles'
import { TitleWithBorder } from '../Typographys'

const affiliateOfferField = [
  {
    label: 'Payout',
    value: '$ 8.50 CPA'
  },
  {
    label: 'Updated at',
    value: '2022-08-22'
  },
  {
    label: 'Category',
    value: 'Dating'
  },
  {
    label: 'GEO',
    value: '10 GEOs'
  }
]

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: '2.5rem 2rem 2.5rem 2rem'
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 0 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
}

const OfferDialog = (props) => {
  const { open, handleClose, children, title } = props

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          maxHeight: 'unset'
        }}
      >
        <DialogContent>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            <Typography variant="h3" sx={styledTitle}>
              {title}
            </Typography>
          </BootstrapDialogTitle>

          <Grid container spacing={4} className="mb-4">
            <Grid item xs={5}>
              <img
                className="offer-thumb block"
                width="100%"
                src="https://apimg.net/offers/l/no-img.jpg"
                alt="image1"
              />
            </Grid>

            <Grid item xs={7}>
              <Stack>
                <Grid container sx={{ paddingBottom: 2 }}>
                  <Grid item xs={5}>
                    <Button
                      sx={{
                        paddingX: 3,
                        color: 'white',
                        backgroundColor: orange[500],
                        '&:hover': { backgroundColor: orange[500] }
                      }}
                    >
                      Run offer
                    </Button>
                  </Grid>

                  <Grid item xs={7}>
                    <Button
                      sx={{
                        paddingX: 1,
                        border: '2px solid #3490dc',
                        '&:hover': { backgroundColor: '#3490dc', color: 'white' }
                      }}
                    >
                      Offer Details on Affplus
                    </Button>
                  </Grid>
                </Grid>

                {affiliateOfferField.map((item, index) => {
                  return (
                    <Grid
                      container
                      key={index}
                      sx={{ paddingY: 1, borderTop: '1px solid #dae1e7' }}
                    >
                      <Grid item xs={4}>
                        <Typography
                          component="span"
                          sx={{
                            fontSize: '0.75rem',
                            color: silver[500],
                            lineHeight: 1,
                            fontWeight: 'bold'
                          }}
                        >
                          {item.label}
                        </Typography>
                      </Grid>

                      <Grid item xs={8}>
                        <Typography
                          component="span"
                          sx={{
                            fontSize: '0.75rem',
                            lineHeight: 1,
                            fontWeight: 'bold'
                          }}
                        >
                          {item.value}
                        </Typography>
                      </Grid>
                    </Grid>
                  )
                })}
              </Stack>
            </Grid>
          </Grid>

          <Box>
             <TitleWithBorder title="DESCRIPTION"/>

            <Typography
              component="p"
              sx={{
                fontSize: '0.75rem',
                color: silver[500],
                lineHeight: 1.5,
                padding: 2,
                backgroundColor: '#f8fafc',
                fontWeight: 'bold'
              }}
            >
              Offer ID: 878 NortonLifeLock delivers comprehensive protection for your Cyber Safety.
              There are various products and packages inside, and users can choose different
              products following the tracking link. To ensure the prices correlate with actual
              products purchased, the Sales fire with dynamic price, so make sure to set amount in
              your postback, to get the cost correctly. Conversion flow: pixel fires on sale. The
              user goes to the landing page https://us.norton.com/products...
            </Typography>
          </Box>
        </DialogContent>
        <Stack
          direction="row"
          sx={{
            backgroundColor: '#f8fafc',
            paddingX: 5,
            paddingY: 3,
            justifyContent: 'space-between'
          }}
          alignItems="center"
          gap={2}
        >
          <Stack direction="row" gap={2}>
            <img
              className="network-logo block rounded-circle"
              width="32"
              height="32"
              src="https://apimg.net/networks/logo/19849-square.jpg"
              alt="1"
            />
            <Box>
              <Typography
                sx={{
                  fontSize: '0.825rem',
                  lineHeight: 1,
                  fontWeight: 'bold',
                  paddingBottom: 0.5
                }}
              >
                Zeydoo
              </Typography>
              <Stack direction="row">
                <Stars rating={5} />
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    color: silver[500],
                    lineHeight: 1.5,
                    fontWeight: 'bold'
                  }}
                >
                  22 reviews
                </Typography>
              </Stack>
            </Box>
          </Stack>

          <Typography
            sx={{
              fontSize: '0.75rem',
              lineHeight: 1,
              fontWeight: 'bold',
              borderBottom: '1px dashed #3490dc'
            }}
          >
            View 3366 Offers on Affplus
          </Typography>
          <Button type="button-blue">Join</Button>
        </Stack>
      </BootstrapDialog>
    </React.Fragment>
  )
}

const styledTitle = {
  fontSize: '1.125rem',
  color: silver[100],
  lineHeight: 1.25,
  borderBottomWidth: '1px',
  borderColor: gray[100],
  fontWeight: 'bold',
  paddingTop: 2,
  paddingBottom: 2
}

export { OfferDialog }
