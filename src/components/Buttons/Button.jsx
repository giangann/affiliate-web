import { Button as MUIButton, styled } from '@mui/material'
import PropTypes from 'prop-types'

const Button = (props) => {
  const { children, type, ...rest } = props
  return (
    <StyledButton className={type} {...rest}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button-blue', 'button-gray', 'button-red', undefined])
}

const StyledButton = styled(MUIButton)({
  textTransform: 'unset',
  lineHeight: 1.25,
  fontWeight: 600,
  fontSize: '0.75rem',
  padding: '0.25rem 0.5rem 0.25rem 0.5rem',
  '&:hover': {
    opacity: 0.5,
  }
})

export { Button }
