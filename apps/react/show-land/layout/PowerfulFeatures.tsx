import FeatureTag from "../components/FeatureTag";
import Heading from "../components/Heading";
import {
  Paragraph,
  PowerfulFeaturesContainer,
  StyledPowerfulFeatures,
} from "./PowerfulFeatures.styles";

const PowerfulFeatures: React.FC = () => {
  return (
    <StyledPowerfulFeatures>
      <Heading as="h3" variation="secondary">
        Most Powerful Feature With WeProDev
      </Heading>

      <Paragraph>
        Adipisicing elit. Consectetur unde ab dicta dolore ad exercitationem
        nihil ipsam esse, Lorem ipsum dolor sit amet consectetur adipisicing.
      </Paragraph>

      <PowerfulFeaturesContainer>
        <FeatureTag variation="secondary">Instant Ajax Search</FeatureTag>
        <FeatureTag variation="secondary">Ajax Product Filter</FeatureTag>
        <FeatureTag variation="secondary">Shop List/Grid</FeatureTag>
        <FeatureTag variation="secondary">Quick View Popop</FeatureTag>
        <FeatureTag variation="secondary">Off Canvas Cart</FeatureTag>
        <FeatureTag variation="secondary">10+ Product Gallery</FeatureTag>
        <FeatureTag variation="secondary">04+ Product Page Tab</FeatureTag>
        <FeatureTag variation="secondary">Frequently Bought</FeatureTag>
        <FeatureTag variation="secondary">Product Variation</FeatureTag>
        <FeatureTag variation="secondary">Quick Buy Button</FeatureTag>
        <FeatureTag variation="secondary">Size Guide</FeatureTag>
        <FeatureTag variation="secondary">Product Video</FeatureTag>
      </PowerfulFeaturesContainer>
    </StyledPowerfulFeatures>
  );
};

export default PowerfulFeatures;
