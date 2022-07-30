import React from "react";
import {
  ContainerStyled,
  ParagraphStyled,
  HeaderTagStyled,
} from "../../styles/films";
import { Container, Row, Col } from "react-bootstrap";

const Recently = () => {
  return (
    <>
      <ContainerStyled>
        <Container fluid="lg" className="p-0">
          <HeaderTagStyled>Recently Added</HeaderTagStyled>

          <Row className="gx-3 gy-4">
            <Col></Col>
          </Row>
        </Container>
      </ContainerStyled>
    </>
  );
};

export default Recently;
