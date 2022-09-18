import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/IconButton";
import loadable from "@loadable/component";

function IconButton({
  color,
  variant,
  onClick,
  id,
  controls,
  text,
  children,
  icon,
  open,
  contained,
  outlined,
  secondary,
  title,
  ...rest
}) {
  return(
    <Root
      aria-controls={controls}
      aria-haspopup={controls ? "true" : undefined}
      aria-expanded={open ? "true" : undefined}
      {...{ onClick, color, id, title, ...rest }}
    >
      {children || text}
    </Root>
  )
}

IconButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  controls: PropTypes.string, // the id of the element which is controlled by this button
  open: PropTypes.bool,
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "info",
    "warning",
    "success",
    "default",
  ]),
  title: PropTypes.string,
};

IconButton.defaultProps = {
  onClick: () => ({}),
};

export default IconButton;
