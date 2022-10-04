import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Drawer";

function Drawer({ variant, children, open, onClose,  }) {
  return (
    <Root {...{ variant, anchor }}>
      {children}
    </Root>
  );
}

Drawer.propTypes = {
  variant: PropTypes.oneOf(["permanent", "temporary", "persistent"]),
  anchor: PropTypes.oneOf(["right", "left", "top", "bottom"]),
};

export default Drawer;
