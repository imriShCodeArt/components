import { useContext } from "react";
import Context from "./Context";

export function useMenuContext() {
  return useContext(Context);
}

export { default } from "./Menu";
