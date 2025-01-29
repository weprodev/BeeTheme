import { borderRadius, spaces } from "../../shared/styleVariables";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${borderRadius.lg};
  border: 1px solid var(--color-eleventh);
  padding: ${spaces[3]};
  gap: ${spaces[3]};
`;

export default Box;