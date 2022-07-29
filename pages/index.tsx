import type { NextPage } from "next";
import Navigation from "../component/Navigation";
import Hero from "../component/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <Hero />
    </>
  );
};

export default Home;
