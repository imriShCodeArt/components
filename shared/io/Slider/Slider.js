import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Slider";
import Stack from "@mui/material/Stack";

const Slider = ({
  value,
  onChange,
  iconLeft,
  iconRight,
  ariaLabel,
  id,
  showLabel,
  percision,
  marks,
}) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  useEffect(() => {
    onChange && onChange(sliderValue);
  }, [sliderValue]);

  return (
    <Stack direction={"row"} width={"500px"}>
      {iconLeft}
      <Root
        marks={marks}
        step={percision}
        valueLabelDisplay={showLabel && "auto"}
        id={id}
        aria-label={ariaLabel}
        value={sliderValue}
        onChange={handleChange}
      />
      {iconRight}
    </Stack>
  );
};

Slider.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  ariaLabel: PropTypes.string,
  showLabel: PropTypes.bool,
  percision: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  marks: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }),
  ]),
};
Slider.defaultProps = {
  value: 0,
};

export default Slider;
