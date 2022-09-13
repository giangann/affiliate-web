import React, { useEffect, useState } from 'react'
import { Stack, Box, Hidden, Typography } from '@mui/material'
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
import editImg from '~/assets/svgs/edit.svg'
import avatarImg from '~/assets/images/avatar3.webp'
import shareImg from '~/assets/svgs/share.svg'
import { LikeIcon, DislikeIcon } from '~/components/Icons'
import { BoxComment } from './BoxComment'
import { formatTimeDiff } from '~/libs/utils'
import { addReply, getMe, addReaction } from '~/apis'
import { STATUS } from '~/constants/name'
import { useAtom } from 'jotai'
import { userAtom } from '~/libs/auth'
import { ReviewForm } from '~/screens/Detail/ReviewForm'

export const CommentItem = ({ item, handleOpenEditReview, ...props }) => {
  const [isReply, setIsReply] = useState(false)
  const [isEditReview, setIsEditReview] = useState(false)
  const [likeActive, setLikeActive] = useState(item.is_liked === STATUS.IS_LIKE)
  const [dislikeActive, setDisLikeActive] = useState(item.is_liked === STATUS.IS_DISLIKE)
  const [like, setLike] = useState(item?.totalLike)
  const [dislike, setDislike] = useState(item?.totalDislike)
  const [forceRender, setForceRender] = useState(1)
  const [openReviewForm, setOpenReviewForm] = useState(false)

  const me = useAtom(userAtom)[0]

  const handleReply = () => {
    setIsReply(!isReply)
  }

  const handleLike = async () => {
    if (dislikeActive) {
      setDislike(dislike - 1)
      setDisLikeActive(false)

      let data = {
        reviewId: item.id,
        status: STATUS.IS_LIKE
      }
      const res = await addReaction(data)
    }

    if (!likeActive) {
      setLike(like + 1)
      setLikeActive(true)

      let data = {
        reviewId: item.id,
        status: STATUS.IS_LIKE
      }
      const res = await addReaction(data)
      console.log('result of like', res)
    } else {
      setLike(like - 1)
      setLikeActive(false)

      let data = {
        reviewId: item.id,
        status: STATUS.NO_REACT
      }
      const res = await addReaction(data)
      console.log('result of like', res)
    }
  }

  const handleDislike = async () => {
    if (likeActive) {
      setLike(like - 1)
      setLikeActive(false)
      let data = {
        reviewId: item.id,
        status: STATUS.IS_DISLIKE
      }
      const res = await addReaction(data)
      console.log('result of like', res)
    }

    if (!dislikeActive) {
      setDislike(dislike + 1)
      setDisLikeActive(true)
      let data = {
        reviewId: item.id,
        status: STATUS.IS_DISLIKE
      }
      const res = await addReaction(data)
      console.log('result of like', res)
    } else {
      setDislike(dislike - 1)
      setDisLikeActive(false)
      let data = {
        reviewId: item.id,
        status: STATUS.NO_REACT
      }
      const res = await addReaction(data)
      console.log('result of like', res)
    }
  }

  const handleOpenReviewForm = () => {
    setIsEditReview(true)
    setOpenReviewForm(true)
  }

  const handleCloseReviewForm = () => {
    setOpenReviewForm(false)
  }

  const onSubmitReply = async (replyValue) => {
    console.log('review id:', item.id)
    const data = {
      interactionId: 0,
      // user_id: user.id,
      replyContent: replyValue,
      reviewId: item.id
    }
    console.log('data', data)
    const res = await addReply(data)
    console.log('result of post reply', res)
    setForceRender((prev) => prev + 1)
  }

  const forceReRender = () => {
    setForceRender((prev) => prev + 1)
  }

  // useEffect(() => {
  //   getMe().then((data) => {
  //     setUser(data.data.data)
  //   })
  // }, [])
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
            <Box>
              <FlexBoxAlignCenter gap="12px">
                <TextHeading>{item?.user_name}</TextHeading>
                <Stars rating={item?.score} />
              </FlexBoxAlignCenter>
              <Hidden smUp>
                <TextGrey>{formatTimeDiff(item?.created_at || new Date())}</TextGrey>
              </Hidden>
            </Box>
          </FlexBoxAlignCenter>
          <Hidden smDown>
            <TextGrey>{formatTimeDiff(item?.created_at || new Date())}</TextGrey>
          </Hidden>
        </FlexBoxAlignCenterJustifyBetween>

        <FlexBoxAlignCenter gap="4px" flexWrap="wrap">
          {item?.rating &&
            Object.entries(item?.rating).map(([label, score], index) => (
              <TagScore key={index} label={label} score={score} />
            ))}
        </FlexBoxAlignCenter>

        <TextComment width="85%">{item?.content}</TextComment>
        {item?.image && (
          <img
            style={{ maxWidth: '300px', maxHeight: '300px' }}
            src={item?.image}
            alt="success screen"
          />
        )}

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

          {me?.id === item.user_id ? (
            <FlexBoxAlignCenter gap="4px" sx={{ cursor: 'pointer' }} onClick={handleOpenReviewForm}>
              <Icon src={editImg} />
              <TextGrey>EDIT</TextGrey>
            </FlexBoxAlignCenter>
          ) : null}
        </FlexBoxAlignCenter>
        {isReply && (
          <Box
            sx={{
              marginLeft: {
                sm: 0,
                xs: 2
              }
            }}
          >
            <BoxComment reviewId={item.id} onSubmit={onSubmitReply} userName={item?.user_name} />
            <TreeView forceReRender={forceReRender} reRender={forceRender} reviewId={item.id} />
          </Box>
        )}
      </Stack>

      {/* Review form for edit */}
      {isEditReview ? (
        <ReviewForm
          isEditReview={isEditReview}
          open={openReviewForm}
          handleClose={handleCloseReviewForm}
          refetchComment={props?.refetchComment}
          handleRefetchComment={props?.handleRefetchComment}
          websiteId={item.website_id}
          reviewId={item.id}
          title={
            <Typography sx={{ color: '#2779bd', fontSize: '1.5rem', fontWeight: 'bold' }}>
              {props?.networkName}
            </Typography>
          }
        />
      ) : null}
    </Stack>
  )
}
