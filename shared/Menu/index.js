import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Menu as Root, Box, MenuItem } from '@mui/material'
import MenuButton from '../Button/MenuButton'

const MapChlidrenToItems = ({ children, dense }) => {
  const hasMoreThanOneChild = children && children.length > 1
  if (hasMoreThanOneChild) {
    const c = children.map((c, index) => {
      const elementTypeStr =
        c.type.name === 'Divider' || c.type.render !== undefined
          ? c.type.render.name
          : c.type.name
      return elementTypeStr !== 'Divider' ? (
        <div key={index}>
          <MenuItem dense={dense}>{c}</MenuItem>
        </div>
      ) : (
        c
      )
    })
    return c
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
