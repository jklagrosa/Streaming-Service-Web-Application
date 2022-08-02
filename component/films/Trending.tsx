import React, { useEffect, useState } from "react";
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
} from "../../styles/films";
import { AbbrTagStyled } from "../../styles/utils";

import { AiFillLike } from "react-icons/ai";
import { BsFillSuitHeartFill, BsPlayFill } from "react-icons/bs";

import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Movie.module.scss";
import { useSelector } from "react-redux";
import { showAllMovies } from "../../store/store";
import { IMovie } from "../../types/movie";

const Trending = () => {
  const [movie, setMovie] = useState<unknown[] | null>(null);
  const displayMovies = useSelector(showAllMovies);

  useEffect(() => {
    // const newMovies = Array.from(displayMovies.data);
    setMovie(displayMovies.data);

    console.log(displayMovies.data);
  }, [displayMovies]);

  return (
    <>
      <ContainerStyled>
        <Container fluid="lg" className="p-0">
          <HeaderTagStyled>Trending Now</HeaderTagStyled>

          <Row className="gx-3 gy-5">
            {displayMovies.data?.length > 0 && (
              <>
                {displayMovies.data.slice(6, 12).map((movie: any) => (
                  <>
                    <Col xs={12} sm={6} lg={3} xl={4} key={movie._id}>
                      <MovieCardStyled id={styles._movie_Card_styled_override_}>
                        <MovieImage
                          src={`/movies/${movie.img}`}
                          alt={movie.title}
                        />
                        {/*  */}
                        <MovieActionStyled>
                          <AbbrTagStyled
                            title={movie.like ? "Unlike this movie" : "Like"}
                          >
                            <AiFillLike
                              className={styles._movie_component_icons_}
                              id={styles._movie_component_icons_id_Like_}
                              style={
                                movie.like
                                  ? { color: "#1877f2" }
                                  : { color: "" }
                              }
                            />
                          </AbbrTagStyled>
                          <MovieDivider />
                          <AbbrTagStyled
                            title={
                              movie.fave
                                ? "Remove from favourites"
                                : "Add to favourites"
                            }
                          >
                            <BsFillSuitHeartFill
                              className={styles._movie_component_icons_}
                              id={styles._movie_component_icons_id_Favs_}
                              style={
                                movie.fave
                                  ? { color: "#e40916" }
                                  : { color: "" }
                              }
                            />
                          </AbbrTagStyled>
                        </MovieActionStyled>
                        {/*  */}
                        <AbbrTagStyled title="Watch now">
                          <MovieTitle>{movie.title}</MovieTitle>
                        </AbbrTagStyled>
                        <br />
                        {/*  */}
                        <MovieDetail>{movie.runtime}</MovieDetail>
                        <MovieDivider>&#183;</MovieDivider>
                        <MovieDetail>{movie.release}</MovieDetail>
                        <MovieDivider>&#183;</MovieDivider>
                        <MovieDetail>{movie.genre}</MovieDetail>

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
                  </>
                ))}
              </>
            )}

            {/*  */}
          </Row>
        </Container>
      </ContainerStyled>
    </>
  );
};

export default Trending;
