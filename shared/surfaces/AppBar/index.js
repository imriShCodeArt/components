import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const AppBar = ({
  position,
  children,
  color,
  toolbarProps,
  component,
  elevation,
  variant,
  enableColorOnDark,
  ...rest
}) => {
  return (
    <Root
      elevation={variant === "outlined" ? 0 : elevation}
      {...{ position, color, component, variant, enableColorOnDark, ...rest }}
    >
      <Toolbar {...toolbarProps}>{children}</Toolbar>
    </Root>
  );
};

AppBar.propTypes = {
  position: PropTypes.oneOf(["absolute", "fixed", "static", "relative", "sticky"]),
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "info",
    "warning",
    "success",
    "default",
  ]),
  toolbarProps: PropTypes.object,
  component: PropTypes.elementType,
  elevation: PropTypes.number,
  variant: PropTypes.oneOf(["outlined", "elevation"]),
  sx: PropTypes.object,
  enableColorOnDark: PropTypes.bool,
};

AppBar.defaultProps = {
  position: "static",
  component: "nav",
  variant: "outlined",
};

export default AppBar;
