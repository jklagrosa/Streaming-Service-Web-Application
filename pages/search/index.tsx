import React from "react";
import {
  ContainerStyled,
  ParagraphStyled,
  HeaderTagStyled,
  MovieCardStyled,
  MovieImage,
  MovieTitle,
  MovieDetail,
  MovieDivider,
  MovieActionStyled,
  MovieWatchTrailer,
} from "../../styles/search";
import { AbbrTagStyled } from "../../styles/utils";

import { AiFillLike } from "react-icons/ai";
import { BsFillSuitHeartFill, BsPlayFill } from "react-icons/bs";

import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Movie.module.scss";
import Navigation from "../../component/Navigation";
import Footer from "../../component/Footer";
import Copyright from "../../component/Copyright";

const SearchPage = () => {
  return (
    <>
      <Navigation />
      <ContainerStyled>
        <Container fluid="lg" className="p-0">
          <HeaderTagStyled>
            Search Results For: <q>WEWEW</q>
          </HeaderTagStyled>

          <Row className="gx-3 gy-5">
            <Col xs={12} sm={6} lg={3} xl={4}>
              <MovieCardStyled id={styles._movie_Card_styled_override_}>
                <MovieImage src="/img/test.jpg" alt="test" />
                {/*  */}
                <MovieActionStyled>
                  <AbbrTagStyled title="Like">
                    <AiFillLike
                      className={styles._movie_component_icons_}
                      id={styles._movie_component_icons_id_Like_}
                    />
                  </AbbrTagStyled>
                  <MovieDivider />
                  <AbbrTagStyled title="Add to favourites">
                    <BsFillSuitHeartFill
                      className={styles._movie_component_icons_}
                      id={styles._movie_component_icons_id_Favs_}
                    />
                  </AbbrTagStyled>
                </MovieActionStyled>
                {/*  */}
                <AbbrTagStyled title="Watch now">
                  <MovieTitle>the rising sun of john</MovieTitle>
                </AbbrTagStyled>
                <br />
                {/*  */}
                <MovieDetail>1hr : 22mins</MovieDetail>
                <MovieDivider>&#183;</MovieDivider>
                <MovieDetail>2015</MovieDetail>
                <MovieDivider>&#183;</MovieDivider>
                <MovieDetail>Action</MovieDetail>

                {/*  */}

                <AbbrTagStyled title="Watch the trailer of The rising sun of john">
                  <MovieWatchTrailer>Watch Trailer</MovieWatchTrailer>
                </AbbrTagStyled>

                <div className={styles._movie_play_button_wrapper_}>
                  <AbbrTagStyled title="Watch now">
                    <BsPlayFill
                      className={styles.movie_play_button_}
                      onClick={() => alert("wew")}
                    />
                  </AbbrTagStyled>
                </div>
              </MovieCardStyled>

              {/* ######################################### */}
            </Col>
            {/*  */}
          </Row>
        </Container>
      </ContainerStyled>
      <Footer />
      <Copyright />
    </>
  );
};

export default SearchPage;
