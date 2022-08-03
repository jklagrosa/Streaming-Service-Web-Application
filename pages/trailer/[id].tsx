import React, { useState } from "react";
import {
  ContainerStyled,
  VideoPlayer,
  VideoParagraph,
  VideoDetail,
  VideTitle,
  VideoDetailOther,
} from "../../styles/id";
import { Container } from "react-bootstrap";
import Navigation from "../../component/Navigation";
import Recently from "../../component/films/Recently";
import Footer from "../../component/Footer";
import Copyright from "../../component/Copyright";

import axios from "axios";
import { BASE_URL, headersOpts } from "../../utils/other";
import { useRouter } from "next/router";
import useSWR from "swr";
import { GetStaticPaths, GetStaticProps } from "next";
// import { ParsedUrlQuery } from "querystring";
import Dbconnection from "../../utils/conn";
import Movie from "../../models/movie";

export const getStaticPaths: GetStaticPaths = async () => {
  await Dbconnection();
  const get_id = await Movie.find({});
  const paths = get_id.map((x) => {
    return {
      params: { id: `${x._id}` },
    };
  });
  console.log(paths);
  if (!get_id) {
    return {
      paths: [],
      fallback: false,
    };
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  await Dbconnection();
  const { params } = context;
  const find_movie = await Movie.findOne({ _id: `${params?.id}` });
  if (!find_movie) {
    return {
      props: {
        data: null,
      },
    };
  }

  return {
    props: {
      data: JSON.stringify(find_movie),
    },
  };
};

const Id = ({ data }: { data: string }) => {
  const parsed_data = data ? JSON.parse(data) : null;
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
          <VideoPlayer
            width="560"
            height="315"
            src={parsed_data.trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></VideoPlayer>
          <VideTitle>{parsed_data.title}</VideTitle>
          <VideoParagraph>{parsed_data.desc}</VideoParagraph>

          <VideoParagraph
            style={{
              cursor: "pointer",
              color: "#1877f2",
              textDecoration: "underline",
            }}
            onClick={() => handleWatchMovie(parsed_data._id)}
          >
            Watch the full movie here.
          </VideoParagraph>

          <VideoDetail>Language</VideoDetail>
          <VideoDetailOther>{parsed_data.lang}</VideoDetailOther>
          <br />
          <VideoDetail>Subtitles</VideoDetail>
          <VideoDetailOther>{parsed_data.sub}</VideoDetailOther>
          <br />
          <VideoDetail>Genre</VideoDetail>
          <VideoDetailOther>{parsed_data.genre}</VideoDetailOther>
          <br />
          <VideoDetail>Run Time</VideoDetail>
          <VideoDetailOther>{parsed_data.runtime}</VideoDetailOther>
          <br />
          <VideoDetail>Release Date</VideoDetail>
          <VideoDetailOther>{parsed_data.release}</VideoDetailOther>
        </Container>
      </ContainerStyled>
      {/* <Recently /> */}
      <Footer />
      <Copyright />
    </>
  );
};

export default Id;
