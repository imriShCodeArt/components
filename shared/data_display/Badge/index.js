import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Badge";

function Badge({
  color,
  element,
  count,
  invisible,
  showZero,
  max,
  children,
  variant,
  overlap,
  top,
  right,
  left,
  bottom
}) {
  function notificationsLabel() {
    if (count === 0) {
      return "no notifications";
    }
    if (count > max) {
      return `more than ${max} notifications`;
    }
    return `${count} notifications`;
  }

  const anchorOrig = () => {
    const yAxis = top ? "top" : bottom ? "bottom" : "top";
    const xAxis = right ? "right" : left ? "left" : "right";
    return {
      vertical: yAxis,
      horizontal: xAxis,
    };
  };

  return (
    <Root aria-label={notificationsLabel()}
      badgeContent={count}
      anchorOrigin={anchorOrig()}
      {...{ color, invisible, showZero, max, variant, overlap }}
    >
      {children || element}
    </Root>
  );
}

Badge.propTypes = {
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "info",
    "warning",
    "success",
    "default",
  ]),
  element: PropTypes.element,
  children: PropTypes.element,
  variant: PropTypes.oneOf(["dot", "standard"]),
  overlap: PropTypes.oneOf(["circular", "rectangular"]),
  invisible: PropTypes.element,
  showZero: PropTypes.bool,
  max: PropTypes.number,
  count: PropTypes.number,
  top: PropTypes.bool,
  right: PropTypes.bool,
  left: PropTypes.bool,
  bottom: PropTypes.bool,
};

Badge.defaultProps = {
  top: true,
  right: true,
};

export default Badge;
