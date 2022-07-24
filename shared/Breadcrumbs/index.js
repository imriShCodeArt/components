import { Breadcrumbs as Root, useTheme } from '@mui/material'
import React from 'react'

import Link from 'components/Link'

function Breadcrumbs({ items, type }) {
  const theme = useTheme()
  const propsByType = () => {
    let seperator, color

    switch (type) {
      case 'breadcrumbs' || 'default':
        color = 'inherit'
        seperator = '>'
        break
      case 'categories':
        color = theme.palette.primary.main
        seperator = ' '
        break

      default:
        color = 'inherit'
        seperator = '>'
        break
    }
    return { color, seperator }
  }
  return (
    <Root
      separator={propsByType().seperator}
      color={propsByType().color}
      aria-label={'breadcrumb'}
      
    >
      {items.map(({ text, slug }, index) => (
        <Link key={index} to={slug}>
          {text}
        </Link>
      ))}
    </Root>
  )
}

Breadcrumbs.defaultProps = {
  items: [],
}

export default Breadcrumbs
