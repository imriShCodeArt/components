import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

function ButtonGroup({ items, variant, size, araiLabel }) {
  const RenderButtons = () => {
    return (
      items &&
      items.length > 0 &&
      items.map((btn, i) => (
        <Button onClick={btn.action} key={i}>
          {Object.keys(btn).map((k, j) => k !== "action" && btn[k])}
        </Button>
      ))
    );
  };
  return (
    <Root {...{ variant, size }} aria-label={araiLabel}>
      <RenderButtons />
    </Root>
  );
}

ButtonGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      icon: PropTypes.element,
      action: PropTypes.func,
    })
  ).isRequired,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default ButtonGroup;
