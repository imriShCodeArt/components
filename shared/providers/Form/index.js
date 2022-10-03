import { useContext } from "react";
import Context from "./Context";

export function useFormContext() {
  return useContext(Context);
}

export { default } from "./Form";
