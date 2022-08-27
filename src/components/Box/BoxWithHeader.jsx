import { Grid, Paper, Stack, styled } from '@mui/material'
import { blue } from '~/styles/colors'
import React from 'react'

function BoxWithHeader({ elevation, children, ...props }) {
  return (
    <Paper elevation={elevation} sx={{ ...props?.sx, borderRadius: '0' }}>
      <Grid container>
        <GridWithPadding
          item
          xs={12}
          sx={{ borderBottom: `3px solid ${blue['border']}`, ...props?.sx, paddingBottom: '0px' }}
        >
          {props.title && props.title()}
        </GridWithPadding>

        <GridWithPadding item xs={12}>
          {props.restOfHeader && props.restOfHeader()}
        </GridWithPadding>
        <StackWithPadding>
          {[0, 1, 2, 4, 5, 6, 7, 8].map((item) => (
            <React.Fragment key={item}>{children}</React.Fragment>
          ))}
        </StackWithPadding>
        <GridWithPadding item xs={12}>
          {props.footer && props.footer()}
        </GridWithPadding>
      </Grid>
    </Paper>
  )
}

export default BoxWithHeader

const GridWithPadding = styled(Grid)(({ theme }) => ({
  paddingBottom: '16px',
  paddingLeft: '24px',
  paddingRight: '24px',

  [theme.breakpoints.down('sm')]: {
    paddingLeft: '16px',
    paddingRight: '16px'
  }
}))

const StackWithPadding = styled(Stack)(({ theme }) => ({
    paddingBottom: '0',
    paddingLeft: '24px',
    paddingRight: '24px',
  
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '16px',
      paddingRight: '16px'
    }
  }))