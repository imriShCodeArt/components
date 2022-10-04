import React from "react";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";

function FieldDate({ onChange, onBlur, onFocus, underline, variant, value, ...rest }) {
  return (
    <TextField
      variant={variant} 
      type={"date"}
      label={" "}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      onBlur={onBlur}
      onFocus={onFocus}
      InputProps={{ disableUnderline: !underline }}
      sx={{ ...rest }}
    />
  );
}

FieldDate.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  underline: PropTypes.bool,
};

FieldDate.defaultProps = {
  onChange: (val) => {},
  underline: true,
  variant: "standard",
};

export default FieldDate;
