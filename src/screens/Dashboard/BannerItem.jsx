import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { Controller, useForm } from 'react-hook-form'

import DialogTitle from '@mui/material/DialogTitle'
import React, { useState } from 'react'
import { Button, Grid, Hidden, TextField, Typography } from '@mui/material'
import { Stars } from '~/components/Star'
import { Link } from 'react-router-dom'
import { BootstrapButton } from '~/components/Layouts/Header/Navbar'
import { deleteNetWork } from '~/apis'
import { useEffect } from 'react'
const webkitBox = {
  WebkitBoxOrient: 'vertical',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  overflow: 'hidden'
}

export const BannerItem = ({ data, ...props }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [openEditDialog, setOpenEditDialog] = useState(false)

  const { handleSubmit, control, watch, setValue, reset } = useForm({
    email: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      banner_id: data?.id,
      link_of_image: data?.link_of_image,
      path_to_website: data?.path_to_website
    }
  })

  const onSubmit = async (data) => {
    console.log('data for submit', data)
  }

  const handleDelete = async (id) => {
    // alert('Xác nhận xóa ?')
    console.log('delete: ', id)

    // try {
    //   const res = await deleteNetWork(parseInt(id))
    //   console.log('res', res)

    //   if (res.status === 200 || res.status === 201) {
    //     alert('Xóa thành công')
    //   }
    // } catch (error) {
    //   alert(error)
    // }
  }
  useEffect(() => {
    setValue('banner_id', data?.id)
    setValue('path_to_website', data?.path_to_website)
    setValue('link_of_image', data?.link_of_image)
  }, [data])

  const handleClose = () => {
    setOpenDeleteDialog(false)
    setOpenEditDialog(false)
  }

  const handleClickOpenDeleteDialog = () => {
    setOpenDeleteDialog(true)
  }

  const handleClickOpenEditDialog = () => {
    setOpenEditDialog(true)
  }
  const gridFull = { xs: 12, md: 12 }

  return (
    <Grid container columnSpacing={2} sx={{ borderBottom: '1px solid #ccc' }} paddingY={3}>
      <Grid
        item
        xs={8}
        md={10}
        component="img"
        src={watch('link_of_image')}
        alt="Carousel Item"
        sx={{
          width: { xs: '100%', height: 'auto' }
        }}
      />

      <Grid item md={2} xs={4}>
        <BootstrapButton onClick={handleClickOpenEditDialog}>Edit</BootstrapButton>
        <BootstrapButton onClick={() => handleClickOpenDeleteDialog(data?.id)}>
          Delete
        </BootstrapButton>
      </Grid>

      {/* Edit/Add dialog */}
      <Dialog
        open={openEditDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Edit</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid
              item
              {...gridFull}
              component="img"
              src={watch('link_of_image') ?? data?.link_of_image}
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
                Edit
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      {/* Delete dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Confirm delete?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to permantly delete this banner?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={() => handleDelete(data?.id)} autoFocus>
            Yes, delete
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}
