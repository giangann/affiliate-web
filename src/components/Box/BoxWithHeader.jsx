import { Grid, Paper, Stack, styled } from '@mui/material'
import React, { cloneElement } from 'react'
import { Filter } from '~/screens/Home'
import { blue } from '~/styles/colors'

function BoxWithHeader({ elevation, filterValue, setFilterValue, children, ...props }) {
  return (
    <Paper
      elevation={4}
      sx={{
        ...props?.sx,
        borderRadius: '0',

        border: props.mainColor ? `3px solid ${props.mainColor}` : ``
      }}
    >
      <Grid container>
        <GridWithPadding
          item
          xs={12}
          sx={{
            borderBottom: props.mainColor
              ? `3px solid ${props.mainColor}`
              : `3px solid ${blue['border']}`,
            ...props?.sx,
            paddingBottom: '0px',
            color: props.mainColor ? `white` : 'unset',
            backgroundColor: props.mainColor
          }}
        >
          {props.title && props.title()}
        </GridWithPadding>

        <GridWithPadding item xs={12}>
          {props.restOfHeader && (
            <>
              {props.allFilter && (
                <Filter
                  allFilter={props.allFilter}
                  filterValue={filterValue}
                  handleFilterValue={setFilterValue}
                />
              )}

              {props.restOfHeader()}
            </>
          )}
        </GridWithPadding>
        <StackWithPadding>
          {props.data
            ? props.data.map((item) => (
                <React.Fragment key={item.id}>
                  {cloneElement(children, { data: item })}
                </React.Fragment>
              ))
            : [0, 1, 2, 4, 5, 6, 7, 8].map((item) => (
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
  width: '100%',

  [theme.breakpoints.down('sm')]: {
    paddingLeft: '16px',
    paddingRight: '16px'
  }
}))
