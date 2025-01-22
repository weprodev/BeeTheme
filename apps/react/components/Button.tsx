import { durations } from "../shared/styleVariables";
import styled from "styled-components";

const Button = styled.button`
  text-align: center;
  cursor: pointer;
  transition: all ${durations[150]};
  color: black;
  font-size: 1rem;
  border: none;
  text-transform: capitalize;
`;

export default Button;
