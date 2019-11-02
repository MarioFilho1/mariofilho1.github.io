const $heart = window.document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", handleClickHeart);

function handleClickHeart() {
  $heart.classList.toggle("-active");
}

$stars.forEach(function($star, index) {
  $star.addEventListener("click", function() {
    handleClickStar(index);
    console.log("star: " + $star + "key: " + index);
  });
});

function handleClickStar(index) {
  $stars.forEach(function($star, $key) {
    $star.classList.remove("-active");
    console.log("remove");
    if ($key <= index) {
      console.log("key: " + $key + " index: " + index);
      $stars.forEach(function($star) {
        $star.classList.add("-active");
      });
    }
    console.log("chave: " + $key);
  });
}
