import React from 'react'
import { hot } from "react-hot-loader/root";
import Box from '@mui/material/Box'
import Heading from '../shared/data_display/Heading'
//  ******* clears console after each code update ******
window.addEventListener("message", function onWebpackMessage(e) {
  console.clear();
});
//  *****************************************************

const App = () => {

  return (
    <Box>
      <Heading text={'Heading'} />
    </Box>
  )
}

export default hot(App);

