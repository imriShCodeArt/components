import { Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function PageSubHeading({ text, color, children, ...rest }) {
  return (
    <Typography color={color} component={'h2'} variant={'h2'} {...rest}>
      {children || text}
    </Typography>
  )
}
PageSubHeading.propTypes = {
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'info',
    'warning',
  ]),
  text: PropTypes.string,
}
export default PageSubHeading
