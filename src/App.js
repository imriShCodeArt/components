import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import Menu from '../shared/Menu'
import { Dashboard, Info, Logout, Settings } from '@mui/icons-material/'
import Avatar from '../shared/Avatar'
import { Stack } from '@mui/material'

// const MyTheme = React.lazy(() => import('theme/Theme'))
// const Theme = ({ children, ...rest }) => (
//   <React.Suspense fallback={<div />}>
//     <MyTheme {...rest} >
//       {children}
//     </MyTheme>
//   </React.Suspense>
// )

const App = () => {
  const navigation = useNavigate()
  const items = [
    {
      text: 'Profile',
      action: () => navigation('settings/profile'),
      icon: <Dashboard />,
    },
    {
      text: 'Account',
      action: () => navigation('settings/Account'),
      icon: <Info />,
    },
    {
      text: 'Settings',
      action: () => navigation('settings'),
      icon: <Settings />,
    },
    {
      text: 'divider',
    },
    {
      text: 'Log Out',
      action: () => navigation('logout'),
      icon: <Logout />,
    },
  ]
  return (
    <>
      <Menu anchorText={'Click'} items={items} />
      {['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map((i, index) => (
        <Stack key={index} direction={'row'}>
          <Avatar
            size={i}
            imgSrc={
              'https://miro.medium.com/fit/c/176/176/1*bj4j4IqF5ov3jeha_2tRkQ.jpeg'
            }
            items={items}
          />
          <Avatar
            key={index}
            size={i}
            text={'T'}
            items={items}
          />
        </Stack>
      ))}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
