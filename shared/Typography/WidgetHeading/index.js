import { Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function WidgetHeading({ text, color, children, ...rest }) {
  return (
    <Typography color={color} component={'h4'} variant={'h6'} {...rest}>
      {children || text}
    </Typography>
  )
}
WidgetHeading.propTypes = {
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'info',
    'warning',
  ]),
  text: PropTypes.string,
}
export default WidgetHeading
