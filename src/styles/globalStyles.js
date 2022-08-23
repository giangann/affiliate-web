import { Typography, Box, styled } from '@mui/material'
import { grey } from './colors'

export const TextHeading = styled(Typography)({
  fontSize: '0.825rem',
  color: grey['darkest'],
  fontWeight: 'bold'
})

export const TextContent = styled(Typography)({
  fontSize: '0.75rem',
  color: '#b8c2cc',
  fontWeight: 'bold'
})

export const TextComment = styled(Typography)({
  fontSize: '0.825rem',
  color: '#3d4852',
  fontWeight: '600'
})

export const TextGrey = styled(Typography)({
  fontSize: '.825rem',
  color: grey['text'],
  fontWeight: '600'
})

export const FlexBoxAlignCenter = styled(Box)({
  display: 'flex',
  alignItems: 'center'
})

export const FlexBoxCenter = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const FlexBoxAlignCenterJustifyBetween = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})
