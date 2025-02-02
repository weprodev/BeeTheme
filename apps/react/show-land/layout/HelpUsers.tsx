import { faCode, faFile } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { fontSizes } from "../../shared/styleVariables";
import Heading from "../components/Heading";
import { StyledHelpUsers, FeaturesContainer } from "./HelpUsers.styles";
import Paragraph from "../components/Paragraph";
import Feature, { FeatureLink } from "../components/Feature";

const HelpUsers: React.FC = () => {
  return (
    <StyledHelpUsers>
      <Heading as="h3" variation="secondary">
        How Can We Help You?
      </Heading>

      <Paragraph>Find answers to your questions</Paragraph>

      <FeaturesContainer>
        <Feature icon={faFile} direction="horizontal">
          <Heading as="h6">Detailed Documentation</Heading>
          <Paragraph variation="secondary" fontSize={fontSizes.sm}>
            Lorem ipsum dolor sit amet consectetur labore consequatur store.
          </Paragraph>
          <FeatureLink>Online Documentation</FeatureLink>
        </Feature>

        <Feature icon={faQuestionCircle} direction="horizontal">
          <Heading as="h6">Support & Update</Heading>
          <Paragraph variation="secondary" fontSize={fontSizes.sm}>
            Dicta quis! Non, corporis voluptate. Sunt nihil iste nulla.{" "}
          </Paragraph>
          <FeatureLink>Get Suppoet</FeatureLink>
        </Feature>

        <Feature icon={faCode} direction="horizontal">
          <Heading as="h6">Customization Services</Heading>
          <Paragraph variation="secondary" fontSize={fontSizes.sm}>
            Adipisicing elit. Cupiditate recusandae non fugiat eius veniam eum
            porro dolorum?
          </Paragraph>
          <FeatureLink>Send Requirement</FeatureLink>
        </Feature>
      </FeaturesContainer>
    </StyledHelpUsers>
  );
};

export default HelpUsers;
