import React from "react";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";

const H2 = ({ contextHook, ...props }) => {
  const context = typeof contextHook === "function" && contextHook().title;
  const { children, text, color, size, variant, ariaLabel, ...rest } =
    context || props || {};
  return (
    <Typography
      color={"primary"}
      aria-label={ariaLabel}
      component={"h2"}
      fontSize={`${size}rem`}
      {...{ variant, color, ...rest }}
    >
      {children || text}
    </Typography>
  );
};

H2.propTypes = {
  children: PropTypes.string,
  text: PropTypes.string,
  ariaLabel: PropTypes.string,
  size: PropTypes.number,
};

H2.defaultProps = {
  variant: "h2",
};

export default H2;
