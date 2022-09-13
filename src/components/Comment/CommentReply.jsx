import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import React, { useMemo, memo } from 'react'
import { Stack, Box, Hidden } from '@mui/material'
import { Stars, Icon } from '~/components'
import Button from '@mui/material/Button'

import { TreeView } from '~/components/TreeView'
import {
  FlexBoxAlignCenterJustifyBetween,
  FlexBoxAlignCenter,
  TextGrey,
  TextHeading,
  TextComment
} from '~/styles'
import messageImg from '~/assets/svgs/message.svg'
import deleteImg from '~/assets/svgs/delete.svg'
import editImg from '~/assets/svgs/edit.svg'

import avatarImg from '~/assets/images/avatar3.webp'
import { BoxComment } from './BoxComment'
import { useAtom } from 'jotai'
import { userAtom } from '~/libs/auth'
import { deleteReply } from '~/apis'
import { useState } from 'react'
import { formatTimeDiff } from '~/libs/utils'

export const CommentReply = memo(({ comment, first, ...props }) => {
  const me = useAtom(userAtom)[0]
  const [isReply, setIsReply] = React.useState(false)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

  const handleReply = () => {
    setIsReply(!isReply)
  }

  const nestedComments = (comment.children || []).map((comment) => {
    return <CommentReply key={comment.id} comment={comment} type="child" first={false} />
  })

  const handleDeleteReply = async () => {
    if (comment.author === me.name) {
      const res = await deleteReply(comment.id)
      props.forceReRender()
      handleClose()
    } else {
      alert('This is not your own post, can not delete!')
    }
  }

  const handleClickOpenDeleteDialog = () => {
    setOpenDeleteDialog(true)
  }
  const handleClose = () => {
    setOpenDeleteDialog(false)
  }

  return (
    <div style={{ ...{ margin: `${first ? 'none' : '16px 0 0 25px'}` } }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} py="32px" borderBottom="1px solid #d6eaff">
        <Hidden smDown>
          <Box mr="24px">
            <Icon src={avatarImg} sx={{ width: '32px', height: '32px' }} />
          </Box>
        </Hidden>
        <Stack flex={1} gap="8px">
          <FlexBoxAlignCenterJustifyBetween>
            <FlexBoxAlignCenter gap="12px">
              <Hidden smUp>
                <Icon src={avatarImg} sx={{ width: '32px', height: '32px' }} />
              </Hidden>
              <Box>
                <FlexBoxAlignCenter gap="12px">
                  <TextHeading>{comment.author}</TextHeading>
                  <Stars rating={5} />
                </FlexBoxAlignCenter>
                <Hidden smUp>
                  <TextGrey>{formatTimeDiff(comment?.created_at || new Date())}</TextGrey>
                </Hidden>
              </Box>
            </FlexBoxAlignCenter>
            <Hidden smDown>
              <TextGrey>{formatTimeDiff(comment?.created_at || new Date())}</TextGrey>
            </Hidden>
          </FlexBoxAlignCenterJustifyBetween>

          <TextComment width="85%">{comment.text}</TextComment>

          {first ? (
            <FlexBoxAlignCenter gap="12px">
              {/* <FlexBoxAlignCenter
                gap="4px"
                // onClick={}
                sx={{
                  cursor: 'pointer'
                }}
              >
                <Icon src={editImg} />
                <TextGrey>EDIT</TextGrey>
              </FlexBoxAlignCenter> */}

              <FlexBoxAlignCenter
                gap="4px"
                onClick={handleClickOpenDeleteDialog}
                sx={{
                  cursor: 'pointer'
                }}
              >
                <Icon src={deleteImg} />
                <TextGrey>DELETE</TextGrey>
              </FlexBoxAlignCenter>
            </FlexBoxAlignCenter>
          ) : null}
          {isReply && (
            <Box>
              <BoxComment userName={comment.author} />
            </Box>
          )}
        </Stack>
      </Stack>
      {nestedComments}

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
            Are you sure to permantly delete this reply?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleDeleteReply} autoFocus>
            Yes, delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
})
