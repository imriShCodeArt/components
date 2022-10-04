import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/MenuItem";

import loadable from "@loadable/component";

const LiText = loadable(() => import("@mui/material/ListItemText"));
const LiIcon = loadable(() => import("@mui/material/ListItemIcon"));
const LiAvatar = loadable(() => import("@mui/material/ListItemAvatar"));
const LiButton = loadable(() => import("@mui/material/ListItemButton"));

const MenuItem = ({ ...props }) => {
  const { text, icon, avatar, button, onClick } = props;
  const keys = Object.keys(props);

  const mappedKeys = keys.map((k, i) => {
    switch (k) {
      case "text":
        return text && <LiText key={`menu_field_${k}_${i}`}>{text}</LiText>;
      case "avatar":
        return avatar && <LiAvatar key={`menu_field_${k}_${i}`}>{avatar}</LiAvatar>;
      case "button":
        return (
          button && (
            <LiButton onClick={button.onClick} key={`menu_field_${k}_${i}`}>
              {button.text}
            </LiButton>
          )
        );
      case "icon":
        return (
          icon && (
            <LiIcon onClick={onClick} key={`menu_field_${k}_${i}`}>
              {icon}
            </LiIcon>
          )
        );
    }
  });

  return <Root disableRipple={button !== undefined}>{mappedKeys}</Root>;
};

MenuItem.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  avatar: PropTypes.element,
  button: PropTypes.shape({ text: PropTypes.string, onClick: PropTypes.func }),
  onClick: PropTypes.func,
};

export default MenuItem;
