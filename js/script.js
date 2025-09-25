const times = document.querySelectorAll(".time");
const span = document.querySelector("span");
console.log("Hello!");

const d = new Date();
const y = d.getFullYear();
span.innerText = y;
