input-search

const $inputSearch = document.querySelector(".input-search");
const $iconsSearch = $inputSearch.querySelectorAll(".icon");
const $iconClose = \$inputSearch.querySelector(".-close");

$iconsSearch.forEach(function($icon, position) {
console.log($iconsSearch, position);
  $icon.addEventListener("click", function() {
handleclickIcon(position);
});
});

function handleclickIcon(position) {
event.preventDefault();
console.log(position);  
 $inputSearch.classList.toggle("-active");
  $iconsSearch[position].classList.remove("-active");
$iconsSearch[$iconsSearch.length - 1].classList.add("-active");  
}

---

description-product.js

// \$heart.addEventListener("click", handleClick);

// $stars.forEach(function($star) {
// $star.addEventListener("click", handleClick);
//   console.log($star);
// });
// $stars[0].addEventListener("click", firstStar);
// $stars[$stars.length - 1].addEventListener("click", lastStar);
// $stars[1].addEventListener("click", middleStars);
// function firstStar() {
//   $stars.forEach(function($star) {
//     $star.classList.remove("-active");
// });
// this.classList.add("-active");
// }
// function lastStar() {
// $stars.forEach(function($star) {
// \$star.classList.add("-active");
// });
// }
