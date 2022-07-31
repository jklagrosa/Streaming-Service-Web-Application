import React from "react";
import {
  ContainerStyled,
  VideoPlayer,
  VideoParagraph,
  VideoDetail,
  VideTitle,
} from "../../styles/id";
import { Container } from "react-bootstrap";
import Navigation from "../../component/Navigation";
import Footer from "../../component/Footer";
import Copyright from "../../component/Copyright";

const Id = () => {
  return (
    <>
      <Navigation />
      <ContainerStyled>
        <Container fluid="lg" className="p-0">
          <VideoPlayer
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lgBsm42Fs4k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></VideoPlayer>
          <VideTitle>The Hidden liufe oif sopas</VideTitle>
        </Container>
      </ContainerStyled>
      <Footer />
      <Copyright />
    </>
  );
};

export default Id;
