import styled from "styled-components";

type ButtonVariant = "miscellaneous" | "number" | "operator";

type StyledButtonProps = {
  variant: ButtonVariant;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};

const StyledButton: React.FunctionComponent<StyledButtonProps> = styled.button.attrs(
  {
    type: "button",
  }
)<StyledButtonProps>`
  background: ${({ theme, variant }) => theme.button.background[variant]};
  color: ${({ theme, variant }) => theme.button.color[variant]};
  border: none;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  &.zeroButton {
    grid-column: span 2;
    border-radius: 35%;
    width: 100px;
  }

  &:active {
    background-color: ${({ theme }) => theme.active};
  }
`;

export { StyledButton };
export type { ButtonVariant };
