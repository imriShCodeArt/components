import { Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function FooterHeading({ text, color, children, ...rest }) {
  return (
    <Typography color={color} component={'h5'} variant={'h5'} {...rest}>
      {children || text}
    </Typography>
  )
}
FooterHeading.propTypes = {
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'info',
    'warning',
  ]),
  text: PropTypes.string,
}
export default FooterHeading
