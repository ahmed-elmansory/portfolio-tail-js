let closeAside = document.querySelector("#close-menu");
let aside = document.querySelector("aside");
let lis = document.querySelectorAll("ul li");
let barsOpenMenu = document.querySelector(".bars-open-menu");

barsOpenMenu.addEventListener("click", () => {
  aside.classList.replace("-right-full", "right-0");
});
closeAside.addEventListener("click", () => {
  aside.classList.replace("right-0", "-right-full");
});

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", () => {
    aside.classList.replace("right-0", "-right-full");
  });
}
document.querySelector("#toggle").addEventListener("change", function () {
  document.documentElement.classList.toggle("dark");
});
