import Hero from "./Hero";
import Heroine from "./Heroine";
import Services from "./Services";
import OurWorks from "./OurWorks";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <Hero />
      <Heroine />
      <Services />
      <OurWorks />
    </>
  );
};

export default Home;
