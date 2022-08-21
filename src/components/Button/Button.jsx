import React from 'react'
import { Button as MuiButton } from '@mui/material'

export const MyButton = ({ children, ...props }) => {
  return <MuiButton {...props}>{children}</MuiButton>
}
