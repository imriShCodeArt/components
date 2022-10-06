import React, { useState } from "react";
import PropTypes from "prop-types";

import Context from "./Context";
import Root from "@mui/material/Menu";

const Menu = (props) => {
  const { children, defaultOpen, name, root: rootElement } = props;
  const [open, setOpen] = useState(defaultOpen !== undefined);
  const [anchorElement, setAnchorElement] = useState(null);
  const [labelledby, setLabelledby] = useState("");

  const handleClose = () => {
    setOpen(false);
    setAnchorElement(null);
  };
  const handleOpen = (e) => {
    setOpen(true);
    setAnchorElement(e.target);
    setLabelledby(e.target.id);
  };
  return (
    <Context.Provider value={{ open, handleOpen, name }}>
      {rootElement}
      <Root
        id={name}
        anchorEl={anchorElement}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": labelledby,
        }}
      >
        {children}
      </Root>
    </Context.Provider>
  );
};

Menu.propTypes = {};
Menu.defaultProps = {
  name: "menu",
};

export default Menu;
