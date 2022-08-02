import type { NextPage } from "next";
import Navigation from "../component/Navigation";
import Hero from "../component/Hero";
import Recently from "../component/films/Recently";
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

const fetcher = () => axios.get(`${BASE_URL}/api/movies`, headersOpts);

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/movies", fetcher);
  const dispatch = useDispatch();
  if (data) {
    dispatch()
  }

  console.log(data);

  return (
    <>
      <Navigation />
      <Hero />
      {/* ############################ */}
      <Recently />

      <Recently />
      <HeroBetween />
      <Recently />
      {/* ############################ */}
      <Footer />
      <Copyright />
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   await Dbconnection();
//   const GET_ALL_MOVIES = await Movies.find({});
//   if (!GET_ALL_MOVIES) {
//     return {
//       props: {
//         data: null,
//       },
//     };
//   }

//   // console.log(GET_ALL_MOVIES);

//   return {
//     props: {
//       data: GET_ALL_MOVIES,
//     },
//   };
// };

export default Home;
