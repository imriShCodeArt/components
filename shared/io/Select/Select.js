import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

function Select({
  fullwidth,
  onChange,
  label,
  options,
  id,
  variant,
  value,
  width,
  grow,
}) {
  const idPrefix = "select_id";
  const labelId = `${idPrefix}_${id}_label`;
  const selectId = `${idPrefix}_${id}`;
  const [currentValue, setCurrentValue] = useState(value || "");
  function handleChange(event) {
    setCurrentValue(event.target.value);
  }
  useEffect(() => {
    console.log(currentValue);
    onChange && onChange(currentValue);
  }, [currentValue]);
  return (
    <FormControl
      {...{ fullwidth, variant }}
      sx={{
        flexGrow: grow ? grow : width ? undefined : 1,
        flexBasis: `${width}%`,
        width: `${width}`,
      }}
    >
      <InputLabel id={labelId}>{label}</InputLabel>
      <Root
        label={label}
        value={currentValue}
        id={selectId}
        labelId={labelId}
        onChange={handleChange}
      >
        {options &&
          options.map(({ value, text, element }, i) => (
            <MenuItem key={i} value={value}>
              {text || element}
            </MenuItem>
          ))}
      </Root>
    </FormControl>
  );
}

Select.propTypes = {
  fullwidth: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      text: PropTypes.string,
      element: PropTypes.element,
    })
  ),
  id: PropTypes.string,
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  width: PropTypes.number,
  grow: PropTypes.number,
};
Select.defaultProps = {
  options: [
    {
      value: 10,
      elementToRender: "Ten",
    },
  ],
};

export default Select;
