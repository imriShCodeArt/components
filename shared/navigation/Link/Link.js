import React from "react";
import { useNavigate } from "react-router-dom";
import Root from "@mui/material/Link";
import PropTypes from "prop-types";

function Link({ to, href, text, color, children, ...rest }) {
  const navigate = useNavigate();

  function scrollAndNav() {
    window.scrollTo(0, 0);
    navigate(`${to ? to : href}`);
  }

  return (
    <Root
      color={color}
      sx={{ cursor: "pointer", textDecoration: "none", px: "1em" }}
      onClick={() => scrollAndNav()}
      {...rest}
    >
      {children || text}
    </Root>
  );
}
Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "info",
    "warning",
  ]),
};
Link.defaultProps = {
  color: "inherit",
};
export default Link;
