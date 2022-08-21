import { Avatar, Grid, Stack, Typography } from '@mui/material'
import { ReactComponent as FilterIcon } from '~/assets/images/filter.svg'
import { grey } from '~/styles/colors'
import Dropdown from 'react-bootstrap/Dropdown'
import BootstrapDropdown from 'react-bootstrap/DropdownButton'
import styled from '@emotion/styled'

const Filter = () => {
  return (
    <Stack direction="row" paddingY={3} gap={2}>
      <Stack direction="row" color={grey['text']}>
        <Avatar sx={{ bgcolor: 'unset', width: '1.25rem', height: '1.25rem' }}>
          <FilterIcon />
        </Avatar>
        <Typography>Filter</Typography>
      </Stack>
      <Grid container gap={3.6}>
        <Grid item xs={3.5}>
          <DropdownButton
            id="dropdown-basic-button"
            title="Tracking Software"
            className="dropdown-basic-button"
            style={{ backgroundColor: 'unset' }}
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </Grid>
        <Grid item xs={3.5}>
          <DropdownButton
            id="dropdown-basic-button"
            title="Tracking Software"
            className="dropdown-basic-button"
            style={{ backgroundColor: 'unset' }}
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </Grid>
        <Grid item xs={3.5}>
          <DropdownButton
            id="dropdown-basic-button"
            title="Tracking Software"
            className="dropdown-basic-button"
            style={{ backgroundColor: 'unset' }}
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </Grid>
      </Grid>
    </Stack>
  )
}

const DropdownButton = styled(BootstrapDropdown)({
  backgroundColor: 'white',
  color: 'gray'
})

export { Filter }
