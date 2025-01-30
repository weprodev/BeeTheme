import {
  faBoltLightning,
  faCheckCircle,
  faComputer,
  faCopy,
  faExternalLink,
  faPhone,
  faTable,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";

import Feature from "../components/Feature";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Tag from "../components/Tag";
import { FeaturesList, StyledFeatures } from "./Features.styles";

const Features: React.FC = () => {
  return (
    <StyledFeatures>
      <Tag>awesome features</Tag>

      <Heading variation="secondary" as="h3">
        Packed With Powerful Features <br />
        Building Made Easy!
      </Heading>

      <FeaturesList>
        <Feature icon={faWindowRestore}>
          <Heading as="h5">3+ Home Demos</Heading>
          <Paragraph variation="secondary">
            Consectetur adipisicing elit. Quidem quasi voluptate amet, unde
            fugit alias ullam!
          </Paragraph>
        </Feature>

        <Feature icon={faTable}>
          <Heading as="h5">180+ Sections</Heading>
          <Paragraph variation="secondary">
            Nihil ut debitis porro error minus maxime dignissimos molestias
            dolorem
          </Paragraph>
        </Feature>

        <Feature icon={faExternalLink}>
          <Heading as="h5">Demo Importer</Heading>
          <Paragraph variation="secondary">
            Lorem ipsum dolor sit amet excepturi esse eum. your business time!
          </Paragraph>
        </Feature>

        <Feature icon={faComputer}>
          <Heading as="h5">Responsive & Retina Ready</Heading>
          <Paragraph variation="secondary">
            Consectetur adipisicing elit. Ullam iusto provident , earum nihil
            possimus at ducimus.
          </Paragraph>
        </Feature>

        <Feature icon={faBoltLightning}>
          <Heading as="h5">Fast Performance</Heading>
          <Paragraph variation="secondary">
            Animi voluptates voluptatibus corporis commodi magnam assumenda
            inventore.
          </Paragraph>
        </Feature>

        <Feature icon={faCopy}>
          <Heading as="h5">Extensive Documentation</Heading>
          <Paragraph variation="secondary">
            Lorem ipsum dolor sit amet s sint repellendus dolor! Architecto,
            optio dolorum.
          </Paragraph>
        </Feature>

        <Feature icon={faCheckCircle}>
          <Heading as="h5">Optimized</Heading>
          <Paragraph variation="secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Paragraph>
        </Feature>

        <Feature icon={faPhone}>
          <Heading as="h5">Friendly & Efficient Support</Heading>
          <Paragraph variation="secondary">
            Ducimus qui distinctio accusantium eos id, voluptatum dolor, ut
            doloremque.
          </Paragraph>
        </Feature>
      </FeaturesList>
    </StyledFeatures>
  );
};

export default Features;