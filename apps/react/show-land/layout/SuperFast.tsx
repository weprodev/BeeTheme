import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

import Heading from "../components/Heading";
import Tag from "../components/Tag";

import {
  Info,
  InfoSmallText,
  StyledSuperFast,
  Performance,
  PerformanceFeatures,
  PerformanceFeature,
  PerformanceReporters,
  PerformanceReporter,
  PerformanceCircle,
} from "./SuperFast.styles";

import GoogleLogo from "../images/google-logo.png";
import GtmetrixLogo from "../images/gtmetrix-logo.png";
import Paragraph from "../components/Paragraph";

const SuperFast: React.FC = () => {
  return (
    <StyledSuperFast>
      <Info>
        <Tag>
          <FontAwesomeIcon icon={faFire}></FontAwesomeIcon>
          Super fast
        </Tag>

        <Heading as="h3" variation="secondary">
          Super Fast Loading Speed
        </Heading>

        <Paragraph>
          WeProDev is Fuga veniam repudiandae cum nam mollitia totam! Nostrum,
          rem aliquid ipsum aut optio sit molestiae
        </Paragraph>

        <InfoSmallText>
          <FontAwesomeIcon
            icon={faCheckCircle}
            color="var(--color-primary)"
          ></FontAwesomeIcon>
          90% Efficient-A Grade
        </InfoSmallText>
      </Info>

      <Performance>
        <PerformanceFeatures>
          <PerformanceFeature>
            <PerformanceCircle textType="letter">A</PerformanceCircle>
          </PerformanceFeature>

          <PerformanceFeature>
            <PerformanceCircle textType="number">90%</PerformanceCircle>
            <span>Performance</span>
          </PerformanceFeature>

          <PerformanceFeature>
            <PerformanceCircle textType="number">95%</PerformanceCircle>
            <span>Structure</span>
          </PerformanceFeature>
        </PerformanceFeatures>

        <span>Performance Report By</span>

        <PerformanceReporters>
          <PerformanceReporter src={GoogleLogo} alt="Google Logo" />
          <PerformanceReporter src={GtmetrixLogo} alt="Gtmetrix Logo" />
        </PerformanceReporters>
      </Performance>
    </StyledSuperFast>
  );
};

export default SuperFast;
