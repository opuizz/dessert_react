import React from "react";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Image from "./components/Image";
import ImageText from "./components/ImageText";
import Card from "./components/Card";
import Text from "./components/Text";

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
    </>
  );
};

export default App;
