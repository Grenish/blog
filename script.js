const searchbtn = document.getElementById("searchBtn");
const closebtn = document.getElementById("closeBtn");
const searchbox = document.getElementById("hiddenBox");

const subbtn = document.getElementById("subBtn");
const letterBox = document.getElementById("letterBox");
const clsLetter = document.getElementById("clsLetter");

searchbtn.addEventListener("click", () => {
  searchbox.style.display = "block";
});

closebtn.addEventListener("click", () => {
  searchbox.style.display = "none";
});

subbtn.addEventListener("click", () => {
  letterBox.style.display = "block";

});

clsLetter.addEventListener("click", () => {
  letterBox.style.display = "none";
});


document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    width: "100vw",
    height: "60vh",
    autoplay: true,
    loop: true,
    rewind: true,
    cover: true,
    heightRatio: 0.5,
    heightRatio: 0.5,
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    width: "100vw",
    height: "60vh",
    autoplay: true,
    loop: true,
    rewind: true,
    cover: true,
    heightRatio: 0.5,
    heightRatio: 0.5,
  }).mount();
});

