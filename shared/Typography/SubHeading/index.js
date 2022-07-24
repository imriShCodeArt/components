import { Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function SubHeading({ text, color, children, ...rest }) {
  return (
    <Typography color={color} component={'h6'} variant={'subtitle1'} {...rest}>
      {children || text}
    </Typography>
  )
}
SubHeading.propTypes = {
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'info',
    'warning',
  ]),
  text: PropTypes.string,
}
export default SubHeading
