import React from "react";
import {
  A,
  Img,
  Span,
  Svg,
  TrustedButton,
  TrustedCard,
  TrustedCards,
  TrustedCardSpan,
  TrustedHeader,
  TrustedImg,
  TrustedList,
  TrustedMain,
  TrustedTitle,
} from "./Trusted.Style";

import ImgSrc from "../../../images/trusted.jpg";

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

const Trusted: React.FC = () => {
  return (
    <TrustedList className="container">
      <TrustedMain>
        <TrustedHeader>
          <TrustedTitle>
            Trusted services, <Span> for your various needs</Span>
          </TrustedTitle>

          <TrustedButton>
            Get in touch
            <SvgPath d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </TrustedButton>
        </TrustedHeader>

        <TrustedCards>
          <TrustedCard>
            <TrustedCardSpan>01</TrustedCardSpan>
            <p>solar panels for home</p>
            <A>View Details</A>
          </TrustedCard>

          <TrustedCard>
            <TrustedCardSpan>01</TrustedCardSpan>
            <p>solar panels for home</p>
            <A>View Details</A>
          </TrustedCard>

          <TrustedCard>
            <TrustedCardSpan>01</TrustedCardSpan>
            <p>solar panels for home</p>
            <A>View Details</A>
          </TrustedCard>

          <TrustedCard>
            <TrustedCardSpan>01</TrustedCardSpan>
            <p>solar panels for home</p>
            <A>View Details</A>
          </TrustedCard>
        </TrustedCards>

        <TrustedImg>
          <Img src={ImgSrc} />
        </TrustedImg>
      </TrustedMain>
    </TrustedList>
  );
};

export default Trusted;
