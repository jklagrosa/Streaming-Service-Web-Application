import React from "react";
import {
  NotFoundStyled,
  PageNotFoundWrapper,
  ErrorText,
  ParagraphText,
  BackToHomeBtn,
} from "../styles/notFound";

const NotFound = () => {
  return (
    <>
      <NotFoundStyled>
        <PageNotFoundWrapper>
          <ErrorText>404 PAGE NOT FOUND</ErrorText>
          <ParagraphText>
            We apologize, but the page you were looking for is either
            unavailable or does not exist.
          </ParagraphText>

          <BackToHomeBtn>Back to homepage</BackToHomeBtn>
        </PageNotFoundWrapper>
      </NotFoundStyled>
    </>
  );
};

export default NotFound;
