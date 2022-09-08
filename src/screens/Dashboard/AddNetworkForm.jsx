import { Button, Grid, Input, MenuItem, Select, Stack, styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { ResponsiveContainer } from '~/components/Layouts'
import { baseColor } from '~/styles'
import { makeStyles } from '@material-ui/core/styles'
import { addNetWork, getApiResource, getGoogleLoginUrl, login, loginWithGG } from '~/apis'
import { useNavigate } from 'react-router-dom'

function AddNetworkForm() {
  const [categories, setCategories] = React.useState([])
  const [trackingSoftwares, setTrackingSoftware] = React.useState([])
  const [paymentMethods, setPaymentMethod] = React.useState([])
  const [paymentFrequencies, setPaymentFrequencies] = React.useState([])

  const { handleSubmit, control, watch, setValue } = useForm({
    email: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {}
  })

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const res = await addNetWork(data)

      if (res.status === 200) {
        alert('Thêm mới thành công')
        navigate(-1)
      }
      console.log('res of add', res)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    const getCategories = async () => {
      const listOfCategory = await getApiResource('categories')
      setCategories(listOfCategory)
    }
    const getTrackingSoftwares = async () => {
      const listOfTrackingSoftware = await getApiResource('tracking_software')
      setTrackingSoftware(listOfTrackingSoftware)
    }
    const getPaymentMethods = async () => {
      const listOfPaymentMethod = await getApiResource('payment_method')
      setPaymentMethod(listOfPaymentMethod)
    }
    const getPaymentFrequencies = async () => {
      const listOfPaymentFrequencies = await getApiResource('payment_frequencies')
      setPaymentFrequencies(listOfPaymentFrequencies)
    }

    getCategories()
    getTrackingSoftwares()
    getPaymentMethods()
    getPaymentFrequencies()
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
              name="referral_commissione"
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
              name="payment_method_id"
              render={({ field: { onChange, value } }) => (
                <CustomSelect
                  displayEmpty
                  renderValue={
                    watch('payment_method_id')
                      ? undefined
                      : () => <Placeholder>Payment method</Placeholder>
                  }
                  onChange={onChange}
                  value={value}
                >
                  {paymentMethods.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </CustomSelect>
              )}
            />
          </Grid>
          <Grid item {...grid}>
            <Controller
              control={control}
              name="payment_frequency_id"
              render={({ field: { onChange, value } }) => (
                <CustomSelect
                  displayEmpty
                  renderValue={
                    watch('payment_frequency_id')
                      ? undefined
                      : () => <Placeholder>Payment frequency</Placeholder>
                  }
                  onChange={onChange}
                  value={value}
                >
                  {paymentFrequencies.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </CustomSelect>
              )}
            />
          </Grid>
          <Grid item {...grid}>
            <Controller
              control={control}
              name="tracking_software_id"
              render={({ field: { onChange, value } }) => (
                <CustomSelect
                  displayEmpty
                  renderValue={
                    watch('tracking_software_id')
                      ? undefined
                      : () => <Placeholder>Tracking software</Placeholder>
                  }
                  onChange={onChange}
                  value={value}
                >
                  {trackingSoftwares.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </CustomSelect>
              )}
            />
          </Grid>
          <Grid item {...grid}>
            <Controller
              control={control}
              name="category_id"
              render={({ field: { onChange, value } }) => (
                <CustomSelect
                  displayEmpty
                  renderValue={
                    watch('category_id') ? undefined : () => <Placeholder>Category</Placeholder>
                  }
                  onChange={onChange}
                  value={value}
                >
                  {categories.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </CustomSelect>
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
