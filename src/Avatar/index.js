import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Avatar";

function Avatar({ color, imgSrc, text, title, children, sx, ...rest }) {
  return (
    <Root
    sx={{
      bgcolor: !imgSrc && color,
      ...sx
    }}
    src={imgSrc}
    title={title}
    {...rest}
    >
      {!imgSrc ? children || text : ""}
    </Root>
  );
}

Avatar.propTypes = {
  color: PropTypes.string,
  imgSrc: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.string,
};

Avatar.defaultProps = {
};

export default Avatar;
