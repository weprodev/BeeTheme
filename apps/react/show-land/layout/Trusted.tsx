import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import { Card, CardInfo, StyledTrusted, TrustedIcon } from "./Trusted.styles";

const Trusted: React.FC = () => {
  return (
    <StyledTrusted>
      <Card>
        <TrustedIcon>
          <svg
            viewBox="-51.2 -51.2 614.40 614.40"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            stroke="#fff"
            transform="rotate(180)matrix(1, 0, 0, 1, 0, 0)"
          >
            <g
              id="SVGRepo_bgCarrier"
              stroke-width="0"
              transform="translate(0,0), scale(1)"
            >
              <path
                transform="translate(-51.2, -51.2), scale(38.4)"
                fill="#e67700"
                d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
                strokewidth="0"
              ></path>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#ff0000"
              stroke-width="1.024"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="none"
                stroke="#fff"
                stroke-width="24.064"
                stroke-miterlimit="10"
                d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
              ></path>
              <line
                fill="none"
                stroke="#fff"
                stroke-width="24.064"
                stroke-linecap="round"
                stroke-linejoin="round"
                x1="144"
                y1="208"
                x2="368"
                y2="208"
              ></line>
              <line
                fill="none"
                stroke="#fff"
                stroke-width="24.064"
                stroke-linecap="round"
                stroke-linejoin="round"
                x1="176"
                y1="272"
                x2="336"
                y2="272"
              ></line>
              <line
                fill="none"
                stroke="#fff"
                stroke-width="24.064"
                stroke-linecap="round"
                stroke-linejoin="round"
                x1="224"
                y1="336"
                x2="288"
                y2="336"
              ></line>
            </g>
          </svg>
        </TrustedIcon>

        <CardInfo>
          <span>WeProDev Theme from</span>
          <Paragraph>Elite Author</Paragraph>
        </CardInfo>
      </Card>
      <Heading as="h4" variation="secondary">
        We trusted by 15000+ Customers
      </Heading>
    </StyledTrusted>
  );
};

export default Trusted;
