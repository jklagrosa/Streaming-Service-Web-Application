import React from "react";
import {
  NotFoundStyled,
  PageNotFoundWrapper,
  ErrorText,
  ParagraphText,
  BackToHomeBtn,
} from "../styles/notFound";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <NotFoundStyled>
        <PageNotFoundWrapper>
          <ErrorText>404 PAGE NOT FOUND</ErrorText>
          <ParagraphText>
            We apologize, but the page you were looking for is either
            unavailable or does not exist.
          </ParagraphText>

          <BackToHomeBtn onClick={() => router.replace("/")}>
            Back to homepage
          </BackToHomeBtn>
        </PageNotFoundWrapper>
      </NotFoundStyled>
    </>
  );
};

export default NotFound;
