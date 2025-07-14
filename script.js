const boxElement = document.querySelectorAll(".box");

boxElement.forEach((element) => {
  element.addEventListener("click", rotateBox);
  element.addEventListener("animationend", resetBox);
});

function rotateBox(event) {
  event.target.classList.add("rotate");
}

function resetBox(event) {
  event.target.classList.remove("rotate");
}
