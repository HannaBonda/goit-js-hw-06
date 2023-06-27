function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnCreate = document.querySelector("[data-create]");
console.log(btnCreate);

const btnDestoy = document.querySelector("[data-destroy]");
console.log(btnDestoy);








