import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import Heading from "../components/Heading";
import {
  Elementor,
  ElementorIcon,
  FeaturesContainer,
  Info,
  StyledPageBuilder,
} from "./PageBuilder.styles";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import FeatureTag from "../components/FeatureTag";

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
          <FeatureTag>Drag And Drop Editor</FeatureTag>
          <FeatureTag>Great options</FeatureTag>
          <FeatureTag>100+ Custom Elements</FeatureTag>
          <FeatureTag>Coding Required</FeatureTag>
        </FeaturesContainer>

        <Button style={{ alignSelf: "flex-start" }}>View demo</Button>
      </Info>

      <img src="https://placehold.co/400x300/png" alt="Placeholder Image" />
    </StyledPageBuilder>
  );
};

export default PageBuilder;
