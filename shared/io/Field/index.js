import React from "react";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";

function Field({
  type,
  label,
  name,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  variant,
  underline,
  value,
  ...rest
}) {
  return (
    <TextField
      variant={variant}
      type={type}
      label={label || name}
      placeholder={placeholder}
      onChange={(e) =>  onChange && onChange(e.target.value)}
      onBlur={onBlur}
      onFocus={onFocus}
      InputProps={{ disableUnderline: !underline }}
      sx={{...rest}}
    />
  );
}

Field.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  type: PropTypes.oneOf(["text", "email", "number", "password", "tel", "url"]),
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  underline: PropTypes.bool,
  value: PropTypes.string,
};

Field.defaultProps = {
  type: "text",
  variant: "standard",
  underline: true,
  onChange: (msg) => {},
};

export default Field;
