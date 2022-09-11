import React, { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";

import loadable from "@loadable/component";

import Root from "@mui/material/ListItem";
import Skeleton from "@mui/material/Skeleton";

const LiText = loadable(() => import("@mui/material/ListItemText"));
const LiAvatar = loadable(() => import("@mui/material/ListItemAvatar"));
const LiIcon = loadable(() => import("@mui/material/ListItemIcon"));
const LiButton = loadable(() => import("@mui/material/ListItemButton"));

function ListItem({ textProps, iconProps, avatarProps, buttonProps, ...fields }) {
  const [elements, setElements] = useState([]);
  const { icon, text, avatar, button } = fields;
  const keys = Object.keys(fields);

  function addElement(keyName, i) {
    setElements((elements) => [
      ...elements,
      <Suspense key={i} fallback={<Skeleton />}>
        {createElm(keyName, i)}
      </Suspense>,
    ]);
  }

  function createElm(keyElm, i) {
    switch (keyElm) {
      case "text":
        return <LiText {...textProps}>{text}</LiText>;
      case "icon":
        return <LiIcon {...iconProps}>{icon}</LiIcon>;
      case "avatar":
        return <LiAvatar {...avatarProps}>{avatar}</LiAvatar>;
      case "button":
        return <LiButton {...{ ...button, children: button["text"], ...buttonProps }} />;
      default:
        throw new Error(
          'valid keys for each item are: "text", "icon", "avatar", "button",  '
        );
    }
  }

  useEffect(() => {
    keys.map((k, i) => addElement(k, i));
  }, []);
  return <Root>{elements}</Root>;
}

ListItem.PropTypes = {
  textProps: PropTypes.object,
  iconProps: PropTypes.object,
  avatarProps: PropTypes.object,
  buttonProps: PropTypes.object,
  fields: PropTypes.shape({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
    icon: PropTypes.element,
    avatar: PropTypes.element,
    button: PropTypes.shape({
      text: PropTypes.string,
      onclick: PropTypes.func,
    }),
  }),
};

export default ListItem;
