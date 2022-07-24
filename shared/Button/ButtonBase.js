import React from 'react'
import {
  ButtonBase as Root,
  cardActionAreaClasses,
  styled,
} from '@mui/material'

const ButtonBaseRoot = styled(Root, {
  name: 'MuiCardActionArea',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  display: 'block',
  textAlign: 'inherit',
  width: '100%',
  [`&:hover .${cardActionAreaClasses.focusHighlight}`]: {
    opacity: (theme.vars || theme).palette.action.hoverOpacity,
    '@media (hover: none)': {
      opacity: 0,
    },
  },
  [`&.${cardActionAreaClasses.focusVisible} .${cardActionAreaClasses.focusHighlight}`]:
    {
      opacity: (theme.vars || theme).palette.action.focusOpacity,
    },
}))

const ButtonBase = ({ children, ...rest }) => {
  return (
    <ButtonBaseRoot {...rest}>
      {children}
    </ButtonBaseRoot>
  )
}
export default ButtonBase
