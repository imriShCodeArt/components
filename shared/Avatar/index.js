import React from 'react'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Menu from 'components/Menu'
import Root from '@mui/material/Avatar'

function Avatar({ imgSrc, text, size, items, ...rest }) {
  const sizes = (s) => {
    switch (s) {
      case 'xs':
        return 1.35
      case 'sm':
        return 1.65
      case 'md':
        return 1.9
      case 'lg':
        return 2.2
      case 'xl':
        return 3.15
      case 'xxl':
        return 4.5

      default:
        return 1.9
    }
  }
  const avatarSize = () => {
    let s = sizes(size)
    return {
      width: `${s}em`,
      height: `${s}em`,
      fontSize: `${s - 0.3}em`,
    }
  }
  return (
    <Box {...rest} alignItems={'center'}>
      <Menu
        buttonID={'avatar-button'}
        menuID={'avatar-menu'}
        anchorText={
          <Root
            sx={{
              ...avatarSize(),
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: 'cover',
            }}
          >
            {text}
          </Root>
        }
        dense
        items={items}
      />
    </Box>
  )
}
Avatar.propTypes = {
  text: PropTypes.string,
  small: PropTypes.bool,
  imgSrc: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      action: PropTypes.func,
      icon: PropTypes.element,
    })
  ),
}

Avatar.defaultProps = {
  text: '',
  items:[{}]
}
export default Avatar
