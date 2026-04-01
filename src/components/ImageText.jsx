import React, { useEffect, useRef } from "react";
import { imgTextData } from "../data/imgTextData";
import { imgText } from "../data/imgTextData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ImageText = (props) => {
  const imgInnerRef = useRef(null);
  const imgRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      imgRef.current,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,

        stagger: 0.2,
        duration: 1,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: imgInnerRef.current,
          start: "center 80%",
        },
      },
    );
  }, []);
  return (
    <section id="imgTextType" className="section">
      <h2 className="blind">{props.title}</h2>
      <div className="imgText_inner container" ref={imgInnerRef}>
        <div className="imgText_txt">
          <div className="small">이미지/텍스트 유형</div>
          <h3 className="title">디저트 사이트 살펴보기</h3>
          <div className="desc">제빵사, 파티시에, 요식업 종사자를 위한 유용한 사이트입니다</div>
          <ul className="list">
            {imgTextData.menu.map((menu, index) => (
              <li key={index}>
                <a href="/">{menu}</a>
              </li>
            ))}
          </ul>
        </div>
        {imgText.map((imgText, index) => (
          <div
            className={`imgText_img ${imgText.className}`}
            key={imgText.id}
            ref={(el) => (imgRef.current[index] = el)}
          >
            <a href="/" className={`${imgText.btnClass}`}>
              {imgText.menu}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageText;
