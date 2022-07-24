import Typography from '@mui/material/Typography'
import React from 'react'
import PropTypes from 'prop-types'

function CTATitle({ text, children, ...rest }) {
  return (
    <Typography color={'primary'} component={'h4'} variant='h4' {...rest}>
      {children || text}
    </Typography>
  )
}
CTATitle.propTypes = {
  text: PropTypes.string,
}
export default CTATitle
