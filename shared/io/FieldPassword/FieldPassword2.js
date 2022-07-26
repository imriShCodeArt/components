import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import isStrongPassword from "validator/lib/isStrongPassword";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import loadable from "@loadable/component";
import { useFormContext } from "../../providers/Form";

const ToggleButton = loadable(() => import("@mui/material/ToggleButton"));
const ToggleButtonGroup = loadable(() => import("@mui/material/ToggleButtonGroup"));
const Visibility = loadable(() => import("@mui/icons-material/Visibility"));
const VisibilityOff = loadable(() => import("@mui/icons-material/VisibilityOffOutlined"));
const Alert = loadable(() => import("../../feedback/Alert"));

const FieldPassword2 = ({
  functions,
  label,
  name,
  placeholder,
  borderColor,
  defaultValue,
  sx,
  messeges,
  displayAlerts,
  BoxProps,
  AlertProps,
  ...rest
}) => {
  const context = useFormContext();
  const { reportChange } = context;
  const [value, setValue] = useState(defaultValue);
  const [alertsToDisplay, setAlertsToDisplay] = useState(<></>);
  const { onChange, onBlur, onFocus } = functions || {};
  const { title, severity, ...items } = messeges || {};

  //          VALUE HANDLING
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    typeof onChange === "function" && onChange({ value, valid: isStrongPassword(value) });
    typeof reportChange === "function" &&
      reportChange({
        key: "password",
        value: value,
        validate: isStrongPassword(value, { returnScore: (s) => s }),
      });
  }, [value]);
  //          **************        //

  //          EVENTS HANDLING
  const handleFocus = (e) => {
    typeof onFocus === "function" && onFocus(e);
  };
  const handleBlur = (e) => {
    // Recomanded to set 'onBlur' function as handler for toggling the 'displayAlerts' param on and off
    typeof onBlur === "function" && onBlur({ event: e, valid: isStrongPassword(value) });
  };
  //          **************        //

  //          ALERTS HANDLING
  useEffect(() => {
    displayAlerts && isStrongPassword(value) === false
      ? setAlertsToDisplay(
          <Alert
            {...AlertProps}
            severity={severity}
            title={title}
            messege={
              <ul>
                {Object.keys(items).map((i) => (
                  <li key={i}>{items[i]}</li>
                ))}
              </ul>
            }
          />
        )
      : setAlertsToDisplay(<></>);
  }, [value, displayAlerts]);
  //          **************        //

  return (
    <Box {...BoxProps}>
      <TextField
        aria-label='email field'
        value={value}
        type={"password"}
        {...{ label, placeholder, name, ...rest }}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        sx={{
          "& fieldset": {
            borderColor: borderColor && theme.palette[borderColor].main,
          },
          width: "100%",
          ...sx,
        }}
      />
      {alertsToDisplay}
    </Box>
  );
};

FieldPassword2.propTypes = {
  functions: PropTypes.shape({
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  }),
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  borderColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "warning",
    "success",
    "success",
  ]),
  sx: PropTypes.object,
  messeges: PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    severity: PropTypes.oneOf(["error", "info", "success", "warning"]),
  }),
  displayAlerts: PropTypes.bool,
  BoxProps: PropTypes.object,
  AlertProps: PropTypes.object,
};
FieldPassword2.defaultProps = {
  defaultValue: "",
};

export default FieldPassword2;
