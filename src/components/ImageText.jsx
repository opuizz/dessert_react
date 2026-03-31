import React from "react";
import { imgTextData } from "../data/imgTextData";
import { imgText } from "../data/imgTextData";

const ImageText = () => {
  return (
    <section id="imgTextType" className="section">
      <h2 className="blind">이미지 텍스트 유형</h2>
      <div className="imgText_inner container">
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
        {imgText.map((imgText) => (
          <div className={`imgText_img ${imgText.className}`} key={imgText.id}>
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
