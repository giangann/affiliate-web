import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { Controller, useForm } from 'react-hook-form'
import { NETWORK_TYPE } from '~/libs/utils/constants'
import DialogTitle from '@mui/material/DialogTitle'
import { useQuery } from 'react-query'
import { getAllWebsites, getBanners } from '~/apis'
import {
  Grid,
  Typography,
  Stack,
  Box,
  Avatar,
  Link,
  Button,
  TextField,
  Select,
  Autocomplete,
  styled,
  MenuItem,
} from '@mui/material'

import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { baseColor } from '~/styles'
import { NetworkItem } from './NetworkItem'
import { useNavigate } from 'react-router-dom'
import { BannerItem } from './BannerItem'
import { request } from '~/apis/request'
import { BANNER_OPTIONS } from '~/constants/name'
import { AlignItemGrid } from '~/components/Layouts/Header/Navbar'

function Dashboard() {
  const {
    isLoading,
    error,
    data: allWebsites
  } = useQuery(['allWebsites', { type: NETWORK_TYPE['ADVERTISER'] }], () => getAllWebsites())
  const [params, setParams] = useState({})
  console.log('params', params)
  const { data: banners } = useQuery(['allBanners', params], () => getBanners(params))
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const [openAlertDialog, setOpenAlertDialog] = useState(false)
  const navigate = useNavigate()

  // const bannerHeader =

  const { setValue, handleSubmit, control, watch } = useForm({
    defaultValues: {}
  })

  const onSubmit = async (data) => {
    console.log('data for submit', data)
    try {
      const res = await request.post('banners', data)

      if (res.status === 200) {
        alert('Thêm mới thành công')
        setOpenAddDialog(false)
      }
    } catch (error) {
      alert(error)
    }
  }
  const handleCloseAddDialog = () => {
    setOpenAddDialog(false)
  }

  const handleOpenAlertDialog = () => {
    setOpenAlertDialog(true)
  }

  const handleClickAddNetworkBtn = () => {
    navigate('add-network')
  }

  const handleClickAddBtn = () => {
    setOpenAddDialog(true)
  }

  const gridFull = { xs: 12, md: 12 }
  return (
    <>
      <BoxWithHeader
        sx={{ marginBottom: '32px !important' }}
        mainColor={baseColor.blue}
        data={allWebsites}
        title={() => (
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sx={{ justifyContent: 'flex-start' }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                gap={1}
                paddingY={3}
              >
                <Typography
                  variant="h1"
                  sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}
                >
                  All current networks
                </Typography>
                <Button variant="contained" onClick={handleClickAddNetworkBtn}>
                  Add network
                </Button>
              </Stack>
            </Grid>
          </Grid>
        )}
      >
        <NetworkItem mainColor={baseColor.blue} />
      </BoxWithHeader>

      <BoxWithHeader
        mainColor={baseColor.blue}
        data={banners}
        title={() => (
          <Grid container py={2}>
            <AlignItemGrid sx={{ justifyContent: 'flex-start !important' }} item>
              <Typography variant="h1" sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}>
                All banners
              </Typography>
            </AlignItemGrid>

            <AlignItemGrid item xs={6} sx={{ paddingX: '16px' }}>
              <Autocomplete
                fullWidth
                sx={{ fontSize: { xs: '10px', md: '14px' } }}
                onChange={(e, newValue) => {
                  console.log('value', newValue)
                  setParams({ type: newValue.value })
                }}
                options={BANNER_OPTIONS}
                renderInput={(params) => (
                  <TextField sx={{ fontSize: '10px' }} {...params} label="Banner" />
                )}
              />
            </AlignItemGrid>

            <AlignItemGrid item xs={3}>
              <Button variant="contained" onClick={handleClickAddBtn}>
                <TypographyResponsive>Add banners</TypographyResponsive>
              </Button>
            </AlignItemGrid>
          </Grid>
        )}
      >
        <BannerItem mainColor={baseColor.blue} />
      </BoxWithHeader>

      {/* Add banner dialog */}
      <Dialog
        open={openAddDialog}
        onClose={handleCloseAddDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add banner</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid
              item
              {...gridFull}
              component="img"
              src={watch('link_of_image')}
              alt="Can't find image"
              sx={{
                width: { xs: '100%', height: 'auto' }
              }}
            />
            <Grid item {...gridFull}>
              <Controller
                control={control}
                name="link_of_image"
                render={({ field: { onChange, value } }) => (
                  <TextField
                    fullWidth
                    disableUnderline={true}
                    label="Link of image"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item {...gridFull}>
              <Controller
                control={control}
                name="path_to_website"
                render={({ field: { onChange, value } }) => (
                  <TextField
                    fullWidth
                    disableUnderline={true}
                    label="Path to website"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item {...gridFull}>
              <Controller
                control={control}
                name="type"
                render={({ field: { onChange, value } }) => (
                  <TextField
                    fullWidth
                    value={value}
                    onChange={onChange}
                    select // tell TextField to render select
                    label="Type"
                  >
                    {BANNER_OPTIONS.map((item, index) =>
                      item.value ? (
                        <MenuItem key={index} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ) : null
                    )}
                  </TextField>
                )}
              />
            </Grid>
            <Grid item {...gridFull} sx={{}}>
              <Button
                sx={{ fontSize: { xs: '10px', md: '14px' } }}
                variant="contained"
                type="submit"
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Dashboard

export const TypographyResponsive = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '13px'
  }
}))
