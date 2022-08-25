import React from 'react'
import { Stack, Box, Hidden } from '@mui/material'
import { Stars, Icon, TagScore } from '~/components'
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
import shareImg from '~/assets/svgs/share.svg'
import { LikeIcon, DislikeIcon } from '~/components/Icons'
import { BoxComment } from './BoxComment'

export const CommentItem = () => {
  const [isReply, setIsReply] = React.useState(false)

  const handleReply = () => {
    setIsReply(!isReply)
  }

  return (
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
            <TextHeading>Name</TextHeading>
          </FlexBoxAlignCenter>
          <TextGrey>1 day ago</TextGrey>
        </FlexBoxAlignCenterJustifyBetween>

        <FlexBoxAlignCenter gap="4px" flexWrap="wrap">
          <TagScore lable="offers" score={5} />
          <TagScore lable="PAYOUT" score={5} />
          <TagScore lable="TRACKING" score={5} />
          <TagScore lable="SUPPORT" score={5} />
        </FlexBoxAlignCenter>

        <TextComment width="85%">
          Yes i have worked with Neogara they have paid me on time thus far. It’s a pleasure to work
          with such a professional team!
        </TextComment>

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

          <FlexBoxAlignCenter gap="4px" sx={{ cursor: 'pointer' }}>
            <LikeIcon />
            <TextGrey>(0)</TextGrey>
          </FlexBoxAlignCenter>

          <FlexBoxAlignCenter gap="4px" sx={{ cursor: 'pointer' }}>
            <DislikeIcon />
            <TextGrey>(0)</TextGrey>
          </FlexBoxAlignCenter>

          <FlexBoxAlignCenter gap="4px" sx={{ cursor: 'pointer' }}>
            <Icon src={shareImg} />
            <TextGrey>SHARE</TextGrey>
          </FlexBoxAlignCenter>
        </FlexBoxAlignCenter>
        {isReply && (
          <Box>
            <BoxComment userName="Bao" />
            <TreeView />
          </Box>
        )}
      </Stack>
    </Stack>
  )
}
