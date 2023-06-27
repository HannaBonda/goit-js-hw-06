
const categoryListEl = document.querySelector('#categories');
console.log(categoryListEl);

const listEl = document.querySelectorAll(".item");
console.log("Numbers of categories:", listEl.length);

listEl.forEach(function (number) {
      console.log("Category:", number.querySelector("h2"). textContent);
      console.log("Elements:", number.querySelectorAll("li").length);
});


