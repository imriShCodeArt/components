import React, { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Alert";
import loadable from "@loadable/component";

const Title = loadable(() => import("@mui/material/AlertTitle"));

function Alert({ messege, text, title, action, severity, icon, variant, ...rest }) {
  const [alertTitle, setAlertTitle] = useState();
  title &&
    useEffect(() => {
      setAlertTitle(
        <Suspense fallback={<div />}>
          <Title>{title}</Title>
        </Suspense>
      );
    }, []);
  return (
    <Root {...{ severity, action, icon, variant }} {...rest}>
      {alertTitle}
      {messege || text}
    </Root>
  );
}

Alert.propTypes = {
  messege: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  action: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  severity: PropTypes.oneOf(["error", "info", "success", "warning"]),
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  icon: PropTypes.element,
};

Alert.defaultProps = {};

export default Alert;
