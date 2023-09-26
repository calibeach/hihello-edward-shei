import { State, Action, ActionType } from "./types";
import { calculate, HIGHER_ORDER_OPERATIONS_ARRAY } from "./helpers";

export const INITIAL_STATE: State = {
  display: "0",
  isFirstOperand: true,
  operands: [] as number[],
  operators: [] as string[],
};

export default function reducer(state: State, action: Action): State {
  const { type, payload } = action;

  switch (type) {
    case ActionType.CLEAR: {
      return {
        ...state,
        display: "0",
        operands: [] as number[],
        operators: [] as string[],
      };
    }

    case ActionType.NUMBER: {
      const number = payload;
      let { display } = state;
      const { operands, isFirstOperand } = state;

      if (!operands.length) {
        display = display === "0" ? number : display + number;
        return {
          ...state,
          display,
        };
      } else if (isFirstOperand) {
        display = number;
        return {
          ...state,
          display,
          isFirstOperand: false,
        };
      } else {
        return {
          ...state,
          display: display + number,
        };
      }
    }

    case ActionType.DECIMAL: {
      let { display } = state;

      if (!display.includes(".")) {
        display += ".";
      }
      return { ...state, display };
    }

    case ActionType.OPERATOR: {
      let interimResult = 0;
      let { display } = state;
      const { operands, operators } = state;

      if (display === "0") {
        return {
          ...state,
        };
      }

      const newOperators = [...operators, payload];
      let newOperands = [...operands, parseFloat(display)];
      const mostRecentOperation = newOperators[newOperators.length - 1];

      // for higher-order calculations as the user enters new operands
      if (newOperators.length === 3 && newOperands.length === 3) {
        interimResult = calculate[newOperators[1]](
          newOperands[1],
          newOperands[2]
        );
        newOperands = newOperands.slice(0, -2);
        newOperands.push(interimResult);
        newOperators.splice(1, newOperators.length - 1);
        interimResult = calculate[newOperators[0]](
          newOperands[0],
          newOperands[1]
        );
        newOperands = [] as number[];
        newOperands.push(interimResult);
        display = interimResult.toString();
      }

      // return out of the switch statement if the user is entering a higher-order operation
      if (
        newOperators.length === 2 &&
        HIGHER_ORDER_OPERATIONS_ARRAY.includes(mostRecentOperation)
      ) {
        return {
          ...state,
          operators: newOperators,
          operands: newOperands,
          display,
          isFirstOperand: true,
        };
      }

      // for lower-order calculations as the user enters new operands
      if (newOperators.length === 2) {
        interimResult = calculate[newOperators[0]](
          newOperands[0],
          newOperands[1]
        );
        newOperands.splice(-2);
        display = interimResult.toString();
        newOperands.push(interimResult);
        newOperators.shift();
      }

      return {
        ...state,
        display,
        operands: newOperands,
        operators: newOperators,
        isFirstOperand: true,
      };
    }

    case ActionType.PERCENTAGE: {
      let { display } = state;
      display = (parseFloat(display) / 100).toString();
      return { ...state, display };
    }

    case ActionType.INVERT: {
      let { display } = state;
      display = (parseFloat(display) * -1).toString();
      return { ...state, display };
    }

    case ActionType.CALCULATE: {
      let { display } = state;
      const { operands, operators } = state;

      let newOperators = [...operators];
      let newOperands = [...operands, parseFloat(display)];
      const mostRecentOperation = newOperators[newOperators.length - 1];

      let result = 0;
      let interimResult = 0;

      if (
        HIGHER_ORDER_OPERATIONS_ARRAY.includes(mostRecentOperation) &&
        newOperators.length === 2
      ) {
        interimResult = calculate[newOperators[1]](
          newOperands[1],
          newOperands[2]
        );
        newOperands = newOperands.slice(0, -2);
        newOperands.push(interimResult);
        newOperators = newOperators.slice(0, -1);
      }

      result = calculate[newOperators[0]](newOperands[0], newOperands[1]);
      display = result.toString();
      return {
        ...state,
        operands: [] as number[],
        operators: [] as string[],
        display,
      };
    }

    default: {
      const errorMessage = `Unhandled action type: ${action.type}`;
      throw new Error(errorMessage);
    }
  }
}
