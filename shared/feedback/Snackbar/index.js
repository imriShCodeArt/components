import React from "react";

import PropTypes from "prop-types";

import Root from "@mui/material/Snackbar";
import Box from "@mui/material/Box";

function Snackbar({ open, onClose, children }) {
  return (
    <Root {...{ open, onClose }}>
      <Box>{children}</Box>
    </Root>
  );
}

Snackbar.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.bool,
}

export default Snackbar;
