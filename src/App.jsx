import React from "react";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Image from "./components/Image";
import ImageText from "./components/ImageText";
import Card from "./components/Card";
import Text from "./components/Text";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <Image />
      <ImageText />
      <Card />
      <Banner />
      <Text />
      <Footer />
    </>
  );
};

export default App;
