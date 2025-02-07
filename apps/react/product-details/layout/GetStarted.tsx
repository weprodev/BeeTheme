import React from "react";
import {
  Section,
  Heading,
  Paragraph,
  ButtonInfo,
  ButtonStarted,
  ButtonPro,
} from "./GetStarted.styles";
const GetStarted: React.FC = () => {
  return (
    <>
      <Section>
        <Heading>Get Started With Elementor Today</Heading>
        <Paragraph>
          Join millions of professionals who use Elementor to build WordPress
          websites faster and better than ever before
        </Paragraph>
        <ButtonInfo>
          <ButtonStarted>Get started</ButtonStarted>
          <ButtonPro>Go pro</ButtonPro>
        </ButtonInfo>
      </Section>
    </>
  );
};

export default GetStarted;
