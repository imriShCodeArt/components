import React from 'react'
import { useNavigate } from 'react-router-dom'
import Root from '@mui/material/Link'
import PropTypes from 'prop-types'

function Link({ to, text, color, children, ...rest }) {
  const navigate = useNavigate()

  function scrollAndNav() {
    window.scrollTo(0, 0)
    navigate(`${to}`)
  }

  return (
    <Root
      color={color}
      sx={{ cursor: 'pointer', textDecoration: 'none', px: '1em' }}
      onClick={() => scrollAndNav()}
      {...rest}
    >
      {children || text}
    </Root>
  )
}
Link.propTypes = {
  to: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'info',
    'warning',
  ]),
}
Link.defaultProps = {
  color: 'inherit',
}
export default Link
