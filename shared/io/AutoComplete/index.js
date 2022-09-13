import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function AutoComplete({
  options,
  label,
  disablePortal,
  id,
  textFieldProps,
  updateValue,
  updateInputValue,
  freeSolo,
  ...rest
}) {
  const [value, setValue] = useState({});
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    updateValue && updateValue(value);
    updateInputValue && updateInputValue(inputValue);
  }, [inputValue]);
  return (
    <Root
      getOptionLabel={(opt) => opt && opt.label}
      onInputChange={({}, newVal) => setInputValue(newVal)}
      onChange={({}, newVal) => setValue(newVal)}
      inputValue={inputValue}
      {...{ options, freeSolo, disablePortal, ...rest }}
      renderInput={(params) => (
        <TextField {...params} {...textFieldProps} label={label} />
      )}
    />
  );
}

AutoComplete.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
    })
  ),
  label: PropTypes.string,
  disablePortal: PropTypes.bool,
  id: PropTypes.string,
  textFieldProps: PropTypes.object,
  updateValue: PropTypes.func,
  updateInputValue: PropTypes.func,
  freeSolo: PropTypes.bool,
};

AutoComplete.defaultProps = {
  options: [],
};

export default AutoComplete;
