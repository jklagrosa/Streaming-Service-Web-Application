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
  margin-bottom: 2rem;
  width: 100%;
  min-height: 500px;

  @media only screen and (min-width: 2501px) {
    min-height: 900px;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    min-height: 800px;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    min-height: 700px;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    min-height: 600px;
  }

  @media only screen and (max-width: 576px) {
    min-height: 300px;
  }
`;

export const VideoParagraph = styled.p`
  margin: 0;
  width: 900px;
  /* background: red; */
  font-size: 1rem;
  color: ${colorStyle.DARK_GRAY};
  margin-bottom: 2rem;

  @media only screen and (min-width: 2501px) {
    width: 1200px;
    font-size: 2rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    width: 1200px;
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    width: 1200px;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    width: 1100px;
    font-size: 1.25rem;
  }

  /* ############################################################# */

  @media only screen and (max-width: 1199px) {
    width: 700px;
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 768px) {
    width: 600px;
  }

  @media only screen and (max-width: 650px) {
    width: 500px;
  }

  @media only screen and (max-width: 576px) {
    width: 400px;
  }

  @media only screen and (max-width: 450px) {
    width: 300px;
  }

  @media only screen and (max-width: 375px) {
    width: 280px;
  }
`;

export const VideTitle = styled.h2`
  margin: 0;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 900;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  color: white;

  /* ##################################################################### */
  @media only screen and (min-width: 2501px) {
    font-size: 4rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    font-size: 3.5rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    font-size: 3rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    font-size: 2.5rem;
  }
  /* ##################################################################### */

  @media only screen and (max-width: 650px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 425px) {
    font-size: 1.25rem;
  }
`;

export const VideoDetail = styled.span`
  font-size: 1rem;
  color: white;
  /* background: red; */
  display: inline-block;
  width: 150px;
  margin-bottom: 1rem;

  @media only screen and (min-width: 2501px) {
    width: 250px;
    font-size: 2rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    width: 220px;
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    width: 200px;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    width: 180px;
    font-size: 1.25rem;
  }

  /* ############################################################# */

  @media only screen and (max-width: 1199px) {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 450px) {
    width: 110px;
  }

  @media only screen and (max-width: 375px) {
    width: 100px;
  }
`;

export const VideoDetailOther = styled(VideoDetail)`
  color: ${colorStyle.DARK_GRAY};
  /* background: blue; */
  width: 400px;

  @media only screen and (min-width: 2501px) {
    width: 500px;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    width: 450px;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    width: 400px;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    width: 400px;
  }

  @media only screen and (max-width: 768px) {
    width: 250px;
  }

  @media only screen and (max-width: 450px) {
    width: 200px;
  }

  @media only screen and (max-width: 375px) {
    width: 150px;
  }
`;
