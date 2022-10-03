import React, { useState } from "react";
import PropTypes from "prop-types";
import loadabale from "@loadable/component";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import { useFormContext } from "shared/providers/Form";

import { FormattedMessage } from "react-intl";

const Alert = loadabale(() => import("@mui/material/Alert"));

const FormField = (props) => {
  const {
    BoxProps,
    InputProps,
    type = "text",
    name,
    id,
    variant,
    label,
    placeholder,
    alertMessegeId,
    alertMessegeDescription,
    sx,
  } = props || {};
  const context = useFormContext();
  const { onChange, displayAlerts } = context;
  const [isValid, setIsValid] = useState(false);

  return (
    <Box display={"flex"} {...BoxProps}>
      <TextField
        {...props}
        sx={{
          flexGrow: 1,
          ...sx,
        }}
        type={type}
        onChange={(e) =>
          onChange({ name: e.target.name, value: e.target.value, type })
            ? setIsValid(true)
            : setIsValid(false)
        }
      />
      {displayAlerts && !isValid && (
        <Alert severity='error'>
          <FormattedMessage
            id={alertMessegeId || "invalid_password"}
            description={
              alertMessegeDescription || "password is not strong/long enough etc.."
            }
            defaultMessage={"The field above need to be fixed"}
          />
        </Alert>
      )}
    </Box>
  );
};

FormField.propTypes = {};
FormField.defaultProps = {
  name: "password",
};

export default FormField;
