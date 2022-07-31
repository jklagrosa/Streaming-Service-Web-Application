import styled from "@emotion/styled";

let colorStyle = {
  BLACK: "#221f1f", // For background
  DARK: "#161616", // For text
  RED: "#e40916",
  H_RED: "#B60711",
  GRAY: "#cecfd1",
  DARK_GRAY: "darkgray",
  FB_BLUE: "#1877f2",
  FB_BLUE_HOVER: "#0a54b3",
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
  font-size: 3.5rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 1rem;

  /* ##################################################################### */
  @media only screen and (min-width: 2501px) {
    font-size: 6.75rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    font-size: 6.25rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    font-size: 5.25rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    font-size: 4rem;
  }
  /* ##################################################################### */

  @media only screen and (max-width: 650px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 425px) {
    font-size: 1.75rem;
  }
`;

export const ParagraphText = styled.p`
  margin: 0;
  width: 500px;
  /* background: red; */
  font-size: 1rem;
  color: ${colorStyle.GRAY};
  margin-bottom: 2rem;

  @media only screen and (min-width: 2501px) {
    width: 1000px;
    font-size: 2rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    width: 870px;
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    width: 760px;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    width: 650px;
    font-size: 1.25rem;
  }

  /* ############################################################# */

  @media only screen and (max-width: 1199px) {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 650px) {
    max-width: 400px;
  }

  @media only screen and (max-width: 425px) {
    max-width: 300px;
  }
`;

export const BackToHomeBtn = styled.a`
  font-size: 1rem;
  cursor: pointer;
  width: 150px;
  /* background: green; */

  color: ${colorStyle.FB_BLUE};
  text-decoration: underline;

  @media only screen and (min-width: 2501px) {
    width: 300px;
    font-size: 2rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    width: 270px;
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    width: 230px;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    width: 200px;
    font-size: 1.25rem;
  }

  /* ############################################################# */

  @media only screen and (max-width: 1199px) {
    font-size: 0.9rem;
  }
`;
