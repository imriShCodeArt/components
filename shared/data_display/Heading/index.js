import React from "react";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";

function Heading({ children, text, variant, color, size, ...rest }) {
  return (
    <Typography fontSize={`${size}rem`} {...{ variant, color, ...rest }}>
      {children || text}
    </Typography>
  );
}

Heading.propTypes = {
  children: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  size: PropTypes.number,
};

Heading.defaultProps = {
  text: "Heading",
  variant: "h1",
  color: "primary",
};

export default Heading;
