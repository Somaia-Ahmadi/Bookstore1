
const themeBtn = document.getElementById("moontheme");
const image = document.querySelector(".bg-img img");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    image.src = "./images/light-about.png";
  } else {
    image.src = "./images/about.png";
  }
});