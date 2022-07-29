import styled from "@emotion/styled";

let colorStyle = {
  BLACK: "#221f1f", // For background
  DARK: "#161616", // For text
  RED: "#e40916",
  H_RED: "#B60711",
  GRAY: "#cecfd1",
  DARK_GRAY: "darkgray",
};

export const ComponentWrapper = styled.div`
  background: ${colorStyle.BLACK};
  padding: 4rem 2rem;
  color: white;

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;
