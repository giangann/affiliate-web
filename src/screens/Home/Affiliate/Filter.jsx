import { Avatar, Grid, Stack, Typography } from '@mui/material'
import { ReactComponent as FilterIcon } from '~/assets/images/filter.svg'
import { grey } from '~/styles/colors'
import Dropdown from 'react-bootstrap/Dropdown'
import BootstrapDropdown from 'react-bootstrap/DropdownButton'
import styled from '@emotion/styled'
import { getAllFilter, getPaymentFrequencies, getPaymentMethod, getTrackingSoftware } from '~/apis'
import { useState } from 'react'
import { useEffect } from 'react'

const Filter = (props) => {
  const trackingSoftware = props?.allFilter?.tracking_software
  const paymentMethod = props?.allFilter?.payment_method
  const paymentFrequencies = props?.allFilter?.payment_frequencies
  const [trackingValue, setTrackingValue] = useState(props?.filterValue?.tracking_software)
  const [pMethodValue, setPMethodValue] = useState(props?.filterValue?.payment_method)
  const [pFrequencyValue, setPFrequencyValue] = useState(props?.filterValue?.payment_frequency)

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} paddingY={3} gap={2} alignItems="center">
      <Grid container spacing={4} sx={{ width: '100%' }}>
        <Grid item xs={6} sm={3}>
          <Stack direction="row" color={grey['text']}>
            <Avatar sx={{ bgcolor: 'unset', width: '1.25rem', height: '1.25rem' }}>
              <FilterIcon />
            </Avatar>
            <Typography>Filter</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3}>
          <DropdownButton
            title={trackingValue ? trackingValue.name : 'Tracking Software'}
            id="dropdown-basic-button"
            className="dropdown-basic-button"
            style={{ backgroundColor: 'unset' }}
          >
            {trackingSoftware &&
              trackingSoftware.map((item, index) => (
                <Dropdown.Item
                  onClick={() => {
                    props?.handleFilterValue((pre) => {
                      return {
                        ...pre,
                        tracking_software: item
                      }
                    })
                  }}
                  key={index}
                  href="#"
                >
                  {item.name}
                </Dropdown.Item>
              ))}
          </DropdownButton>
        </Grid>
        <Grid item xs={6} sm={3}>
          <DropdownButton
            id="dropdown-basic-button"
            title={pFrequencyValue ? pFrequencyValue.name : 'Payment Frequency'}
            className="dropdown-basic-button"
            style={{ backgroundColor: 'unset' }}
          >
            {paymentFrequencies &&
              paymentFrequencies.map((item, index) => (
                <Dropdown.Item
                  onClick={() => {
                    props?.handleFilterValue((pre) => {
                      return {
                        ...pre,
                        payment_frequency: item
                      }
                    })
                  }}
                  key={index}
                  href="#"
                >
                  {item.name}
                </Dropdown.Item>
              ))}
          </DropdownButton>
        </Grid>
        <Grid item xs={6} sm={3}>
          <DropdownButton
            id="dropdown-basic-button"
            title={pMethodValue ? pMethodValue.name : 'Payment Method'}
            className="dropdown-basic-button"
            style={{ backgroundColor: 'unset' }}
          >
            {paymentMethod &&
              paymentMethod.map((item, index) => (
                <Dropdown.Item
                  onClick={() => {
                    props?.handleFilterValue((pre) => {
                      return {
                        ...pre,
                        payment_method: item
                      }
                    })
                  }}
                  key={index}
                  href="#"
                >
                  {item.name}
                </Dropdown.Item>
              ))}
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
