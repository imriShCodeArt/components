import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Button";
import { useFormContext } from "shared/providers/Form";
import { useMenuContext } from "shared/providers/Menu";

function Button(props) {
  const {
    color,
    variant,
    onClick,
    id,
    text,
    children,
    contained,
    outlined,
    secondary,
    inherit,
    info,
    warning,
    success,
    ...rest
  } = props || {};
  const formContext = useFormContext();
  const { onSubmit } = formContext || {};
  const menuContext = useMenuContext() || {};
  const { handleOpen: handleMenuOpen, name: menuID, open: MenuOpen } = menuContext;

  const handleClick = (e) => {
    typeof onClick === "function" && onClick(e);
    typeof onSubmit === "function" && onSubmit(e);
    typeof handleMenuOpen === "function" && handleMenuOpen(e);
  };

  return (
    <Root 
      id={menuID ? `${menuID + "_" || ""}${id || "button"}` : id}
      aria-controls={menuID}
      aria-haspopup={menuID ? "true" : undefined}
      aria-expanded={MenuOpen ? "true" : undefined}
      variant={contained ? "contained" : outlined ? "outlined" : variant}
      color={
        secondary
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
      {...rest}
      onClick={handleClick}
    >
      {children || text}
    </Root>
  );
}

Button.propTypes = {
  text: PropTypes.any,
  children: PropTypes.any,
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
