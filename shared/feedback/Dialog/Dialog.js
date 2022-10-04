import React, { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Dialog";
import Title from "./components/Title";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import loadable from "@loadable/component";

const Actions = loadable(() => import("@mui/material/DialogActions"));

const Transition = {
  up: React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
  }),
  right: React.forwardRef(function Transition(props, ref) {
    return <Slide direction='right' ref={ref} {...props} />;
  }),
  down: React.forwardRef(function Transition(props, ref) {
    return <Slide direction='down' ref={ref} {...props} />;
  }),
  left: React.forwardRef(function Transition(props, ref) {
    return <Slide direction='left' ref={ref} {...props} />;
  }),
};

function Dialog({
  id,
  open,
  onClose,
  title,
  actions,
  fullscreen,
  transitionDirection,
  transitionElement,
  content,
  children,
}) {
  const idPrefix = "dialog_box_";
  const titleID = idPrefix + (id || "") + "_title";

  return (
    <Root
      TransitionComponent={transitionElement || Transition[transitionDirection]}
      fullScreen={fullscreen}
      id={idPrefix + id}
      {...{ open, onClose }}
      aria-labelledby={titleID}
    >
      <Title fullscreen={fullscreen} onClose={onClose} id={titleID}>
        {title}
      </Title>
      <DialogContent
        sx={{
          px: "2em",
        }}
      >
        {children || content}
      </DialogContent>
      <Suspense fallback={<div />}>
        <Actions
          sx={{
            px: "2em",
            overflow: "hidden",
          }}
        >
          {actions && actions.map((act, i) => ({ ...act, key: i }))}
        </Actions>
      </Suspense>
    </Root>
  );
}

Dialog.propTypes = {
  id: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.element),
  transitionDirection: PropTypes.oneOf(["up", "right", "down", "left"]).isRequired,
  transitionElement: PropTypes.element,
};

Dialog.defaultProps = {
  transitionDirection: "up",
};

export default Dialog;
