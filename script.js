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

