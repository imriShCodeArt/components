import React from 'react'
import PropTypes from 'prop-types'

import Root from '@mui/material/Backdrop'

function Backdrop({ open, close, children, ...rest }) {
  return (
    <Root sx={{zIndex:1600}} open={open} onClick={close} {...rest} >
        {children}
    </Root>
  )
}

Backdrop.propTypes = {
    open: PropTypes.bool,
    close: PropTypes.func,
}

export default Backdrop