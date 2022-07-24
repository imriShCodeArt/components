import React from 'react'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

function Root({ children, ...rest }) {
  return (
    <Box
      {...rest}
      sx={{
        cursor: 'pointer',
        textTransform: 'none',
      }}
      role={'button'}
    >
      {children}
    </Box>
  )
}

function MenuButton({
  id,
  controls,
  setAnchor,
  open,
  color,
  children,
  ...rest
}) {
  const handleClick = (event) => {
    return setAnchor && setAnchor(event.currentTarget.parentNode)
  }
  return (
    <Root
      id={id}
      aria-controls={open ? controls : undefined}
      aria-haspopup={'menu'}
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      color={color}
      {...rest}
    >
      {children}
    </Root>
  )
}

MenuButton.propTypes = {
  id: PropTypes.string,
  controls: PropTypes.string, // the id of the element which is controlled by this button
  open: PropTypes.bool,
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'info',
    'warning',
    'success',
  ]),
}

MenuButton.defaultProps = {
  id: 'basic-button',
  controls: 'basic-menu',
  hasPop: 'menu',
  open: false,
  color: 'inherit',
}
export default MenuButton
