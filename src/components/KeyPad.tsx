import StyledButtonGrid from "./styles/StyledButtonGrid";
import { Button } from "./Button";

const KeyPad = () => {
  return (
    <StyledButtonGrid className="buttons">
      <Button variant="miscellaneous" type="CLEAR">
        AC
      </Button>
      <Button variant="miscellaneous" type="INVERT">
        +/-
      </Button>
      <Button variant="miscellaneous" type="PERCENTAGE">
        %
      </Button>
      <Button variant="operator" type="OPERATOR">
        &divide;
      </Button>
      <Button variant="number" type="NUMBER">
        7
      </Button>
      <Button variant="number" type="NUMBER">
        8
      </Button>
      <Button variant="number" type="NUMBER">
        9
      </Button>
      <Button variant="operator" type="OPERATOR">
        &times;
      </Button>
      <Button variant="number" type="NUMBER">
        4
      </Button>
      <Button variant="number" type="NUMBER">
        5
      </Button>
      <Button variant="number" type="NUMBER">
        6
      </Button>
      <Button variant="operator" type="OPERATOR">
        &minus;
      </Button>
      <Button variant="number" type="NUMBER">
        1
      </Button>
      <Button variant="number" type="NUMBER">
        2
      </Button>
      <Button variant="number" type="NUMBER">
        3
      </Button>
      <Button variant="operator" type="OPERATOR">
        +
      </Button>
      <Button className="zeroButton" variant="number" type="NUMBER">
        0
      </Button>
      <Button variant="number" type="DECIMAL">
        .
      </Button>
      <Button variant="operator" type="CALCULATE">
        =
      </Button>
    </StyledButtonGrid>
  );
};

export default KeyPad;
