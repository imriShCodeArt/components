import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Fab";

function Fab({ icon, text, action, color, ariaLabel, variant, disabled, ...rest }) {
  return (
    <Root
      disabled={disabled}
      variant={text ? "extended" : "circular"}
      aria-label={ariaLabel}
      color={color}
      onClick={action}
      {...rest}
    >
      {icon}
      {text}
    </Root>
  );
}

Fab.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  action: PropTypes.func,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "info",
    "error",
    "success",
    "default",
  ]),
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool,
};

Fab.defaultProps = {
  variant: "extended",
};

export default Fab;
