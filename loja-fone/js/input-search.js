const $inputSearch = document.querySelector(".input-search");
const $iconSearch = $inputSearch.querySelector(".-search");
const $iconClose = $inputSearch.querySelector(".-close");

$iconSearch.addEventListener("click", event => {
  event.preventDefault();
  $inputSearch.classList.toggle("-active");
  $iconSearch.classList.remove("-active");
  $iconClose.classList.add("-active");
});
$iconClose.addEventListener("click", event => {
  event.preventDefault();
  $inputSearch.classList.toggle("-active");
  $iconClose.classList.remove("-active");
  $iconSearch.classList.add("-active");
});
