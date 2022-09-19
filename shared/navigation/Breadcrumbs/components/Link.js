import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Link";

function Link({ href, color, underline, text, children, onClick }) {
  return (
    <Root
      sx={{ cursor: underline === "hover" ? "default" : "pointer" }}
      {...{ href, color, underline, text, children, onClick }}
    >
      {children || text}
    </Root>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "info",
    "error",
    "success",
    "default",
  ]),
  underline: PropTypes.oneOf(["hover", "none", "always"]),
  text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClick: PropTypes.func,
};

export default Link;
