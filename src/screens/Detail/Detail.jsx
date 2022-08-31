import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Stack, Box, Link, Grid, Typography, styled } from '@mui/material'
import { TagScore, CommentItem } from '~/components'
import { Icon } from '~/components/Icons'
import { Stars } from '~/components/Star'
import dotImg from '~/assets/svgs/dot.svg'
import emailImg from '~/assets/svgs/email.svg'
import internetImg from '~/assets/svgs/internet.svg'
import detailImg from '~/assets/images/detail.jpg'
import { blue, grey, TextHeading } from '~/styles'
import { BoxDescription } from './BoxDescription'
import Circel from '~/assets/svgs/circle.svg'
import { List } from '~/components/List'
import { Button } from '~/components/Buttons'
import { AffiliateOfferItem } from '~/screens/Home'
import { BoxWithPagination } from '~/components/Pagination'
import { getDataDetail, getWebsite, getListComments } from '~/apis'
import { FlexBoxAlignCenterJustifyBetween, FlexBoxAlignCenter } from '~/styles'
import { ReviewForm } from './ReviewForm'
import { useQuery } from 'react-query'
import { ListSkeleton } from '~/components/Skeleton'

const desc =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ex fugit perspiciatis quas cum, saepe inventore tempore, hic, aliquam animi accusantium. Facere adipisci, eiusquo fugit voluptatem corporis accusamus animi? Lorem ipsum dolor, sit amet consecteturadipisicing elit. Sapiente ex fugit perspiciatis quas cum, saepe inventore tempore, hic,aliquam animi accusantium. Facere adipisci, eius quo fugit voluptatem corporis accusamusanimi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ex fugitperspiciatis quas cum, saepe inventore tempore, hic, aliquam animi accusantium. Facereadipisci, eius quo fugit voluptatem corporis accusamus animi? Lorem ipsum dolor, sit ametconsectetur adipisicing elit. Sapiente ex fugit perspiciatis quas cum, saepe inventoretempore, hic, aliquam animi accusantium. Facere adipisci, eius quo fugit voluptatemcorporis accusamus animi?'

const data1 = [
  {
    title: 'offers'
  },
  {
    title: 'tracking'
  },
  {
    title: 'offers'
  }
]

const arr = [0, 1, 2, 3]

export const Detail = () => {
  const { slug, id } = useParams()
  const [open, setOpen] = React.useState(false)
  const {
    isLoading,
    error,
    data: dataDetail
  } = useQuery('website-detail' + id, () => getWebsite(id))
  const {
    isLoading: isLoadingComment,
    error: errorComment,
    data: dataComment,
    refetch: refetchComment
  } = useQuery('list-comment', () => getListComments(id))

  useEffect(() => {}, [dataDetail, isLoading, error])

  // useEffect(() => {
  //   console.log('dataComment', dataComment)
  // }, [dataComment])

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [refetchBoxComment, setRefetchBoxComment] = React.useState(false)

  const affiliateProgramDetails = useMemo(
    () => [
      {
        id: 1,
        title: 'Number of Offers',
        content: dataDetail?.data_api?.offer_count
      },
      {
        id: 2,
        title: 'Commission Type',
        content: 'CPA, CPL, CGR'
      },
      {
        id: 3,
        title: 'Minimum Payment',
        content: '$' + dataDetail?.minimum_payment
      },
      {
        id: 4,
        title: 'Payment Frequency',
        content: dataDetail?.data_api?.payment_freq
      }
      // {
      //   id: 5,
      //   title: 'Commission Type',
      //   content: 'CPA, CPL, CGR'
      // },
      // {
      //   id: 6,
      //   title: 'Minimum Payment',
      //   content: '$100'
      // }
    ],
    [dataDetail, isLoading, error]
  )

  return (
    <>
      {isLoading || isLoadingComment ? (
        <ListSkeleton />
      ) : error || errorComment ? (
        <h1>Error ...</h1>
      ) : (
        <>
          <ReviewForm
            open={open}
            handleClose={handleClose}
            refetchComment={refetchComment}
            handleRefetchComment={() => setRefetchBoxComment(!refetchBoxComment)}
            websiteId={id}
            title={
              <Typography sx={{ color: '#2779bd', fontSize: '1.5rem', fontWeight: 'bold' }}>
                {dataDetail?.name}
              </Typography>
            }
          />
          <Stack>
            {/* Affiliate Network */}

            <Stack
              sx={{
                px: '20px',
                pb: '20px',
                backgroundColor: '#fff',
                borderTop: `3px solid ${blue['border']}`,
                mb: '8px'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontSize: '0.75rem',
                  color: '#b8c2cc',
                  py: '12px',
                  borderBottom: `1px solid #d6eaff`
                }}
              >
                <Box
                  component="img"
                  src={dotImg}
                  alt="dot img"
                  sx={{
                    width: '12px',
                    height: '12px',
                    position: 'relative',
                    top: '-1px',
                    fill: 'current-color'
                  }}
                />
                <Link
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    fontWeight: '600',
                    '&:hover': {
                      color: '#8795a1',
                      cursor: 'pointer'
                    }
                  }}
                >
                  Affiliate Network
                </Link>
              </Box>

              <Grid container sx={{ py: '12px' }} justifyContent="space-between">
                <Grid item xs={12} sm={6}>
                  <Stack sx={{ flex: 1 }}>
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: '1.25rem',
                        mb: '12px',
                        textTransform: 'capitalize',
                        fontWeight: '700'
                      }}
                    >
                      {dataDetail.name}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                      <Stack direction="row">
                        <Stars rating={4} />
                        <TextGrey ml={1}>{dataComment.length} reviews</TextGrey>
                      </Stack>
                      <Stack direction="row" gap={0.5}>
                        <Icon src={emailImg} sx={{ width: '12px', height: '12px' }} />
                        <Icon src={internetImg} sx={{ width: '12px', height: '12px' }} />
                        <Icon src={emailImg} sx={{ width: '12px', height: '12px' }} />
                        <Icon src={internetImg} sx={{ width: '12px', height: '12px' }} />
                      </Stack>
                    </Box>

                    <Stack direction="row" gap="12px" mt="12px">
                      <TagScore label="offers" score={4} />
                      <TagScore label="offers" score={4} />
                      <TagScore label="offers" score={4} />
                      <TagScore label="offers" score={4} />
                    </Stack>
                  </Stack>

                  <Stack
                    direction="row"
                    py="0.75rem"
                    mt="0.75rem"
                    gap="8px"
                    borderTop="1px dashed #dae1e7"
                  >
                    <Button
                      type="button-blue"
                      onClick={() => {
                        handleClickOpen()
                      }}
                    >
                      Write a Review
                    </Button>
                    <Button type="button-red" href={dataDetail.link} targer="_blank">
                      Join now
                    </Button>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box component="img" src={detailImg} width="100%" />
                </Grid>
              </Grid>

              <BoxDescription desc={dataDetail.data_api.description} isStringToHtml={true} />
            </Stack>

            {/* End Affiliate Network */}

            {/* Affiliate Network Details */}

            <Grid container px="1.25rem" mb="8px" backgroundColor="#fff">
              <Grid item sm={9} xs={12} py="16px" pr="0.5rem" borderRight="1px solid #f1f5f8">
                <Stack>
                  <TextHeading pb="12px">Affiliate Network Details</TextHeading>

                  {affiliateProgramDetails.map((item, index) => (
                    <Grid
                      container
                      key={index}
                      sx={{ py: '0.75rem', borderTop: '1px solid #f1f5f8' }}
                    >
                      <Grid item md={4}>
                        <TextGrey>{item.title}</TextGrey>
                      </Grid>
                      <Grid item md={8}>
                        <TextGrey>{item.content}</TextGrey>
                      </Grid>
                    </Grid>
                  ))}
                </Stack>
              </Grid>
              <Grid item sm={3} xs={12} mt="20px">
                <Stack ml="20px" sx={{ textAlign: 'center' }}>
                  <TextHeading pb="12px">Rating Distribution</TextHeading>
                  <Box
                    sx={{
                      width: '100%',
                      textAlign: 'center',
                      py: '0.75rem',
                      position: 'relative'
                    }}
                  >
                    <Box
                      component="img"
                      src={Circel}
                      sx={{
                        width: {
                          sm: '60px',
                          xs: '90px'
                        },
                        height: {
                          sm: '60px',
                          xs: '90px'
                        }
                      }}
                    />
                    <TextGrey
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: {
                          xs: '1rem',
                          sm: '0.825rem'
                        }
                      }}
                    >
                      {dataDetail?.data_api?.rating}
                    </TextGrey>
                  </Box>

                  <Box>
                    {arr.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          p: '8px 12px'
                        }}
                      >
                        <Stack direction="row" gap="12px" alignItems="center">
                          <span
                            style={{
                              width: '0.75rem',
                              height: '0.75rem',
                              backgroundColor: item?.color ?? '#6cb2eb',
                              display: 'inline-block',
                              borderRadius: '2px'
                            }}
                          ></span>
                          <TextGrey>Excellent</TextGrey>
                        </Stack>
                        <TextHeading>22</TextHeading>
                      </Box>
                    ))}
                  </Box>

                  <Box pt="1rem">
                    {data1.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          p: '8px 12px'
                        }}
                      >
                        <TextGrey sx={{ width: '100%', textAlign: 'left' }}>{item.title}</TextGrey>
                        <Bar />
                      </Box>
                    ))}
                  </Box>
                </Stack>
              </Grid>
            </Grid>

            {/* End Affiliate Network Details */}

            {/* Affiliate Offers */}
            {/* <BoxWithPagination pageSize={12}> */}
            <Stack sx={{ backgroundColor: 'white', mb: '8px' }}>
              <List
                sx={{ px: 3, pb: 2 }}
                header={() => (
                  <>
                    <Grid container sx={{ borderBottom: { xs: 'none', md: '1px solid #ccc' } }}>
                      <Grid item xs={12} md={6} sx={{ justifyContent: 'center' }}>
                        <Stack direction="row" alignItems="center" gap={1} paddingY={3}>
                          <Typography
                            variant="h1"
                            sx={{ fontSize: '1rem', lineHeight: 1, fontWeight: 'bold' }}
                          >
                            Affiliate Offers
                          </Typography>
                          <Typography
                            sx={{
                              fontStyle: 'italic',
                              color: '#b8c2cc',
                              fontSize: '.75rem',
                              fontWeight: 'bold'
                            }}
                          >
                            Data Provided by Affplus.com
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="flex-end"
                          className="h-100"
                          spacing={2}
                        >
                          <Button variant="contained" type="button-blue">
                            Top Converting
                          </Button>
                          <Button variant="contained" type="button-gray">
                            Lastest
                          </Button>
                        </Stack>
                      </Grid>
                    </Grid>
                  </>
                )}
                Item={AffiliateOfferItem}
                footer={() => (
                  <div className="d-flex justify-content-center pt-3">
                    <Button
                      sx={{
                        color: '#2779bd',
                        fontSize: '0.75rem',
                        fontWeight: 'bold'
                      }}
                      className="ml-3 rounded px-1"
                    >
                      See more offers on affplus
                    </Button>
                  </div>
                )}
              />
            </Stack>
            {/* </BoxWithPagination> */}
            {/* End Affiliate Offers */}

            {/* Affiliate Reviews */}
            <Stack sx={{ backgroundColor: 'white' }}>
              <BoxWithPagination
                api={getListComments}
                id={Number(id)}
                refetchBoxComment={refetchBoxComment}
              >
                <List
                  sx={{ px: 3, pb: 2 }}
                  // data={dataComment?.data}
                  header={() => (
                    <FlexBoxAlignCenterJustifyBetween
                      sx={{
                        flexDirection: {
                          xs: 'column',
                          md: 'row'
                        }
                      }}
                      py="16px"
                      borderBottom="1px solid #d6eaff"
                    >
                      <FlexBoxAlignCenter gap="1.25rem">
                        <Button type="button-blue"> All Reviews ({dataComment.length})</Button>
                        <Button type="button-grey">Payment Proofs</Button>
                        <Button type="button-grey">Questions</Button>
                      </FlexBoxAlignCenter>
                      <FlexBoxAlignCenter gap="8px">
                        <TextGrey>Sort:</TextGrey>
                        <select style={{ minWidth: '128px' }}>
                          <option value="1">Most recent</option>
                          <option value="2">Popular</option>
                          <option value="3">Oldest first</option>
                        </select>
                      </FlexBoxAlignCenter>
                    </FlexBoxAlignCenterJustifyBetween>
                  )}
                  Item={CommentItem}
                  footer={() => <>{/* <button>write a review</button> */}</>}
                />
              </BoxWithPagination>
            </Stack>
            {/* End Affiliate Reviews */}
          </Stack>
        </>
      )}
    </>
  )
}

export const TextGrey = styled(Typography)({
  fontSize: '.825rem',
  color: grey['text'],
  fontWeight: '600'
})

export const Bar = styled(Box)({
  width: '100%',
  height: '5px',
  backgroundColor: '#3490dc',
  borderRadius: '2px'
})
