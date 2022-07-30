import type { NextPage } from "next";
import Navigation from "../component/Navigation";
import Hero from "../component/Hero";
import Recently from "../component/films/Recently";
import Footer from "../component/Footer";
import Copyright from "../component/Copyright";

const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Recently />
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;
