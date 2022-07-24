import React from 'react'
import { Button as Root } from '@mui/material'
function ContrastButton({ text, action, color, children, small, ...rest }) {
  return (
    <Root
      variant='contained'
      onClick={action}
      color={'secondary'}
      {...rest}
    >
      {children || text || 'Click'}
    </Root>
  )
}

export default ContrastButton
