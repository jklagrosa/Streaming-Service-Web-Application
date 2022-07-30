import styled from "@emotion/styled";

let colorStyle = {
  BLACK: "#221f1f", // For background
  DARK: "#161616", // For text
  RED: "#e40916",
  H_RED: "#B60711",
  GRAY: "#cecfd1",
  DARK_GRAY: "darkgray",
};

export const NotFoundStyled = styled.div`
  padding: 4rem 2rem;
  background: ${colorStyle.DARK};
  width: 100vw;
  min-height: 100vh;
  color: white;

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const PageNotFoundWrapper = styled.div`
  /* background: red; */
  display: grid;
  place-content: center;
`;

export const ErrorText = styled.h1`
  margin: 0;
  font-size: 4rem;
  font-weight: bolder;
  color: white;
`;

export const ParagraphText = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${colorStyle.GRAY};

  @media only screen and (min-width: 2501px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    font-size: 1.25rem;
  }

  /* ############################################################# */

  @media only screen and (max-width: 1199px) {
    font-size: 0.9rem;
  }
`;

export const BackToHomeBtn = styled.a`
  font-size: 1rem;

  @media only screen and (min-width: 2501px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    font-size: 1.25rem;
  }

  /* ############################################################# */

  @media only screen and (max-width: 1199px) {
    font-size: 0.9rem;
  }
`;
