import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import loadabale from "@loadable/component";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import { useFormContext } from "shared/providers/Form";

import { FormattedMessage } from "react-intl";

const Alert = loadabale(() => import("@mui/material/Alert"));

const FormField = ({ ...props }) => {
  const { alert, BoxProps, name, ...rest } = props || {};
  const { variant, sx, type, } = rest;
  const context = useFormContext();
  const { onChange, displayAlerts, variant: contextVariant, name: prefix } = context;
  const {
    id: messegeId,
    description: alertDescription,
    defaultMessege: alertDefaultMessege,
  } = alert;

  const [isValid, setIsValid] = useState(true);
  const [fieldName, setFieldName] = useState(`${prefix}_${name}_field`);

  useEffect(() => {
    onChange && onChange({ name: name, value: undefined, type })
  }, [])

  return (
    <Box flexWrap={"wrap"} display={"flex"} {...BoxProps}>
      <TextField
        variant={variant || contextVariant}
        name={fieldName}
        sx={{
          flexGrow: 1,
          "& ::before": {
            // borderBottom: "none!important",
          },
          ...sx,
        }}
        onChange={(e) =>
          onChange({ name: name, value: e.target.value, type })
            ? setIsValid(true)
            : setIsValid(false)
        }
        {...rest}
      />
      {alert && displayAlerts && !isValid && (
        <Alert severity='error' sx={{ flexBasis: "100%" }}>
          <FormattedMessage
            id={messegeId}
            description={alertDescription || "anounce an error in the field"}
            defaultMessage={alertDefaultMessege || "The field above need to be fixed"}
          />
        </Alert>
      )}
    </Box>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "number", "password", "tel", "url"]),
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  underline: PropTypes.bool,
  alert: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    defaultMessege: PropTypes.string,
  }),
  BoxProps: PropTypes.object,
  InputProps: PropTypes.object,
};
FormField.defaultProps = {
  type: "text",
  alert: {},
};

export default FormField;
