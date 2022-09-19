import CloseIcon from '@mui/icons-material/Close'
import CloudUploadSharpIcon from '@mui/icons-material/CloudUploadSharp'
import SquareSharpIcon from '@mui/icons-material/SquareSharp'
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Input,
  Rating,
  Stack,
  styled,
  TextareaAutosize,
  Typography
} from '@mui/material'
import Firebase from 'firebase'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '~/components/Buttons'
import { gray, silver } from '~/constants/color'
import { TextGrey } from '.'
import axios from 'axios'
import * as yup from 'yup'
import { baseURL, request } from '~/apis/request'
import { getReviewById } from '~/apis'
import { useState } from 'react'

let app
if (!Firebase.apps.length) {
  app = Firebase.initializeApp({
    apiKey: 'AIzaSyCwT_qfZ_3yEitTzOP3nrZW3CAEiiDpHvo',
    authDomain: 'techapp-ad995.firebaseapp.com',
    projectId: 'techapp-ad995',
    storageBucket: 'techapp-ad995.appspot.com',
    messagingSenderId: '826332030942',
    appId: '1:826332030942:web:fc3fe809491bd8bb8f5f4f',
    measurementId: 'G-FGPNQQSPB8'
  })
} else {
  app = Firebase.app()
}

const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false
        })

        return {
          values,
          errors: {}
        }
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message
              }
            }),
            {}
          )
        }
      }
    },
    [validationSchema]
  )

const validationSchema = yup.object({
  content: yup.string().required('Required')
})
const reviewDetails = [
  {
    label: 'OFFER',
    value: 'OFFER'
  },
  {
    label: 'PAYOUT',
    value: 'PAYOUT'
  },
  {
    label: 'TRACKING',
    value: 'TRACKING'
  },
  {
    label: 'SUPPORT',
    value: 'SUPPORT'
  }
]

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: '2.5rem 2rem 2.5rem 2rem',
    width: '100%'
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  },
  '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
    width: '100%'
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

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#3490dc'
  },

  '& .MuiRating-iconEmpty': {
    color: '#3490dc',
    opacity: 0.5
  }
})

const ReviewDetail = (props) => {
  const { onChange, value, label } = props

  return (
    <Grid container>
      <Grid item xs={4}>
        <TextGrey sx={{ fontSize: '0.75rem', color: '#b8c2cc' }}>{label}</TextGrey>
      </Grid>
      <Grid item xs={8}>
        <StyledRating
          name="simple-controlled"
          value={value}
          onChange={onChange}
          icon={<SquareSharpIcon sx={{ fontSize: '15px' }} />}
          emptyIcon={<SquareSharpIcon sx={{ fontSize: '15px' }} />}
          size="small"
        />
      </Grid>
    </Grid>
  )
}

const ReviewForm = (props) => {
  const resolver = useYupValidationResolver(validationSchema)

  const ref = React.useRef(null)
  const { open, handleClose, title, refetchComment, handleRefetchComment } = props
  const [rating, setRating] = React.useState(2)
  const [image, setImage] = React.useState('')
  const [time, setTime] = useState()
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver
  })

  const previewImageURL = (file) => {
    setImage(URL.createObjectURL(file))
    setTime(new Date().getTime())
  }

  const statusRating = (rating) => {
    switch (rating) {
      case 1:
        return 'Terrible'
      case 2:
        return 'Poor'
      case 3:
        return 'Averge'
      case 4:
        return 'Very Good'
      case 5:
        return 'Excellent'
      default:
        return ''
    }
  }

  const uploadImage = async (uri) => {
    const response = await fetch(uri)
    const blob = await response.blob()
    var ref = app
      .storage()
      .ref()
      .child('image' + '/' + time)
    console.log(time)
    return ref.put(blob)
  }

  const onSubmit = async (data) => {
    // const uploadImage = async (uri, websiteId, reviewId) => {
    //   const response = await fetch(uri)
    //   const blob = await response.blob()
    //   console.log(uri);
    //   var ref = app
    //     .storage()
    //     .ref()
    //     .child('image' + '/' + 'websiteId' + websiteId + 'reviewId' + reviewId)
    //   return ref.put(blob)
    // }

    data['websiteId'] = Number(props.websiteId)
    data['image'] = image
      ? `https://firebasestorage.googleapis.com/v0/b/techapp-ad995.appspot.com/o/image%2F${time}?alt=media&token=4e2a3d8b-7bb9-44f7-8199-2bbb422f263f`
      : null
    try {
      if (props?.isEditReview) {
        const res = await request.patch(`reviews/${props?.reviewId}`, data)
        if (res.status == 200) {
          image && uploadImage(image)
          alert('update thành công')
        }
      } else {
        const res = await request.post('reviews', data)
        if (res.status == 200) {
          image && uploadImage(image)
          alert('review thành công')
        }
      }

      if (refetchComment) {
        refetchComment()
        handleRefetchComment()
      }
      reset()
      handleClose()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function getReview(id) {
      const response = await request.get(`reviews/${id}`)
      return response.data
    }
    if (props?.isEditReview) {
      getReview(props?.reviewId).then((data) => {
        setValue('content', data.data.content)
        setValue('score', data.data.score)
        setValue('offer', data.data.offer)
        setValue('payout', data.data.payout)
        setValue('tracking', data.data.tracking)
        setValue('support', data.data.support)
        setValue('websiteId', data.data.websiteId)
        setValue('name', data.data.user.name)
        setValue('email', data.data.user.email)
      })
    }
  }, [])

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

          <Box sx={{ my: 2 }}>
            <TitleReviewForm>
              Your overall rating of this network<span style={{ color: 'red' }}>*</span>
            </TitleReviewForm>
            <Stack direction="row">
              <Controller
                control={control}
                name="score"
                defaultValue={2}
                render={({ field: { onChange, value } }) => (
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChangeActive={(event, newValue) => {
                      setRating(newValue)
                    }}
                    onChange={onChange}
                  />
                )}
              />
              <Typography
                sx={{
                  marginLeft: '10px',
                  color: '#b8c2cc',
                  fontWeight: 600,
                  fontSize: '.85rem',
                  lineHeight: '28px'
                }}
              >
                {statusRating(rating)}
              </Typography>
            </Stack>
          </Box>

          <Box sx={{ my: 2 }}>
            <TitleReviewForm>
              Could you say a little more about it?<span style={{ color: 'red' }}>*</span>
            </TitleReviewForm>
            <Grid container>
              {reviewDetails.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Controller
                    control={control}
                    name={`${item.label.toLocaleLowerCase()}`}
                    defaultValue={2}
                    render={({ field: { onChange, value } }) => (
                      <ReviewDetail onChange={onChange} value={value} label={item.label} />
                    )}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ my: 2 }}>
            <TitleReviewForm>
              Your review <span style={{ color: 'red' }}>*</span>
            </TitleReviewForm>
            {/* <Controller
              control={control}
              name={'content'}
              render={({ field: { onChange, value } }) => ( */}
            <TextareaAutosize
              aria-label="minimum height"
              minRows={4}
              // value={value}
              {...register('content')}
              // onChange={onChange}
              style={{
                width: '100%',
                backgroundColor: '#f8fafc',
                border: '1px solid #dae1e7',
                borderRadius: '0.25rem'
              }}
            />
            {errors.content && errors.content.type === 'required' && (
              <span style={{ color: 'red', fontSize: '12px', fontWeight: 'bold' }}>
                Your review is required
              </span>
            )}
            {/* )} */}
            {/* /> */}
          </Box>

          <Box sx={{ my: 2 }}>
            <TitleReviewForm sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              Upload your payment screenshot!
              <TextGrey sx={{ fontSize: '0.825rem', color: '#b8c2cc' }}>{'(optional)'}</TextGrey>
            </TitleReviewForm>
            <Button
              onClick={() => {
                ref.current.click()
              }}
              variant="outlined"
              sx={{ gap: 1 }}
            >
              <CloudUploadSharpIcon sx={{ fontSize: '15px' }} />
              <span style={{ fontWeight: 'bold' }}>UPLOAD IMAGE</span>
            </Button>
          </Box>
          <Controller
            control={control}
            name="image"
            render={({ field: { onChange, value } }) => (
              <input
                ref={ref}
                name="image"
                type="file"
                onChange={(e) => {
                  previewImageURL(e.target.files[0])
                }}
                value={value}
                style={{ display: 'none' }}
              />
            )}
          />
          {image && <img src={image} alt="image1" />}
          <Box sx={{ my: 2 }}>
            <TitleReviewForm>
              Name <span style={{ color: 'red' }}>*</span>
            </TitleReviewForm>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  disableUnderline={true}
                  placeholder="Name"
                  onChange={onChange}
                  value={value}
                  sx={{
                    paddingX: 2,
                    paddingY: 1,
                    fontWeight: 600,
                    fontSize: '0.825rem',
                    width: '50%',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #dae1e7',
                    borderRadius: '0.25rem'
                  }}
                />
              )}
            />
          </Box>

          <Box sx={{ my: 2 }}>
            <TitleReviewForm>
              Email <span style={{ color: 'red' }}>*</span>
            </TitleReviewForm>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  disableUnderline={true}
                  placeholder="Email"
                  onChange={onChange}
                  value={value}
                  sx={{
                    paddingX: 2,
                    paddingY: 1,
                    fontWeight: 600,
                    fontSize: '0.825rem',
                    width: '50%',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #dae1e7',
                    borderRadius: '0.25rem'
                  }}
                />
              )}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              padding: 1,
              paddingX: 4,
              fontSize: '0.825rem',
              color: 'white',
              backgroundColor: '#2779bd'
            }}
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
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

const TitleReviewForm = (props) => {
  const { children, sx } = props
  return (
    <Typography
      sx={{
        color: '#606f7b',
        fontSize: '0.825rem',
        lineHeight: 1.5,
        fontWeight: 'bold',
        my: 1,
        ...sx
      }}
    >
      {children}
    </Typography>
  )
}

export { ReviewForm }
