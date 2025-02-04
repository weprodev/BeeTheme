import React from "react";
import { Div, Section, Heading, Paragraph, Link, Img } from "./Create.styles";
const Create: React.FC = () => {
  return (
    <>
      <Div>
        <Section>
          <Heading>Create Any Website You Can Imagine</Heading>
          <Paragraph>
            Elementor was built for you. Designers, developers, marketers, and
            entrepreneurs. Create stunning landing pages, design a blog,
            customize your online store – everything is within reach!
          </Paragraph>
          <Link href="#">Visit Elementor Showcase</Link>
          <Img src="https://placehold.co/1200x600/png" alt="Placeholder" />
        </Section>
      </Div>
    </>
  );
};

export default Create;
