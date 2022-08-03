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
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Recently = () => {
  const [movie, setMovie] = useState<unknown[] | null>(null);
  const displayMovies = useSelector(showAllMovies);
  const router = useRouter();

  useEffect(() => {
    // const newMovies = Array.from(displayMovies.data);
    setMovie(displayMovies.data);

    // console.log(displayMovies.data);
  }, [displayMovies]);

  const handleWatchMovie = (id: any) => {
    router.replace({
      pathname: "/please-wait",
      query: { id },
    });
  };

  const handleLikeMovie = async (id: string) => {
    toast.error("Please try again later", {
      position: "top-center",
      autoClose: 300000000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

    console.log(id);
  };

  return (
    <>
      <ContainerStyled>
        <Container fluid="lg" className="p-0">
          <HeaderTagStyled>Recently Added</HeaderTagStyled>

          <Row className="gx-3 gy-5">
            {displayMovies.data?.length > 0 && (
              <>
                {displayMovies.data.slice(0, 6).map((movie: any) => (
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
                              onClick={() => handleLikeMovie(movie._id)}
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
                        <AbbrTagStyled title={`Watch ${movie.title} now`}>
                          <MovieTitle
                            onClick={() => handleWatchMovie(movie._id)}
                          >
                            {movie.title}
                          </MovieTitle>
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
                          <AbbrTagStyled title={`Watch ${movie.title} now`}>
                            <BsPlayFill
                              className={styles.movie_play_button_}
                              onClick={() => handleWatchMovie(movie._id)}
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

export default Recently;
