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

// import { AiFillLike } from "react-icons/ai";
import { BsFillSuitHeartFill, BsPlayFill } from "react-icons/bs";

import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Movie.module.scss";
import Navigation from "../../component/Navigation";
import Footer from "../../component/Footer";
import Copyright from "../../component/Copyright";
import axios from "axios";
import { BASE_URL, headersOpts } from "../../utils/other";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = () => axios.get(`${BASE_URL}/api/fave`, headersOpts);

const Favourites = () => {
  const { data, error } = useSWR("/api/fave", fetcher);
  const router = useRouter();

  const handleWatchMovie = (id: any) => {
    router.replace({
      pathname: "/please-wait",
      query: { id },
    });
  };

  return (
    <>
      <Navigation />
      <ContainerStyled>
        <Container fluid="lg" className="p-0">
          <HeaderTagStyled>My Favourites</HeaderTagStyled>

          <Row className="gx-3 gy-5">
            {data?.data.data.length === 0 && (
              <>
                <MovieDetail>
                  You don&apos;t have any saved favorite movies; add one right
                  away.
                </MovieDetail>
              </>
            )}

            {data?.data.data.length > 0 && (
              <>
                {data?.data.data.map((f: any) => (
                  <>
                    <Col xs={12} sm={6} lg={3} xl={4} key={f._id}>
                      <MovieCardStyled id={styles._movie_Card_styled_override_}>
                        <MovieImage src={`/movies/${f.img}`} alt="test" />
                        {/*  */}
                        {/* <MovieActionStyled>
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
                </MovieActionStyled> */}
                        {/*  */}
                        <AbbrTagStyled title={`Watch ${f.title} now`}>
                          <MovieTitle>{f.title}</MovieTitle>
                        </AbbrTagStyled>
                        <br />
                        {/*  */}
                        <MovieDetail>{f.runtime}</MovieDetail>
                        <MovieDivider>&#183;</MovieDivider>
                        <MovieDetail>{f.release}</MovieDetail>
                        <MovieDivider>&#183;</MovieDivider>
                        <MovieDetail>{f.genre}</MovieDetail>

                        {/*  */}

                        <AbbrTagStyled title="Watch the trailer of The rising sun of john">
                          <MovieWatchTrailer
                            onClick={() => handleWatchMovie(f._id)}
                          >
                            Watch Trailer
                          </MovieWatchTrailer>
                        </AbbrTagStyled>

                        <div className={styles._movie_play_button_wrapper_}>
                          <AbbrTagStyled title={`Watch ${f.title} now`}>
                            <BsPlayFill
                              className={styles.movie_play_button_}
                              onClick={() => handleWatchMovie(f._id)}
                            />
                          </AbbrTagStyled>
                        </div>
                      </MovieCardStyled>

                      {/* ######################################### */}
                    </Col>
                  </>
                ))}
              </>
            )}

            {/*  */}
          </Row>
        </Container>
      </ContainerStyled>
      <Footer />
      <Copyright />
    </>
  );
};

export default Favourites;
