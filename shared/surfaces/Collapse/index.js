import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Collapse";

const Collapse = ({ children, open, timeout, unmountOnExit }) => {
  return (
    <Root in={open} {...{ timeout, unmountOnExit }}>
      {children}
    </Root>
  );
};

Collapse.propTypes = {
  open: PropTypes.bool,
  timeout: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  unmountOnExit: PropTypes.bool,
};

Collapse.defaultProps = {
  unmountOnExit: true,
  timeout: "auto",
};

export default Collapse;
