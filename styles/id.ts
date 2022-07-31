import styled from "@emotion/styled";

let colorStyle = {
  BLACK: "#221f1f", // For text
  DARK: "#161616", // For background
  RED: "#e40916",
  H_RED: "#B60711",
  GRAY: "#cecfd1",
  DARK_GRAY: "darkgray",
  FB_BLUE: "#1877f2",
  FB_BLUE_HOVER: "#0a54b3",
};

export const ContainerStyled = styled.div`
  padding: 4rem 2rem;
  width: 100vw;
  min-height: 100vh;
  color: white;
  background-color: ${colorStyle.DARK};
  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const VideoPlayer = styled.iframe`
  width: 100%;
  min-height: 500px;
`;
