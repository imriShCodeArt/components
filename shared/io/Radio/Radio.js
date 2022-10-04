import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

function Radiio({ checked, label, text, color, value, onChange, onFocus, onBlur }) {
  return (
    <FormControlLabel
      sx={(theme) => ({
        color: color !== "default" ? theme.palette[color].main : "inherit",
      })}
      {...{ label: label || text, onFocus, onBlur }}
      control={<Root {...{ checked, onChange, value, color }} />}
    />
  );
}

Radiio.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onHover: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  icon: PropTypes.element,
  checkedIcon: PropTypes.element,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "info",
    "error",
    "success",
    "default",
  ]),
};
Radiio.defaultProps = {
  color: "default",
};

export default Radiio;
