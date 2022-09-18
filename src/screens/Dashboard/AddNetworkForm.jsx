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
import axios from 'axios'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { addNetWork, getApiResource } from '~/apis'
import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { convertDataforApi, filterOptions } from '~/libs'
import { baseColor } from '~/styles'
import { convertIdOptions, convertOptions } from './EditNetWork'

function AddNetworkForm() {
  const [categories, setCategories] = React.useState([])
  const [trackingSoftwares, setTrackingSoftware] = React.useState([])
  const [paymentMethods, setPaymentMethod] = React.useState([])
  const [paymentFrequencies, setPaymentFrequencies] = React.useState([])
  const [websiteTypes, setWebsiteTypes] = React.useState([])

  const { handleSubmit, control, watch, setValue } = useForm({
    email: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {}
  })

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      debugger
      // const checkData = await axios.get(watch('api'))
      // if (checkData.status === 200 || checkData.status === 201) {
      data['website_type_id'] = data['website_type_id']?.value
      data['category_id'] = data['category_id']?.value
      data['tracking_software'] = convertDataforApi(data['tracking_software'])
      data['payment_method'] = convertDataforApi(data['payment_method'])
      data['payment_frequency'] = convertDataforApi(data['payment_frequency'])
      const res = await addNetWork(data)

      if (res.status === 200) {
        alert('Thêm mới thành công')
        navigate('/dashboard')
      }
      // }
    } catch (error) {
      if (error.response.status === 404) {
        alert('Error 404')
      }
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
    const getListWebsiteType = async () => {
      const listWebsiteType = await getApiResource('website_types')
      setWebsiteTypes(convertIdOptions(listWebsiteType))
    }

    getCategories()
    getTrackingSoftwares()
    getPaymentMethods()
    getPaymentFrequencies()
    getListWebsiteType()
  }, [])

  const grid = { xs: 12, md: 6 }
  const gridFull = { xs: 12, md: 12 }
  return (
    <BoxWithHeader
      mainColor={baseColor.blue}
      title={() => (
        <Grid container>
          <Grid item xs={12} sx={{ justifyContent: 'flex-start' }} px={1} py={3}>
            <Typography variant="h1" sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}>
              Add network
            </Typography>
          </Grid>
        </Grid>
      )}
      footer={() => (
        <Grid container component="form" spacing={2} onSubmit={handleSubmit(onSubmit)}>
          <Grid item {...gridFull}>
            <Typography variant="caption">
              Nếu đã điền đủ thông tin mà vẫn hiện lỗi 404 là do đường dẫn API bạn nhập bị sai và
              không trả về dữ liệu, hãy kiểm tra lại hoặc dùng API mặc định sau đây:{' '}
              <span style={{ fontWeight: 700 }}>
                https://api.affplus.com/v1/entity/dmsaffiliates
              </span>
            </Typography>
          </Grid>
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
                  type="text"
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
                  type="text"
                  disableUnderline={true}
                  placeholder="Referral commission"
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
              name="website_type_id"
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  options={websiteTypes ? websiteTypes : []}
                  onChange={(event, newValue) => {
                    console.log(newValue)
                    setValue('website_type_id', newValue)
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
                    console.log(123,newValue)
                    setValue('category_id', newValue)
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
              Add
            </Button>
          </Grid>
        </Grid>
      )}
    />
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

export default AddNetworkForm
