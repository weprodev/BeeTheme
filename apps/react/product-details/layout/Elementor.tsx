import React from "react";
import {
  Div,
  Section,
  Info,
  Heading,
  Paragraph,
  Button,
  Img,
} from "./Elementor.styles";
const Elementor: React.FC = () => {
  return (
    <>
      <Div>
        <Section>
          <Info>
            <Heading>
              NEW! Elementor Experts. A Discovery Network for Pro Users
            </Heading>
            <Paragraph>
              Showcase your best work, discover leading web creators,
              collaborate & grow your business by hiring and getting hired by
              other experts.
            </Paragraph>
            <Button>Get started</Button>
          </Info>
          <Img src="https://placehold.co/450x300/png" alt="Placeholder" />
        </Section>
      </Div>
    </>
  );
};

export default Elementor;
