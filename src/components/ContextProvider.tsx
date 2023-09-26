import {
  Dispatch,
  createContext,
  FC,
  useReducer,
  ReactNode,
  Reducer,
} from "react";
import { State, Action } from "../types";
import reducer, { INITIAL_STATE } from "../reducer";

export const Context = createContext<[State, Dispatch<Action>]>([
  INITIAL_STATE,
  () => {},
]);

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = useReducer<Reducer<State, Action>>(reducer, INITIAL_STATE);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
