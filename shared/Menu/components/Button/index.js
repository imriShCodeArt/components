import React from 'react'
import PropTypes from 'prop-types'
import Root from '@mui/material/Button'

function Button({ buttonID, menuID, handleClick, open, children, ...rest }) {
  return (
    <Root
      onClick={handleClick}
      id={buttonID}
      aria-controls={open ? menuID : undefined}
      aria-haspopup='true'
      aria-expanded={open ? 'true' : undefined}
      disableRipple
      {...rest}
    >
      {children}
    </Root>
  )
}

Button.propTypes = {
  buttonID: PropTypes.string,
  menuID: PropTypes.string,
  handleClick: PropTypes.func,
  open: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

export default Button
