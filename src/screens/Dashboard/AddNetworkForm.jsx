import { Button, Grid, Input, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { ResponsiveContainer } from '~/components/Layouts'
import { baseColor } from '~/styles'

function AddNetworkForm() {
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
        <Grid container component="form" spacing={2}>
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
                <CustomInput
                  disableUnderline={true}
                  placeholder="Payment Method"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </Grid>
          <Grid item {...grid}>
            <Controller
              control={control}
              name="payment_frequency_id"
              render={({ field: { onChange, value } }) => (
                <CustomInput
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
              name="tracking_software_id"
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  disableUnderline={true}
                  placeholder="Tracking Software"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </Grid>
          <Grid item {...gridFull}>
            <Controller
              control={control}
              name="category_id"
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  disableUnderline={true}
                  placeholder="Category"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </Grid>
          <Grid item {...grid}>
            <Button type="submit" variant="contained">
              Add
            </Button>
          </Grid>
        </Grid>
      )}
    />
  )
}

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

export default AddNetworkForm