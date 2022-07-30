import React from "react";
import { FooterLinksTechUsed, CopyrightContainer } from "../styles/footer";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <CopyrightContainer>
        <Container fluid="lg" className="p-0">
          <FooterLinksTechUsed>
            Copyright &copy; {new Date().getFullYear()}, JK Lagrosa. All Rights
            Reserved.
          </FooterLinksTechUsed>
        </Container>
      </CopyrightContainer>
    </>
  );
};

export default Footer;
