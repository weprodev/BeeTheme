import React from "react";
import {
  NumberOfPages,
  Pages,
  StyledHomePages,
  Paragraph,
} from "./HomePages.styles";
import Heading from "../components/Heading";
import Box from "../components/Box";

const HomePages: React.FC = () => {
  return (
    <StyledHomePages>
      <NumberOfPages>3+</NumberOfPages>
      
      <Heading as="h2" variation="secondary">
        Ready To Use Home Pages
      </Heading>

      <Paragraph>
        Lorem elit. Expedita necessitatibus aperiam eius accusantium tempora.
        Sapiente eaque cupiditate quae, obcaecati aliquam cum velit ratione.
      </Paragraph>
      
      <Pages>
        <Box>
          <img src="https://placehold.co/350x500/png" alt="Placeholder Image" />
          <Heading as="h5">Home Page 01</Heading>
        </Box>
        <Box>
          <img src="https://placehold.co/350x500/png" alt="Placeholder Image" />
          <Heading as="h5">Home Page 02</Heading>
        </Box>{" "}
        <Box>
          <img src="https://placehold.co/350x500/png" alt="Placeholder Image" />
          <Heading as="h5">Home Page 03</Heading>
        </Box>
      </Pages>
    </StyledHomePages>
  );
};

export default HomePages;
