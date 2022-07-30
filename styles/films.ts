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
  margin-bottom: 1.5rem;
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

export const MovieCardStyled = styled.div`
  position: relative;

  margin: 0 auto;
  width: 100%;
  min-height: 400px;
  /* background: green; */
  transition: all 0.2s ease-in-out;

  @media only screen and (min-width: 2501px) {
    min-height: 580px;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    min-height: 560px;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    min-height: 530px;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    min-height: 500px;
  }

  /* ############################################################# */

  @media only screen and (max-width: 1199px) {
    min-height: 350px;
  }

  @media only screen and (max-width: 991px) {
    min-height: 500px;
  }

  @media only screen and (max-width: 830px) {
    min-height: 450px;
  }

  @media only screen and (max-width: 700px) {
    min-height: 400px;
  }

  @media only screen and (max-width: 600px) {
    min-height: 370px;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  display: block;
  margin-bottom: 0.64rem;
`;

export const MovieActionStyled = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  /* background: red; */
`;

export const MovieTitle = styled.h3`
  margin: 0;
  cursor: pointer;
  display: inline-block;
  font-size: 1.25rem;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  margin-bottom: 1rem;

  &:hover {
    color: ${colorStyle.RED};
  }

  @media only screen and (min-width: 2501px) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    font-size: 2.25rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    font-size: 1.5rem;
  }

  /* ############################################################# */

  @media only screen and (max-width: 1199px) {
    font-size: 1rem;
    margin-bottom: 0.64rem;
  }
`;

export const MovieDetail = styled.span`
  font-size: 1rem;
  color: ${colorStyle.DARK_GRAY};

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

export const MovieDivider = styled.span`
  margin: 0 0.64rem;

  /* @media only screen and (max-width: 425px) {
    display: none;
  } */
`;

export const MovieWatchTrailer = styled.a`
  all: unset;
  cursor: pointer;
  margin-top: 2rem;
  text-decoration: underline;
  display: block;
  width: 105px;
  /* background: red; */
  color: ${colorStyle.GRAY};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${colorStyle.DARK_GRAY};
  }

  @media only screen and (min-width: 2501px) {
    width: 205px;
    font-size: 2rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    width: 185px;
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    width: 160px;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    width: 130px;
    font-size: 1.25rem;
  }

  /* ############################################################# */

  @media only screen and (max-width: 1199px) {
    font-size: 0.9rem;
  }
`;

export const MovieWatchButton = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
