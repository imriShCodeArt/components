import React from "react";
import PropTypes from "prop-types";

import BottomNavigationAction from "@mui/material/BottomNavigationAction";

function Link({ label, icon, action, showLabel, disabled, ...rest }) {
  return (
    <BottomNavigationAction
      onClick={action}
      {...{ label, icon, showLabel, disabled }}
      {...rest}
    />
  );
}

Link.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.element,
  action: PropTypes.func,
  showLabel: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Link;
