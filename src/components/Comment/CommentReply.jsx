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
import avatarImg from '~/assets/images/avatar3.webp'
import { BoxComment } from './BoxComment'

export const CommentReply = memo(({ comment, first }) => {
  const [isReply, setIsReply] = React.useState(false)

  const handleReply = () => {
    setIsReply(!isReply)
  }

  const nestedComments = (comment.children || []).map((comment) => {
    return <CommentReply key={comment.id} comment={comment} type="child" first={false} />
  })

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

          <FlexBoxAlignCenter gap="12px">
            <FlexBoxAlignCenter
              gap="4px"
              onClick={handleReply}
              sx={{
                cursor: 'pointer'
              }}
            >
              <Icon src={messageImg} />
              <TextGrey>REPLY</TextGrey>
            </FlexBoxAlignCenter>
          </FlexBoxAlignCenter>
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
