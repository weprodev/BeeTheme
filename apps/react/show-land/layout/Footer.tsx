import Button from "../components/Button";
import FeatureTag from "../components/FeatureTag";
import Heading from "../components/Heading";
import { FeaturesList, StyledFooter } from "./Footer.styles";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Heading as="h2">Build Your Website With WeProDev</Heading>
      <FeaturesList>
        <FeatureTag noBorder={true}>Coding Knowledge Required</FeatureTag>
        <FeatureTag noBorder={true}>Coding Knowledge Required</FeatureTag>
        <FeatureTag noBorder={true}>Coding Knowledge Required</FeatureTag>
      </FeaturesList>

      <Button>purchase today</Button>
    </StyledFooter>
  );
};

export default Footer;
