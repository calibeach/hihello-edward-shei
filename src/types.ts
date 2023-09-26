export type State = {
    display: string;
    isFirstOperand: boolean;
    operands: number[];
    operators: string[];
  };

  export enum ActionType {
    CLEAR = "CLEAR",
    NUMBER = "NUMBER",
    DECIMAL = "DECIMAL",
    OPERATOR = "OPERATOR",
    INVERT = "INVERT",
    PERCENTAGE = "PERCENTAGE",
    CALCULATE = "CALCULATE"
  }

  export type Action = {
    type: ActionType | null;
    payload: string;
  };
