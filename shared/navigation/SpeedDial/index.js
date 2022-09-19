import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

function SpeedDial({
  actions,
  direction,
  icon,
  open,
  onOpen,
  onClose,
  ariaLabel,
  sx,
  ...rest
}) {
  return (
    <Root
      {...{ direction, onOpen, onClose, open, ariaLabel, ...rest }}
      sx={{ position: "absolute", bottom: 16, right: 16, ...sx }}
      icon={<SpeedDialIcon />}
    >
      {actions &&
        actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
    </Root>
  );
}

SpeedDial.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element,
      name: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
  direction: PropTypes.oneOf(["up", "right", "down", "left"]),
  icon: PropTypes.element,
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  ariaLabel: PropTypes.string,
  sx: PropTypes.object,
};
SpeedDial.defaultProps = {};

export default SpeedDial;
