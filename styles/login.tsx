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

export const LoginWrapper = styled.div`
  display: grid;
  place-content: center;
  /* width: 300px; */
  /* background: green; */
`;

export const FormWrapper = styled.form`
  /* background: yellow; */
  display: grid;
  place-content: center;
`;

export const LoginTitle = styled.h6`
  font-size: 2rem;
  font-weight: 900;
  color: white;
  margin-bottom: 2rem;

  span {
    color: ${colorStyle.RED};
  }

  @media only screen and (min-width: 2501px) {
    font-size: 3.25rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    font-size: 2.75rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    font-size: 2.25rem;
  }

  /* ############################################################# */

  @media only screen and (max-width: 1199px) {
    font-size: 1.75rem;
  }

  @media only screen and (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

export const LoginDetail = styled.span`
  font-size: 1rem;
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

export const LabelStyled = styled.label`
  font-size: 1rem;
  color: white;
  display: block;
  margin-bottom: 0.64rem;

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

export const InputStyled = styled.input`
  all: unset;
  display: block;
  padding: 0.64rem;
  border: 2px solid white;
  width: 300px;
  margin-bottom: 2rem;

  font-size: 1rem;
  color: white;

  @media only screen and (min-width: 2501px) {
    width: 520px;
    font-size: 2rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    width: 460px;
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    width: 400px;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    width: 350px;
    font-size: 1.25rem;
  }

  /* ############################################################# */

  @media only screen and (max-width: 1199px) {
    font-size: 0.9rem;
  }
`;

export const LoginButton = styled.button`
  all: unset;
  cursor: pointer;
  background: red;
  padding: 0.64rem;
  text-align: center;
  margin-bottom: 1.25rem;
  font-size: 1rem;

  color: white;
  display: block;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colorStyle.H_RED};
  }

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

export const LoadingButton = styled(LoginButton)`
  cursor: not-allowed !important;
  background: ${colorStyle.DARK_GRAY};
  color: white;

  &:hover {
    background: ${colorStyle.DARK_GRAY};
  }
`;

export const BackToHome = styled.a`
  all: unset;
  cursor: pointer;
  font-size: 1rem;
  color: ${colorStyle.FB_BLUE};
  text-decoration: underline;
  width: 150px;
  background-color: red;
  margin-bottom: 0.64rem;

  @media only screen and (min-width: 2501px) {
    width: 300px;
    font-size: 2rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    width: 280px;
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    width: 230px;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    width: 190px;
    font-size: 1.25rem;
  }

  /* ############################################################# */

  @media only screen and (max-width: 1199px) {
    font-size: 0.9rem;
  }
`;
