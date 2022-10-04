import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/ToggleButton";

function ToggleButton({ text, size, value, onClick, onFocus, onBlur, children, ...rest }) {
  return (
    <Root
      key={value}
      defaultValue={value}
      selected
      value={value}
      {...{ onClick, onFocus, onBlur, size, ...rest }}
    >
        {children || text}
    </Root>
  );
}

ToggleButton.propTypes = {
  value: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.oneOf(["medium", "small", "large"]),
};

export default ToggleButton;
