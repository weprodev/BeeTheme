import styled from "styled-components";

import generateMediaQuery from "../../shared/generateMediaQuery";

const Section = styled.section`
  padding-inline: 10rem;
  ${generateMediaQuery("lcd", "padding-inline: 12rem")}
  ${generateMediaQuery("led", "padding-inline: 15rem")}
  ${generateMediaQuery("led4k", "padding-inline: 20rem")}
  ${generateMediaQuery("laptop", "padding-inline: 15rem")}
  ${generateMediaQuery("tablet", "padding-inline: 8rem")}
  ${generateMediaQuery("mobile", "padding-inline: 2rem")}
`;

export default Section;
