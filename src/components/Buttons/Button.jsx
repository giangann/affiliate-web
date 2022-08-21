import { styled, Button as MUIButton } from '@mui/material'
import PropTypes from 'prop-types';
import { camelToSnakeCase } from '~/libs'

const Button = (props) => {
  const { children, type, ...rest } = props
  return (
    <StyledButton className={type} {...rest}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button-blue', 'button-gray', undefined])
}

const StyledButton = styled(MUIButton)({
  textTransform: 'unset',
  lineHeight: 1.25,
  fontWeight: 600,
  padding: '0.25rem 0.5rem 0.25rem 0.5rem'
})

export { Button }
