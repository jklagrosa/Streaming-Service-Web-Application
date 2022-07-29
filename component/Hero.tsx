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

const Hero = () => {
  return (
    <HeroComponentStyled>
      <Container fluid="lg" className="p-0">
        <HeroTagStyled>High rated</HeroTagStyled>
        <HeroTitle>The Rising Sun Of John</HeroTitle>
        {/*  */}
        <AbbrTagStyled title="Duration of the movie">
          <HeroSpan>1hr:22mins</HeroSpan>
        </AbbrTagStyled>
        {/*  */}
        <HeronDivider>&#183;</HeronDivider>
        {/*  */}
        <AbbrTagStyled title="Ratings of the movie">
          <HeroSpan>4.6 out of 5 stars</HeroSpan>
        </AbbrTagStyled>
        {/*  */}
        <HeronDivider>&#183;</HeronDivider>
        {/*  */}
        <AbbrTagStyled title="Release date">
          <HeroSpan>2015</HeroSpan>
        </AbbrTagStyled>
        {/*  */}
        <HeronDivider>&#183;</HeronDivider>
        {/*  */}
        <AbbrTagStyled title="Genre">
          <HeronSpanGenre>Action</HeronSpanGenre>
        </AbbrTagStyled>
        {/*  */}

        <HeroParagraph>
          A group of mercenaries, all centuries-old immortals with the ablity to
          heal themselves, discover someone is onto their secret, and they must
          fight to protect their freedom.
        </HeroParagraph>
        {/*  */}
        <HeroDetailParagraph>
          Cast: <span>Charlize Theron, Kiki Layne</span>
        </HeroDetailParagraph>
        {/*  */}
        <HeroDetailParagraph>
          Genre: <span>Action</span>
        </HeroDetailParagraph>
        {/*  */}
        <HeroDetailParagraph>
          Tags: <span>Fantasy, Superhero</span>
        </HeroDetailParagraph>
        {/*  */}

        <HeroButton>
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
          </HeroButtonWrapper>
        </HeroButtonOutline>
        {/*  */}
      </Container>
    </HeroComponentStyled>
  );
};

export default Hero;
