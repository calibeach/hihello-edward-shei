import React, { useContext } from "react";
import { Context } from "../components/ContextProvider";
import { StyledButton, ButtonVariant } from "./styles/StyledButton";
import { ActionType } from "../types";
import { StyleSheetManager } from "styled-components";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  children: React.ReactNode;
  type: keyof typeof ActionType;
}

const Button = ({
  type,
  children,
  variant = "number",
  ...rest
}: ButtonProps) => {
  const [, dispatch] = useContext(Context);
  const actionPayload = children?.toString() ?? "";

  const handleClick = () => {
    dispatch && dispatch({ type: ActionType[type], payload: actionPayload });
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "variant"}>
      <StyledButton onClick={handleClick} variant={variant} {...rest}>
        {children}
      </StyledButton>
    </StyleSheetManager>
  );
};
export { Button };
export default Button;
