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
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: 3.5rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const HeroSpan = styled.span`
  font-size: 1rem;
  color: ${colorStyle.GRAY};
  cursor: default;
`;

export const HeronSpanGenre = styled(HeroSpan)`
  background: red;
  color: white;
  padding: 0.41rem;
`;

export const HeronDivider = styled.span`
  margin: 0 1rem;
`;

export const HeroParagraph = styled.p`
  margin-top: 2rem;
  margin-bottom: 1rem;
  width: 600px;
  /* background: red; */
  font-size: 1rem;
  color: ${colorStyle.GRAY};
`;

export const HeroDetailParagraph = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${colorStyle.RED};
  margin-bottom: 0.64rem;
  span {
    color: ${colorStyle.GRAY};
  }
`;

export const HeroButton = styled.button`
  all: unset;
  cursor: pointer;
  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.8rem 1.25rem;
  background: ${colorStyle.RED};
  color: white;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;

  &:hover {
    background: ${colorStyle.H_RED};
  }
`;
