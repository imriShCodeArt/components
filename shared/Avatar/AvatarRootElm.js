import Avatar from '@mui/material/Avatar'
import React from 'react'
import PropTypes from 'prop-types'

function AvatarRootElm({ children, small, square, ...rest }) {
  const avatarSize = small && {
    width: '1.50em',
    height: '1.50em',
  }
  const squreShapedAvatar = square ? 'rounded' : 'circular'
  return (
    <Avatar variant={squreShapedAvatar} sx={{ ...avatarSize }} {...rest}>
      {children}
    </Avatar>
  )
}

AvatarRootElm.propTypes = {
    small: PropTypes.bool,
    square: PropTypes.bool,
}

export default AvatarRootElm
