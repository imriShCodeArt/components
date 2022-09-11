import React, { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";

import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import loadable from "@loadable/component";

const AppBar = loadable(() => import("@mui/material/AppBar"));
const Toolbar = loadable(() => import("@mui/material/Toolbar"));

function Title({ onClose, children, id, fullscreen, ...rest }) {
  const [dialogHeader, setDialogHeader] = useState();
  useEffect(() => {
    setDialogHeader(() =>
      fullscreen ? (
        <Suspense fallback={<div />}>
          <AppBar color='inherit' position='relative'>
            <Toolbar>
              <DialogTitle id={id} {...rest}>
                {children}
                <IconButton
                  onClick={onClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
            </Toolbar>
          </AppBar>
        </Suspense>
      ) : (
        <DialogTitle id={id} {...rest}>
          {children}
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      )
    );
  }, []);
  return dialogHeader;
}

Title.propTypes = {
  onClose: PropTypes.func,
  id: PropTypes.string,
  fullscreen: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Title;
