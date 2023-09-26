type Operations = {
  [operation: string]: (a: number, b: number) => number;
};

const calculate: Operations = {
  "÷": (a, b) => a / b,
  "×": (a, b) => a * b,
  "−": (a, b) => a - b,
  "+": (a, b) => a + b,
};

const HIGHER_ORDER_OPERATIONS_ARRAY = ["÷", "×"];

export { calculate, HIGHER_ORDER_OPERATIONS_ARRAY };
