let closeAside = document.querySelector("#close-menu");
let aside = document.querySelector("aside");
let lis = document.querySelectorAll("ul li");
let barsOpenMenu = document.querySelector(".bars-open-menu");

barsOpenMenu.addEventListener("click", () => {
  aside.classList.add("left-0");
});
closeAside.addEventListener("click", () => {
  aside.classList.remove("left-0");
});

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", () => {
    aside.classList.remove("left-0");
  });
}

document.querySelector("#toggle").addEventListener("change", function () {
  document.documentElement.classList.toggle("dark");
});
