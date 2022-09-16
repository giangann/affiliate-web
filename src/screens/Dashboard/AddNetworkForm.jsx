import { Button, Grid, Input, MenuItem, Select, Stack, styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { baseColor } from '~/styles'
import { makeStyles } from '@material-ui/core/styles'
import { addNetWork, getApiResource } from '~/apis'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { camelToSnakeCase } from '~/libs'
import { baseURL, baseUrlCrawData, entitySuffix, initSuffix } from '~/apis/request'

function AddNetworkForm() {
  const [categories, setCategories] = React.useState([])
  const [trackingSoftwares, setTrackingSoftware] = React.useState([])
  const [paymentMethods, setPaymentMethod] = React.useState([])
  const [paymentFrequencies, setPaymentFrequencies] = React.useState([])

  // console.log('paymentFrequencies', paymentFrequencies)
  const paymentFrequenciesList = paymentFrequencies.map((obj) => obj.name)
  const paymentMethodsList = paymentMethods.map((obj) => obj.name)
  const trackingSoftwaresList = trackingSoftwares.map((obj) => obj.name)

  const { handleSubmit, control, watch, setValue } = useForm({
    email: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {}
  })

  const navigate = useNavigate()

  const splitString = (str) => {
    let array = str.split(',')
    if (array.length === 1) {
      array = str.split('/')
    }

    array = array.map((item) => item.trim())
    return array
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const handleStartCraw = async () => {
    console.log('start craw')

    // get array of slug
    const initCrawRes = await axios.get(baseUrlCrawData + initSuffix)
    console.log('init craw result', initCrawRes.data)

    // loop through array, get data from slug and push to db
    initCrawRes.data.networks.forEach(async (element, index) => {
      console.log('index = ', index)

      const networkGetDataRes = await axios.get(baseUrlCrawData + entitySuffix + element.slug)
      const networkCrawData = networkGetDataRes.data.data
      const networkData = {
        ...networkCrawData,
        name: networkCrawData.title,
        payment_frequency_arr: splitString(networkCrawData.payment_freq),
        tracking_software_arr: splitString(networkCrawData.platform),
        payment_method_arr: splitString(paymentMethodsList[Math.floor(Math.random() * 3)]),
        payment_frequency: networkCrawData.payment_freq,
        tracking_software: networkCrawData.platform,
        payment_method: paymentMethodsList[Math.floor(Math.random() * 3)],

        link: networkCrawData.website_link,
        link_banner: networkCrawData.profile_banner,
        link_offer: networkCrawData.join_link,
        category_id: Math.floor(Math.random() * 4),
        offer_count: networkCrawData.offer_count,
        referral_commission: Math.floor(Math.random() * 10),
        minimum_payment: Math.floor(Math.random() * 250)
      }
      const createNetworkRes = await addNetWork(networkData)
      console.log('add network to database', createNetworkRes)
      await sleep(5000)

    })
  }

  const handleStopCraw = () => {
    console.log('stop craw')
  }

  const onSubmit = async (data) => {
    try {
      const checkData = await axios.get(watch('api'))
      if (checkData.status === 200 || checkData.status === 201) {
        const res = await addNetWork(data)
        console.log('res of add', res)

        if (res.status === 200) {
          alert('Thêm mới thành công')
          navigate(-1)
        }
      }
      console.log('check data', checkData)
    } catch (error) {
      if (error.response.status === 404) {
        alert('Error 404')
      }
      console.log('eror', error)
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
          {/* craw area */}
          <Grid item {...grid}>
            <Button variant="contained" onClick={handleStartCraw}>
              Start craw
            </Button>
          </Grid>
          <Grid item {...grid}>
            <Button variant="outlined" onClick={handleStopCraw}>
              Stop
            </Button>
          </Grid>
          {/* end */}

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
              name="referral_commission"
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  type="number"
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
