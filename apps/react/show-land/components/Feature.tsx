import { borderRadius, spaces } from "../../shared/styleVariables";
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
  padding: ${spaces[6]};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spaces[2]};
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
          style={{ width: "2.5rem", height: "2.5rem" }}
        />
      </Circle>
      <Info>{children}</Info>
    </StyledFeature>
  );
};

export default Feature;