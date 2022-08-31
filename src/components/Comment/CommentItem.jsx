import React, { useState } from 'react'
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
import { formatTimeDiff } from '~/libs/utils'

export const CommentItem = ({ item }) => {
  // console.log('CommentItem', item)
  const [isReply, setIsReply] = useState(false)

  const [likeActive, setLikeActive] = useState(false)
  const [dislikeActive, setDisLikeActive] = useState(false)
  const [like, setLike] = useState(item?.totalLike)
  const [dislike, setDislike] = useState(item?.totalDislike)

  const handleReply = () => {
    setIsReply(!isReply)
  }

  const handleLike = () => {
    if (dislikeActive) {
      setDislike(dislike - 1)
      setDisLikeActive(false)
    }

    if (!likeActive) {
      setLike(like + 1)
      setLikeActive(true)
    } else {
      setLike(like - 1)
      setLikeActive(false)
    }
  }

  const handleDislike = () => {
    if (likeActive) {
      setLike(like - 1)
      setLikeActive(false)
    }

    if (!dislikeActive) {
      setDislike(dislike + 1)
      setDisLikeActive(true)
    } else {
      setDislike(dislike - 1)
      setDisLikeActive(false)
    }
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
            <Stars rating={item?.score} />
            <TextHeading>{item?.user_name}</TextHeading>
          </FlexBoxAlignCenter>
          <TextGrey>{formatTimeDiff(item?.created_at || new Date())}</TextGrey>
        </FlexBoxAlignCenterJustifyBetween>

        <FlexBoxAlignCenter gap="4px" flexWrap="wrap">
          {item?.rating &&
            Object.entries(item?.rating).map(([label, score], index) => (
              <TagScore key={index} label={label} score={score} />
            ))}
        </FlexBoxAlignCenter>

        <TextComment width="85%">{item?.content}</TextComment>

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

          <FlexBoxAlignCenter gap="4px" sx={{ cursor: 'pointer' }} onClick={handleLike}>
            <LikeIcon color={likeActive ? '#3490dc' : 'unset'} />
            <TextGrey>({like})</TextGrey>
          </FlexBoxAlignCenter>

          <FlexBoxAlignCenter gap="4px" sx={{ cursor: 'pointer' }} onClick={handleDislike}>
            <DislikeIcon color={dislikeActive ? '#3490dc' : 'unset'} />
            <TextGrey>({dislike})</TextGrey>
          </FlexBoxAlignCenter>

          <FlexBoxAlignCenter gap="4px" sx={{ cursor: 'pointer' }}>
            <Icon src={shareImg} />
            <TextGrey>SHARE</TextGrey>
          </FlexBoxAlignCenter>
        </FlexBoxAlignCenter>
        {isReply && (
          <Box>
            <BoxComment userName={item?.user_name} />
            {/* <TreeView /> */}
          </Box>
        )}
      </Stack>
    </Stack>
  )
}
