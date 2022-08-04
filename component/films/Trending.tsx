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
import { BASE_URL, headersOpts } from "../../utils/other";
import axios from "axios";

import { useSWRConfig } from "swr";

const Recently = () => {
  const [movie, setMovie] = useState<unknown[] | null>(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const displayMovies = useSelector(showAllMovies);
  const router = useRouter();
  const { mutate } = useSWRConfig();

  useEffect(() => {
    // const newMovies = Array.from(displayMovies.data);
    setMovie(displayMovies.data);

    console.log(`WEW: ${displayMovies.data?.length}`);
  }, [displayMovies]);

  useEffect(() => {
    const x = window.localStorage.getItem("user")
      ? JSON.parse(window.localStorage.getItem("user") || "false")
      : null;

    if (x === "false" || x === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }

    console.log(isLoggedIn);
  }, []);

  const handleWatchMovie = (id: any) => {
    router.replace({
      pathname: "/please-wait",
      query: { id },
    });
  };

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  const handleWatchTrailer = (id: any) => {
    router.replace({
      pathname: "/please-wait-trailer",
      query: { id },
    });
  };

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  const handleLikeMovie = async (id: string) => {
    const response = await axios.post(
      `${BASE_URL}/api/like`,
      {
        id,
      },
      headersOpts
    );

    if (!response.data.success) {
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

    if (response && response.data && response.data.success) {
      mutate("/api/movies");
    }

    return response.data;
  };

  // ###################################################################

  const handleAddToFave = async (id: string) => {
    const response = await axios.post(
      `${BASE_URL}/api/fave`,
      {
        id,
      },
      headersOpts
    );

    if (!response.data.success) {
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

    if (response && response.data && response.data.success) {
      mutate("/api/movies");
    }

    return response.data;
  };

  return (
    <>
      <ContainerStyled id="new">
        <Container fluid="lg" className="p-0">
          <HeaderTagStyled>Trending</HeaderTagStyled>

          <Row className="gx-3 gy-5">
            {/* LOADING STATE */}
            {displayMovies.data?.length == undefined && (
              <>
                <MovieDetail>Please wait...</MovieDetail>
              </>
            )}

            {/* END */}
            {/* ####################################### */}

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
                        {isLoggedIn && (
                          <>
                            <MovieActionStyled>
                              <AbbrTagStyled
                                title={
                                  movie.like ? "Unlike this movie" : "Like"
                                }
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
                                  onClick={() => handleAddToFave(movie._id)}
                                />
                              </AbbrTagStyled>
                            </MovieActionStyled>
                          </>
                        )}

                        {/* ############################################# */}

                        {!isLoggedIn && (
                          <>
                            <MovieActionStyled>
                              <AbbrTagStyled
                                title={
                                  movie.like ? "Unlike this movie" : "Like"
                                }
                              >
                                <AiFillLike
                                  className={styles._movie_component_icons_}
                                  id={styles._movie_component_icons_id_Like_}
                                  style={
                                    movie.like
                                      ? { color: "#1877f2" }
                                      : { color: "" }
                                  }
                                  onClick={() => router.replace("/login")}
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
                                  onClick={() => router.replace("/login")}
                                />
                              </AbbrTagStyled>
                            </MovieActionStyled>
                          </>
                        )}

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

                        <AbbrTagStyled
                          title={`Watch the trailer of ${movie.title}`}
                        >
                          <MovieWatchTrailer
                            onClick={() => handleWatchTrailer(movie._id)}
                          >
                            Watch Trailer
                          </MovieWatchTrailer>
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
