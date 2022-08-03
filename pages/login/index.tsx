import React, { useState } from "react";
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
import axios from "axios";
import { BASE_URL, headersOpts } from "../../utils/other";
import { toast } from "react-toastify";

type UserData = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const [user, setUser] = useState<UserData>({
    username: "DemoUser",
    password: "demouser123",
  });
  const [loading, setLoading] = useState(false);

  const handleLogInUser = async () => {
    const response = await axios.post(
      `${BASE_URL}/api/adduser`,
      {
        username: user.username,
        password: user.password,
      },
      headersOpts
    );

    if (response.data.success) {
      toast.error("Please try again later", {
        position: "top-center",
        autoClose: 300000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <ContainerStyled>
        <Container fluid="lg" className="p-0">
          <LoginWrapper>
            <LoginTitle>
              PELI<span>KULA</span>
            </LoginTitle>
            <FormWrapper onSubmit={handleLogInUser}>
              <LabelStyled>Username</LabelStyled>
              <InputStyled
                type="text"
                placeholder="Username"
                defaultValue={user.username}
                readOnly
              />
              <LabelStyled>Password</LabelStyled>
              <InputStyled
                type="password"
                placeholder="Password"
                defaultValue={user.password}
                readOnly
              />
              {/* ########################################### */}
              {/* IF USER IS NOT LOGGED IN */}
              {!loading && (
                <>
                  <LoginButton type="submit">Login as Demo User</LoginButton>
                </>
              )}
              {/* END */}
              {/* ########################################### */}
              {/* LOGIN LOADING STATE */}
              <LoadingButton disabled>Please wait...</LoadingButton>
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
