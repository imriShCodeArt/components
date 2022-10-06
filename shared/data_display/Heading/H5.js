import React from "react";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";

const H5 = ({ ...props }) => {
  const { children, text, color, size, variant, ariaLabel, ...rest } = props || {};
  return (
    <Typography
      color={"primary"}
      aria-label={ariaLabel}
      component={"h5"}
      fontSize={`${size}rem`}
      {...{ variant, color, ...rest }}
    >
      {children || text}
    </Typography>
  );
};

H5.propTypes = {
  children: PropTypes.string,
  text: PropTypes.string,
  ariaLabel: PropTypes.string,
  size: PropTypes.number,
};

H5.defaultProps = {
  variant: "h5",
};

export default H5;
