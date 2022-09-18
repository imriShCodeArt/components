import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

function Switch({
  icon,
  checkedIcon,
  color,
  trackColor,
  trackProps,
  thumbColor,
  thumbProps,
  checked,
  defaultChecked,
  value,
  disabled,
  label,
  labelPosition,
  ariaLabel,
  size,
  onChange,
  onFocus,
  onBlur,
  ...rest
}) {
  return (
    <FormControlLabel
      labelPlacement={labelPosition}
      control={
        <Root
          {...rest}
          inputProps={{ "aria-label": ariaLabel }}
          {...{
            checked,
            defaultChecked,
            disabled,
            onChange,
            onBlur,
            onFocus,
            size,
            color,
            value,
            color,
          }}
          sx={{
            "& .MuiSwitch-track": {
              bgcolor: trackColor,
              ...trackProps,
            },
            "& .MuiSwitch-thumb": {
              bgcolor: thumbColor,
              ...thumbProps,
            },
          }}
        />
      }
      label={label}
    />
  );
}

Switch.propTypes = {
  icon: PropTypes.element,
  checkedIcon: PropTypes.element,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  ariaLabel: PropTypes.string,
  size: PropTypes.oneOf(["medium", "small"]),
  trackColor: PropTypes.string,
  thumbColor: PropTypes.string,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "info",
    "error",
    "success",
    "default",
  ]),
  labelPosition: PropTypes.oneOf(["start", "end", "top", "bottom"]),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

Switch.defaultProps = {
  label: "Label",
  value: "Label",
};

export default Switch;
