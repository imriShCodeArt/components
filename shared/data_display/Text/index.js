import React from "react";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";

function Text({ children, text, variant, color, size, ...rest }) {
  return (
    <Typography fontSize={`${size}rem`} {...{ variant, color, ...rest }}>
      {children || text}
    </Typography>
  );
}

Text.propTypes = {
  children: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.oneOf([
    "body1",
    "body2",
    "subtitle1",
    "subtitle2",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
  ]),
  size: PropTypes.number,
};

Text.defaultProps = {
  variant: "body1",
};

export default Text;
