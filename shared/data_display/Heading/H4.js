import React from "react";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";

const H4 = ({ ...props }) => {
  const { children, text, color, size, variant, ariaLabel, ...rest } = props || {};
  return (
    <Typography
      color={"primary"}
      aria-label={ariaLabel}
      component={"h4"}
      fontSize={`${size}rem`}
      {...{ variant, color, ...rest }}
    >
      {children || text}
    </Typography>
  );
};

H4.propTypes = {
  children: PropTypes.string,
  text: PropTypes.string,
  ariaLabel: PropTypes.string,
  size: PropTypes.number,
};

H4.defaultProps = {
  variant: "h4",
};

export default H4;
