import { Button } from '@mui/material'
import React from 'react'

function TextButton({ text, action, color, children, ...rest}) {
  return (
    <Button size='small' variant='text' onClick={action} color={color} {...rest} >
        {children || text || 'Click'}
    </Button>
  )
}

export default TextButton