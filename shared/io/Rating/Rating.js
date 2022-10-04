import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Rating";
import Box from "@mui/material/Box";

function Rating({
  value,
  name,
  icon,
  precision,
  readOnly,
  onChange,
  onFocus,
  onBlur,
  ...rest
}) {
  const [rating, setRating] = useState(value || 0);
  function updateValue(val) {
    setRating(Math.floor(val));
  }

  useEffect(() => {
    onChange(rating);
  }, [rating]);
  return (
    <Box>
      <Root
        emptyIcon={icon}
        icon={icon}
        name={name}
        onChange={(e) => updateValue(e.target.value)}
        value={rating}
        precision={precision}
        {...{ onFocus, onBlur, readOnly, ...rest }}
      />
    </Box>
  );
}

Rating.propTypes = {
  value: PropTypes.number,
  precision: PropTypes.number,
  name: PropTypes.string,
  icon: PropTypes.element,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

Rating.defaultProps = {
  value: 0,
  onChange: () => {},
  precision: 0.5,
};

export default Rating;
