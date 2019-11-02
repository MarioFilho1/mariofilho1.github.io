// const $menu = document.querySelector(".menu");
// const $content = $menu.querySelector(".content");
// $menu.addEventListener("click", handleClickMenu);

// function handleClickMenu() {
//   $menu.classList.toggle("-active");
//   $content.classList.toggle("-active");
// }
const $headerStore = document.querySelector(".header-store");
const $menu = $headerStore.querySelector(".-menu");
const $list = $headerStore.querySelector(".list");

$menu.addEventListener("click", () => {
  $list.classList.toggle("-active");
  console.log("cheguei");
});
