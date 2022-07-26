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

  function assignFieldValue({ name: tmpName, value, type }) {
    const valid = validations.checkByType({
      type,
      value,
      options: validationTerms[tmpName],
    });
    dispatch({
      type: types.ASSIGN_FIELD,
      payload: {
        key: tmpName,
        value: value,
        validate: () => valid,
      },
    });

    return valid;
  }

  function handleSubmit() {
    let tmp = {};
    const allFieldsAreValid =
      Object.keys(state.fields)
        .map((f) => {
          return state.fields[f][1];
        })
        .filter((f) => !f).length === 0
        ? true
        : false;
    Object.keys(state.fields).forEach((element) => {
      tmp[element] = state.fields[element][0];
    });
    allFieldsAreValid ? onSubmit(tmp) : dispatch({ type: types.TOGGLE_ALERTS_ON });
  }

  useEffect(() => {
    window.addEventListener('keypress', e=>{
      e.key === 'Enter' && handleSubmit()
    })
  }, [])

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
    password: {},
  },
  name: "form",
};

export default Form;
