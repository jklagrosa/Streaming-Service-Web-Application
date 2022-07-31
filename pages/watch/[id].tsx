import React from "react";
import {
  ContainerStyled,
  VideoPlayer,
  VideoParagraph,
  VideoDetail,
  VideTitle,
  VideoDetailOther,
} from "../../styles/id";
import { Container } from "react-bootstrap";
import Navigation from "../../component/Navigation";
import Recently from "../../component/films/Recently";
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
          <VideoParagraph>
            Incididunt cupidatat quis quis ad incididunt minim culpa anim
            incididunt proident Lorem tempor. Ut nulla amet fugiat magna esse
            fugiat dolor pariatur veniam magna nulla ullamco. Non mollit id
            labore consequat enim dolore dolore exercitation enim. Et id magna
            sint consequat velit laborum fugiat nisi sint sint. Esse cupidatat
            exercitation proident cupidatat duis aliquip. Nulla excepteur dolore
            laboris nisi duis fugiat fugiat dolore nulla anim.
          </VideoParagraph>

          <VideoDetail>Language</VideoDetail>
          <VideoDetailOther>English</VideoDetailOther>
          <br />
          <VideoDetail>Subtitles</VideoDetail>
          <VideoDetailOther>English</VideoDetailOther>
          <br />
          <VideoDetail>Genre</VideoDetail>
          <VideoDetailOther>Action, Adventure</VideoDetailOther>
          <br />
          <VideoDetail>Run Time</VideoDetail>
          <VideoDetailOther>2hr : 22mins</VideoDetailOther>
          <br />
          <VideoDetail>Release Date</VideoDetail>
          <VideoDetailOther>January 14, 2022</VideoDetailOther>
        </Container>
      </ContainerStyled>
      <Recently />
      <Footer />
      <Copyright />
    </>
  );
};

export default Id;
