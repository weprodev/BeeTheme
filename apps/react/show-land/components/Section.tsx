import styled from "styled-components";

import generateMediaQuery from "../../shared/generateMediaQuery";

const Section = styled.section`
  padding-inline: 10rem;
  ${generateMediaQuery("laptop", "padding-inline: 8rem")}
  ${generateMediaQuery("tablet", "padding-inline: 5rem")}
  ${generateMediaQuery("mobile", "padding-inline: 2rem")}
`;

export default Section;
