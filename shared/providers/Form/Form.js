import React, { useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import Context from "./Context";
import reducer from "./utils/reducer";
import initialState from "./utils/initialState";

import * as types from "./utils/vars";
import * as validations from "./utils/validations";

const Form = (props) => {
  const { onSubmit, validationTerms, children } = props;

  const [state, dispatch] = useReducer(reducer, initialState());

  function assignFieldValue({name, value, type}) {
    const valid = validations.checkByType({ type, value, options: validationTerms[name] });
    dispatch({
      type: types.ASSIGN_FIELD,
      payload: {
        key: name,
        value: value,
        validate: () =>
          valid,
      },
    });

    return valid
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
      }}
    >
      <Card component={"form"}>{children}</Card>
    </Context.Provider>
  );
};

Form.propTypes = {};
Form.defaultProps = {
  validationTerms: {
    password: {
      minLength: 3,
    },
  },
};

export default Form;
