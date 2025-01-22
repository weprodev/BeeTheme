import generateMediaQuery from "../../shared/generateMediaQuery";
import styled from "styled-components";

const ToggleNavButton = styled.button`
  background-color: transparent;
  display: none;
  border: none;
  cursor: pointer;
  ${generateMediaQuery("tablet", `display:block`)}
`;

export default ToggleNavButton;
