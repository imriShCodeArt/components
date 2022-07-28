import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Root from '@mui/material/Menu'
import Item from './components/Item'
import Button from './components/Button'

function Menu({ buttonID, menuID, anchorText, dense, items }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Button {...{buttonID, menuID, handleClick, open,}}>
        {anchorText}
      </Button>
      <Root
        id={menuID}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': { buttonId: buttonID },
        }}
      >
        {items.map(({ ...item }, index) => {
          return <Item {...{...item, dense}} key={index} />
        })}
      </Root>
    </Box>
  )
}

Menu.proptypes = {
  buttonID: PropTypes.string,
  menuID: PropTypes.string,
  items: PropTypes.shape({
    text: PropTypes.string,
    action: PropTypes.func,
    icon: PropTypes.element,
  }),
  anchorText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

Menu.defaultProps = {
  buttonID: 'basic-button',
  menuID: 'basic-menu',
  anchorText: 'PLACEHOLDER',
}

export default Menu
