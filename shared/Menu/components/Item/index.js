import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'

function Item({ text, action, icon, dense }) {
  const ItemText = text && <ListItemText>{text}</ListItemText>
  const ItemIcon = icon && <ListItemIcon>{icon}</ListItemIcon>
  if (text === 'divider' && !action) {
    return <Divider />
  }
  return (
    <MenuItem dense={dense} onClick={action}>
      {ItemText}
      {ItemIcon}
    </MenuItem>
  )
}

export default Item
