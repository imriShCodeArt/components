import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Menu";
import MenuItem from "../MenuItem";

function Menu({ anchorEl, open, id, onClose, onClick, items, labelledby }) {
  return (
    <Root
      {...{ anchorEl, open, id, onClose, onClick }}
      MenuListProps={{
        "aria-labelledby": labelledby,
      }}
    >
      {items.map((item, i) => (
        <MenuItem key={i} {...item} />
      ))}
    </Root>
  );
}

Menu.propTypes = {
  open: PropTypes.bool,
  id: PropTypes.string,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  items: PropTypes.array,
  labelledby: PropTypes.string,
};

export default Menu;
