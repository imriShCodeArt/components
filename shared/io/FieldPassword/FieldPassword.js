import React, { createRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

import isStrongPassword from "validator/lib/isStrongPassword";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import loadable from "@loadable/component";

const ToggleButton = loadable(() => import("@mui/material/ToggleButton"));
const ToggleButtonGroup = loadable(() => import("@mui/material/ToggleButtonGroup"));
const Visibility = loadable(() => import("@mui/icons-material/Visibility"));
const VisibilityOff = loadable(() => import("@mui/icons-material/VisibilityOff"));
const CircularProgressBar = loadable(() =>
  import("../../feedback/ProgressBar/CircularProgressBar")
);

// ****************************************************
// SHOULD FIX FUNCTIONS BEHAVIOR
// ****************************************************

const FieldPassword = ({
  functions,
  label,
  name,
  placeholder,
  borderColor,
  showPasswordDuration,
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

//   const { onChange, onBlur, onFocus, ...rest } = functions || {};

  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [stepsCount, setStepsCount] = useState(0); //  This is an helper for visualizing countdown after clicking on 'show password' button
  const [hideShowPassword, setHideShowPassword] = useState(false);
  const [passwordStrengthScore, setPasswordStrengthScore] = useState();
  const [conditions, setConditions] = useState({
    minLength: false,
    minLowercase: false,
    minNumbers: false,
    minSymbols: false,
    minUppercase: false,
  });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const startCounting = (intervalLength = 2000) => {
    const interval = setInterval(() => {
      setStepsCount((oldVal) => (oldVal > 1 ? oldVal - 1 : stop()));
    }, Math.floor(intervalLength / 100));

    function stop() {
      setTimeout(() => {
        clearInterval(interval);
        setShowPassword(false);
        setStepsCount(0);
      }, 500);
      return 1;
    }
  };

  function handleBlur(e) {
    setHideShowPassword(true);
    onBlur && onBlur({ e, value, passwordStrengthScore, conditions });
  }
  function handleFocus(e) {
    setHideShowPassword(false);
    onFocus && onFocus({ e, value, passwordStrengthScore, conditions });
  }

  useEffect(() => {
    if (showPassword && showPasswordDuration) {
      setStepsCount(100);
      startCounting(showPasswordDuration);
    }
  }, [showPassword]);

  function formatConditions(key, fieldValue) {
    let tmp = {};
    Object.keys(conditions).map((item, i) => {
      return item === key
        ? (tmp = { ...tmp, [key]: fieldValue })
        : (tmp = { ...tmp, [item]: 0 });
    });
    return isStrongPassword(value, tmp);
  }

  useEffect(() => {
    setPasswordStrengthScore(
      isStrongPassword(value, {
        returnScore: (s) => s,
      })
    );
    setConditions({
      minLength: formatConditions("minLength", minLength),
      minLowercase: formatConditions(minLowercase),
      minNumbers: formatConditions(minNumbers),
      minSymbols: formatConditions(minSymbols),
      minUppercase: formatConditions(minUppercase),
    });
  }, [value]);
  useEffect(() => {
    console.log(onChange);
    onChange && onChange({ value, score: passwordStrengthScore, conditions });
  }, [conditions]);

  return (
    <Box display={"flex"} pt={".2em"}>
      <TextField
        ref={inputRef}
        sx={(theme) => ({
          "& fieldset": { borderColor: borderColor && theme.palette[borderColor].main },
          flexGrow: 1,
        })}
        {...{
          label,
          name,
          placeholder,
          ...functions,
          onChange: handleChange,
          onFocus: handleFocus,
          onBlur: (e) =>
            e.relatedTarget === btnRef.current ? {} : setHideShowPassword(true),
        }}
        type={showPassword ? "text" : "password"}
      />
      {!hideShowPassword && value.length > 0 && !disableShowPassword && (
        <ToggleButtonGroup size='small' value={true}>
          <ToggleButton
            ref={btnRef}
            size='small'
            value={showPassword}
            onClick={() =>
              !showPasswordDuration
                ? toggleShowPassword()
                : !showPassword && toggleShowPassword()
            }
            onFocus={handleFocus}
            onBlur={(e) =>
              e.relatedTarget === inputRef.current
                ? setHideShowPassword(true)
                : toggleShowPassword()
            }
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
            {stepsCount > 0 && (
              <CircularProgressBar
                sx={{ color: "#aaa", ...sx }}
                value={stepsCount}
                size={31}
                top={"21%"}
                left={"10%"}
              />
            )}
          </ToggleButton>
        </ToggleButtonGroup>
      )}
    </Box>
  );
};

FieldPassword.propTypes = {
  functions: PropTypes.shape({
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  }),
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
  showPasswordDuration: PropTypes.number,
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
