const reveal = () => {
  let lastScrollTop = 0; // 스크롤탑값 초기화
  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY + window.innerHeight / 2;
    let scrollTop2 = window.scrollY;

    // 스크롤 다운 - 메뉴 가리기 / 스크롤  업- 메뉴 보이기  (css부터 수정해 놓기)
    if (scrollTop2 > lastScrollTop) {
      document.querySelector("#imageType div article.img1").classList.add("show");
    } else {
      document.querySelector("#imageType div article.img1").classList.remove("show");
    }
    if (scrollTop2 > lastScrollTop) {
      document.querySelector("#imageType div article.img2").classList.add("show");
    } else {
      document.querySelector("#imageType div article.img2").classList.remove("show");
    }
    lastScrollTop = scrollTop2;
  });
};

export default reveal;
