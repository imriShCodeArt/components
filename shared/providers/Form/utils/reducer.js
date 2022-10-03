import * as types from "./vars";

function reducer(state, action) {
  switch (action.type) {
    case types.ASSIGN_FIELD:
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.key]: [
            action.payload.value,
            typeof action.payload.validate === "function"
              ? action.payload.validate()
              : true,
          ],
        },
      };
    case types.TOGGLE_ALERTS_ON:
      return {
        ...state,
        displayAlerts: true,
      };
    default:
      throw new Error("action type is not valid, choose type from 'vars.js' file");
  }
}
export default reducer;
