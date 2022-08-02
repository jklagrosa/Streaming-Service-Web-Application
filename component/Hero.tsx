import React from "react";
import {
  HeroComponentStyled,
  HeroTagStyled,
  HeroTitle,
  HeroSpan,
  HeronSpanGenre,
  HeronDivider,
  HeroParagraph,
  HeroDetailParagraph,
  HeroButton,
  HeroButtonDivider,
  HeroButtonWrapper,
  HeroButtonOutline,
} from "../styles/styled";
import { AbbrTagStyled } from "../styles/utils";
import { Container } from "react-bootstrap";
import { BsPlayFill } from "react-icons/bs";
import { MdInfo } from "react-icons/md";

import styles from "../styles/Hero.module.scss";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  const handleWatchMovie = () => {
    router.replace({
      pathname: "/please-wait",
      query: { id: "62e7df8f537291caacd593be" },
    });
  };

  return (
    <HeroComponentStyled>
      <Container fluid="lg" className="p-0">
        <HeroTagStyled>High rated</HeroTagStyled>
        <HeroTitle>Time Bomb</HeroTitle>
        {/*  */}
        <AbbrTagStyled title="Duration of the movie">
          <HeroSpan>1h : 26m</HeroSpan>
        </AbbrTagStyled>
        {/*  */}
        <HeronDivider>&#183;</HeronDivider>
        {/*  */}
        <AbbrTagStyled title="Ratings of the movie">
          <HeroSpan>4.8 out of 5 stars</HeroSpan>
        </AbbrTagStyled>
        {/*  */}
        <HeronDivider>&#183;</HeronDivider>
        {/*  */}
        <AbbrTagStyled title="Release date">
          <HeroSpan>September 26, 1991</HeroSpan>
        </AbbrTagStyled>
        {/*  */}
        <HeronDivider>&#183;</HeronDivider>
        {/*  */}
        <AbbrTagStyled title="Genre">
          <HeronSpanGenre>Action</HeronSpanGenre>
        </AbbrTagStyled>
        {/*  */}

        <HeroParagraph>
          Watchmaker Eddie Kay (Michael Biehn) rescues a woman from a burning
          building. But his courageous act and the publicity that ensues opens
          the door to an attempt on his life.
        </HeroParagraph>
        {/*  */}
        <HeroDetailParagraph>
          Cast: <span>Jake Busey, Vik Sahay</span>
        </HeroDetailParagraph>
        {/*  */}
        <HeroDetailParagraph>
          Genre: <span>Action</span>
        </HeroDetailParagraph>
        {/*  */}
        {/* <HeroDetailParagraph>
          Tags: <span>Sci-fi</span>
        </HeroDetailParagraph> */}
        {/*  */}

        <HeroButton onClick={handleWatchMovie}>
          <HeroButtonWrapper>
            <BsPlayFill className={styles._hero_play_btn_} /> play now
          </HeroButtonWrapper>
        </HeroButton>
        {/*  */}
        <HeroButtonDivider />
        {/*  */}
        <HeroButtonOutline>
          <HeroButtonWrapper>
            <MdInfo className={styles._hero_play_btn_} /> watch trailer
            {/* TRAILER EMBED LINK OF TIMEBOMB */}
            {/* https://www.youtube.com/embed/4pPSx62lZcM */}
            {/* END */}
          </HeroButtonWrapper>
        </HeroButtonOutline>
        {/*  */}
      </Container>
    </HeroComponentStyled>
  );
};

export default Hero;
