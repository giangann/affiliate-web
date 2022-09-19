import { makeStyles } from '@material-ui/core/styles'
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Grid,
  Input,
  Select,
  styled,
  TextField,
  Typography
} from '@mui/material'
import React, { useEffect, useId } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { editNetWork, getApiResource, getWebsite } from '~/apis'
import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { ListSkeleton } from '~/components/Skeleton'
import { NETWORK_TYPE } from '~/constants'
import { convertDataforApi, defaultValueAutocomplete, filterOptions } from '~/libs'
import { baseColor } from '~/styles'

function AddNetworkForm() {
  const [categories, setCategories] = React.useState([])
  const [trackingSoftwares, setTrackingSoftware] = React.useState([])
  const [paymentMethods, setPaymentMethod] = React.useState([])
  const [paymentFrequencies, setPaymentFrequencies] = React.useState([])
  const networkType = Object.entries(NETWORK_TYPE).map((item) => {
    return {
      value: item[1],
      label: item[0]
    }
  })

  const params = useParams()

  const { handleSubmit, control, watch, setValue, reset } = useForm({
    email: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {}
  })

  const { isLoading, isError, isSuccess } = useQuery(
    'network' + params?.network_id + useId(),
    () => getWebsite(params?.network_id),
    {
      onSuccess: (data) => {
        const type = networkType.find((item) => item.value == data?.type)
        setValue('name', data?.name)
        setValue('link', data?.link)
        setValue('link_banner', data?.link_banner)
        setValue('link_offer', data?.link_offer)
        setValue('api', data?.api)
        setValue('referral_commission', data?.referral_commission)
        setValue('minimum_payment', data?.minimum_payment)
        setValue('description', data?.description)
        setValue('payment_method', defaultValueAutocomplete(data?.payment_method) || '')
        setValue('payment_frequency', defaultValueAutocomplete(data?.payment_frequency) || '')
        setValue('tracking_software', defaultValueAutocomplete(data?.tracking_software) || '')
        setValue('category_id', {
          value: data?.category?.id,
          label: data?.category?.name
        })
        setValue('tracking_link', data?.tracking_link)
        setValue('offer_count', data?.offer_count)
        setValue('commision_type', data?.commision_type)
        setValue('is_net_work_of_the_month', data?.is_net_work_of_the_month)
        setValue('type', type)
      }
    }
  )
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      data['type'] = data['type']?.value
      data['category_id'] = data['category_id']?.value
      data['tracking_software'] = convertDataforApi(data['tracking_software'])
      data['payment_method'] = convertDataforApi(data['payment_method'])
      data['payment_frequency'] = convertDataforApi(data['payment_frequency'])

      const res = await editNetWork(params?.network_id, data)

      if (res.status === 200) {
        alert('sửa thành công')
        // navigate(-1)
      }
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    const getCategories = async () => {
      const listOfCategory = await getApiResource('categories')
      setCategories(convertIdOptions(listOfCategory))
    }
    const getTrackingSoftwares = async () => {
      const listOfTrackingSoftware = await getApiResource('tracking_software')
      setTrackingSoftware(convertOptions(listOfTrackingSoftware))
    }
    const getPaymentMethods = async () => {
      const listOfPaymentMethod = await getApiResource('payment_method')
      setPaymentMethod(convertOptions(listOfPaymentMethod))
    }
    const getPaymentFrequencies = async () => {
      const listOfPaymentFrequencies = await getApiResource('payment_frequencies')
      setPaymentFrequencies(convertOptions(listOfPaymentFrequencies))
    }

    getCategories()
    getTrackingSoftwares()
    getPaymentMethods()
    getPaymentFrequencies()
  }, [])

  const grid = { xs: 12, md: 6 }
  const gridFull = { xs: 12, md: 12 }
  return (
    <>
      {isLoading ? (
        <ListSkeleton />
      ) : (
        <BoxWithHeader
          mainColor={baseColor.blue}
          title={() => (
            <Grid container>
              <Grid item xs={12} sx={{ justifyContent: 'flex-start' }} px={1} py={3}>
                <Typography
                  variant="h1"
                  sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}
                >
                  Edit network
                </Typography>
              </Grid>
            </Grid>
          )}
          footer={() => (
            <Grid container component="form" spacing={2} onSubmit={handleSubmit(onSubmit)}>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="name"
                  render={({ field: { onChange, value } }) => (
                    <CustomInput
                      disableUnderline={true}
                      placeholder="Name"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Grid>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="link"
                  render={({ field: { onChange, value } }) => (
                    <CustomInput
                      disableUnderline={true}
                      placeholder="Link of network"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Grid>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="link_banner"
                  render={({ field: { onChange, value } }) => (
                    <CustomInput
                      disableUnderline={true}
                      placeholder="Link of banner"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Grid>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="link_offer"
                  render={({ field: { onChange, value } }) => (
                    <CustomInput
                      disableUnderline={true}
                      placeholder="Link of offers"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Grid>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="api"
                  render={({ field: { onChange, value } }) => (
                    <CustomInput
                      disableUnderline={true}
                      placeholder="Link of api"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Grid>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="description"
                  render={({ field: { onChange, value } }) => (
                    <CustomInput
                      type="text"
                      disableUnderline={true}
                      placeholder="Description"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Grid>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="tracking_link"
                  render={({ field: { onChange, value } }) => (
                    <CustomInput
                      type="type"
                      disableUnderline={true}
                      placeholder="Tracking Link"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Grid>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="commision_type"
                  render={({ field: { onChange, value } }) => (
                    <CustomInput
                      type="text"
                      disableUnderline={true}
                      placeholder="Commistion Type"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Grid>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="offer_count"
                  render={({ field: { onChange, value } }) => (
                    <CustomInput
                      type="number"
                      disableUnderline={true}
                      placeholder="Number of Offers"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Grid>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="referral_commission"
                  render={({ field: { onChange, value } }) => (
                    <CustomInput
                      type="number"
                      disableUnderline={true}
                      placeholder="Referral commissione"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Grid>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="minimum_payment"
                  render={({ field: { onChange, value } }) => (
                    <CustomInput
                      type="number"
                      disableUnderline={true}
                      placeholder="Minimum payment"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Grid>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="payment_method"
                  render={({ field: { onChange, value } }) => (
                    <Autocomplete
                      options={paymentMethods || []}
                      onChange={(event, newValue, reason, detail) => {
                        setPaymentMethod(filterOptions(paymentMethods, reason, detail))
                        setValue('payment_method', newValue)
                      }}
                      value={value}
                      multiple
                      renderInput={(params) => <TextField {...params} label="Payment method" />}
                      isOptionEqualToValue={(option, value) => option === value}
                    />
                  )}
                />
              </Grid>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="payment_frequency"
                  render={({ field: { onChange, value } }) => (
                    <Autocomplete
                      options={paymentFrequencies ? paymentFrequencies : []}
                      onChange={(event, newValue, reason, detail) => {
                        setPaymentFrequencies(filterOptions(paymentFrequencies, reason, detail))
                        setValue('payment_frequency', newValue)
                      }}
                      value={value}
                      multiple
                      renderInput={(params) => <TextField {...params} label="Payment frequency" />}
                      isOptionEqualToValue={(option, value) => option === value}
                    />
                  )}
                />
              </Grid>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="tracking_software"
                  render={({ field: { onChange, value } }) => (
                    <Autocomplete
                      options={trackingSoftwares ? trackingSoftwares : []}
                      onChange={(event, newValue, reason, detail) => {
                        setTrackingSoftware(filterOptions(trackingSoftwares, reason, detail))
                        setValue('tracking_software', newValue)
                      }}
                      value={value}
                      multiple
                      renderInput={(params) => <TextField {...params} label="Tracking software" />}
                      isOptionEqualToValue={(option, value) => option === value}
                    />
                  )}
                />
              </Grid>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="type"
                  render={({ field: { onChange, value } }) => (
                    <Autocomplete
                      options={networkType}
                      onChange={(event, newValue) => {
                        console.log(newValue)
                        setValue('type', newValue)
                      }}
                      value={value}
                      renderInput={(params) => <TextField {...params} label="Type" />}
                    />
                  )}
                />
              </Grid>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="category_id"
                  render={({ field: { onChange, value } }) => (
                    <Autocomplete
                      options={categories ? categories : []}
                      onChange={(event, newValue) => {
                        setValue('category_id', newValue.id)
                      }}
                      value={value}
                      renderInput={(params) => <TextField {...params} label="Category" />}
                      isOptionEqualToValue={(option, value) => option === value}
                    />
                  )}
                />
              </Grid>
              <Grid item {...grid}>
                <Controller
                  control={control}
                  name="is_net_work_of_the_month"
                  render={({ field: { onChange, value } }) => (
                    <Box display="flex" alignItems="center">
                      <Checkbox defaultChecked value={value} onChange={onChange} />
                      Network of the month
                    </Box>
                  )}
                />
              </Grid>
              <Grid item {...gridFull}>
                <Button type="submit" variant="contained">
                  Edit
                </Button>
              </Grid>
            </Grid>
          )}
        />
      )}
    </>
  )
}
const Placeholder = ({ children }) => {
  const classes = usePlaceholderStyles()
  return <div className={classes.placeholder}>{children}</div>
}
const usePlaceholderStyles = makeStyles((theme) => ({
  placeholder: {
    color: '#aaa'
  }
}))

const CustomInput = styled(Input)({
  '& .css-1x51dt5-MuiInputBase-input-MuiInput-input': {
    padding: '16px 8px'
  },
  fontWeight: 600,
  fontSize: '0.825rem',
  width: '100%',
  backgroundColor: '#f8fafc',
  border: '1px solid #dae1e7',
  borderRadius: '0.25rem'
})

const CustomSelect = styled(Select)({
  fontWeight: 600,
  fontSize: '0.825rem',
  width: '100%',
  backgroundColor: '#f8fafc',
  border: '1px solid #dae1e7',
  borderRadius: '0.25rem'
})

export const convertOptions = (apiData) => {
  return apiData.map((item) => {
    return {
      label: item?.name,
      value: item?.name
    }
  })
}

export const convertIdOptions = (apiData) => {
  return apiData.map((item) => {
    return {
      label: item?.name,
      value: item?.id
    }
  })
}

export default AddNetworkForm
