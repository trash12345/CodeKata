const colors = [
  "#f1f5f8",
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#FFD433",
  "#33D4FF",
];
const btn = document.getElementById("btn");
const colorSpan = document.getElementById("color");

btn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  colorSpan.textContent = colors[randomNumber];
});
