import React from "react";
import { hot } from "react-hot-loader/root";
import Box from "@mui/material/Box";
import Button from "../shared/io/Button";
import Menu from "../shared/providers/Menu";
//  ******* clears console after each code update ******
window.addEventListener("message", function onWebpackMessage(e) {
  // console.clear();
});
//  *****************************************************

const App = () => {
  return (
    <Box>
      <Menu
        name='avatar_menu'
        root={<Button onClick={(e) => console.log(e.target.id)}>Click</Button>}
      ></Menu>
    </Box>
  );
};

export default hot(App);
