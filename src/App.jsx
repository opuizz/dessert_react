import React, { useEffect } from "react";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Image from "./components/Image";
import ImageText from "./components/ImageText";
import Card from "./components/Card";
import Text from "./components/Text";
import Footer from "./components/Footer";

import link from "./utils/link";
import reveal from "./utils/reveal";
import smooth from "./utils/smooth";

const App = () => {
  useEffect(() => {
    link();
    reveal();
    smooth();
  });

  return (
    <>
      <Header />
      <Slider title="슬라이더 유형" />
      <Image title="이미지 유형 만들기" />
      <ImageText title="이미지 텍스트 유형" />
      <Card title="카드 유형" element="green" />
      <Banner title="배너 유형" />
      <Text title="" 텍스트 유형 />
      <Footer />
    </>
  );
};

export default App;
