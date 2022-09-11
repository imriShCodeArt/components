import React from "react";
import PropTypes, { oneOf } from "prop-types";

import Root from "@mui/material/Divider";
import Box from "@mui/material/Box";

function Divider({ variant, orientation, children, ...rest }) {
  return (
    <Root
      flexItem={orientation === "vertical" && true}
      {...{ variant, orientation, children, ...rest }}
    />
  );
}

Divider.propTypes = {
  variant: PropTypes.oneOf(["fullwidth", "inset", "middle"]),
  orientation: oneOf(["horizontal", "vertical"]),
};

export default Divider;
