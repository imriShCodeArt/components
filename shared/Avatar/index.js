import React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from 'components/Menu'
import AvatarRootElm from './AvatarRootElm'
import PropTypes from 'prop-types'

function Avatar({ children, text, small, menuNoGrow, square, ...rest }) {
  const root = (
    <IconButton sx={{ minWidth: '0', padding: 0 }} color='secondary'>
      <AvatarRootElm square={square} small={small} >
        {text}
      </AvatarRootElm>
    </IconButton>
  )
  return (
    <Box {...rest} alignItems={'center'}>
      <Menu nogrow={menuNoGrow} dense triggerElm={root} divided={3}>
        {children}
      </Menu>
    </Box>
  )
}
Avatar.propTypes = {
  text: PropTypes.string,
  small: PropTypes.bool,
  menuNoGrow: PropTypes.bool,
  square: PropTypes.bool,
}

Avatar.defaultProps = {
  text: 'H',
}
export default Avatar
