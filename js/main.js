var app = document.querySelector("#cont1 .content");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 100,
});

typewriter
  .pauseFor(1000)
  .typeString("항상 새로움을 즐기는\n")
  .typeString("웹퍼블리셔 위지황입니다. ")
  .pauseFor(1000)
  .start();

//헤더 선택
let header = document.querySelector("#header");

// gnb 메뉴들 선택
const gnb = document.querySelectorAll(".gnb > li");

// 섹션들 선택
const sections = document.querySelectorAll(".section");

// 섹션 구역들 위치값 담아주는 변수(배열)
let secStart = [];

//헤더 높이 구하는 구간
let headerHeight = document.querySelector("#header").offsetHeight;

window.addEventListener("scroll", () => {
  for (let i = 0; i < sections.length; i++) {
    secStart[i] = sections[i].offsetTop;
    console.log(secStart);
  }
  if (scrollY > 20) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
});

// gnb 메뉴 클릭 시 스크롤바의 위치가 부드럽게 이동되는 기능을 구현
for (let i = 0; i < gnb.length; i++) {
  gnb[i].addEventListener("click", function (event) {
    // a태그가 가지고 있는 기본기능(페이지 이동) 멈춤
    event.preventDefault();
    // 해당 섹션구역의 위치값으로 스크롤바가 부드럽게 이동
    let scrollMove = sections[i].offsetTop - headerHeight; // 위치값을 새로 받아옴
    window.scrollTo({
      top: scrollMove,
      behavior: "smooth",
    });
  });
}
