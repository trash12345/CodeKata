const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colorSpan = document.getElementById("color");

btn.addEventListener("click", function () {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * colors.length);
    hex += colors[randomNumber];
  }
  document.body.style.backgroundColor = hex;
  colorSpan.textContent = hex;
});
