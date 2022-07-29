import styled from "@emotion/styled";

let colorStyle = {
  BLACK: "#221f1f", // For background
  DARK: "#161616", // For text
  RED: "#e40916",
  H_RED: "#B60711",
  GRAY: "#cecfd1",
  DARK_GRAY: "darkgray",
};

export const HeroComponentStyled = styled.div`
  padding: 4rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),
    url("/img/test.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  min-height: 100vh;
  color: white;

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const HeroTagStyled = styled.h2`
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

export const HeroTitle = styled.h1`
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

export const HeroSpan = styled.span`
  font-size: 1rem;
  color: ${colorStyle.GRAY};
  cursor: default;

  /* ##################################################################### */
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

  @media only screen and (max-width: 425px) {
    margin-bottom: 0.64rem;
    display: block;
  }
`;

export const HeronSpanGenre = styled(HeroSpan)`
  background: red;
  color: white;
  padding: 0.41rem;

  @media only screen and (max-width: 425px) {
    width: 53px;
    padding: 0.328rem;
  }
`;

export const HeronDivider = styled.span`
  margin: 0 1rem;

  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

export const HeroParagraph = styled.p`
  margin-top: 2rem;
  margin-bottom: 1rem;
  width: 600px;
  /* background: red; */
  font-size: 1rem;
  color: ${colorStyle.GRAY};

  /* ##################################################################### */
  @media only screen and (min-width: 2501px) {
    width: 1300px;
    font-size: 2rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    width: 1150px;
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    width: 1000px;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    width: 800px;
    font-size: 1.25rem;
  }
  /* ##################################################################### */

  @media only screen and (max-width: 650px) {
    font-size: 0.9rem;
    max-width: 450px;
  }

  @media only screen and (max-width: 500px) {
    max-width: 350px;
  }

  @media only screen and (max-width: 380px) {
    max-width: 300px;
  }
`;

export const HeroDetailParagraph = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${colorStyle.RED};
  margin-bottom: 0.64rem;
  span {
    color: ${colorStyle.GRAY};
  }

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

export const HeroButton = styled.button`
  all: unset;
  cursor: pointer;
  margin-top: 2rem;

  /* display: flex;
  justify-content: center;
  align-items: center; */
  display: inline-block;

  padding: 0.8rem 1.25rem;
  background: ${colorStyle.RED};
  color: white;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  border: 1px solid ${colorStyle.RED};

  &:hover {
    background: ${colorStyle.H_RED};
    border: 1px solid ${colorStyle.H_RED};
  }

  /* ##################################################################### */
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
    padding: 0.64rem 1rem;
  }

  @media only screen and (max-width: 425px) {
    padding: 0.64rem;
  }

  @media only screen and (max-width: 375px) {
    padding: 0.41rem;
  }
`;

export const HeroButtonOutline = styled(HeroButton)`
  background: transparent;
  border: 1px solid white;
`;

export const HeroButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroButtonDivider = styled.span`
  margin: 0 0.64rem;

  @media only screen and (max-width: 380px) {
    margin: 0 0.328rem;
  }
`;
