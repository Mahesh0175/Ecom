import React from "react";
import HeroSection from "./components/HeroSection";
import FeatureProduct from "./components/FeatureProduct";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

//alert
alert("Welcome to Mahesh Store --Logging For The Full Functions--");

const Home = () => {
  const data = {name: "Mahesh Store"}
  return (
  <> 
  <HeroSection myData={data} />
  <FeatureProduct/>
  <Services/>
  <Trusted/>
  </>
  );
};

export default Home;