import React from "react";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";

const H1 = ({ ...props }) => {
  const { children, text, color, size, variant, ariaLabel, ...rest } = props || {};
  return (
    <Typography
      color={"primary"}
      aria-label={ariaLabel}
      component={"h1"}
      fontSize={`${size}rem`}
      {...{ variant, color, ...rest }}
    >
      {children || text}
    </Typography>
  );
};

H1.propTypes = {
  children: PropTypes.string,
  text: PropTypes.string,
  ariaLabel: PropTypes.string,
  size: PropTypes.number,
};

H1.defaultProps = {
  variant: "h1",
};

export default H1;
