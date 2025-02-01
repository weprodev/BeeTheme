import React from "react";
import {
  Container,
  FeaturesCard,
  FeaturesCards,
  FeaturesCardTitle,
  FeaturesList,
  FeaturesTitle,
  Span,
  Svg,
} from "../layout/Features.Style";

interface SvgPathProps {
  xmlns?: string;
  d: string;
}

const SvgPath: React.FC<SvgPathProps> = ({
  d,
  xmlns = "http://www.w3.org/2000/svg",
}) => (
  <Svg
    xmlns={xmlns}
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d={d} />
  </Svg>
);

const Features: React.FC = () => {
  return (
    <FeaturesList>
      <Container className="container">
        <div>
          <FeaturesTitle>
            We offer quality <Span>with the best materials and services</Span>
          </FeaturesTitle>
        </div>

        <FeaturesCards>
          <FeaturesCard>
            <div>
              <SvgPath d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
            </div>

            <FeaturesCardTitle className="quicksand-bold">
              Layered security
            </FeaturesCardTitle>

            <div>
              We have been working on quality since 2014. Our team has been
              working on quality since 2014. Our team has been working on
            </div>
          </FeaturesCard>

          <FeaturesCard>
            <div>
              <SvgPath d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </div>

            <FeaturesCardTitle className="quicksand-bold">
              Quality control of each part
            </FeaturesCardTitle>

            <div>
              We have been working on quality since 2014. Our team has been
              working on quality since 2014. Our team has been working on
            </div>
          </FeaturesCard>

          <FeaturesCard>
            <div>
              <SvgPath d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </div>

            <FeaturesCardTitle className="quicksand-bold">
              Realiable customer service
            </FeaturesCardTitle>

            <div>
              We have been working on quality since 2014. Our team has been
              working on quality since 2014. Our team has been working on
            </div>
          </FeaturesCard>

          <FeaturesCard>
            <div>
              <SvgPath d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
            </div>

            <FeaturesCardTitle className="quicksand-bold">
              Maintenance manual book
            </FeaturesCardTitle>

            <div>
              We have been working on quality since 2014. Our team has been
              working on quality since 2014. Our team has been working on
            </div>
          </FeaturesCard>

          <FeaturesCard>
            <div>
              <SvgPath d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
            </div>

            <FeaturesCardTitle className="quicksand-bold">
              Delivery safely
            </FeaturesCardTitle>

            <div>
              We have been working on quality since 2014. Our team has been
              working on quality since 2014. Our team has been working on
            </div>
          </FeaturesCard>

          <FeaturesCard>
            <div>
              <SvgPath d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
            </div>

            <FeaturesCardTitle className="quicksand-bold">
              Based on artifical intelligence
            </FeaturesCardTitle>

            <div>
              We have been working on quality since 2014. Our team has been
              working on quality since 2014. Our team has been working on
            </div>
          </FeaturesCard>
        </FeaturesCards>
      </Container>
    </FeaturesList>
  );
};

export default Features;
