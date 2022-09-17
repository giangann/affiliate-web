import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import React, { useState } from 'react'
import { Grid, Hidden, Typography } from '@mui/material'
import { Button } from '~/components/Buttons'
import { Stars } from '~/components/Star'
import { Link } from 'react-router-dom'
import { BootstrapButton } from '~/components/Layouts/Header/Navbar'
import { deleteNetWork } from '~/apis'
import { useNavigate } from 'react-router-dom'
const webkitBox = {
  WebkitBoxOrient: 'vertical',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  overflow: 'hidden'
}

export const NetworkItem = ({ data, ...props }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const navigate = useNavigate()

  const { data_api } = data ?? {}
  // console.log(data)
  const handleDelete = async (id) => {
    // alert('Xác nhận xóa ?')
    try {
      const res = await deleteNetWork(parseInt(id))
      console.log('res', res)

      if (res.status === 200 || res.status === 201) {
        alert('Xóa thành công')
      }
    } catch (error) {
      alert(error)
    }
  }

  const handleEdit = (id) => {
    navigate('/dashboard/edit-network/' + id)
  }

  const handleClose = () => {
    setOpenDeleteDialog(false)
  }

  const handleClickOpenDeleteDialog = () => {
    setOpenDeleteDialog(true)
  }

  return (
    <Grid container columnSpacing={2} sx={{ borderBottom: '1px solid #ccc' }} paddingY={3}>
      <Grid
        item
        xs={3}
        md={2}
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
      >
        <img
          style={{ width: '95px', height: 'auto', maxWidth: '100%' }}
          className="bg-white shadow-lg rounded"
          src={data?.link_banner}
          alt="1"
        />
        <Hidden mdUp>
          {/* <BootstrapButton onClick={() => handleDelete(data?.id)}>Delete</BootstrapButton> */}
          <BootstrapButton onClick={() => handleEdit(data?.id)}>Edit</BootstrapButton>
        </Hidden>
      </Grid>
      <Grid item xs={9} md={10}>
        <Grid container>
          <Grid item xs={8} md={10}>
            <Link to={`/websites/show/${data?.id}`} style={{ textDecoration: 'none' }}>
              <Typography
                component="a"
                className="no-underline"
                sx={{
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#f60'
                  },
                  color: '#2779bd',
                  marginRight: 1,
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}
              >
                {data?.name}
              </Typography>
            </Link>

            <Typography
              component="span"
              sx={{
                color: '#f60',
                border: '1px solid #f60',
                fontSize: '0.75rem',
                fontWeight: 'bold'
              }}
              className="scale-sm ml-3 rounded px-1"
            >
              {data?.aveScore || 5}
            </Typography>
          </Grid>
          <Grid item xs={4} md={2} className="d-flex justify-content-end">
            <Stars rating={data?.aveScore || 5} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={8}>
            <Typography sx={{ fontSize: '0.75rem', color: '#606f7b', fontWeight: 'bold' }}>
              {data?.reviews?.length} Reviews / {data?.offer_count || 0} Offers{' '}
              {data?.tracking_software && `/ ${data?.tracking_software}`}{' '}
              {data?.payment_frequency && `/ ${data?.payment_frequency}`}
            </Typography>
          </Grid>
          <Hidden mdUp>
            <Grid item xs={4} className="d-flex align-items-center justify-content-end">
              <BootstrapButton onClick={() => handleClickOpenDeleteDialog(data?.id)}>
                Delete
              </BootstrapButton>
            </Grid>
          </Hidden>
          <Hidden mdDown>
            <Grid item xs={4} className="d-flex align-items-center justify-content-end">
              <BootstrapButton onClick={() => handleClickOpenDeleteDialog(data?.id)}>
                Delete
              </BootstrapButton>
              <BootstrapButton onClick={() => handleEdit(data?.id)}>Edit</BootstrapButton>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>

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
            Are you sure to permantly delete this network?
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
