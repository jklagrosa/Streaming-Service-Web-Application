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
  color: white;
  background-color: ${colorStyle.BLACK};
  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const FooterCardStyled = styled.div`
  margin: 0 auto;
  /* background: red; */
`;

export const FooterHeader = styled.h6`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  color: white;

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

export const FooterLinks = styled.a`
  display: inline-block;
  font-size: 1rem;
  cursor: pointer;
  color: ${colorStyle.DARK_GRAY};
  margin-bottom: 0.41rem;

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

  &:hover {
    text-decoration: underline;
    color: ${colorStyle.DARK_GRAY};
  }
`;

export const FooterLinksTechUsed = styled(FooterLinks)`
  cursor: default;
  &:hover {
    text-decoration: none;
  }
`;

export const CopyrightContainer = styled.div`
  padding: 1rem;
  background: ${colorStyle.BLACK};
  text-align: center;
`;
