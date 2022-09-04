import CloseIcon from '@mui/icons-material/Close'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Input,
  styled,
  Typography
} from '@mui/material'
import PropTypes from 'prop-types'
import * as React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { getApiResource, getGoogleLoginUrl, login, loginWithGG } from '~/apis'
import { gray, silver } from '~/constants/color'
import { AlibabaText } from '~/screens/Home'
import { orange } from '~/styles'
import { BootstrapButton, AlignItemGrid } from '../Layouts/Header/Navbar'
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'
import GoogleButton from 'react-google-button'
import { useUpdateAtom } from 'jotai/utils'
import { userAtom } from '~/libs/auth'
import { saveUserLocalStorage } from '~/libs/function/user'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: '2rem 2.5rem'
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

const LoginDialog = (props) => {
  const { open, handleClose, children, title } = props
  // const [user, setUser] = React.useState(null)
  const setUser = useUpdateAtom(userAtom)

  const grid = { xs: 12, md: 6 }
  const gridFull = { xs: 12, md: 12 }

  const navigate = useNavigate()

  const { handleSubmit, control } = useForm({
    email: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {}
  })
  const onSubmit = (data) => {
    const result = login('login', data)
  }

  // const loginWithGoogle = async () => {
  //   const res = await getGoogleLoginUrl('get-google-sign-in-url')
  //   console.log('url', res.url)

  //   window.open(res.url, '_blank')

  // }
  React.useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: ''
      })
    }
    gapi.load('client:auth2', initClient)
  })

  const onSuccess = async (res) => {
    const login = await loginWithGG('login-with-google', res?.profileObj).then((res) => {
      setUser(res.data.data)
      localStorage.setItem('user-token', res.data.access_token)
      console.log(1)
    })

    saveUserLocalStorage(res.profileObj)

    handleClose()
    window.location.reload()
  }
  const onFailure = (err) => {
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
            <Grid item {...grid}>
              <BootstrapButton
                sx={{
                  margin: 0,
                  width: '100%',
                  height: '100%',
                  maxHeight: 'unset',
                  marginLeft: {
                    xs: 0
                  }
                }}
                type="submit"
              >
                <AlibabaText>Login</AlibabaText>
              </BootstrapButton>
            </Grid>
            <Grid item {...grid}>
              {/* <BootstrapButton sx={{ margin: 0 }}>
                <AlibabaText>
                </AlibabaText>
              </BootstrapButton> */}
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                // isSignedIn={true}
                render={(renderProps) => (
                  <GoogleButton
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    style={{ width: '100%' }}
                  >
                    Sign in with Google
                  </GoogleButton>
                )}
              />
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

export { LoginDialog }
