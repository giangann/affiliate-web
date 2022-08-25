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
import PropTypes from 'prop-types'
import * as React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '~/components/Buttons'
import { gray, silver } from '~/constants/color'
import { TextGrey } from '.'

const reviewDetails = [
  {
    label: 'OFFERS',
    value: 'OFFERS'
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
  const { onChange, value } = props
  return (
    <Grid container>
      <Grid item xs={4}>
        <TextGrey sx={{ fontSize: '0.75rem', color: '#b8c2cc' }}>OFFERS</TextGrey>
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
  const ref = React.useRef(null)
  const { open, handleClose, title } = props
  const [rating, setRating] = React.useState(2)
  const [image, setImage] = React.useState('')

  const { handleSubmit, control } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {}
  })

  const previewImageURL = (file) => {
    setImage(URL.createObjectURL(file))
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

          <Box sx={{ my: 2 }}>
            <TitleReviewForm>
              Your overall rating of this network<span style={{ color: 'red' }}>*</span>
            </TitleReviewForm>
            <Stack direction="row">
              <Controller
                control={control}
                name="rating.overall"
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
                <Grid item xs={6} key={index}>
                  <Controller
                    control={control}
                    name={`rating.${item.label.toLocaleLowerCase()}`}
                    defaultValue={2}
                    render={({ field: { onChange, value } }) => (
                      <ReviewDetail onChange={onChange} value={value} />
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
            <TextareaAutosize
              aria-label="minimum height"
              minRows={4}
              style={{
                width: '100%',
                backgroundColor: '#f8fafc',
                border: '1px solid #dae1e7',
                borderRadius: '0.25rem'
              }}
            />
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
