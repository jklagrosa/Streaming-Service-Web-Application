import React from "react";
import {
  ContainerStyled,
  FooterCardStyled,
  FooterHeader,
  FooterLinks,
  FooterLinksTechUsed,
} from "../styles/footer";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <ContainerStyled>
        <Container fluid="lg" className="p-0">
          <Row className="gx-3 gy-5">
            <Col xs={12} md={6} lg={4}>
              <FooterCardStyled>
                <FooterHeader>Explore</FooterHeader>
                <FooterLinks href="">Home</FooterLinks>
                <br />
                <FooterLinks href="">Trending</FooterLinks>
                <br />
                <FooterLinks href="">New</FooterLinks>
                <br />
                <FooterLinks href="">Popular</FooterLinks>
                <br />
                <FooterLinks href="">My List</FooterLinks>
                <br />
              </FooterCardStyled>
            </Col>
            {/*  */}
            <Col xs={12} md={6} lg={4}>
              <FooterCardStyled>
                <FooterHeader>Contact the Dev.</FooterHeader>
                <FooterLinks
                  href="https://www.linkedin.com/in/jklagrosa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </FooterLinks>
                <br />
                <FooterLinks
                  href="https://github.com/jklagrosa"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </FooterLinks>
                <br />
                <FooterLinks
                  href="mailto:jklagrosa.dev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gmail
                </FooterLinks>
                <br />
              </FooterCardStyled>
            </Col>
            {/*  */}
            <Col xs={12} md={6} lg={4}>
              <FooterCardStyled>
                <FooterHeader>Tech Used</FooterHeader>
                <FooterLinksTechUsed>HTML</FooterLinksTechUsed>
                <br />
                <FooterLinksTechUsed>CSS</FooterLinksTechUsed>
                <br />
                <FooterLinksTechUsed>Sass</FooterLinksTechUsed>
                <br />
                <FooterLinksTechUsed>Bootstrap</FooterLinksTechUsed>
                <br />
                <FooterLinksTechUsed>TypeScript</FooterLinksTechUsed>
                <br />
                <FooterLinksTechUsed>React</FooterLinksTechUsed>
                <br />
                <FooterLinksTechUsed>Next.js</FooterLinksTechUsed>
                <br />
                <FooterLinksTechUsed>Styled-Components</FooterLinksTechUsed>
                <br />
                <FooterLinksTechUsed>MongoDB</FooterLinksTechUsed>
                <br />
              </FooterCardStyled>
            </Col>
          </Row>
        </Container>
      </ContainerStyled>
    </>
  );
};

export default Footer;
