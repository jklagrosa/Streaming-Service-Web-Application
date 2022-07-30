import styled from "@emotion/styled";

let colorStyle = {
  BLACK: "#221f1f", // For text
  DARK: "#161616", // For background
  RED: "#e40916",
  H_RED: "#B60711",
  GRAY: "#cecfd1",
  DARK_GRAY: "darkgray",
};

export const ContainerStyled = styled.div`
  padding: 4rem 2rem;
  width: 100vw;
  color: white;
  background-color: ${colorStyle.DARK};
  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const HeaderTagStyled = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 3px;
  border-left: 2px solid red;
  padding-left: 0.64rem;
  margin-bottom: 1rem;
  color: ${colorStyle.GRAY};

  /* ##################################################################### */
  @media only screen and (min-width: 2501px) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    font-size: 2.25rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    font-size: 1.5rem;
  }
  /* ##################################################################### */

  @media only screen and (max-width: 650px) {
    font-size: 1rem;
  }
`;

export const ParagraphStyled = styled.p`
  margin: 0;
  font-size: 1rem;
  color: white;
  /* margin-bottom: 0.64rem; */
  /* span {
    color: ${colorStyle.GRAY};
  } */

  /* ##################################################################### */

  /* REMEMBER: USE THIS MEDIA QUERIES TO OTHER P TAGS. */

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
  /* ##################################################################### */

  @media only screen and (max-width: 650px) {
    font-size: 0.9rem;
  }
`;
