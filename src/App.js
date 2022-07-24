import React from 'react'
import ReactDOM from 'react-dom/client'

import Divider from '@mui/material/Divider'

import Link from 'components/Link'
import Avatar from 'components/Avatar'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Grid, Paper } from '@mui/material'
import Theme from './Theme'

// const MyTheme = React.lazy(() => import('theme/Theme'))
// const Theme = ({ children, ...rest }) => (
//   <React.Suspense fallback={<div />}>
//     <MyTheme {...rest} >
//       {children}
//     </MyTheme>
//   </React.Suspense>
// )

const App = () => (
  <BrowserRouter>
    <Theme state={{}}>
      <Avatar>
        <Link text={'Account'} to={'account'} />
        <Link text={'Preferences'} to={'preferences'} />
        <Link text={'Settings'} to={'settings'} />
        <Divider variant='middle' />
        <Link text={'Profile'} to={'profile'} />
        <Link text={'Logout'} to={'logout'} />
      </Avatar>
    </Theme>
  </BrowserRouter>
)

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)
