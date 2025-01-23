import styled from "styled-components";
import { borderRadius, fontWeights, spaces } from "../../shared/styleVariables";
import { Button as GeneralButton } from "../../components";

const Button = styled(GeneralButton)`
  background: var(--gradient-primary);
  color: white;
  font-size: inherit;
  font-weight: ${fontWeights.bold};
  padding: ${spaces[4]} ${spaces[8]};
  text-transform: uppercase;
  border-radius: ${borderRadius.xl};
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(-5%);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  }
`;

export default Button;
