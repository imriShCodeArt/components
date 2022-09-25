import React, { createRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

import isStrongPassword from "validator/lib/isStrongPassword";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import loadable from "@loadable/component";

const ToggleButton = loadable(() => import("@mui/material/ToggleButton"));
const ToggleButtonGroup = loadable(() => import("@mui/material/ToggleButtonGroup"));
const Visibility = loadable(() => import("@mui/icons-material/Visibility"));
const VisibilityOff = loadable(() => import("@mui/icons-material/VisibilityOffOutlined"));

const FieldPassword = ({
  label,
  name,
  placeholder,
  borderColor,
  disableShowPassword,
  sx,
  minLength,
  minLowercase,
  minNumbers,
  minSymbols,
  minUppercase,
  onChange,
  onBlur,
  onFocus,
}) => {
  const btnRef = createRef();
  const inputRef = createRef();

  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [hideShowPassword, setHideShowPassword] = useState(false);

  const [conditions, setConditions] = useState({
    score: isStrongPassword(value, {
      returnScore: (s) => s,
    }),
    minLength: false,
    minLowercase: false,
    minNumbers: false,
    minSymbols: false,
    minUppercase: false,
  });

  useEffect(() => {
    setConditions({
      score: isStrongPassword(value, {
        returnScore: (s) => s,
      }),
      minLength: formatConditions("minLength", minLength),
      minLowercase: formatConditions("minLowercase", minLowercase),
      minNumbers: formatConditions("minNumbers", minNumbers),
      minSymbols: formatConditions("minSymbols", minSymbols),
      minUppercase: formatConditions("minUppercase", minUppercase),
    });
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  function handleFocus(e) {
    setHideShowPassword(false);
  }

  function formatConditions(key, fieldValue) {
    let tmp = {};
    Object.keys(conditions).map((item, i) => {
      return item === key
        ? (tmp = { ...tmp, [key]: fieldValue })
        : (tmp = { ...tmp, [item]: 0 });
    });
    return isStrongPassword(value, tmp);
  }

  return (
    <Box display={"flex"} pt={".2em"}>
      <TextField
        inputProps={{
          ref: inputRef,
        }}
        sx={(theme) => ({
          "& fieldset": { borderColor: borderColor && theme.palette[borderColor].main },
          flexGrow: 1,
          ...sx,
        })}
        {...{
          label,
          name,
          placeholder,
          onChange: (e) => {
            handleChange(e);
            onChange && onChange({ e, value, conditions });
          },
          onFocus: (e) => {
            handleFocus(e);
            onFocus && onFocus(e, value, conditions);
          },
          onBlur: (e) => {
            if (e.relatedTarget !== btnRef.current) {
              setHideShowPassword(true);
              setShowPassword(false);
            }
            onBlur && onBlur({ e, value, conditions });
          },
        }}
        type={showPassword ? "text" : "password"}
      />
      {!hideShowPassword && value.length > 0 && !disableShowPassword && (
        <ToggleButtonGroup size='small' value={true}>
          <ToggleButton
            ref={btnRef}
            size='small'
            value={showPassword}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            onFocus={(e) => handleFocus(e)}
            onBlur={(e) => {
              if (e.relatedTarget !== inputRef.current) {
                setHideShowPassword(true);
                setShowPassword(false);
              }
            }}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </ToggleButton>
        </ToggleButtonGroup>
      )}
    </Box>
  );
};

FieldPassword.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  borderColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "warning",
    "success",
    "success",
  ]),
  disableShowPassword: PropTypes.bool,
  sx: PropTypes.object,
  minLength: PropTypes.number,
  minLowercase: PropTypes.number,
  minNumbers: PropTypes.number,
  minSymbols: PropTypes.number,
  minUppercase: PropTypes.number,
};
FieldPassword.defaultProps = {
  name: "password",
  label: "Password",
  minLength: 1,
  minLowercase: 0,
  minNumbers: 0,
  minSymbols: 0,
  minUppercase: 0,
};

export default FieldPassword;
