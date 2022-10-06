import React, { useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import Context from "./Context";
import reducer from "./utils/reducer";
import initialState from "./utils/initialState";

import * as types from "./utils/vars";
import * as validations from "./utils/validations";

const Form = (props) => {
  const { onSubmit, validationTerms, disableCard, variant, children, name } = props;

  const [state, dispatch] = useReducer(reducer, initialState());

  function assignFieldValue({ name, value, type }) {
    const valid = validations.checkByType({
      type,
      value,
      options: validationTerms[name],
    });
    dispatch({
      type: types.ASSIGN_FIELD,
      payload: {
        key: name,
        value: value,
        validate: () => valid,
      },
    });

    return valid;
  }

  function handleSubmit() {
    const allFieldsAreValid =
      Object.keys(state.fields)
        .map((f) => {
          return state.fields[f][1];
        })
        .filter((f) => !f).length === 0
        ? true
        : false;
    allFieldsAreValid
      ? onSubmit(Object.keys(state.fields).map((f) => state.fields[f][0]))
      : dispatch({ type: types.TOGGLE_ALERTS_ON });
  }

  return (
    <Context.Provider
      value={{
        displayAlerts: state.displayAlerts,
        onChange: assignFieldValue,
        onSubmit: handleSubmit,
        variant,
        name,
      }}
    >
      {disableCard ? children : <Card component={"form"}>{children}</Card>}
    </Context.Provider>
  );
};

Form.propTypes = {
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  onSubmit: PropTypes.func,
  validationTerms: PropTypes.shape({
    password: PropTypes.shape({
      minLength: PropTypes.number,
      minLowercase: PropTypes.number,
      minNumbers: PropTypes.number,
      minSymbols: PropTypes.number,
      minUppercase: PropTypes.number,
      minScroe: PropTypes.number,
    }),
  }),
  disableCard: PropTypes.bool,
  name: PropTypes.string,
};
Form.defaultProps = {
  validationTerms: {
    password: {
      minLength: 5,
    },
  },
  name: "form",
};

export default Form;
