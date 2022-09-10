import { Avatar, Grid, Stack, Typography } from '@mui/material'
import { ReactComponent as FilterIcon } from '~/assets/images/filter.svg'
import { grey } from '~/styles/colors'
import Dropdown from 'react-bootstrap/Dropdown'
import BootstrapDropdown from 'react-bootstrap/DropdownButton'
import styled from '@emotion/styled'
import { getPaymentFrequencies, getPaymentMethod, getTrackingSoftware } from '~/apis'
import { useState } from 'react'
import { useEffect } from 'react'

const Filter = (props) => {
  const [trackingSoftware, setTrackingSoftware] = useState()
  const [paymentMethod, setPaymentMethod] = useState()
  const [paymentFrequencies, setPaymentFrequencies] = useState()
  const [trackingValue, setTrackingValue] = useState(props?.filterValue?.tracking_software)
  const [pMethodValue, setPMethodValue] = useState(props?.filterValue?.payment_method)
  const [pFrequencyValue, setPFrequencyValue] = useState(props?.filterValue?.payment_frequency)

  useEffect(() => {
    getTrackingSoftware().then((res) => setTrackingSoftware(res))
    getPaymentFrequencies().then((res) => setPaymentFrequencies(res))
    getPaymentMethod().then((res) => setPaymentFrequencies(res))
  }, [])

  return (
    <Stack direction="row" paddingY={3} gap={2} alignItems="center">
      <Stack direction="row" color={grey['text']}>
        <Avatar sx={{ bgcolor: 'unset', width: '1.25rem', height: '1.25rem' }}>
          <FilterIcon />
        </Avatar>
        <Typography>Filter</Typography>
      </Stack>
      <Grid container gap={3.6}>
        <Grid item xs={3.5}>
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
        <Grid item xs={3.5}>
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
        <Grid item xs={3.5}>
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
