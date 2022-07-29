import React from "react";
import {
  HeroComponentStyled,
  HeroTagStyled,
  HeroTitle,
  HeroSpan,
  HeronDivider,
} from "../styles/styled";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <HeroComponentStyled>
      <Container fluid="lg" className="p-0">
        <HeroTagStyled>High rated</HeroTagStyled>
        <HeroTitle>The Rising Sun Of John</HeroTitle>
        <HeroSpan>1hr:22mins</HeroSpan>
        <HeronDivider>&#183;</HeronDivider>
        <HeroSpan>4.6 out of 5 stars</HeroSpan>
        <HeronDivider>&#183;</HeronDivider>
        <HeroSpan>2015</HeroSpan>
        <HeronDivider />
      </Container>
    </HeroComponentStyled>
  );
};

export default Hero;
