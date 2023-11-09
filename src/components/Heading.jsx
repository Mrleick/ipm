import styled, { css } from "styled-components";

const StyledHeading = styled((props) => props.as)`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: bold;
    `}
`;

const Heading = (props) => {
  return <StyledHeading {...props}>{props.title}</StyledHeading>;
};

export default Heading;
