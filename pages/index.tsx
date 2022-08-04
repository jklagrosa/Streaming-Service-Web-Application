import type { NextPage } from "next";
import Navigation from "../component/Navigation";
import Hero from "../component/Hero";
import Recently from "../component/films/Recently";
import Trending from "../component/films/Trending";

import HeroBetween from "../component/HeroBetween";
import Footer from "../component/Footer";
import Copyright from "../component/Copyright";
import { GetServerSideProps } from "next";
// import Dbconnection from "../utils/conn";
// import Movies from "../models/movie";
// import { IMovie } from "../types/movie";
import { headersOpts, BASE_URL } from "../utils/other";
import useSWR from "swr";
import axios from "axios";
import { useDispatch } from "react-redux";
import { GET_MOVIES } from "../store/movie";
import Popular from "../component/films/Popular";

const fetcher = () => axios.get(`${BASE_URL}/api/movies`, headersOpts);

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/movies", fetcher);
  const dispatch = useDispatch();
  if (data) {
    dispatch(GET_MOVIES(data.data));
  }

  if (error) {
    dispatch(GET_MOVIES(null));
  }

  return (
    <>
      <Navigation />
      <Hero />
      {/* ############################ */}
      <Recently />

      <Trending />

      <Popular />
      {/* ############################ */}
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;
