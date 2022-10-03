import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Button";
import { useFormContext } from "shared/providers/Form";

function Button({
  color,
  variant,
  onClick,
  id,
  controls,
  text,
  children,
  open,
  contained,
  outlined,
  secondary,
  primary,
  title,
  inherit,
  info,
  warning,
  success,
  ...rest
}) {
  const context = useFormContext();
  const { onSubmit } = context;
  return (
    <Root
      aria-controls={controls}
      aria-haspopup={controls ? "true" : undefined}
      aria-expanded={open ? "true" : undefined}
      variant={contained ? "contained" : outlined ? "outlined" : variant}
      color={
        primary
          ? "primary"
          : secondary
          ? "secondary"
          : inherit
          ? "inherit"
          : info
          ? "info"
          : warning
          ? "warning"
          : success
          ? "success"
          : color
      }
      {...{ id, title, ...rest }}
      onClick={onSubmit || onClick}
    >
      {children || text}
    </Root>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string,
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
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

Button.defaultProps = {
  onClick: () => ({}),
};

export default Button;
