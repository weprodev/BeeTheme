import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faList } from "@fortawesome/free-solid-svg-icons";

import Heading from "../components/Heading";
import {
  Elementor,
  ElementorIcon,
  Feature,
  FeaturesContainer,
  Info,
  StyledPageBuilder,
} from "./PageBuilder.styles";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

const PageBuilder: React.FC = () => {
  return (
    <StyledPageBuilder>
      <Info>
        <Elementor>
          <ElementorIcon>
            <FontAwesomeIcon size="xs" icon={faList} />
          </ElementorIcon>
          element
        </Elementor>

        <Heading as="h3" variation="secondary">
          Elementor Page Builder
        </Heading>

        <Paragraph>
          Consectetur adipisicing elit. Ad laborum voluptate corporis
          necessitatibus impedit fugit alias. Lorem ipsum dolor sit amet
          consectetur elements, enables Ipsum eveniet repellendus.
        </Paragraph>

        <FeaturesContainer>
          <Feature>
            <FontAwesomeIcon icon={faCheckCircle} />
            Drag And Drop Editor
          </Feature>
          <Feature>
            <FontAwesomeIcon icon={faCheckCircle} />
            Great options
          </Feature>
          <Feature>
            <FontAwesomeIcon icon={faCheckCircle} />
            100+ Custom Elements
          </Feature>
          <Feature>
            <FontAwesomeIcon icon={faCheckCircle} />
            Coding Required
          </Feature>
        </FeaturesContainer>

        <Button style={{ alignSelf: "flex-start" }}>View demo</Button>
      </Info>

      <img src="https://placehold.co/400x300/png" alt="Placeholder Image" />
    </StyledPageBuilder>
  );
};

export default PageBuilder;
