import { Button, Grid } from '@mui/material'
import React from 'react'
import { Grid3x3 } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Input,
  Stack,
  styled,
  Typography
} from '@mui/material'
import PropTypes from 'prop-types'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { getApiResource, getGoogleLoginUrl, login } from '~/apis'
import { Stars } from '~/components/Star'
import { gray, silver } from '~/constants/color'
import { AlibabaText } from '~/screens/Home'
import { orange } from '~/styles'

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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: '2rem 2.5rem'
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))

function AddNetworkDialog(props) {
  const { open, handleClose, children, title } = props
  const grid = { xs: 12, md: 6 }
  const gridFull = { xs: 12, md: 12 }

  const { handleSubmit, control } = useForm({
    email: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {}
  })

  const onSubmit = (data) => {
    console.log(data)
  }

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

          <Grid
            container
            justifyContent="center"
            spacing={2}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid item {...gridFull}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <Input
                    type="email"
                    disableUnderline={true}
                    placeholder="Email"
                    onChange={onChange}
                    value={value}
                    sx={{
                      paddingX: 2,
                      paddingY: 1,
                      fontWeight: 600,
                      fontSize: '0.825rem',
                      width: '100%',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #dae1e7',
                      borderRadius: '0.25rem'
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item {...gridFull}>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <Input
                    disableUnderline={true}
                    placeholder="Password"
                    onChange={onChange}
                    value={value}
                    type="password"
                    sx={{
                      paddingX: 2,
                      paddingY: 1,
                      fontWeight: 600,
                      fontSize: '0.825rem',
                      width: '100%',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #dae1e7',
                      borderRadius: '0.25rem'
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={4}>
              <Button type="submit" variant="contained">
                Add
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
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

export default AddNetworkDialog
