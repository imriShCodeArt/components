import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Chip";

function Chip({
  label,
  variant,
  onClick,
  onDelete,
  href,
  avatar,
  deleteIcon,
  color,
  size,
  ...rest
}) {
  return (
    <Root
      {...{
        label,
        variant,
        onClick,
        onDelete,
        href,
        avatar,
        disabled,
        deleteIcon,
        size,
        ...rest,
      }}
      component={href && "a"}
    />
  );
}

Chip.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(["outlined", "filled"]),
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  href: PropTypes.string,
  avatar: PropTypes.element,
  deleteIcon: PropTypes.element,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "info",
    "warning",
    "success",
    "default",
  ]),
  size: PropTypes.oneOf([
    "small",
    "medium",
  ]),
};

export default Chip;
