import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Breadcrumbs";
import Link from "./components/Link";

function Breadcrumbs({
  ariaLabel,
  color,
  activeColor,
  links,
  separator,
  separatorColor,
  underline,
  maxItems,
}) {
  return (
    <Root
      aria-label={ariaLabel}
      {...{ separator, maxItems }}
      color={separatorColor || color}
    >
      {links.map((l, i) => (
        <Link
          underline={underline}
          color={i < links.length - 1 ? color : activeColor}
          key={i}
          {...l}
        />
      ))}
    </Root>
  );
}

Breadcrumbs.propTypes = {
  ariaLabel: PropTypes.string,
  color: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      href: PropTypes.string,
      icon: PropTypes.element,
    })
  ),
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  underline: PropTypes.oneOf(["hover", "none"]),
};

Breadcrumbs.defaultProps = {
  color: "inherit",
  activeColor: "primary",
  separatorColor: "inherit",
  underline: "hover",
  links: [
    {
      text: "Breadcrumbs",
      href: "/#",
    },
  ],
};

export default Breadcrumbs;
