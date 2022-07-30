import type { NextPage } from "next";
import Navigation from "../component/Navigation";
import Hero from "../component/Hero";
import Recently from "../component/films/Recently";

const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Recently />
    </>
  );
};

export default Home;
