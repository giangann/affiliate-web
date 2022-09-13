import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { Controller, useForm } from 'react-hook-form'

import DialogTitle from '@mui/material/DialogTitle'
import { useQuery } from 'react-query'
import { getAllWebsites, getBanners } from '~/apis'
import { Grid, Typography, Stack, Box, Avatar, Link, Button, TextField } from '@mui/material'

import BoxWithHeader from '~/components/Box/BoxWithHeader'
import { baseColor } from '~/styles'
import { NetworkItem } from './NetworkItem'
import AddNetworkDialog from './AddNetworkDialog'
import { useNavigate } from 'react-router-dom'
import { useWebsites } from '~/libs/hooks/useWebsites'
import { BannerItem } from './BannerItem'
import { request } from '~/apis/request'

function Dashboard() {
  const globalWebsite = useWebsites()

  const { isLoading, error, data: websites } = useQuery(['allWebsites'], () => getAllWebsites())
  const { data: banners } = useQuery(['allBanners'], () => getBanners())
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const [openAlertDialog, setOpenAlertDialog] = useState(false)
  const navigate = useNavigate()

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
      console.log('res of edit', res)
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
  let allWebsites
  globalWebsite === null ? (allWebsites = globalWebsite) : (allWebsites = websites)

  // useEffect(() => {
  //   console.log('callback useEffect', websites, isLoading, error)
  // }, [allWebsites, isLoading, error, banners])
  const gridFull = { xs: 12, md: 12 }

  return (
    <>
      <BoxWithHeader
        sx={{ marginBottom: '32px !important' }}
        mainColor={baseColor.blue}
        data={allWebsites}
        title={() => (
          <Grid container>
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
          <Grid container>
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
                  All current banners
                </Typography>
                <Button variant="contained" onClick={handleClickAddBtn}>
                  Add banners
                </Button>
              </Stack>
            </Grid>
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
            <Grid item {...gridFull} sx={{}}>
              <Button variant="contained" type="submit">
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
