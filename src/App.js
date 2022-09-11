import React from 'react'
import { hot } from "react-hot-loader/root";

//  ******* clears console after each code update ******
window.addEventListener("message", function onWebpackMessage(e) {
  console.clear();
});
//  *****************************************************

const App = () => {

  return (
    <>
    APP
    </>
  )
}

export default hot(App);

