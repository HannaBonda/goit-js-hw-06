
const decrButton = document.querySelector("[data-action = decrement]");

const incrButton = document.querySelector("[data-action = increment]");

const counterValue = document.querySelector("#value");

let value = 0;

decrButton.addEventListener('click', onDecrButton);

function onDecrButton(parametr) {
    console.log('click');

    counterValue.textContent -= 1;
};

incrButton.addEventListener('click', onIncrButton);

function onIncrButton(parametr) {
    console.log('click');

    value += 1;

    counterValue.textContent = value;
};













{/* <div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value">0</span>
      <button type="button" data-action="increment">+1</button>
    </div> */}