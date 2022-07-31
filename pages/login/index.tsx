import React from "react";
import {
  ContainerStyled,
  LoginWrapper,
  LoginDetail,
  LoginTitle,
  FormWrapper,
  LabelStyled,
  InputStyled,
  LoginButton,
  LoadingButton,
  BackToHome,
} from "../../styles/login";
import { Container } from "react-bootstrap";

const LoginPage = () => {
  return (
    <>
      <ContainerStyled>
        <Container fluid="lg" className="p-0">
          <LoginWrapper>
            <LoginTitle>
              PELI<span>KULA</span>
            </LoginTitle>
            <FormWrapper>
              <LabelStyled>Username</LabelStyled>
              <InputStyled type="text" placeholder="Username" />
              <LabelStyled>Password</LabelStyled>
              <InputStyled type="password" placeholder="Password" />
              {/* ########################################### */}
              {/* IF USER IS NOT LOGGED IN */}
              <LoginButton>Login as Demo User</LoginButton>
              {/* END */}
              {/* ########################################### */}
              {/* LOGIN LOADING STATE */}
              <LoadingButton>Please wait...</LoadingButton>
              {/* END */}
              <BackToHome onClick={() => (window.location.href = "/")}>
                Back to homepage
              </BackToHome>
            </FormWrapper>
          </LoginWrapper>
        </Container>
      </ContainerStyled>
    </>
  );
};

export default LoginPage;
