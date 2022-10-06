import React from "react";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";

const H6 = ({ ...props }) => {
  const { children, text, color, size, variant, ariaLabel, ...rest } = props || {};
  return (
    <Typography
      color={"primary"}
      aria-label={ariaLabel}
      component={"h6"}
      fontSize={`${size}rem`}
      {...{ variant, color, ...rest }}
    >
      {children || text}
    </Typography>
  );
};

H6.propTypes = {
  children: PropTypes.string,
  text: PropTypes.string,
  ariaLabel: PropTypes.string,
  size: PropTypes.number,
};

H6.defaultProps = {
  variant: "h6",
};

export default H6;
