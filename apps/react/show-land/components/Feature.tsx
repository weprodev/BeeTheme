import {
  borderRadius,
  fontSizes,
  fontWeights,
  spaces,
} from "../../shared/styleVariables";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface FeatureProps {
  direction?: "horizontal" | "vertical";
  icon: IconDefinition;
  children: JSX.Element[];
}

const StyledFeature = styled.div<{ direction: "horizontal" | "vertical" }>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) =>
    props.direction === "horizontal" ? "row" : "column"};
  gap: ${spaces[6]};
`;

const Circle = styled.span`
  background-image: var(--gradient-tertiary);
  border-radius: ${borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spaces[4]};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spaces[2]};
`;

export const FeatureLink = styled.a`
  border-bottom: 1px solid var(--color-white);
  cursor: pointer;
  align-self: flex-start;
  font-size: ${fontSizes.sm};
  font-weight: ${fontWeights.bold};
  &:hover {
    border-bottom: 1px solid transparent;
  }
`;

const Feature: React.FC<FeatureProps> = ({
  direction = "vertical",
  icon,
  children,
}) => {
  return (
    <StyledFeature direction={direction}>
      <Circle>
        <FontAwesomeIcon
          color="var(--color-white)"
          icon={icon}
          style={{ width: "2rem", height: "2rem" }}
        />
      </Circle>
      <Info>{children}</Info>
    </StyledFeature>
  );
};

export default Feature;
