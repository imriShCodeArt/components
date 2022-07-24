import React from 'react'
import { Button as Root } from '@mui/material'
function Button({ text, action, color, children, contrast, small, ...rest }) {
  return (
    <Root
      variant='contained'
      onClick={action}
      color={contrast ? 'secondary' : color}
      {...rest}
    >
      {children || text || 'Click'}
    </Root>
  )
}

export default Button
