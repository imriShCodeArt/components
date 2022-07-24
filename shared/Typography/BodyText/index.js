import { Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function BodyText({ text, color, children, ...rest }) {
  return (
    <Typography color={color} {...rest}>
      {children || text}
    </Typography>
  )
}
BodyText.propTypes = {
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'info',
    'warning',
  ]),
  text: PropTypes.string,
}
export default BodyText
