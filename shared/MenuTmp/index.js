import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Menu as Root, Box, MenuItem } from '@mui/material'
import MenuButton from '../Button/MenuButton'

const MapChlidrenToItems = ({ children, dense }) => {
  const hasMoreThanOneChild = children && children.length >= 1
  if (hasMoreThanOneChild) {
    let i = 0
    const mappedChildren = children.map(({ type, ...rest }) => {
      i += 1
      const elementTypeStr =
        type.name === 'Divider' || type.render !== undefined
          ? type.render.name
          : type.name
          
      return elementTypeStr !== 'Divider' ? (
        <MenuItem
          key={i}
          dense={dense}
          onClick={() => console.log({ type: type, key: i, ...rest })}
        >
          {{ type: type, key: i, ...rest }}
        </MenuItem>
      ) : (
        { type: type, key: i, ...rest }
      )
    })
    return mappedChildren
  }
  return <MenuItem dense={dense}>{children}</MenuItem>
}

function Menu({ name, triggerElm, children, dense, nogrow, ...rest }) {
  const id = `${name}-menu`
  const anchorId = name ? `${name}-button` : 'basic-button'
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [menuWidth, setMenuWidth] = React.useState(0)
  const open = Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null)
  }
  useEffect(() => {
    anchorEl && setMenuWidth(anchorEl.clientWidth)
  }, [anchorEl])

  return (
    <Box display={'inline-block'} {...rest}>
      <MenuButton
        id={anchorId}
        controls={id}
        open={open}
        setAnchor={setAnchorEl}
      >
        {triggerElm}
      </MenuButton>
      <Root
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': anchorId,
        }}
        PaperProps={{
          sx: {
            minWidth: { xs: nogrow ? menuWidth : '90vw', md: menuWidth },
          },
        }}
        disableScrollLock
      >
        <MapChlidrenToItems dense={dense}>{children}</MapChlidrenToItems>
      </Root>
    </Box>
  )
}

Menu.propTypes = {
  triggerElm: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  name: PropTypes.string.isRequired,
  nogrow: PropTypes.bool,
  dense: PropTypes.bool,
}

Menu.defaultProps = {
  name: 'basic',
  triggerElm: 'Click',
}

export default Menu
