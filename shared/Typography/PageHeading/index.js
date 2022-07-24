import { Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function PageHeading({ text, color, children, ...rest }) {
  return (
    <Typography color={color} component={'h1'} variant={'h1'} {...rest}>
      {children || text}
    </Typography>
  )
}
PageHeading.propTypes = {
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'info',
    'warning',
  ]),
  text: PropTypes.string,
}
export default PageHeading
