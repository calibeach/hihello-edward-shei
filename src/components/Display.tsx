import { useContext } from "react";
import { StyledDisplay } from "./styles/StyledDisplay";
import { Context } from "./ContextProvider";

const Display = () => {
  const [state] = useContext(Context);
  return <StyledDisplay>{state.display}</StyledDisplay>;
};

export { Display };
export default Display;
