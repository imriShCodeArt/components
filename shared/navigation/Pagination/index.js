import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Pagination";

function Pagination({
  count,
  page,
  color,
  disabled,
  variant,
  shape,
  size,
  step,
  onChange,
  ...rest
}) {
  function onNextIconClick(val) {
    onChange(page + 1);
  }
  function onPreviousIconClick(val) {
    onChange(page - 1);
  }
  function onPageNumberClick(val) {
    onChange(val);
  }
  function handleChange(e) {
    e.target.innerText
      ? onPageNumberClick(Math.floor(e.target.innerText))
      : e.target.dataset.testid === "NavigateNextIcon"
      ? onNextIconClick(e.target.dataset.testid)
      : onPreviousIconClick(e.target.dataset.testid);
  }
  return (
    <Root
      {...{
        count,
        page,
        color,
        disabled,
        variant,
        shape,
        size,
        onChange: handleChange,
        ...rest,
      }}
    />
  );
}

Pagination.propTypes = {
  count: PropTypes.number,
  color: PropTypes.oneOf(["primary", "secondary", "standard"]),
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["outlined", "text"]),
  shape: PropTypes.oneOf(["circular", "rounded"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
};
Pagination.defaultProps = {};
export default Pagination;
