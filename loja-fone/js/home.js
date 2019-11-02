let varInicial = 10;
const $buttonsecond = document.querySelector(".-second");
$buttonsecond.addEventListener("click", handleClickButtonCar);
const $car = document.querySelector(".-last");

function handleClickButtonCar() {
  $car.textContent = `Carrinho (${++varInicial})`;
  console.log(varInicial);
}
