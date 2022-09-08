import React, { useMemo, memo } from 'react'
import { Stack, Box, Hidden } from '@mui/material'
import { Stars, Icon } from '~/components'
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

export const CommentReply = memo(({ comment, first }) => {
  const me = useAtom(userAtom)[0]
  const [isReply, setIsReply] = React.useState(false)

  console.log('comment', comment)

  const handleReply = () => {
    setIsReply(!isReply)
  }

  const nestedComments = (comment.children || []).map((comment) => {
    return <CommentReply key={comment.id} comment={comment} type="child" first={false} />
  })

  const handleEditReply = async () => {
    console.log('edit')
  }
  const handleDeleteReply = async () => {
    if (comment.author === me.name) {
      const res = await deleteReply(comment.id)
      console.log('result', res)
    } else {
      alert('Không thể xóa bài của người khác')
    }
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
              <Stars rating={4.5} />
              <TextHeading>{comment.author}</TextHeading>
            </FlexBoxAlignCenter>
            <TextGrey>1 day ago</TextGrey>
          </FlexBoxAlignCenterJustifyBetween>

          <TextComment width="85%">{comment.text}</TextComment>

          {first ? (
            <FlexBoxAlignCenter gap="12px">
              <FlexBoxAlignCenter
                gap="4px"
                // onClick={}
                sx={{
                  cursor: 'pointer'
                }}
              >
                <Icon src={editImg} />
                <TextGrey>EDIT</TextGrey>
              </FlexBoxAlignCenter>

              <FlexBoxAlignCenter
                gap="4px"
                onClick={handleDeleteReply}
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
    </div>
  )
})
